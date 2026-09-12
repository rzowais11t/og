import SectionWrapper from './SectionWrapper';

export default function Efficiency() {
  return (
    <SectionWrapper id="efficiency">
      <div className="section-label">Zero Fluff.</div>
      <h2 className="font-space text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.15] tracking-[-0.02em] mb-8 max-w-[800px] reveal">
        Maximum Capital Efficiency.
      </h2>
      <p className="text-[1.05rem] text-muted max-w-[600px] leading-[1.7] reveal">
        We don't build for the sake of building. We engineer for immediate operational leverage.
      </p>

      <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-0 min-[900px]:gap-16 mt-12 reveal">
        <div>
          <div className="py-8 border-b border-border transition-[padding-left] duration-300 hover:pl-4">
            <h3 className="font-space text-[1.3rem] font-semibold mb-2">01 / MVP Excellence</h3>
            <p className="text-[0.9rem] text-muted leading-[1.6]">
              Deploying a sophisticated intelligence layer shouldn't take a fiscal year. We bypass the bloat to deliver an elite, production-ready core product in a <span className="text-highlight-green">fraction of the time</span>. You get infrastructure that scales, workflows that automate, and zero wasted developer cycles.
            </p>
            <p className="mt-4 font-semibold text-accent">Weeks, Not Months.</p>
          </div>
        </div>
        <div>
          <div className="py-8 border-b border-border transition-[padding-left] duration-300 hover:pl-4">
            <h3 className="font-space text-[1.3rem] font-semibold mb-2">02 / Immediate Capital Return</h3>
            <p className="text-[0.9rem] text-muted leading-[1.6]">
              Our automation engine targets your highest-overhead operational bottlenecks on day one. Because of this immediate efficiency shift, our partners see an average payback period of <span className="text-highlight-green">2–4 months</span>, entirely offsetting initial integration costs within the first 90 days.
            </p>
            <p className="mt-4 font-semibold text-accent">100% Cost Recouped.</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
