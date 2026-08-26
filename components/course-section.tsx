const RHYTHM = [
  { label: "Duración", value: "2 meses" },
  { label: "Ritmo", value: "3 veces por semana" },
  { label: "Sesión", value: "2 horas al día" },
  { label: "Nivel", value: "Sin experiencia" },
];

export function CourseSection() {
  return (
    <section id="curso" className="relative border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
        <div>
          <p className="font-mono text-[11px] tracking-[0.28em] text-copper uppercase">
            El curso
          </p>
          <h2 className="mt-4 max-w-xl font-serif text-4xl leading-[1.05] text-paper sm:text-5xl">
            No pedimos portafolio. Pedimos que te presentes a practicar.
          </h2>
          <div className="mt-8 max-w-xl space-y-5 text-base leading-7 text-mute">
            <p>
              Este curso está pensado para gente que nunca ha tatuado. Si
              dibujas, bien. Si no, también. Las primeras semanas se van en
              trazo, higiene, máquina, piel sintética y la paciencia de
              repetir hasta que la mano se calme.
            </p>
            <p>
              Son dos meses, tres días a la semana, dos horas por sesión.
              Tiempo suficiente para entender el oficio sin convertirlo en un
              taller de un fin de semana. Sales sabiendo cómo se limpia, cómo
              se planta una línea y cuándo todavía no te toca tatuar a
              alguien de verdad.
            </p>
          </div>
          <a
            href="#registro"
            className="mt-10 inline-flex items-center justify-center border border-copper bg-copper px-7 py-3.5 text-sm font-medium tracking-wide text-ink transition-colors hover:bg-paper"
          >
            Quiero inscribirme
          </a>
        </div>

        <dl className="grid content-start gap-px bg-line sm:grid-cols-2">
          {RHYTHM.map((item) => (
            <div key={item.label} className="bg-ink px-6 py-7">
              <dt className="font-mono text-[10px] tracking-[0.24em] text-mute uppercase">
                {item.label}
              </dt>
              <dd className="mt-3 font-serif text-2xl text-paper">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
