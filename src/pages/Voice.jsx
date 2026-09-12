import ContactButton from '../components/ContactButton';
import SEOHead from '../components/SEOHead';
import SectionWrapper from '../components/SectionWrapper';

export default function Voice() {
  return (
    <>
      <SEOHead
        title="AI Voice Systems"
        description="Deploy intelligent voice agents that handle inbound and outbound calls with human-like conversation flows. 24/7 customer resolution and automated outbound campaigns at scale."
        canonical="/voice"
      />

      {/* ── Hero ── */}
      <section className="relative min-h-[50vh] flex flex-col justify-end px-6 min-[900px]:px-12 overflow-hidden border-t-0 pb-16 z-[2] pt-[12rem]">
        <div className="absolute top-0 left-0 w-full h-full z-[1] pointer-events-none bg-gradient-to-b from-transparent to-bg"></div>
        <h1 className="relative z-[2] font-space font-bold text-[clamp(3rem,8vw,7rem)] leading-[0.92] tracking-[-0.03em] reveal">
          AI Voice<br/>Systems<span className="text-text/50">.</span>
        </h1>
        <p className="relative z-[2] mt-8 text-[clamp(1.1rem,2vw,1.5rem)] leading-[1.5] max-w-[620px] text-muted reveal">
          Deploy intelligent voice agents capable of handling complex customer interactions at scale — with human-like latency, dynamic conversation flows, and enterprise-grade telephony infrastructure.
        </p>
      </section>

      {/* ── Core Capabilities ── */}
      <SectionWrapper>
        <div className="section-label">Voice Capabilities</div>
        <h2 className="font-space text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.15] tracking-[-0.02em] mb-8 max-w-[800px] reveal">
          Conversational intelligence for modern businesses.
        </h2>
        <p className="text-[1.05rem] text-muted max-w-[600px] leading-[1.7] reveal">
          Every voice agent is engineered end-to-end — from voice synthesis and NLU to telephony routing and CRM sync — with no black boxes.
        </p>

        <div className="grid grid-cols-1 min-[900px]:grid-cols-3 mt-12 bg-card-bg border border-border rounded-lg overflow-hidden reveal">
          {[
            {
              title: 'Inbound Resolution',
              text: 'Instantly resolve customer inquiries 24/7 without wait times — reducing handle time and operational overhead at scale.',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="w-[56px] h-[56px] stroke-[1.2]">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              )
            },
            {
              title: 'Outbound Campaigns',
              text: 'Automate proactive outreach for sales, collections, appointment reminders, and feedback with dynamic branching logic and live transfer.',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="w-[56px] h-[56px] stroke-[1.2]">
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
              )
            },
            {
              title: 'Live Agent Handoff',
              text: 'Seamless warm transfers to human agents with full conversation context, CRM notes, and priority routing — zero dead air.',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="w-[56px] h-[56px] stroke-[1.2]">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              )
            },
            {
              title: 'Natural Language Understanding',
              text: 'Intent detection, entity extraction, and contextual memory across multi-turn conversations — trained on your specific business domain.',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="w-[56px] h-[56px] stroke-[1.2]">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              )
            },
            {
              title: 'Multilingual Support',
              text: 'Deploy agents fluent in 30+ languages with accent-aware synthesis, regional phrasing, and locale-specific compliance handling.',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="w-[56px] h-[56px] stroke-[1.2]">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              )
            },
            {
              title: 'Analytics & Monitoring',
              text: 'Real-time dashboards with call sentiment scoring, resolution rates, drop-off points, and agent performance metrics — all auditable.',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="w-[56px] h-[56px] stroke-[1.2]">
                  <line x1="18" y1="20" x2="18" y2="10"/>
                  <line x1="12" y1="20" x2="12" y2="4"/>
                  <line x1="6" y1="20" x2="6" y2="14"/>
                </svg>
              )
            },
          ].map((cap, idx) => (
            <div key={idx} className="p-[4rem_3rem] relative flex flex-col transition-colors duration-300 hover:bg-white/5 border-b border-border min-[900px]:border-r min-[900px]:[&:nth-child(3n)]:border-r-0 min-[900px]:[&:nth-child(n+4)]:border-b-0 max-[900px]:border-r-0 max-[900px]:last:border-b-0">
              <div className="w-full flex justify-center mb-10 text-text">{cap.icon}</div>
              <h3 className="font-space text-[1.2rem] font-semibold mb-3 text-text tracking-[-0.02em]">{cap.title}</h3>
              <p className="text-[0.9rem] text-muted leading-[1.65]">{cap.text}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ── Infrastructure & SIP Trunking ── */}
      <SectionWrapper>
        <div className="section-label">Telephony Infrastructure</div>
        <h2 className="font-space text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.15] tracking-[-0.02em] mb-8 max-w-[800px] reveal">
          Enterprise-grade infrastructure, built to carry every call.
        </h2>
        <p className="text-[1.05rem] text-muted max-w-[620px] leading-[1.7] reveal">
          Our voice platform runs on carrier-grade telephony infrastructure with global points of presence, SIP trunking, and sub-500ms round-trip latency — so every conversation feels instant.
        </p>

        <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-0 min-[900px]:gap-16 mt-14 reveal">
          <div>
            <div className="py-8 border-b border-border transition-[padding-left] duration-300 hover:pl-4">
              <h3 className="font-space text-[1.3rem] font-semibold mb-2">SIP Trunking</h3>
              <p className="text-[0.9rem] text-muted leading-[1.6]">
                Direct SIP trunk integration into your existing PBX, UCaaS, or contact centre platform. Full PSTN connectivity with number porting, DID provisioning, and E.164 formatting across 60+ countries.
              </p>
            </div>
            <div className="py-8 border-b border-border transition-[padding-left] duration-300 hover:pl-4">
              <h3 className="font-space text-[1.3rem] font-semibold mb-2">Sub-500ms Latency</h3>
              <p className="text-[0.9rem] text-muted leading-[1.6]">
                Regional edge nodes co-located with major cloud carriers ensure voice packets travel the shortest path. Turn-taking feels natural, never robotic.
              </p>
            </div>
            <div className="py-8 border-b border-border transition-[padding-left] duration-300 hover:pl-4">
              <h3 className="font-space text-[1.3rem] font-semibold mb-2">STIR/SHAKEN Compliance</h3>
              <p className="text-[0.9rem] text-muted leading-[1.6]">
                All outbound calls are signed and attested at the A-level, ensuring your numbers reach customers rather than landing in spam — maximising answer rates.
              </p>
            </div>
          </div>
          <div>
            <div className="py-8 border-b border-border transition-[padding-left] duration-300 hover:pl-4">
              <h3 className="font-space text-[1.3rem] font-semibold mb-2">Concurrent Call Scaling</h3>
              <p className="text-[0.9rem] text-muted leading-[1.6]">
                Elastic channel pools that auto-scale from 10 to 10,000 simultaneous calls without pre-provisioning. Pay only for what you use — down to the second.
              </p>
            </div>
            <div className="py-8 border-b border-border transition-[padding-left] duration-300 hover:pl-4">
              <h3 className="font-space text-[1.3rem] font-semibold mb-2">Failover & Redundancy</h3>
              <p className="text-[0.9rem] text-muted leading-[1.6]">
                Active-active dual-carrier routing with automatic failover in under 2 seconds. 99.99% uptime SLA backed by geographically distributed infrastructure.
              </p>
            </div>
            <div className="py-8 border-b border-border transition-[padding-left] duration-300 hover:pl-4">
              <h3 className="font-space text-[1.3rem] font-semibold mb-2">Call Recording & Retention</h3>
              <p className="text-[0.9rem] text-muted leading-[1.6]">
                AES-256 encrypted recordings with configurable retention policies, PII redaction, and one-click export to your data warehouse or compliance vault.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ── By the Numbers ── */}
      <SectionWrapper>
        <div className="section-label">By the Numbers</div>
        <h2 className="font-space text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.15] tracking-[-0.02em] mb-16 max-w-[800px] reveal">
          Performance you can measure from day one.
        </h2>

        <div className="grid grid-cols-1 min-[900px]:grid-cols-4 border border-border bg-card-bg rounded-lg overflow-hidden reveal">
          {[
            { stat: '<500ms', label: 'Round-trip voice latency', sub: 'edge-optimised infrastructure' },
            { stat: '99.99%', label: 'Platform uptime SLA', sub: 'active-active redundancy' },
            { stat: '10K+', label: 'Concurrent channels', sub: 'elastic, no pre-provisioning' },
            { stat: '30+', label: 'Languages supported', sub: 'accent-aware synthesis' },
          ].map((item, i, arr) => (
            <div key={i} className={`p-10 min-[900px]:p-12 flex flex-col gap-6 transition-colors duration-300 hover:bg-white/5 group ${i < arr.length - 1 ? 'border-b min-[900px]:border-b-0 min-[900px]:border-r border-border' : ''}`}>
              <div className="font-space font-bold text-[clamp(2.5rem,8vw,4rem)] leading-none tracking-[-0.04em] text-highlight-green transition-transform duration-300 group-hover:-translate-y-1">
                {item.stat}
              </div>
              <div>
                <div className="text-[1rem] font-space font-medium text-text mb-1 leading-[1.3]">{item.label}</div>
                <div className="text-[0.78rem] text-muted uppercase tracking-[0.1em]">{item.sub}</div>
              </div>
            </div>
          ))}
        </div>

      </SectionWrapper>

      {/* ── 24/7 Always On ── */}
      <SectionWrapper>
        <div className="section-label">Always On</div>
        <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-16 items-start reveal">
          <div>
            <h2 className="font-space text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.15] tracking-[-0.02em] mb-6">
              Your busiest agent<br/>never sleeps.
            </h2>
            <p className="text-[1.05rem] text-muted leading-[1.7] mb-10">
              While your human team clocks off, the voice agent keeps answering, qualifying, and resolving — across every timezone, every shift, every holiday. No rosters. No sick days. No hold music.
            </p>
            <div className="flex flex-col gap-0">
              {[
                { time: '02:17 AM', event: 'Inbound call received', detail: 'Customer calls after hours. Agent picks up in 380ms.' },
                { time: '02:18 AM', event: 'Intent identified', detail: 'Order status query detected. CRM lookup triggered.' },
                { time: '02:18 AM', event: 'Resolution delivered', detail: 'Tracking info read aloud. Ticket closed. No human involved.' },
                { time: '02:19 AM', event: 'CRM updated', detail: 'Call summary, sentiment score, and outcome logged automatically.' },
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-[90px_1fr] gap-6 py-5 border-b border-border last:border-b-0 group transition-colors duration-300 hover:border-white/25">
                  <div className="font-space text-[0.78rem] text-highlight-green tabular-nums pt-[3px]">{row.time}</div>
                  <div>
                    <div className="font-space text-[0.95rem] font-semibold text-text mb-1">{row.event}</div>
                    <div className="text-[0.82rem] text-muted leading-[1.5]">{row.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What happens on every call */}
          <div className="bg-card-bg border border-border rounded-lg overflow-hidden">
            <div className="px-8 py-6 border-b border-border">
              <div className="text-[0.7rem] tracking-[0.15em] uppercase text-muted">What happens on every call</div>
            </div>
            {[
              { ms: '0ms', label: 'Call received', desc: 'SIP trunk picks up. Voice stream opened.' },
              { ms: '180ms', label: 'Speech transcribed', desc: 'Real-time STT converts audio to text.' },
              { ms: '290ms', label: 'Intent classified', desc: 'NLU identifies topic, entities, and urgency.' },
              { ms: '370ms', label: 'Action executed', desc: 'CRM queried, policy checked, or escalation triggered.' },
              { ms: '480ms', label: 'Response spoken', desc: 'TTS synthesises reply in your agent\'s voice.' },
              { ms: 'Loop', label: 'Conversation continues', desc: 'Multi-turn context held until resolution or handoff.' },
            ].map((step, i, arr) => (
              <div key={i} className="grid grid-cols-[72px_1fr] items-start group">
                <div className="flex flex-col items-center self-stretch py-5 pl-6 pr-2">
                  <div className="font-space text-[0.7rem] font-bold text-highlight-green tabular-nums whitespace-nowrap">{step.ms}</div>
                  {i < arr.length - 1 && <div className="flex-1 w-[1px] bg-border mt-2"></div>}
                </div>
                <div className={`py-5 pr-6 pl-2 ${i < arr.length - 1 ? 'border-b border-border' : ''} transition-colors duration-300 group-hover:bg-white/3`}>
                  <div className="font-space text-[0.9rem] font-semibold text-text mb-1">{step.label}</div>
                  <div className="text-[0.8rem] text-muted leading-[1.5]">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>


      {/* ── Use Cases / Industries ── */}
      <SectionWrapper>
        <div className="section-label">Use Cases</div>
        <h2 className="font-space text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.15] tracking-[-0.02em] mb-8 max-w-[800px] reveal">
          Every industry. Every call type.
        </h2>

        <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-8 mt-12 reveal">
          {[
            {
              label: 'Healthcare',
              title: 'Patient Scheduling & Triage',
              text: 'Automated appointment booking, prescription refill requests, and post-discharge follow-up calls — fully HIPAA-compliant with EHR integration.',
              stat: '80%', statLabel: 'reduction in no-shows'
            },
            {
              label: 'Finance',
              title: 'Collections & Debt Recovery',
              text: 'Compliant outbound collection campaigns with payment plan negotiation, promise-to-pay capture, and real-time regulatory guardrails.',
              stat: '3×', statLabel: 'contact rate vs. human agents'
            },
            {
              label: 'E-Commerce',
              title: 'Order Support & Returns',
              text: 'Inbound order status, return authorisation, and shipping escalations resolved autonomously — no hold time, no transfers for routine queries.',
              stat: '94%', statLabel: 'first-call resolution rate'
            },
            {
              label: 'Real Estate',
              title: 'Lead Qualification',
              text: 'Instant callback on inbound leads, buyer/seller qualification scripts, appointment scheduling into your CRM, and nurture sequences for cold lists.',
              stat: '5 min', statLabel: 'average lead response time'
            },
          ].map((uc, idx) => (
            <div key={idx} className="p-[3rem] bg-card-bg border border-border rounded-lg transition-colors duration-300 hover:bg-white/5 flex flex-col gap-6">
              <div className="text-[0.7rem] tracking-[0.15em] uppercase text-muted">{uc.label}</div>
              <div>
                <h3 className="font-space text-[1.4rem] font-semibold mb-3 text-text tracking-[-0.02em]">{uc.title}</h3>
                <p className="text-[0.9rem] text-muted leading-[1.65]">{uc.text}</p>
              </div>
              <div className="mt-auto pt-6 border-t border-border flex items-baseline gap-3">
                <span className="font-space text-[2.5rem] font-bold text-highlight-green leading-none tracking-[-0.03em]">{uc.stat}</span>
                <span className="text-[0.85rem] text-muted">{uc.statLabel}</span>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ── Compliance Strip ── */}
      <SectionWrapper>
        <div className="section-label">Compliance & Security</div>
        <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-16 items-center reveal">
          <div>
            <h2 className="font-space text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.15] tracking-[-0.02em] mb-6">
              Built for regulated industries.
            </h2>
            <p className="text-[1.05rem] text-muted leading-[1.7]">
              Every voice deployment ships with configurable compliance guardrails. Opt-out handling, TCPA call-time windows, Do Not Call list scrubbing, and mandatory disclosures are enforced at the infrastructure level — not bolted on after the fact.
            </p>
          </div>
          <div className="flex flex-col gap-0">
            {[
              ['TCPA', 'Time-of-day restrictions, consent verification, and opt-out processing enforced automatically.'],
              ['HIPAA', 'PHI handling policies, BAA-ready infrastructure, and call recording access controls.'],
              ['GDPR / CCPA', 'Right-to-delete workflows, data residency selection, and consent audit logs.'],
              ['STIR/SHAKEN', 'A-level call attestation on all outbound numbers to ensure deliverability.'],
            ].map(([label, desc], i) => (
              <div key={i} className="py-7 border-b border-border last:border-b-0 transition-[padding-left] duration-300 hover:pl-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-2 h-2 rounded-full bg-highlight-green flex-shrink-0"></span>
                  <h3 className="font-space text-[1.1rem] font-semibold text-text tracking-[-0.02em]">{label}</h3>
                </div>
                <p className="text-[0.88rem] text-muted leading-[1.6] pl-5">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── CTA ── */}
      <SectionWrapper>
        <div className="mt-0 flex w-full reveal">
          <ContactButton subtitle="Ready to deploy?" title="Launch your AI Voice System" />
        </div>
      </SectionWrapper>
    </>
  );
}

