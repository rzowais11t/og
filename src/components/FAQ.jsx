import { useState } from 'react';
import SectionWrapper from './SectionWrapper';

const faqs = [
  {
    question: 'Is our company data completely private?',
    answer: 'Absolutely. Security is foundational to every engagement. We implement enterprise-grade security practices, controlled access, encrypted data handling, and architectures designed around confidentiality from day one.',
  },
  {
    question: 'How long does deployment take?',
    answer: 'Every project is unique. Smaller workflow automations can be delivered within weeks, while larger AI platforms follow a phased implementation plan designed to maximize speed without sacrificing quality.',
  },
  {
    question: 'Do we need an internal engineering team?',
    answer: "No. We handle strategy, architecture, development, deployment, and ongoing optimization. If your internal team exists, we collaborate seamlessly. If it doesn't, we become your AI implementation partner.",
  },
  {
    question: 'How is the investment structured?',
    answer: "Projects are scoped according to complexity, integrations, and business objectives. Following your AI Audit, you'll receive a transparent proposal outlining deliverables, milestones, timelines, and pricing.",
  },
  {
    question: 'Can existing software be integrated?',
    answer: 'Yes. Our solutions are designed to work with the tools your business already relies on, extending existing systems instead of forcing unnecessary replacement.',
  },
];

function ChevronDown({ className }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <SectionWrapper id="faq">
      <div className="max-w-3xl mx-auto">
        <div className="section-label">FAQ</div>
        <h2 className="text-[clamp(2.5rem,6vw,3.75rem)] font-bold leading-[1.1] tracking-[-0.02em] reveal mb-20 text-center">
          Frequently Asked Questions
        </h2>

        <div className="reveal">
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{ borderBottom: index < faqs.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex items-start justify-between gap-4 text-left bg-transparent border-none cursor-pointer outline-none"
                style={{ transition: 'background 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                aria-expanded={openIndex === index}
              >
                <span
                  className="font-semibold flex-1 pr-4 leading-snug"
                  style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}
                >
                  {faq.question}
                </span>
                <span className="flex-shrink-0 pt-1 text-muted">
                  <ChevronDown
                    className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                  />
                </span>
              </button>

              <div
                className="overflow-hidden"
                style={{
                  maxHeight: openIndex === index ? '300px' : '0',
                  transition: 'max-height 0.35s cubic-bezier(0.16,1,0.3,1)',
                }}
              >
                <p
                  className="pb-6 pr-8 leading-relaxed"
                  style={{
                    color: 'var(--muted)',
                    opacity: openIndex === index ? 1 : 0,
                    transform: openIndex === index ? 'translateY(0)' : 'translateY(-8px)',
                    transition: 'opacity 0.3s ease, transform 0.3s ease',
                  }}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
