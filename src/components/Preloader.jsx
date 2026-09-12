import { useEffect, useState, useRef, memo } from 'react';
import { useSound } from '../context/SoundContext';
import WexelLogo from './WexelLogo';
import enterSound from '../assets/enter.mp3';

const PreloaderLogo = memo(function PreloaderLogo() {
  return (
    <div className="overflow-hidden pb-1">
      <WexelLogo
        className="w-[clamp(14rem,40vw,32rem)] h-auto text-white opacity-0 translate-y-[120%] animate-dramatic-text will-change-transform"
      />
    </div>
  );
});

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [showPrompt, setShowPrompt] = useState(false);
  const [slideUp, setSlideUp] = useState(false);
  const [hide, setHide] = useState(false);
  const { unlockAudio, setSoundPreference, isUnlocked } = useSound();
  const enterAudioRef = useRef(null);
  const isUnlockedRef = useRef(isUnlocked);
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    isUnlockedRef.current = isUnlocked;
  }, [isUnlocked]);

  // Preload enter sound for instant playback on button click
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const audio = new Audio(enterSound || '/enter.mp3');
    audio.preload = 'auto';
    audio.volume = 1.0;
    enterAudioRef.current = audio;

    return () => {
      if (enterAudioRef.current) {
        enterAudioRef.current.pause();
        enterAudioRef.current = null;
      }
    };
  }, []);

  const playEnterSound = () => {
    try {
      const audio = enterAudioRef.current || new Audio(enterSound || '/enter.mp3');
      audio.currentTime = 0;
      audio.volume = 1.0;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn('Enter sound playback failed, attempting fallback:', err);
          const fallback = new Audio('/enter.mp3');
          fallback.volume = 1.0;
          fallback.play().catch((e) => console.warn('Fallback failed:', e));
        });
      }
    } catch (err) {
      console.warn('Enter sound play failed:', err);
    }
  };

  const handleEnterWithSound = async (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    if (hasTriggeredRef.current) return;
    hasTriggeredRef.current = true;

    playEnterSound();
    await unlockAudio();
    setSoundPreference('enabled');
    setSlideUp(true);
    setTimeout(() => {
      setHide(true);
    }, 1200);
  };

  const handleEnterSilently = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    if (hasTriggeredRef.current) return;
    hasTriggeredRef.current = true;

    playEnterSound();
    setSoundPreference('disabled');
    setSlideUp(true);
    setTimeout(() => {
      setHide(true);
    }, 1200);
  };

  // Keyboard navigation support: Press Enter or Space to enter experience
  useEffect(() => {
    if (!showPrompt) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleEnterWithSound();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showPrompt]);

  useEffect(() => {
    let currentProgress = 0;
    
    const updateProgress = () => {
      const increment = Math.floor(Math.random() * 15) + 2;
      currentProgress += increment;

      if (currentProgress > 100) currentProgress = 100;

      setProgress(currentProgress);

      if (currentProgress < 100) {
        const nextTickDelay = Math.random() * 150 + 50;
        setTimeout(updateProgress, nextTickDelay);
      } else {
        // Loading complete (100%)
        // Allow 250ms for progress bar to visually reach 100% before transitioning to prompt
        setTimeout(() => {
          setShowPrompt(true);
        }, 250);
      }
    };

    const timer = setTimeout(updateProgress, 1200);
    return () => clearTimeout(timer);
  }, []);

  if (hide) return null;

  return (
    <div
      onClick={showPrompt ? handleEnterWithSound : undefined}
      className={`fixed inset-0 bg-black z-[99999] flex flex-col justify-center items-center transition-transform duration-[1200ms] ease-[cubic-bezier(0.77,0,0.175,1)] ${
        slideUp ? '-translate-y-full' : ''
      } ${showPrompt ? 'cursor-pointer select-none' : ''}`}
    >
      <div className="flex flex-col items-center gap-10 sm:gap-12 px-6 pointer-events-auto">
        {/* WEXEL Animated Logo */}
        <PreloaderLogo />

        {/* System Initializing Progress - visible only while loading (< 100%) */}
        {!showPrompt && (
          <div className="w-[320px] sm:w-[400px] opacity-0 animate-fade-in flex flex-col items-center">
            <div className="w-full flex justify-center font-space text-[0.75rem] text-white tracking-[0.35em] mb-4 uppercase">
              <span className="tabular-nums">
                {`LOADING ${progress.toString().padStart(2, '0')}%`}
              </span>
            </div>

            <div className="w-full h-[10px] rounded-full border border-white/30 relative overflow-hidden" style={{ background: 'transparent' }}>
              <div
                className="absolute top-0 left-0 h-full rounded-full transition-[width] duration-150 ease-out"
                style={{
                  width: `${progress}%`,
                  background: 'linear-gradient(90deg, rgba(255,255,255,0.85) 0%, #ffffff 60%, #ffffff 100%)',
                }}
              />
            </div>
          </div>
        )}

        {/* Primary Entry Prompt: 1-Click Autoplay Unlock */}
        {showPrompt && (
          <div className="w-full max-w-[360px] flex flex-col items-center gap-3.5 animate-preloader-enter">
            <button
              type="button"
              onClick={handleEnterWithSound}
              className="w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full border border-white/40 bg-transparent hover:bg-white/[0.08] hover:border-white text-white font-space text-[0.75rem] tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer group hover:scale-[1.02] active:scale-[0.98]"
            >
              {/* Audio wave icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3.5 h-3.5 text-highlight-green group-hover:scale-110 transition-transform"
              >
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
              </svg>
              <span className="font-semibold">Enter Experience</span>
              <span className="text-white/60 group-hover:text-white transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>

            <div className="flex items-center gap-3 text-muted text-[0.65rem] font-space tracking-[0.15em] uppercase mt-1">
              <span>Click anywhere or press Enter</span>
              <span>•</span>
              <button
                type="button"
                onClick={handleEnterSilently}
                className="text-white/40 hover:text-white/80 transition-colors underline underline-offset-2 cursor-pointer"
              >
                Enter Muted
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
