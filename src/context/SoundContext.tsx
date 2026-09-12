import React, { createContext, useContext, useEffect, useRef, useState, useCallback } from 'react';
import enterSound from '../assets/enter.mp3';
import muteUnmuteSound from '../assets/muteunmute.mp3';

export type SoundType = 'hover' | 'click' | 'transition' | 'enter' | 'toggle';

interface SoundContextType {
  soundEnabled: boolean;
  isUnlocked: boolean;
  soundPreference: 'enabled' | 'disabled' | null;
  setSoundPreference: (pref: 'enabled' | 'disabled') => void;
  toggleSound: () => void;
  unlockAudio: () => Promise<boolean>;
  play: (type: SoundType) => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

const PREFERENCE_KEY = 'soundPreference';

export const SoundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [soundPreference, setPreferenceState] = useState<'enabled' | 'disabled' | null>(() => {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem(PREFERENCE_KEY) as 'enabled' | 'disabled' | null;
  });

  // Sound starts disabled until the user chooses to enter with sound in the preloader or clicks the header toggle
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);

  const [isUnlocked, setIsUnlocked] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const bgAudioRef = useRef<HTMLAudioElement | null>(null);
  const enterAudioRef = useRef<HTMLAudioElement | null>(null);
  const toggleAudioRef = useRef<HTMLAudioElement | null>(null);
  const TARGET_VOLUME = 0.28;

  // Initialize background music, enter sound, and mute/unmute sound element once
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const audio = new Audio('/bg.mp3');
    audio.loop = true;
    audio.volume = TARGET_VOLUME;
    audio.preload = 'none';
    bgAudioRef.current = audio;

    const enterAudio = new Audio(enterSound || '/enter.mp3');
    enterAudio.preload = 'auto';
    enterAudio.volume = 1.0;
    enterAudioRef.current = enterAudio;

    const toggleAudio = new Audio(muteUnmuteSound || '/muteunmute.mp3');
    toggleAudio.preload = 'auto';
    toggleAudio.volume = 0.85;
    toggleAudioRef.current = toggleAudio;

    return () => {
      audio.pause();
      audio.src = '';
      bgAudioRef.current = null;
      enterAudio.pause();
      enterAudio.src = '';
      enterAudioRef.current = null;
      if (toggleAudioRef.current) {
        toggleAudioRef.current.pause();
        toggleAudioRef.current.src = '';
        toggleAudioRef.current = null;
      }
    };
  }, []);

  // Initialize or get the global AudioContext
  const getAudioContext = useCallback((): AudioContext | null => {
    if (typeof window === 'undefined') return null;
    if (!audioCtxRef.current) {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtxClass) {
        audioCtxRef.current = new AudioCtxClass();
      }
    }
    return audioCtxRef.current;
  }, []);

  // Unlock AudioContext & background music synchronously via user interaction
  const unlockAudio = useCallback(async (): Promise<boolean> => {
    const ctx = getAudioContext();
    if (ctx && ctx.state === 'suspended') {
      ctx.resume().catch((err) => console.warn('AudioContext resume failed:', err));
    }

    setIsUnlocked(true);

    if (bgAudioRef.current) {
      bgAudioRef.current.volume = TARGET_VOLUME;
      const p = bgAudioRef.current.play();
      if (p !== undefined) {
        p.catch((err) => console.warn('Background audio play failed:', err));
      }
    }

    return ctx ? ctx.state === 'running' : true;
  }, [getAudioContext]);

  // Set preference and persist to localStorage
  const setSoundPreference = useCallback((pref: 'enabled' | 'disabled') => {
    setPreferenceState(pref);
    setSoundEnabled(pref === 'enabled');
    try {
      localStorage.setItem(PREFERENCE_KEY, pref);
    } catch (e) {
      console.warn('Could not save sound preference:', e);
    }

    if (pref === 'enabled') {
      const ctx = getAudioContext();
      if (ctx && ctx.state === 'suspended') {
        ctx.resume().catch(() => {});
      }
      setIsUnlocked(true);
      if (bgAudioRef.current) {
        bgAudioRef.current.volume = TARGET_VOLUME;
        const p = bgAudioRef.current.play();
        if (p !== undefined) {
          p.catch((err) => console.warn('Background audio play failed:', err));
        }
      }
    } else {
      if (bgAudioRef.current) {
        bgAudioRef.current.pause();
      }
    }
  }, [getAudioContext]);

  // Play mute/unmute audio feedback sound using muteunmute.mp3
  const playToggleSound = useCallback(() => {
    try {
      if (toggleAudioRef.current) {
        toggleAudioRef.current.currentTime = 0;
        toggleAudioRef.current.volume = 0.85;
        const p = toggleAudioRef.current.play();
        if (p !== undefined) {
          p.catch((err) => {
            console.warn('Toggle audio play failed, trying fallback:', err);
            const fallback = new Audio(muteUnmuteSound || '/muteunmute.mp3');
            fallback.volume = 0.85;
            fallback.play().catch(() => {});
          });
        }
      } else {
        const fallback = new Audio(muteUnmuteSound || '/muteunmute.mp3');
        fallback.volume = 0.85;
        fallback.play().catch(() => {});
      }
    } catch (e) {
      console.warn('Mute/unmute sound playback error:', e);
    }
  }, []);

  // Toggle sound synchronously inside user click event to preserve browser user activation
  const toggleSound = useCallback(() => {
    // Immediate audio feedback using muteunmute.mp3
    playToggleSound();

    if (!soundEnabled || !isUnlocked) {
      // Unmuting: Enable sound and start audio synchronously
      setPreferenceState('enabled');
      setSoundEnabled(true);
      try {
        localStorage.setItem(PREFERENCE_KEY, 'enabled');
      } catch {}

      // 1. Resume AudioContext synchronously
      const ctx = getAudioContext();
      if (ctx) {
        if (ctx.state === 'suspended') {
          ctx.resume().catch(() => {});
        }
        setIsUnlocked(true);
      }

      // 2. Play background music synchronously inside click handler
      if (bgAudioRef.current) {
        bgAudioRef.current.volume = TARGET_VOLUME;
        const p = bgAudioRef.current.play();
        if (p !== undefined) {
          p.catch((err) => console.warn('Background audio play failed:', err));
        }
      }
    } else {
      // Muting: Disable sound and pause audio
      setPreferenceState('disabled');
      setSoundEnabled(false);
      try {
        localStorage.setItem(PREFERENCE_KEY, 'disabled');
      } catch {}

      if (bgAudioRef.current) {
        bgAudioRef.current.pause();
      }
    }
  }, [soundEnabled, isUnlocked, getAudioContext, playToggleSound]);



  // Manual MP3 Audio Playback Handler
  // Only plays manually added MP3 audio assets (enter.mp3, muteunmute.mp3); no procedural oscillator chord synthesis
  const play = useCallback((type: SoundType) => {
    if (!soundEnabled) return;

    try {
      if (type === 'enter') {
        if (enterAudioRef.current) {
          enterAudioRef.current.currentTime = 0;
          enterAudioRef.current.volume = 1.0;
          const p = enterAudioRef.current.play();
          if (p !== undefined) {
            p.catch(() => {
              const a = new Audio(enterSound || '/enter.mp3');
              a.volume = 1.0;
              a.play().catch(() => {});
            });
          }
        } else {
          const a = new Audio(enterSound || '/enter.mp3');
          a.volume = 1.0;
          a.play().catch(() => {});
        }
      } else if (type === 'toggle') {
        playToggleSound();
      }
      // Procedural oscillator synthesis for 'hover', 'click', 'transition' has been completely removed
    } catch (err) {
      console.warn('Audio playback error:', err);
    }
  }, [soundEnabled, playToggleSound]);

  return (
    <SoundContext.Provider
      value={{
        soundEnabled,
        isUnlocked,
        soundPreference,
        setSoundPreference,
        toggleSound,
        unlockAudio,
        play,
      }}
    >
      {children}
    </SoundContext.Provider>
  );
};

export function useSound() {
  const context = useContext(SoundContext);
  if (!context) {
    return {
      soundEnabled: false,
      isUnlocked: false,
      soundPreference: null,
      setSoundPreference: () => {},
      toggleSound: () => {},
      unlockAudio: async () => false,
      play: () => {},
    };
  }
  return context;
}
