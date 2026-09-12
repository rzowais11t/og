import { useEffect, useRef, useState } from 'react';

export default function HeroBackgroundVideo({ className = '' }) {
  const videoRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window === 'undefined') return true;
    return window.matchMedia('(min-width: 768px)').matches;
  });

  useEffect(() => {
    const mql = window.matchMedia('(min-width: 768px)');
    const handleMediaChange = (e) => {
      setIsDesktop(e.matches);
    };

    mql.addEventListener('change', handleMediaChange);
    return () => mql.removeEventListener('change', handleMediaChange);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.defaultMuted = true;
      video.muted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn('Hero background video play failed:', err);
        });
      }
    }
  }, [isDesktop]);

  return (
    <div className={`relative w-full overflow-hidden pointer-events-none ${className}`}>
      <video
        key={isDesktop ? 'desktop-video' : 'mobile-video'}
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={isDesktop ? '/dk.mp4' : '/ah.mp4'} type="video/mp4" />
      </video>

      {/* Subtle light transparent blur overlay over video */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[6px] z-[1]"></div>
    </div>
  );
}

