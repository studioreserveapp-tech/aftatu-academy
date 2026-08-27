import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[100svh] max-w-md flex-col justify-center px-6 text-center">
      <p className="text-[10px] tracking-[0.2em] text-mute uppercase">404</p>
      <h1 className="mt-4 font-serif text-4xl italic">Esta página no existe.</h1>
      <p className="mt-5 text-sm font-light text-soft">
        El curso está en la página principal: presencial en Minneapolis,
        completamente en español, dos meses. El cupo es limitado.
      </p>
      <Link href="/" className="btn-light mx-auto mt-8 w-fit">
        Volver al inicio
      </Link>
    </main>
  );
}
