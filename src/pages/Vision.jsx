import SEOHead from '../components/SEOHead';
import SectionWrapper from '../components/SectionWrapper';

export default function Vision() {
  return (
    <>
      <SEOHead
        title="Our Vision"
        description="WEXEL's vision is to build the infrastructure for the next generation of autonomous enterprise — empowering businesses with AI systems that autonomously execute complex tasks with precision and scale."
        canonical="/vision"
      />
      <section className="relative min-h-[50vh] flex flex-col justify-end px-6 min-[900px]:px-12 overflow-hidden border-t-0 pb-16 z-[2] pt-[12rem] border-b border-border">
        <div className="absolute top-0 left-0 w-full h-full z-[1] pointer-events-none bg-black/30 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
        <div className="relative z-[2] max-w-[1200px]">
          <h1 className="font-space font-bold text-[clamp(3.5rem,8vw,7rem)] leading-[0.95] tracking-[-0.03em] reveal text-white">
            Our Vision<span className="text-white/40">.</span>
          </h1>
          <p className="mt-8 text-[clamp(1.15rem,2.2vw,1.5rem)] leading-[1.45] max-w-[620px] text-zinc-300 font-normal reveal">
            Building the infrastructure for the next generation of autonomous enterprise.
          </p>
        </div>
      </section>
      <SectionWrapper className="min-h-[50vh] py-16 min-[900px]:py-24">
        <div className="max-w-[820px] reveal text-[1.05rem] md:text-[1.125rem] text-zinc-400 leading-[1.85] space-y-8 font-normal">
          <p>
            At Wexel, we believe that the future of business operations lies in intelligent automation. Our vision is to empower enterprises with systems that don't just assist, but autonomously execute complex tasks with precision and scale.
          </p>
          <p>
            We are committed to pushing the boundaries of what's possible with AI, ensuring to stay ahead in a rapidly evolving landscape.
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
