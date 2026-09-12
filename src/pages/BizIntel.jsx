import ContactButton from '../components/ContactButton';
import SEOHead from '../components/SEOHead';
import SectionWrapper from '../components/SectionWrapper';

export default function BizIntel() {
  return (
    <>
      <SEOHead
        title="Business Intelligence"
        description="Transform raw data into predictive insights and real-time dashboards. WEXEL's AI-powered business intelligence platform enables data-driven decision making across your entire organisation."
        canonical="/Bizintel"
      />

      {/* ── Hero ── */}
      <section className="relative min-h-[50vh] flex flex-col justify-end px-6 min-[900px]:px-12 overflow-hidden border-t-0 pb-16 z-[2] pt-[12rem]">
        <div className="absolute top-0 left-0 w-full h-full z-[1] pointer-events-none bg-gradient-to-b from-transparent to-bg"></div>
        <h1 className="relative z-[2] font-space font-bold text-[clamp(3rem,8vw,7rem)] leading-[0.92] tracking-[-0.03em] reveal">
          Business<br/>Intelligence<span className="text-text/50">.</span>
        </h1>
        <p className="relative z-[2] mt-8 text-[clamp(1.1rem,2vw,1.5rem)] leading-[1.5] max-w-[620px] text-muted reveal">
          Transform scattered, siloed data into predictive insights, real-time dashboards, and automated reporting — so every decision in your organisation is driven by evidence, not instinct.
        </p>
      </section>

      {/* ── Core Capabilities ── */}
      <SectionWrapper>
        <div className="section-label">Data Advantage</div>
        <h2 className="font-space text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.15] tracking-[-0.02em] mb-8 max-w-[800px] reveal">
          See the future of your operations.
        </h2>
        <p className="text-[1.05rem] text-muted max-w-[600px] leading-[1.7] reveal">
          We build the full intelligence stack — ingestion, modelling, visualisation, and alerting — so your leadership team sees what matters the moment it changes.
        </p>

        <div className="grid grid-cols-1 min-[900px]:grid-cols-3 mt-12 bg-card-bg border border-border rounded-lg overflow-hidden reveal">
          {[
            {
              title: 'Predictive Analytics',
              text: 'Anticipate market trends, demand shifts, churn risk, and revenue outcomes before they surface — using models trained on your historical and real-time data.',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="w-[56px] h-[56px] stroke-[1.2]">
                  <path d="M3 3v18h18" />
                  <path d="m19 9-5 5-4-4-3 3" />
                </svg>
              )
            },
            {
              title: 'Centralised Dashboards',
              text: "Unify every data source — CRM, ERP, marketing, finance, ops — into a single live view. No more spreadsheet wrangling before Monday's board meeting.",
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="w-[56px] h-[56px] stroke-[1.2]">
                  <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
                  <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
                </svg>
              )
            },
            {
              title: 'Automated Reporting',
              text: 'Weekly, monthly, and ad-hoc reports generated and delivered automatically — formatted for executives, analysts, or ops teams with zero manual effort.',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="w-[56px] h-[56px] stroke-[1.2]">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                </svg>
              )
            },
            {
              title: 'Anomaly Detection',
              text: 'AI monitors every KPI continuously and surfaces anomalies the moment they deviate — revenue dips, inventory spikes, fraud signals — before they become crises.',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="w-[56px] h-[56px] stroke-[1.2]">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                  <line x1="12" y1="9" x2="12" y2="13"/>
                  <line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
              )
            },
            {
              title: 'Natural Language Queries',
              text: 'Ask your data questions in plain English — "What were our top-performing SKUs last quarter?" — and receive instant, accurate answers with source citations.',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="w-[56px] h-[56px] stroke-[1.2]">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              )
            },
            {
              title: 'Data Governance',
              text: 'Role-based access controls, audit logs, data lineage tracking, and PII masking — so every insight is accurate, compliant, and traceable to its source.',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="w-[56px] h-[56px] stroke-[1.2]">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
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

      {/* ── Data Pipeline ── */}
      <SectionWrapper>
        <div className="section-label">Data Pipeline</div>
        <h2 className="font-space text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.15] tracking-[-0.02em] mb-8 max-w-[800px] reveal">
          From raw source to board-ready insight.
        </h2>
        <p className="text-[1.05rem] text-muted max-w-[620px] leading-[1.7] reveal">
          We build the entire data infrastructure — ingestion, transformation, modelling, and delivery — so your team consumes insights, not spreadsheets.
        </p>

        <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-0 min-[900px]:gap-16 mt-14 reveal">
          <div>
            <div className="py-8 border-b border-border transition-[padding-left] duration-300 hover:pl-4">
              <h3 className="font-space text-[1.3rem] font-semibold mb-2">Multi-Source Ingestion</h3>
              <p className="text-[0.9rem] text-muted leading-[1.6]">
                Connect 200+ data sources — Salesforce, Shopify, PostgreSQL, Google Analytics, Stripe, warehouse tools — via native connectors or custom API pipelines with automated schema detection.
              </p>
            </div>
            <div className="py-8 border-b border-border transition-[padding-left] duration-300 hover:pl-4">
              <h3 className="font-space text-[1.3rem] font-semibold mb-2">Real-Time Data Warehouse</h3>
              <p className="text-[0.9rem] text-muted leading-[1.6]">
                Built on BigQuery, Snowflake, or Redshift — your choice. Data transformed, deduplicated, and modelled continuously so dashboards always reflect the current state of your business.
              </p>
            </div>
            <div className="py-8 border-b border-border transition-[padding-left] duration-300 hover:pl-4">
              <h3 className="font-space text-[1.3rem] font-semibold mb-2">Semantic Layer</h3>
              <p className="text-[0.9rem] text-muted leading-[1.6]">
                A business-logic layer that translates raw tables into metrics your team already uses — "ARR", "CAC", "Net Retention" — defined once and consistent across every dashboard and report.
              </p>
            </div>
          </div>
          <div>
            <div className="py-8 border-b border-border transition-[padding-left] duration-300 hover:pl-4">
              <h3 className="font-space text-[1.3rem] font-semibold mb-2">ML Model Integration</h3>
              <p className="text-[0.9rem] text-muted leading-[1.6]">
                Churn prediction, demand forecasting, lead scoring, and anomaly models deployed directly into your warehouse — outputs surfaced in dashboards alongside actuals for immediate action.
              </p>
            </div>
            <div className="py-8 border-b border-border transition-[padding-left] duration-300 hover:pl-4">
              <h3 className="font-space text-[1.3rem] font-semibold mb-2">Alerting & Scheduled Delivery</h3>
              <p className="text-[0.9rem] text-muted leading-[1.6]">
                Threshold-based alerts sent to Slack, email, or SMS the moment KPIs move outside tolerance. Scheduled reports delivered to the right stakeholder at the right time — automatically.
              </p>
            </div>
            <div className="py-8 border-b border-border transition-[padding-left] duration-300 hover:pl-4">
              <h3 className="font-space text-[1.3rem] font-semibold mb-2">Embedded Analytics</h3>
              <p className="text-[0.9rem] text-muted leading-[1.6]">
                Dashboards embedded directly into your product, CRM, or internal tools — so insights reach the people who act on them without requiring a separate BI login.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ── By the Numbers ── */}
      <SectionWrapper>
        <div className="section-label">By the Numbers</div>
        <h2 className="font-space text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.15] tracking-[-0.02em] mb-16 max-w-[800px] reveal">
          Intelligence at the speed of your business.
        </h2>

        <div className="grid grid-cols-1 min-[900px]:grid-cols-4 border border-border bg-card-bg rounded-lg overflow-hidden reveal">
          {[
            { stat: '<2s',   label: 'Dashboard query latency', sub: 'live warehouse queries' },
            { stat: '200+',  label: 'Native data connectors',  sub: 'no custom ETL required' },
            { stat: '99.9%', label: 'Pipeline uptime SLA',     sub: 'monitored continuously' },
            { stat: '1 day', label: 'Time to first dashboard',  sub: 'from data source connected' },
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

      {/* ── Always On Intelligence ── */}
      <SectionWrapper>
        <div className="section-label">Always On</div>
        <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-16 items-start reveal">
          <div>
            <h2 className="font-space text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.15] tracking-[-0.02em] mb-6">
              Your data never<br/>stops working.
            </h2>
            <p className="text-[1.05rem] text-muted leading-[1.7] mb-10">
              While your analysts sleep, the intelligence layer keeps running — syncing fresh data, re-running models, detecting anomalies, and delivering alerts the moment something needs your attention.
            </p>
            <div className="flex flex-col gap-0">
              {[
                { time: '00:00 AM', event: 'Nightly sync triggered',     detail: 'All 14 connected sources refreshed. 2.3M rows processed.' },
                { time: '00:04 AM', event: 'Models re-scored',           detail: 'Churn predictions updated for 8,400 active accounts.' },
                { time: '00:06 AM', event: 'Anomaly detected',           detail: 'Refund rate spiked 340% above 30-day baseline in EU region.' },
                { time: '00:06 AM', event: 'Alert dispatched',           detail: 'Slack message sent to VP Operations and Finance lead.' },
                { time: '07:30 AM', event: 'Weekly report delivered',    detail: 'PDF + dashboard link sent to all 12 exec stakeholders.' },
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

          {/* What happens per query */}
          <div className="bg-card-bg border border-border rounded-lg overflow-hidden">
            <div className="px-8 py-6 border-b border-border">
              <div className="text-[0.7rem] tracking-[0.15em] uppercase text-muted">What happens on every query</div>
            </div>
            {[
              { step: '01', label: 'Question received',    desc: 'Natural language or dashboard filter submitted.' },
              { step: '02', label: 'Intent parsed',        desc: 'Metric, dimension, and time range extracted by NLU.' },
              { step: '03', label: 'SQL generated',        desc: 'Optimised query written against your semantic layer.' },
              { step: '04', label: 'Warehouse queried',    desc: 'Live data fetched. Cache used where freshness allows.' },
              { step: '05', label: 'Result formatted',     desc: 'Numbers, chart type, and narrative summary composed.' },
              { step: '06', label: 'Insight delivered',    desc: 'Dashboard updated or answer returned in plain English.' },
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

      {/* ── Industry Use Cases ── */}
      <SectionWrapper>
        <div className="section-label">Use Cases</div>
        <h2 className="font-space text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.15] tracking-[-0.02em] mb-8 max-w-[800px] reveal">
          The same data. Finally making decisions.
        </h2>

        <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-8 mt-12 reveal">
          {[
            {
              label: 'Retail & E-Commerce',
              title: 'Demand Forecasting',
              text: 'AI-driven inventory predictions that reduce overstock by matching supply to demand signals — web traffic, seasonal trends, and sell-through rates unified in one model.',
              stat: '31%', statLabel: 'reduction in stockouts'
            },
            {
              label: 'SaaS & Tech',
              title: 'Revenue Intelligence',
              text: 'Real-time MRR, churn risk scoring, expansion opportunity detection, and cohort analysis — all surfaced automatically so your CS and sales teams act before accounts slip.',
              stat: '22%', statLabel: 'improvement in net retention'
            },
            {
              label: 'Finance & Operations',
              title: 'Cash Flow Visibility',
              text: 'Live P&L, runway modelling, and spend anomaly detection — with forecasts recalculated nightly so finance always has an accurate 90-day cash position.',
              stat: '4 days', statLabel: 'faster monthly close'
            },
            {
              label: 'Healthcare',
              title: 'Operational Efficiency',
              text: 'Bed utilisation, staff-to-patient ratios, readmission risk, and supply consumption tracked in real time — enabling proactive resource allocation across every department.',
              stat: '18%', statLabel: 'reduction in operational waste'
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
          <ContactButton subtitle="Ready to see your data clearly?" title="Build your Business Intelligence Platform" />
        </div>
      </SectionWrapper>
    </>
  );
}

