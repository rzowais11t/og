import { navigateTo } from '../utils/navigation';
import { preloadCal } from '../utils/cal';

export default function ContactButton({
  title = "Contact Us"
}) {
  const handleClick = (e) => {
    e.preventDefault();
    navigateTo('/contact');
  };

  return (
    <a
      href="/contact"
      onClick={handleClick}
      onMouseEnter={() => {
        preloadCal();
        import('../pages/Contact');
      }}
      className="group relative w-full flex items-center justify-between p-8 md:p-12 bg-bg overflow-hidden border-2 border-text transition-colors duration-500 rounded-2xl cursor-pointer no-underline"
    >
      <div className="relative z-10 flex flex-col items-start max-w-[70%]">
        <span className="text-3xl md:text-5xl lg:text-6xl font-space font-bold tracking-tight text-text transition-colors duration-500 text-left">
          {title}
        </span>
      </div>

      <div className="relative z-10 w-14 h-14 md:w-20 md:h-20 rounded-full border-[3px] border-text flex items-center justify-center transition-all duration-500 group-hover:scale-110 flex-shrink-0 ml-4">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-text group-hover:-rotate-45 transition-transform duration-500 ease-out md:w-8 md:h-8">
          <path d="M5 12h14m-7-7 7 7-7 7" />
        </svg>
      </div>
    </a>
  );
}
