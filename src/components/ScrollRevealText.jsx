import { useState, useEffect, useRef } from 'react';

const PARAGRAPH_1 = "We’re a space where innovation meets execution, where businesses find depth, and you find reach. Every project becomes a conversation worth having.";
const PARAGRAPH_2 = "A platform where AI, Creativity, and ROI flows together, with meaning, strategy, and visible results.";

const words1 = PARAGRAPH_1.split(' ');
const words2 = PARAGRAPH_2.split(' ');

export default function ScrollRevealText() {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if user prefers reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setProgress(1);
      return;
    }

    let animationFrameId = null;
    let lastProgress = -1;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;

      if (totalScrollable <= 0) return;

      const currentScroll = -rect.top;
      const rawProgress = currentScroll / totalScrollable;
      const clampedProgress = Math.min(Math.max(rawProgress, 0), 1);

      if (
        (clampedProgress === 0 && lastProgress !== 0) ||
        (clampedProgress === 1 && lastProgress !== 1) ||
        Math.abs(clampedProgress - lastProgress) >= 0.003
      ) {
        lastProgress = clampedProgress;
        setProgress(clampedProgress);
      }
    };

    const onScrollOrResize = () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize, { passive: true });

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  // Calculate word reveal values
  const getWordStyle = (index, totalWords, rangeStart, rangeEnd) => {
    const rangeSpan = rangeEnd - rangeStart;
    const wordStep = rangeSpan / totalWords;
    const wordStart = rangeStart + index * wordStep;
    // Slight overlap for organic fluid transition
    const wordDuration = wordStep * 1.5;

    const raw = (progress - wordStart) / wordDuration;
    const wordProgress = Math.min(Math.max(raw, 0), 1);

    // Opacity interpolates from 0.15 to 1
    const opacity = 0.15 + 0.85 * wordProgress;

    return {
      opacity,
      transform: `translateY(${(1 - wordProgress) * 3}px)`,
      transition: 'opacity 0.15s ease-out, transform 0.15s ease-out',
    };
  };

  return (
    <section
      ref={containerRef}
      className="relative h-[220vh] sm:h-[250vh] bg-bg z-[2]"
      aria-label="Manifesto"
    >
      {/* Sticky viewport frame */}
      <div className="sticky top-0 h-screen flex flex-col justify-center px-6 min-[900px]:px-12 overflow-hidden">


        <div className="relative z-[2] max-w-[1100px] mx-auto w-full">
          {/* Section header badge & scroll progress rail */}
          <div className="flex items-center justify-between gap-4 mb-8 sm:mb-12">
            <div className="section-label mb-0 flex-1">
              MANIFESTO
            </div>
            {/* Minimalist progress rail */}
            <div
              className="flex items-center gap-3 text-[0.65rem] tracking-[0.2em] font-mono uppercase text-muted select-none"
              aria-hidden="true"
            >
              <div className="w-16 h-[2px] bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white transition-all duration-75"
                  style={{ width: `${Math.round(progress * 100)}%` }}
                />
              </div>
              <span>{String(Math.round(progress * 100)).padStart(2, '0')}%</span>
            </div>
          </div>

          {/* Scrubbed editorial paragraphs */}
          <div className="space-y-6 sm:space-y-10">
            {/* Paragraph 1 */}
            <p
              className="font-space font-medium text-[clamp(1.35rem,2.8vw,2.35rem)] leading-[1.38] sm:leading-[1.42] tracking-[-0.02em]"
              aria-label={PARAGRAPH_1}
            >
              {words1.map((word, i) => (
                <span
                  key={i}
                  className="inline-block mr-[0.28em] text-white will-change-[opacity,transform]"
                  style={getWordStyle(i, words1.length, 0.05, 0.46)}
                >
                  {word}
                </span>
              ))}
            </p>

            {/* Paragraph 2 */}
            <p
              className="font-space font-medium text-[clamp(1.35rem,2.8vw,2.35rem)] leading-[1.38] sm:leading-[1.42] tracking-[-0.02em]"
              aria-label={PARAGRAPH_2}
            >
              {words2.map((word, i) => (
                <span
                  key={i}
                  className="inline-block mr-[0.28em] text-white will-change-[opacity,transform]"
                  style={getWordStyle(i, words2.length, 0.50, 0.94)}
                >
                  {word}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
