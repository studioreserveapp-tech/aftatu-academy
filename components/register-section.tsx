import { RegisterForm } from "@/components/register-form";

export function RegisterSection() {
  return (
    <section id="registro" className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:py-28">
        <div>
          <p className="font-mono text-[11px] tracking-[0.28em] text-copper uppercase">
            Registro
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-[1.05] text-paper sm:text-5xl">
            Deja tus datos. Te escribimos.
          </h2>
          <p className="mt-6 max-w-md text-base leading-7 text-mute">
            Nombre, teléfono e Instagram. Si tienes dibujos o ya tatúas, cuéntalo.
            Si no, también. La nota es para lo que no cabe en un handle.
          </p>
        </div>
        <RegisterForm />
      </div>
    </section>
  );
}
