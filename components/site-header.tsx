export function SiteHeader() {
  return (
    <header className="absolute top-0 right-0 left-0 z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-8">
        <a href="#top" className="font-serif text-xl tracking-tight text-paper">
          Aftatu
        </a>
        <a
          href="#registro"
          className="font-mono text-[11px] tracking-[0.22em] text-paper/80 uppercase transition-colors hover:text-copper"
        >
          Inscribirme
        </a>
      </div>
    </header>
  );
}
