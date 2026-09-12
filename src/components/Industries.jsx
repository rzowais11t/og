import SectionWrapper from './SectionWrapper';

const industries = [
  { num: '(0.1)', title: 'Finance', desc: 'Automate compliance pipelines, real-time risk modeling, algorithmic fraud detection, and high-frequency document processing for institutional scale.', examples: ['Automated regulatory reporting engine', 'Real-time credit risk assessment workflow'] },
  { num: '(0.2)', title: 'Healthcare', desc: 'Deploy compliant patient triage models, medical record synthesis, automated claims processing, and EHR workflow optimization.', examples: ['Automated patient chart summarization', 'Intelligent medical claims routing'] },
  { num: '(0.3)', title: 'Logistics', desc: 'Optimize supply chain telemetry, dynamic fleet routing, automated manifest extraction, and warehouse inventory forecasting.', examples: ['Supply chain bottleneck prediction engine', 'Automated customs document processing'] },
  { num: '(0.4)', title: 'Legal', desc: 'Streamline contract analysis, clause risk scoring, rapid case precedent discovery, and automated due diligence workflows.', examples: ['Enterprise contract review & redlining AI', 'Automated discovery document tagging'] },
  { num: '(0.5)', title: 'Professional Services', desc: 'Accelerate client onboarding, internal knowledge retrieval, RFP response generation, and automated project resource tracking.', examples: ['Automated proposal & RFP generation engine', 'Internal firm knowledge base search agent'] },
  { num: '(0.6)', title: 'Manufacturing', desc: 'Integrate computer vision quality assurance, predictive machine maintenance, factory floor telemetry, and automated inventory leveling.', examples: ['Real-time visual defect detection pipeline', 'Predictive equipment downtime alert system'] },
];

export default function Industries() {
  return (
    <SectionWrapper id="industries">
      <div className="section-label">Industries & Regions</div>
      <h2 className="font-space text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.15] tracking-[-0.02em] reveal">
        Where we operate.
      </h2>

      <div className="mt-16 relative pb-0">
        {industries.map((ind, idx) => (
          <div
            key={idx}
            className="stack-card sticky bg-[#090909] border border-white/15 rounded-2xl p-6 sm:p-8 min-[900px]:p-12 mb-8 min-[900px]:mb-12 last:mb-0 [box-shadow:0_-12px_36px_rgba(0,0,0,0.85),0_1px_0_rgba(255,255,255,0.06)_inset]"
            style={{
              '--card-index': idx,
              zIndex: idx + 10,
            }}
          >
            <div className="flex flex-col gap-5 min-[900px]:gap-8 h-full industry-card-inner">
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <h3 className="font-space text-[1.3rem] sm:text-[1.8rem] min-[900px]:text-[2.2rem] min-[1200px]:text-[2.5rem] font-medium uppercase tracking-tight">{ind.title}</h3>
                <span className="font-space text-[1.2rem] sm:text-[1.5rem] text-muted">{ind.num}</span>
              </div>
              <div className="flex flex-col min-[900px]:flex-row justify-between gap-5 min-[900px]:gap-8">
                <p className="max-w-full min-[900px]:max-w-[500px] text-[0.95rem] min-[900px]:text-[1.05rem] text-muted leading-[1.6]">
                  {ind.desc}
                </p>
                <div className="flex-1 max-w-full min-[900px]:max-w-[400px] flex flex-col">
                  <h4 className="text-[0.85rem] font-semibold text-text border-b border-white/10 pb-2 mb-0">Project examples</h4>
                  <ul className="list-none flex flex-col">
                    {ind.examples.map((ex, i) => (
                      <li key={i} className="text-[0.9rem] text-muted py-3 border-b border-white/5 last:border-b-0">{ex}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}


      </div>
    </SectionWrapper>
  );
}
