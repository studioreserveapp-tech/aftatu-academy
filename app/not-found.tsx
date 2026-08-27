import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[100svh] max-w-3xl flex-col justify-center px-6">
      <p className="font-mono text-[11px] tracking-[0.28em] text-copper uppercase">
        404
      </p>
      <h1 className="mt-4 font-serif text-4xl text-paper sm:text-5xl">
        Esta página no existe.
      </h1>
      <p className="mt-5 max-w-md text-base leading-7 text-mute">
        El curso está en la página principal: presencial en Minneapolis, solo en
        español, dos meses, ocho personas.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex w-fit border border-copper bg-copper px-7 py-3.5 text-sm font-medium tracking-wide text-ink"
      >
        Volver al inicio
      </Link>
    </main>
  );
}
