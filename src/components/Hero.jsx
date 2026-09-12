import { useState, useEffect } from 'react';
import HeroBackgroundVideo from './HeroBackgroundVideo';

const words = ["Speed.", "Trust.", "Reliability.", "Accuracy.", "Future ❋."];

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    let typingSpeed = isDeleting ? 100 : 200;

    if (!isDeleting && currentText === word) {
      typingSpeed = 2000; // Pause at end of word
    } else if (isDeleting && currentText === '') {
      typingSpeed = 500; // Pause before typing next word
    }

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === word) {
        setIsDeleting(true);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      } else {
        setCurrentText(prev => {
          if (isDeleting) {
            return word.substring(0, prev.length - 1);
          } else {
            return word.substring(0, prev.length + 1);
          }
        });
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <section className="relative min-h-screen flex flex-col justify-between px-6 min-[900px]:px-12 overflow-hidden border-t-0 py-0 z-[2]">
      <HeroBackgroundVideo className="top-[42%] h-[58%]" />
      <div className="absolute top-0 left-0 w-full h-full z-[1] hero-overlay pointer-events-none"></div>

      <h1 className="relative z-[2] font-space font-bold text-[clamp(4rem,12vw,11rem)] leading-[0.92] tracking-[-0.03em] pt-[6rem] min-[500px]:pt-[8rem] max-[500px]:text-[3.2rem] reveal">
        Embrace<br />
        {currentText}
        <span className="inline-block w-[0.05em] h-[0.75em] bg-white animate-pulse ml-1"></span>
      </h1>

      <div className="relative z-[2] pb-12 grid grid-cols-1 min-[900px]:grid-cols-2 gap-8">
        <div></div>
        <p className="text-[clamp(1.2rem,2.5vw,1.75rem)] leading-[1.45] max-w-[620px] ml-0 min-[900px]:ml-auto font-normal reveal">
          We Engineer AI systems to Eliminate Inefficiencies, and Create Measurable Competitive Advantage.
        </p>
      </div>
    </section>
  );
}
