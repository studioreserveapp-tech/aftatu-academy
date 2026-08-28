import Image from "next/image";

const SIZES = {
  nav: {
    af: 76,
    studio: 48,
    line: "h-12",
    gap: "gap-3.5",
  },
  lg: {
    af: 113,
    studio: 72,
    line: "h-[4.5rem]",
    gap: "gap-5",
  },
} as const;

type BrandLockupProps = {
  size?: keyof typeof SIZES;
  className?: string;
  afHref?: string;
  studioHref?: string;
};

export function BrandLockup({
  size = "nav",
  className = "",
  afHref,
  studioHref,
}: BrandLockupProps) {
  const spec = SIZES[size];
  const studioWidth = Math.round(spec.studio * (2019 / 916));

  const afLogo = (
    <Image
      src="/brand/af.png"
      alt="Andre Fernan"
      width={spec.af}
      height={spec.af}
      className="mix-blend-screen h-auto w-auto"
      style={{ height: spec.af, width: spec.af }}
      priority={size === "nav"}
    />
  );

  const studioLogo = (
    <Image
      src="/brand/studio-az.png"
      alt="Studio AZ"
      width={studioWidth}
      height={spec.studio}
      className="mix-blend-screen h-auto w-auto"
      style={{ height: spec.studio, width: "auto" }}
      priority={size === "nav"}
    />
  );

  return (
    <span className={`inline-flex items-center ${spec.gap} ${className}`}>
      {afHref ? (
        <a href={afHref} target="_blank" rel="noopener noreferrer" className="shrink-0">
          {afLogo}
        </a>
      ) : (
        afLogo
      )}
      <span
        className={`${spec.line} w-px shrink-0 bg-white/70`}
        aria-hidden="true"
      />
      {studioHref ? (
        <a href={studioHref} target="_blank" rel="noopener noreferrer" className="shrink-0">
          {studioLogo}
        </a>
      ) : (
        studioLogo
      )}
    </span>
  );
}
