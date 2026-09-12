import SectionWrapper from './SectionWrapper';

const cards = [
  {
    title: 'Business Audit',
    text: 'Analyze workflows, identify bottlenecks, and uncover AI automation opportunities for measurable business growth.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="w-[72px] h-[72px] stroke-[1.2]">
        <path d="M22 13a10 10 0 0 0-20 0Z" />
        <path d="M12 13v7.5a2 2 0 0 0 4 0" />
        <path d="M12 3V1.5" />
      </svg>
    )
  },
  {
    title: 'System Audit',
    text: 'Review existing tools, integrations, and processes to ensure automation readiness and technical compatibility.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="w-[72px] h-[72px] stroke-[1.2]">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
    )
  },
  {
    title: 'Logic Engineering',
    text: 'Define precise AI logic, decision rules, and automation triggers for seamless workflow integration.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="w-[72px] h-[72px] stroke-[1.2]">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    )
  },
  {
    title: 'Contract',
    text: 'Verify all data sources, cross-reference information, and ensure accuracy before automation.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="w-[72px] h-[72px] stroke-[1.2]">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
      </svg>
    )
  },
  {
    title: 'Solution Architecture',
    text: 'Design the complete AI system with integrations, workflows, and automation sequences.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="w-[72px] h-[72px] stroke-[1.2]">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
    )
  },
  {
    title: 'Optimization',
    text: 'Continuously monitor, refine, and optimize AI models and automation flows for peak performance.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="w-[72px] h-[72px] stroke-[1.2]">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    )
  }
];

export default function Process() {
  return (
    <SectionWrapper id="process">
      <div className="section-label">Process</div>
      <h2 className="font-space text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.15] tracking-[-0.02em] mb-8 max-w-[800px] reveal">
        Six-stage architecture
      </h2>
      <p className="text-[1.05rem] text-muted max-w-[600px] leading-[1.7] reveal">
        Rigorous. Transparent. Measurable. Every project follows the same six-stage pipeline ensuring depth, accuracy, and long-term value.
      </p>

      <div className="grid grid-cols-1 min-[900px]:grid-cols-3 mt-12 bg-card-bg border border-border rounded-lg overflow-hidden reveal">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="p-10 sm:p-14 relative flex flex-col justify-between transition-colors duration-300 hover:bg-white/[0.03] border-b border-border min-[900px]:border-r max-[900px]:border-r-0 max-[900px]:last:border-b-0 min-[900px]:[&:nth-child(3n)]:border-r-0 min-[900px]:[&:nth-child(n+4)]:border-b-0"
          >
            <div className="w-full flex justify-center mb-10 text-text">
              {card.icon}
            </div>

            <div>
              <h3 className="font-sans text-[1.3rem] font-semibold mb-4 text-text tracking-[-0.02em]">
                {card.title}
              </h3>
              <p className="text-[0.95rem] text-muted leading-[1.6]">
                {card.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
