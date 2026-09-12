import SectionWrapper from './SectionWrapper';

const services = [
  {
    title: 'AI Agent Development+',
    desc: 'We build bespoke intelligent AI agents that learn complex tasks, qualify leads, and handle customer interactions with precision—freeing your team to focus on what matters. With voice and recognition capabilities.',
  },
  {
    title: 'Workflow Automation++',
    desc: 'We design and build secure custom AI systems that eliminate inefficiencies, and create measurable competitive advantage in an ecosystem of your apps.',
  },
  {
    title: 'Consultation',
    desc: 'We advise on your business\'s current systems and processes and identify inefficiencies, then provide expert guidance on implementing the right solutions—saving you time, money, and resources.',
  },
  {
    title: 'Enterprise Application Monitoring',
    desc: 'We proactively monitor application performance and user engagement, identifying issues and opportunities for improvement—ensuring your systems run smoothly and deliver measurable results.',
  },
  {
    title: 'Websites',
    desc: 'We build high-performance, custom websites that serve as powerful business assets. From lead-capture systems to scalable platforms, we deliver websites designed for impact, speed, and measurable results.',
  },
  {
    title: 'White Glove Services',
    desc: 'We offer end-to-end management of your systems. From ongoing maintenance and security updates to performance optimization and feature enhancements, we ensure your technology runs seamlessly—allowing you to focus on your business goals.',
  },
];

export default function Features() {
  return (
    <SectionWrapper id="services">
      <div className="section-label">SERVICES</div>
      <h2 className="font-space text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.15] tracking-[-0.02em] mb-8 max-w-[800px] reveal">
        Tailored to your unique goals.
      </h2>

      <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-0 min-[900px]:gap-16 mt-12 reveal">
        <div>
          {services.slice(0, 3).map((srv, idx) => (
            <div
              key={idx}
              className="py-8 border-b border-border transition-[padding-left] duration-300 hover:pl-4"
            >
              <h3 className="font-space text-[1.3rem] font-semibold mb-2 text-text">
                {srv.title}
              </h3>
              <p className="text-[0.9rem] text-muted leading-[1.6]">
                {srv.desc}
              </p>
            </div>
          ))}
        </div>
        <div>
          {services.slice(3, 6).map((srv, idx) => (
            <div
              key={idx}
              className="py-8 border-b border-border transition-[padding-left] duration-300 hover:pl-4"
            >
              <h3 className="font-space text-[1.3rem] font-semibold mb-2 text-text">
                {srv.title}
              </h3>
              <p className="text-[0.9rem] text-muted leading-[1.6]">
                {srv.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
