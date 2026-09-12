import SectionWrapper from './SectionWrapper';
import { navigateTo } from '../utils/navigation';

const flagships = [
  {
    title: 'AI Voice Systems ↝',
    path: '/voice',
    desc: 'Intelligent conversational agents that handle inbound and outbound calls, qualify leads, and provide 24/7 support with human-like latency.',
  },
  {
    title: 'Growth Automation ↝',
    path: '/autogrowth',
    desc: 'Scale your outreach and marketing efforts with automated campaigns, intelligent lead scoring, and personalized content generation.',
  },
  {
    title: 'Business Intelligence ↝',
    path: '/bizintel',
    desc: 'Transform scattered data into real-time dashboards, predictive analytics, and automated reporting systems that drive executive decision-making.',
  },
];

const prefetchMap = {
  '/voice': () => import('../pages/Voice'),
  '/autogrowth': () => import('../pages/AutoGrowth'),
  '/bizintel': () => import('../pages/BizIntel'),
};

export default function Flagships({ id }) {
  const handleNavigate = (path) => (e) => {
    e.preventDefault();
    navigateTo(path);
  };

  return (
    <SectionWrapper id={id}>
      <div className="section-label">Flagships</div>
      <h2 className="font-space text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.15] tracking-[-0.02em] mb-8 max-w-[800px] reveal">
        Most deployed. Proven in production.
      </h2>
      <p className="text-[1.05rem] text-muted max-w-[600px] leading-[1.7] reveal">
        The AI solutions we deploy most—selected for their reliability, adaptability, and measurable business impact.
      </p>

      <div className="grid grid-cols-1 min-[900px]:grid-cols-3 gap-8 min-[900px]:gap-12 mt-12 reveal">
        {flagships.map((item, idx) => (
          <a
            key={idx}
            href={item.path}
            onClick={handleNavigate(item.path)}
            onMouseEnter={() => prefetchMap[item.path]?.()}
            className="block py-8 border-b border-border transition-[padding-left] duration-300 hover:pl-4 text-text no-underline cursor-pointer"
          >
            <h3 className="font-space text-[1.3rem] font-semibold mb-3">
              {item.title}
            </h3>
            <p className="text-[0.9rem] text-muted leading-[1.6]">
              {item.desc}
            </p>
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
}
