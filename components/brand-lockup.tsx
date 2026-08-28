import Image from "next/image";

const SIZES = {
  nav: {
    mark: 48,
    line: "h-12",
    gap: "gap-3.5",
  },
  lg: {
    mark: 72,
    line: "h-[4.5rem]",
    gap: "gap-5",
  },
} as const;

type BrandLockupProps = {
  size?: keyof typeof SIZES;
  className?: string;
};

export function BrandLockup({ size = "nav", className = "" }: BrandLockupProps) {
  const spec = SIZES[size];
  const studioWidth = Math.round(spec.mark * (2019 / 916));

  return (
    <span className={`inline-flex items-center ${spec.gap} ${className}`}>
      <Image
        src="/brand/af.png"
        alt="Andre Fernan"
        width={spec.mark}
        height={spec.mark}
        className="mix-blend-screen h-auto w-auto"
        style={{ height: spec.mark, width: spec.mark }}
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
        height={spec.mark}
        className="mix-blend-screen h-auto w-auto"
        style={{ height: spec.mark, width: "auto" }}
        priority={size === "nav"}
      />
    </span>
  );
}
