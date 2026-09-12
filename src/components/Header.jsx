import { useEffect, useState } from 'react';
import { useSound } from '../context/SoundContext';
import { scrollToSection, navigateTo } from '../utils/navigation';
import { preloadCal } from '../utils/cal';
import WexelLogo from './WexelLogo';

export default function Header() {
  const [time, setTime] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const { soundEnabled, isUnlocked, toggleSound } = useSound();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let h = now.getHours(), m = now.getMinutes(), s = now.getSeconds();
      const ampm = h >= 12 ? 'PM' : 'AM';
      h = h % 12 || 12;
      setTime(`${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')} ${ampm}`);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);

    let isScrolled = typeof window !== 'undefined' && window.scrollY > 50;
    setScrolled(isScrolled);

    const handleScroll = () => {
      const nextScrolled = window.scrollY > 50;
      if (nextScrolled !== isScrolled) {
        isScrolled = nextScrolled;
        setScrolled(nextScrolled);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (sectionId) => {
    if (sectionId === 'contact') {
      navigateTo('/contact');
      return;
    }
    if (sectionId === 'vision' || sectionId === 'about') {
      navigateTo('/vision');
      return;
    }

    if (window.location.pathname !== '/') {
      navigateTo(`/#${sectionId.replace('#', '')}`);
    } else {
      scrollToSection(sectionId);
    }
  };

  const handleSoundToggle = () => {
    toggleSound();
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] items-center mix-blend-difference transition-all duration-400 ease-in-out grid grid-cols-2 min-[900px]:grid-cols-3 ${scrolled ? 'py-4 px-6 min-[900px]:px-12' : 'py-6 px-6 min-[900px]:px-12'}`}>
      {/* Brand Logo */}
      <div className="text-[0.8rem] tracking-[0.05em] text-muted">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          className="inline-block transition-opacity duration-300 hover:opacity-100 cursor-pointer"
        >
          <WexelLogo
            className="h-8 sm:h-10 w-auto text-white opacity-100 transition-opacity duration-300 hover:opacity-100"
          />
        </a>
      </div>

      {/* Main Center Continuous Navigation Link */}
      <div className="hidden min-[900px]:flex items-center justify-center text-[0.8rem] tracking-[0.05em]">
        <div className="group">
          <a
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('contact');
            }}
            onMouseEnter={() => {
              preloadCal();
              import('../pages/Contact');
            }}
            className="text-text no-underline inline-flex items-center gap-1.5 transition-opacity duration-300 hover:opacity-100 cursor-pointer"
          >
            Let's Talk
            <span className="transition-transform duration-300 group-hover:translate-y-[3px] inline-block">↓</span>
          </a>
        </div>
      </div>

      {/* Sound Toggle & Local Time */}
      <div className="text-right text-[0.8rem] tracking-[0.05em] text-text flex flex-col md:flex-row items-end md:items-center justify-end gap-2 md:gap-6">
        {/* Sound Toggle */}
        <button
          type="button"
          onClick={handleSoundToggle}
          title={
            !soundEnabled
              ? 'Play background music & audio'
              : isUnlocked
              ? 'Mute background music & audio'
              : 'Click to resume audio (paused by browser)'
          }
          className={`order-2 md:order-1 inline-flex items-center justify-center w-7 h-7 md:w-auto md:h-auto p-0 md:px-2.5 md:py-1 rounded-full border transition-all duration-300 text-[0.7rem] cursor-pointer ${
            soundEnabled && isUnlocked
              ? 'border-white/30 hover:border-white/50 bg-white/10 hover:bg-white/20 text-white'
              : soundEnabled && !isUnlocked
              ? 'border-accent/50 bg-accent/15 hover:bg-accent/25 text-white animate-pulse'
              : 'border-white/20 hover:border-white/40 bg-white/[0.06] hover:bg-white/[0.12] text-white/80 hover:text-white'
          }`}
        >
          {soundEnabled && isUnlocked ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-highlight-green">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              </svg>
              <span className="hidden md:inline ml-1.5 tracking-[0.1em] font-space text-[0.65rem] font-semibold">SOUND</span>
              <span className="hidden md:inline-flex items-center gap-[2px] h-2.5 ml-1.5">
                <span className="w-[2px] h-full bg-highlight-green animate-pulse rounded-full" />
                <span className="w-[2px] h-2 bg-highlight-green animate-pulse rounded-full [animation-delay:150ms]" />
                <span className="w-[2px] h-2.5 bg-highlight-green animate-pulse rounded-full [animation-delay:300ms]" />
              </span>
            </>
          ) : soundEnabled && !isUnlocked ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-accent animate-pulse">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              </svg>
              <span className="hidden md:inline ml-1.5 tracking-[0.1em] font-space text-[0.65rem] font-semibold text-accent">RESUME</span>
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-white/60">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <line x1="23" y1="9" x2="17" y2="15" />
                <line x1="17" y1="9" x2="23" y2="15" />
              </svg>
              <span className="hidden md:inline ml-1.5 tracking-[0.1em] font-space text-[0.65rem] font-medium text-white/70">MUTED</span>
            </>
          )}
        </button>

        {/* Local time */}
        <div className="order-1 md:order-2 flex items-center whitespace-nowrap text-text font-medium">
          <span className="tabular-nums font-mono text-[0.75rem] sm:text-[0.8rem]">{time}</span>
        </div>
      </div>
    </header>
  );
}
