import { navigateTo } from '../utils/navigation';

export default function NotFound() {
  const handleGoHome = (e) => {
    e.preventDefault();
    navigateTo('/');
  };

  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center items-center px-6 text-center z-[2] pt-[8rem] bg-black">
      <div className="absolute top-0 left-0 w-full h-full z-[1] pointer-events-none bg-gradient-to-b from-transparent to-black"></div>
      
      <div className="relative z-[2] max-w-2xl reveal flex flex-col items-center">
        
        <div className="relative mb-8 flex justify-center items-center">
          {/* Soft, diffuse background glow */}
          <div 
            className="absolute inset-0 text-white opacity-40 select-none blur-[60px] md:blur-[100px]" 
            aria-hidden="true"
            style={{ fontSize: 'clamp(8rem,25vw,18rem)', fontWeight: 'bold', leading: '0.8', letterSpacing: '-0.02em' }}
          >
            404
          </div>
          
          {/* Main crisp text */}
          <h1 className="relative font-bold text-[clamp(8rem,25vw,18rem)] leading-[0.8] text-white tracking-tight m-0">
            404
          </h1>
        </div>

        <h2 className="text-white font-bold text-2xl md:text-[2rem] tracking-tight mb-6">
          The page you requested cannot be found.
        </h2>
        <p className="text-[#a1a1aa] text-sm md:text-base max-w-md mx-auto mb-10 leading-relaxed font-medium">
          The link may be broken, or the page could<br className="hidden md:block"/> have been taken down or renamed.
        </p>
        <a 
          href="/" 
          onClick={handleGoHome}
          className="inline-flex items-center justify-center h-12 px-8 rounded-xl bg-white text-black font-semibold transition-all duration-300 hover:bg-gray-200 hover:scale-105 no-underline cursor-pointer"
        >
          Go back home
        </a>
      </div>
    </section>
  );
}
