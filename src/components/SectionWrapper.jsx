export default function SectionWrapper({ children, className = '', id }) {
  return (
    <section id={id} className={`py-16 px-6 min-[900px]:py-24 min-[900px]:px-12 border-t border-border bg-bg relative z-[2] ${className}`}>
      {children}
    </section>
  );
}
