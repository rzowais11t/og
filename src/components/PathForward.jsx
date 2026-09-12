import ContactButton from './ContactButton';
import SectionWrapper from './SectionWrapper';

export default function PathForward() {
  return (
    <SectionWrapper>
      <div className="pb-16 flex flex-col items-start gap-8 reveal relative z-20">
        <h2 className="text-5xl md:text-7xl font-space font-semibold text-white mb-4 md:mb-6">
          We are:
        </h2>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12 mt-0 md:mt-2">
          {/* Column 1 */}
          <div className="flex flex-col items-start gap-6 group">
            <div className="text-white mb-2 transition-transform group-hover:scale-110 duration-300">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12h8" />
                <path d="M6 8l4 4-4 4" />
                <path d="M22 12h-8" />
                <path d="M18 8l-4 4 4 4" />
              </svg>
            </div>
            <h3 className="text-3xl md:text-4xl font-space font-medium text-white leading-tight">
              Exchange-<br />focused
            </h3>
            <p className="text-[0.95rem] text-white/70 leading-relaxed font-sans mt-2">
              By leveraging our expertise and experience, we aim to deliver value to our clients through efficient and effective exchange solutions.
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-start gap-6 group">
            <div className="text-white mb-2 transition-transform group-hover:scale-110 duration-300">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h10" />
                <path d="M12 12l5-5" />
                <path d="M12 7h5v5" />
              </svg>
            </div>
            <h3 className="text-3xl md:text-4xl font-space font-medium text-white leading-tight">
              Operating<br />worldwide
            </h3>
            <p className="text-[0.95rem] text-white/70 leading-relaxed font-sans mt-2">
              Our extensive and deep understanding of local markets lets us provide comprehensive services to a diverse range of clients.
            </p>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-start gap-6 group">
            <div className="text-white mb-2 transition-transform group-hover:scale-110 duration-300">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12h4" />
                <path d="M9 12h4" />
                <path d="M16 8l6 8" />
                <path d="M22 8l-6 8" />
              </svg>
            </div>
            <h3 className="text-3xl md:text-4xl font-space font-medium text-white leading-tight">
              Objective-<br />driven
            </h3>
            <p className="text-[0.95rem] text-white/70 leading-relaxed font-sans mt-2">
              Our experienced team of professionals works closely with clients to understand their unique challenges and risk management strategies.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 flex w-full lg:mt-32 reveal relative z-20">
        <ContactButton />
      </div>
    </SectionWrapper>
  );
}
