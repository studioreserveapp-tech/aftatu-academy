import Link from "next/link";
import { BrandLockup } from "@/components/brand-lockup";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[100svh] max-w-md flex-col justify-center px-6 text-center">
      <div className="mb-10 flex justify-center">
        <BrandLockup />
      </div>
      <p className="text-[10px] tracking-[0.2em] text-mute uppercase">404</p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight">Esta página no existe.</h1>
      <p className="mt-5 text-sm font-light text-soft">
        El curso está en la página principal: presencial en Minneapolis,
        completamente en español, dos meses. El cupo es limitado.
      </p>
      <Link href="/" className="btn btn-primary mx-auto mt-8 w-fit rounded-none">
        Volver al inicio
      </Link>
    </main>
  );
}
