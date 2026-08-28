import Image from "next/image";

const SIZES = {
  nav: {
    af: 36,
    studio: 34,
    line: "h-8",
    gap: "gap-3",
  },
  lg: {
    af: 56,
    studio: 56,
    line: "h-14",
    gap: "gap-5",
  },
} as const;

type BrandLockupProps = {
  size?: keyof typeof SIZES;
  className?: string;
};

export function BrandLockup({ size = "nav", className = "" }: BrandLockupProps) {
  const spec = SIZES[size];
  const studioWidth = Math.round(spec.studio * (2019 / 916));

  return (
    <span className={`inline-flex items-center ${spec.gap} ${className}`}>
      <Image
        src="/brand/af.png"
        alt="AF"
        width={spec.af}
        height={spec.af}
        className="mix-blend-screen h-auto w-auto"
        style={{ height: spec.af, width: spec.af }}
        priority={size === "nav"}
      />
      <span
        className={`${spec.line} w-px shrink-0 bg-white/70`}
        aria-hidden="true"
      />
      <Image
        src="/brand/studio-az.png"
        alt="Studio AZ"
        width={studioWidth}
        height={spec.studio}
        className="mix-blend-screen h-auto w-auto"
        style={{ height: spec.studio, width: "auto" }}
        priority={size === "nav"}
      />
    </span>
  );
}
