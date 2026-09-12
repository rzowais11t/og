import SEOHead from '../components/SEOHead';
import SectionWrapper from '../components/SectionWrapper';

export default function Terms() {
  return (
    <>
      <SEOHead
        title="Terms of Service"
        description="Read WEXEL's terms of service governing the use of our AI automation platform and enterprise infrastructure solutions."
        canonical="/terms"
        noIndex={true}
      />
      <section className="relative min-h-[40vh] flex flex-col justify-end px-6 min-[900px]:px-12 overflow-hidden border-t-0 pb-12 z-[2] pt-[10rem]">
        <div className="absolute top-0 left-0 w-full h-full z-[1] pointer-events-none bg-gradient-to-b from-transparent to-bg"></div>
        <h1 className="relative z-[2] font-space font-bold text-[clamp(2.5rem,6vw,5rem)] leading-[0.92] tracking-[-0.03em] reveal">
          Terms of Service<span className="text-text/50">.</span>
        </h1>
      </section>
      <SectionWrapper>
        <div className="max-w-[800px] reveal text-[1.05rem] text-muted leading-[1.8]">
          <h2 className="text-text font-bold text-2xl mb-4 tracking-[-0.02em]">1. Acceptance of Terms</h2>
          <p className="mb-10">By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement. Any participation in this service will constitute acceptance of this agreement.</p>
          
          <h2 className="text-text font-bold text-2xl mb-4 tracking-[-0.02em]">2. Use License</h2>
          <p className="mb-10">Permission is granted to temporarily access the materials on our website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.</p>
          
          <h2 className="text-text font-bold text-2xl mb-4 tracking-[-0.02em]">3. Disclaimer</h2>
          <p>The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
        </div>
      </SectionWrapper>
    </>
  );
}
