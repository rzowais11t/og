import SEOHead from '../components/SEOHead';
import SectionWrapper from '../components/SectionWrapper';

export default function Privacy() {
  return (
    <>
      <SEOHead
        title="Privacy Policy"
        description="Read WEXEL's privacy policy to understand how we collect, use, and protect your personal information in accordance with enterprise-grade security standards."
        canonical="/privacy"
        noIndex={true}
      />
      <section className="relative min-h-[40vh] flex flex-col justify-end px-6 min-[900px]:px-12 overflow-hidden border-t-0 pb-12 z-[2] pt-[10rem]">
        <div className="absolute top-0 left-0 w-full h-full z-[1] pointer-events-none bg-gradient-to-b from-transparent to-bg"></div>
        <h1 className="relative z-[2] font-space font-bold text-[clamp(2.5rem,6vw,5rem)] leading-[0.92] tracking-[-0.03em] reveal">
          Privacy Policy<span className="text-text/50">.</span>
        </h1>
      </section>
      <SectionWrapper>
        <div className="max-w-[800px] reveal text-[1.05rem] text-muted leading-[1.8]">
          <h2 className="text-text font-bold text-2xl mb-4 tracking-[-0.02em]">1. Information Collection</h2>
          <p className="mb-10">We collect information from you when you register on our site, subscribe to our newsletter, respond to a survey, or fill out a form. The collected information includes your name, email address, phone number, and/or credit card information.</p>
          
          <h2 className="text-text font-bold text-2xl mb-4 tracking-[-0.02em]">2. Use of Information</h2>
          <p className="mb-10">Any of the information we collect from you may be used to personalize your experience, improve our website, improve customer service, process transactions, or administer a contest, promotion, survey, or other site feature.</p>
          
          <h2 className="text-text font-bold text-2xl mb-4 tracking-[-0.02em]">3. Data Protection</h2>
          <p>We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information. We offer the use of a secure server.</p>
        </div>
      </SectionWrapper>
    </>
  );
}
