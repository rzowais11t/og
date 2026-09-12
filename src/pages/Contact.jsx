import SEOHead from '../components/SEOHead';
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect, useState, useRef } from "react";

// Intercept known harmless internal warnings emitted by Cal.com remote scripts
if (typeof window !== 'undefined' && !window.__wexelCalWarnPatched) {
  window.__wexelCalWarnPatched = true;
  const originalWarn = console.warn;
  console.warn = function (...args) {
    if (
      typeof args[0] === 'string' &&
      (args[0].includes('markdownToSafeHTML') ||
       args[0].includes('Existing embed CSS Vars are being reset') ||
       args[0].includes('cal-brand'))
    ) {
      return;
    }
    originalWarn.apply(console, args);
  };
}

// Ensure cal("ui") is only configured once per session to avoid CSS vars reset warnings
let isCalUiConfigured = false;

export default function Contact() {
  const [calLoaded, setCalLoaded] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    (async function initCal() {
      try {
        const cal = await getCalApi({ namespace: "audit" });
        if (!isMounted) return;

        // Configure UI only once to prevent "Existing embed CSS Vars are being reset"
        if (!isCalUiConfigured) {
          cal("ui", {
            theme: "dark",
            cssVarsPerTheme: {
              light: { "cal-brand": "#ffffff" },
              dark: { "cal-brand": "#ffffff" },
            },
            hideEventTypeDetails: true,
            layout: "month_view",
          });
          isCalUiConfigured = true;
        }

        cal("on", {
          action: "linkReady",
          callback: () => {
            if (isMounted) setCalLoaded(true);
          },
        });
      } catch {
        if (isMounted) setCalLoaded(true);
      }
    })();

    // Fallback 1: Guarantee visibility within 1.2s if linkReady was missed or delayed
    const fallbackTimer = setTimeout(() => {
      if (isMounted) setCalLoaded(true);
    }, 1200);

    // Fallback 2: Check for iframe presence or adblocker blockage after 4.5s
    const blockCheckTimer = setTimeout(() => {
      if (isMounted && containerRef.current) {
        const hasIframe = !!containerRef.current.querySelector('iframe');
        if (!hasIframe) {
          setIsBlocked(true);
          setCalLoaded(true);
        }
      }
    }, 4500);

    // DOM Observer: Detect iframe injection and load event immediately
    let observer = null;
    if (containerRef.current && typeof MutationObserver !== 'undefined') {
      observer = new MutationObserver(() => {
        const iframe = containerRef.current?.querySelector('iframe');
        if (iframe) {
          iframe.addEventListener(
            'load',
            () => {
              if (isMounted) setCalLoaded(true);
            },
            { once: true }
          );
        }
      });
      observer.observe(containerRef.current, { childList: true, subtree: true });
    }

    return () => {
      isMounted = false;
      clearTimeout(fallbackTimer);
      clearTimeout(blockCheckTimer);
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <>
      <SEOHead
        title="Book an AI Audit — 20-Minute Discovery Session | Wexel"
        description="Book a 20-minute AI audit with Owais Raza, Founder of Wexel. We'll map the exact AI agent or automation architecture that fits your operations — no generic demos, no sales decks."
        canonical="/contact"
      />

      <div className="bg-black text-white font-sans relative z-[2] border-t border-border min-h-screen">
        {/* Ambient glow */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 flex flex-col items-center px-6 pt-40 pb-32">
          {/* Headline */}
          <h2
            className="font-bold tracking-tighter text-center leading-none mb-6 sm:whitespace-nowrap reveal"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 5rem)',
              background: 'linear-gradient(180deg, #fff 20%, rgba(255,255,255,0.4) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Book a session.
          </h2>

          {/* Founder attribution */}
          <div className="flex flex-col items-center text-center max-w-xl mb-16 gap-1 px-4 reveal">
            <p className="text-base text-white font-semibold">Owais Raza, Founder</p>
            <p className="text-base text-white/40 font-light leading-relaxed sm:whitespace-nowrap">
              Every call is with me directly. Dedicated partnership, from day one.
            </p>
          </div>

          {/* Cal.com embed placed directly on the page without confining frames */}
          <div
            ref={containerRef}
            className="w-full max-w-5xl mx-auto relative min-h-[620px] reveal"
          >
            {/* Minimal subtle placeholder while Cal iframe initializes */}
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center pointer-events-none transition-opacity duration-500 z-0 ${
                calLoaded ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <div className="w-full max-w-2xl py-12 px-6 flex flex-col items-center gap-6">
                <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-xs font-mono text-white/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-ping" />
                  <span>Loading calendar...</span>
                </div>
                <div className="w-full grid grid-cols-7 gap-2.5 opacity-40">
                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, idx) => (
                    <div key={idx} className="text-center text-[11px] font-mono text-white/30 pb-1">
                      {day}
                    </div>
                  ))}
                  {Array.from({ length: 28 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-11 rounded-lg bg-white/[0.03] border border-white/[0.04] animate-pulse"
                      style={{ animationDelay: `${(i % 7) * 0.04}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Live Cal.com Embed - placed directly without wrapper box */}
            <div
              className={`relative z-10 w-full min-h-[620px] transition-opacity duration-500 ${
                calLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Cal
                namespace="audit"
                calLink="wexel/audit"
                style={{ width: '100%', height: '100%', minHeight: '620px', overflow: 'visible' }}
                config={{
                  layout: 'month_view',
                  useSlotsViewOnSmallScreen: 'true',
                  theme: 'dark',
                }}
              />
            </div>
          </div>

          {/* Fallback Card if Embed is Blocked by Adblocker or Network */}
          {isBlocked && (
            <div className="mt-6 w-full max-w-4xl p-4 rounded-xl border border-white/10 bg-white/[0.03] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div className="text-sm text-zinc-300">
                <span className="font-semibold text-white">Having trouble viewing the calendar widget?</span>
                <p className="text-xs text-zinc-400 mt-0.5">Ad-blockers or privacy extensions might be preventing third-party embeds.</p>
              </div>
              <a
                href="https://cal.com/wexel/audit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-black text-xs font-semibold hover:bg-zinc-200 transition-colors shrink-0 cursor-pointer"
              >
                Open in Cal.com
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          )}

          {/* Direct contact section */}
          <div className="mt-16 flex flex-col items-center text-center gap-6 reveal">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/25">
              Prefer reaching out directly?
            </p>
            <a
              href="mailto:owais@wexel.ai"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 group"
            >
              {/* Email icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 text-[#00e676]"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors duration-300">
                owais@wexel.ai
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
