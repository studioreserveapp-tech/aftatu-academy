import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[100svh] max-w-3xl flex-col justify-center px-6">
      <p className="text-[11px] font-semibold tracking-[0.28em] text-ink/45 uppercase">
        404
      </p>
      <h1 className="mt-4 font-serif text-4xl text-ink sm:text-5xl">
        Esta página no existe.
      </h1>
      <p className="mt-5 max-w-md text-base leading-7 text-mute">
        El curso está en la página principal: presencial en Minneapolis,
        completamente en español, dos meses. El cupo es limitado.
      </p>
      <Link href="/" className="btn-primary mt-8 w-fit">
        Volver al inicio
      </Link>
    </main>
  );
}
