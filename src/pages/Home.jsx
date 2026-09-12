import SEOHead from '../components/SEOHead';
import Hero from '../components/Hero';
import ScrollRevealText from '../components/ScrollRevealText';
import Process from '../components/Process';
import Features from '../components/Features';
import Flagships from '../components/Flagships';
import Efficiency from '../components/Efficiency';
import Industries from '../components/Industries';
import PathForward from '../components/PathForward';
import FAQ from '../components/FAQ';

export default function Home() {
  return (
    <>
      <SEOHead
        title="AI Automation & Infrastructure"
        description="WEXEL builds enterprise-grade AI automation infrastructure — intelligent voice agents, business intelligence, and autonomous growth systems. Operate at a new level of scale."
        canonical="/"
      />

      {/* #home: Hero, ScrollRevealText, Process, Features */}
      <div id="home">
        <Hero />
        <ScrollRevealText />
        <Process />
        <Features />
      </div>

      {/* #projects: Flagships, Efficiency, Industries */}
      <div id="projects">
        <Flagships id="projects-inner" />
        <Efficiency />
        <Industries />
      </div>

      {/* Path Forward */}
      <PathForward />

      {/* FAQ */}
      <FAQ />
    </>
  );
}
