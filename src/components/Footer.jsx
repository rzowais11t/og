import { navigateTo } from '../utils/navigation';

export default function Footer() {
  const handlePageNav = (path) => (e) => {
    e.preventDefault();
    navigateTo(path);
  };

  return (
    <footer className="p-6 min-[900px]:p-12 border-t border-border flex flex-col min-[900px]:flex-row justify-between items-center bg-bg gap-6 min-[900px]:gap-0 text-center min-[900px]:text-left relative z-[2]">
      <div className="font-space text-[1.1rem] font-semibold text-text">AI Automation & Infrastructure</div>
      <div className="flex flex-wrap justify-center min-[900px]:justify-end gap-8">
        <a
          href="/privacy"
          onClick={handlePageNav('/privacy')}
          onMouseEnter={() => import('../pages/Privacy')}
          className="text-muted no-underline text-[0.8rem] tracking-[0.05em] transition-colors duration-300 hover:text-text cursor-pointer"
        >
          Privacy Policy
        </a>
        <a
          href="/terms"
          onClick={handlePageNav('/terms')}
          onMouseEnter={() => import('../pages/Terms')}
          className="text-muted no-underline text-[0.8rem] tracking-[0.05em] transition-colors duration-300 hover:text-text cursor-pointer"
        >
          Terms of Service
        </a>
        <a
          href="/vision"
          onClick={handlePageNav('/vision')}
          onMouseEnter={() => import('../pages/Vision')}
          className="text-muted no-underline text-[0.8rem] tracking-[0.05em] transition-colors duration-300 hover:text-text cursor-pointer"
        >
          Our Vision
        </a>
        <span className="text-muted no-underline text-[0.8rem] tracking-[0.05em] transition-colors duration-300 hover:text-text">
          © 2026
        </span>
      </div>
    </footer>
  );
}
