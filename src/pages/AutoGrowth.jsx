import ContactButton from '../components/ContactButton';
import SEOHead from '../components/SEOHead';
import SectionWrapper from '../components/SectionWrapper';

export default function AutoGrowth() {
  return (
    <>
      <SEOHead
        title="Growth Automation"
        description="Scale acquisition channels infinitely with algorithmic campaign management, automated lead generation, and AI-generated ad creatives that adapt in real time to performance data."
        canonical="/autogrowth"
      />

      {/* ── Hero ── */}
      <section className="relative min-h-[50vh] flex flex-col justify-end px-6 min-[900px]:px-12 overflow-hidden border-t-0 pb-16 z-[2] pt-[12rem]">
        <div className="absolute top-0 left-0 w-full h-full z-[1] pointer-events-none bg-gradient-to-b from-transparent to-bg"></div>
        <h1 className="relative z-[2] font-space font-bold text-[clamp(3rem,8vw,7rem)] leading-[0.92] tracking-[-0.03em] reveal">
          Growth<br/>Automation<span className="text-text/50">.</span>
        </h1>
        <p className="relative z-[2] mt-8 text-[clamp(1.1rem,2vw,1.5rem)] leading-[1.5] max-w-[620px] text-muted reveal">
          Scale your acquisition channels infinitely using algorithmic campaign management, automated outreach, and AI-generated creatives that optimise themselves in real time.
        </p>
      </section>

      {/* ── Core Capabilities ── */}
      <SectionWrapper>
        <div className="section-label">Capabilities</div>
        <h2 className="font-space text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.15] tracking-[-0.02em] mb-8 max-w-[800px] reveal">
          The engine for hyper-growth.
        </h2>
        <p className="text-[1.05rem] text-muted max-w-[600px] leading-[1.7] reveal">
          Every acquisition lever — email, paid, social, outbound — unified under one AI layer that tests, learns, and scales what works without waiting for your team to catch up.
        </p>

        <div className="grid grid-cols-1 min-[900px]:grid-cols-3 mt-12 bg-card-bg border border-border rounded-lg overflow-hidden reveal">
          {[
            {
              title: 'Algorithmic Outreach',
              text: 'Automated, personalised lead generation sequences built from your ICP and optimised continuously for reply rate and conversion probability.',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="w-[56px] h-[56px] stroke-[1.2]">
                  <path d="m22 2-7 20-4-9-9-4Z" />
                  <path d="M22 2 11 13" />
                </svg>
              )
            },
            {
              title: 'Dynamic Ad Creatives',
              text: 'AI-generated ad copy, headlines, and visuals that iterate against live performance data — replacing weeks of creative testing with autonomous loops.',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="w-[56px] h-[56px] stroke-[1.2]">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <path d="M3 9h18M9 21V9"/>
                </svg>
              )
            },
            {
              title: 'Lead Scoring & Routing',
              text: 'Every inbound lead scored in real time against fit, intent, and timing signals — then routed to the right sequence, rep, or CRM stage automatically.',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="w-[56px] h-[56px] stroke-[1.2]">
                  <circle cx="12" cy="12" r="10"/>
                  <circle cx="12" cy="12" r="6"/>
                  <circle cx="12" cy="12" r="2"/>
                </svg>
              )
            },
            {
              title: 'Multi-Channel Sequencing',
              text: 'Coordinate touchpoints across email, LinkedIn, SMS, and retargeting in a single orchestrated sequence — timed by behaviour, not a fixed calendar.',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="w-[56px] h-[56px] stroke-[1.2]">
                  <path d="M18 20V10M12 20V4M6 20v-6"/>
                </svg>
              )
            },
            {
              title: 'Personalisation at Scale',
              text: 'Hyper-personalised messages using company data, job titles, recent news, and intent signals — written and sent for thousands of prospects simultaneously.',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="w-[56px] h-[56px] stroke-[1.2]">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              )
            },
            {
              title: 'Analytics & Attribution',
              text: 'Full-funnel visibility from first touch to closed revenue — with multi-touch attribution, channel ROI breakdown, and automated performance reports.',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="w-[56px] h-[56px] stroke-[1.2]">
                  <line x1="18" y1="20" x2="18" y2="10"/>
                  <line x1="12" y1="20" x2="12" y2="4"/>
                  <line x1="6" y1="20" x2="6" y2="14"/>
                </svg>
              )
            },
          ].map((cap, idx) => (
            <div key={idx} className={`p-[4rem_3rem] relative flex flex-col transition-colors duration-300 hover:bg-white/5 border-b border-border min-[900px]:border-r max-[900px]:border-r-0 max-[900px]:last:border-b-0 min-[900px]:[&:nth-child(3n)]:border-r-0 min-[900px]:[&:nth-child(n+4)]:border-b-0`}>
              <div className="w-full flex justify-center mb-10 text-text">{cap.icon}</div>
              <h3 className="font-space text-[1.2rem] font-semibold mb-3 text-text tracking-[-0.02em]">{cap.title}</h3>
              <p className="text-[0.9rem] text-muted leading-[1.65]">{cap.text}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ── Outreach Engine ── */}
      <SectionWrapper>
        <div className="section-label">Outreach Engine</div>
        <h2 className="font-space text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.15] tracking-[-0.02em] mb-8 max-w-[800px] reveal">
          Built to find, engage, and convert — without a team behind it.
        </h2>
        <p className="text-[1.05rem] text-muted max-w-[620px] leading-[1.7] reveal">
          From ICP definition to booked meeting, the outreach engine handles every step algorithmically — prospecting, personalisation, sequencing, follow-up, and handoff.
        </p>

        <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-0 min-[900px]:gap-16 mt-14 reveal">
          <div>
            <div className="py-8 border-b border-border transition-[padding-left] duration-300 hover:pl-4">
              <h3 className="font-space text-[1.3rem] font-semibold mb-2">ICP-Driven Prospecting</h3>
              <p className="text-[0.9rem] text-muted leading-[1.6]">
                Define your ideal customer profile once. The engine continuously sources, enriches, and prioritises new prospects from across the web — firmographic data, technographic signals, and intent layers combined.
              </p>
            </div>
            <div className="py-8 border-b border-border transition-[padding-left] duration-300 hover:pl-4">
              <h3 className="font-space text-[1.3rem] font-semibold mb-2">Behaviour-Triggered Sequences</h3>
              <p className="text-[0.9rem] text-muted leading-[1.6]">
                Sequences branch based on what prospects do — email opens, link clicks, page visits, or silence. No fixed drip cadence. Every next step is chosen by the model.
              </p>
            </div>
            <div className="py-8 border-b border-border transition-[padding-left] duration-300 hover:pl-4">
              <h3 className="font-space text-[1.3rem] font-semibold mb-2">Inbox Deliverability Management</h3>
              <p className="text-[0.9rem] text-muted leading-[1.6]">
                Domain warming, sending reputation monitoring, spam-trigger detection, and automatic volume throttling to keep your emails landing in primary inboxes — not promotions.
              </p>
            </div>
          </div>
          <div>
            <div className="py-8 border-b border-border transition-[padding-left] duration-300 hover:pl-4">
              <h3 className="font-space text-[1.3rem] font-semibold mb-2">A/B Testing at Machine Speed</h3>
              <p className="text-[0.9rem] text-muted leading-[1.6]">
                Subject lines, openers, CTAs, and send times tested simultaneously across cohorts — winning variants automatically promoted without waiting for statistical significance reports.
              </p>
            </div>
            <div className="py-8 border-b border-border transition-[padding-left] duration-300 hover:pl-4">
              <h3 className="font-space text-[1.3rem] font-semibold mb-2">CRM Auto-Sync</h3>
              <p className="text-[0.9rem] text-muted leading-[1.6]">
                Every touchpoint, reply, meeting booked, and deal stage logged to your CRM in real time — Salesforce, HubSpot, or custom — with enriched contact records and engagement history attached.
              </p>
            </div>
            <div className="py-8 border-b border-border transition-[padding-left] duration-300 hover:pl-4">
              <h3 className="font-space text-[1.3rem] font-semibold mb-2">Objection Handling</h3>
              <p className="text-[0.9rem] text-muted leading-[1.6]">
                Common reply patterns — "not interested", "try me in Q3", "we already have a solution" — handled by trained response models that continue the conversation rather than letting leads go cold.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ── By the Numbers ── */}
      <SectionWrapper>
        <div className="section-label">By the Numbers</div>
        <h2 className="font-space text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.15] tracking-[-0.02em] mb-16 max-w-[800px] reveal">
          Growth that compounds while you sleep.
        </h2>

        <div className="grid grid-cols-1 min-[900px]:grid-cols-4 border border-border bg-card-bg rounded-lg overflow-hidden reveal">
          {[
            { stat: '10×', label: 'More outreach volume', sub: 'vs. manual SDR teams' },
            { stat: '72hrs', label: 'From ICP to first sequence', sub: 'fully live, no ramp-up' },
            { stat: '340%', label: 'Average pipeline increase', sub: 'across deployed clients' },
            { stat: '24/7', label: 'Prospecting & follow-up', sub: 'no shift patterns, no holidays' },
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

      {/* ── Always On: Lead Machine ── */}
      <SectionWrapper>
        <div className="section-label">Always On</div>
        <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-16 items-start reveal">
          <div>
            <h2 className="font-space text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.15] tracking-[-0.02em] mb-6">
              Your pipeline fills<br/>while you're offline.
            </h2>
            <p className="text-[1.05rem] text-muted leading-[1.7] mb-10">
              The growth engine runs every hour of every day — sourcing new prospects, sending personalised sequences, handling replies, and booking meetings directly into your team's calendar. No SDR shift required.
            </p>
            <div className="flex flex-col gap-0">
              {[
                { time: '03:14 AM', event: 'New prospect identified', detail: 'ICP match found. Enriched with firmographic + intent data.' },
                { time: '03:14 AM', event: 'Personalised email drafted', detail: 'References prospect\'s recent funding round and tech stack.' },
                { time: '03:15 AM', event: 'Email delivered', detail: 'Lands in primary inbox. Open tracked on first read.' },
                { time: '09:02 AM', event: 'Reply received & handled', detail: '"Interested, send more info" — follow-up sequence triggered.' },
                { time: '09:47 AM', event: 'Meeting booked', detail: 'Calendly link clicked. Demo scheduled. CRM updated. Rep notified.' },
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

          {/* What happens per lead */}
          <div className="bg-card-bg border border-border rounded-lg overflow-hidden">
            <div className="px-8 py-6 border-b border-border">
              <div className="text-[0.7rem] tracking-[0.15em] uppercase text-muted">What happens for every lead</div>
            </div>
            {[
              { step: '01', label: 'Prospect sourced', desc: 'ICP filters applied. Contact enriched. Duplicate check run.' },
              { step: '02', label: 'Score calculated', desc: 'Fit, intent, and timing signals combined into a priority score.' },
              { step: '03', label: 'Message personalised', desc: 'Company context, role, and trigger events woven into copy.' },
              { step: '04', label: 'Sequence launched', desc: 'Multi-step cadence across email, LinkedIn, and follow-ups.' },
              { step: '05', label: 'Reply classified', desc: 'Positive, neutral, objection, or out-of-office — each handled.' },
              { step: '06', label: 'Handoff or nurture', desc: 'Hot lead routed to rep. Cold lead moved to nurture track.' },
            ].map((step, i, arr) => (
              <div key={i} className="grid grid-cols-[72px_1fr] items-start group">
                <div className="flex flex-col items-center self-stretch py-5 pl-6 pr-2">
                  <div className="font-space text-[0.7rem] font-bold text-highlight-green tabular-nums">{step.step}</div>
                  {i < arr.length - 1 && <div className="flex-1 w-[1px] bg-border mt-2"></div>}
                </div>
                <div className={`py-5 pr-6 pl-2 ${i < arr.length - 1 ? 'border-b border-border' : ''} transition-colors duration-300 group-hover:bg-white/[0.03]`}>
                  <div className="font-space text-[0.9rem] font-semibold text-text mb-1">{step.label}</div>
                  <div className="text-[0.8rem] text-muted leading-[1.5]">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── Channels & Use Cases ── */}
      <SectionWrapper>
        <div className="section-label">Channels</div>
        <h2 className="font-space text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.15] tracking-[-0.02em] mb-8 max-w-[800px] reveal">
          Every growth channel. One system.
        </h2>

        <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-8 mt-12 reveal">
          {[
            {
              label: 'Cold Email',
              title: 'Outbound Email at Scale',
              text: 'Thousands of personalised cold emails sent daily with deliverability protection, reply handling, and automated follow-up — all without a single SDR.',
              stat: '47%', statLabel: 'average open rate improvement'
            },
            {
              label: 'LinkedIn',
              title: 'Social Selling Automation',
              text: 'Automated connection requests, message sequences, and profile engagement coordinated alongside email for a multi-touch outbound presence.',
              stat: '3.2×', statLabel: 'reply rate vs. email alone'
            },
            {
              label: 'Paid Ads',
              title: 'Autonomous Campaign Management',
              text: 'AI rewrites ad copy, reallocates budget to top performers, and kills losing creatives — across Google, Meta, and LinkedIn — in real time.',
              stat: '62%', statLabel: 'reduction in cost per lead'
            },
            {
              label: 'Retargeting',
              title: 'Intent-Based Re-engagement',
              text: 'Website visitors, email openers, and CRM contacts automatically entered into retargeting audiences with personalised ad creative matched to their behaviour.',
              stat: '8×', statLabel: 'higher conversion vs. cold traffic'
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

      {/* ── CTA ── */}
      <SectionWrapper>
        <div className="mt-0 flex w-full reveal">
          <ContactButton subtitle="Ready to scale?" title="Launch your Growth Automation Engine" />
        </div>
      </SectionWrapper>
    </>
  );
}

