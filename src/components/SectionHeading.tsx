type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: Props) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${alignCls}`}>
      {eyebrow && (
        <p
          className={`text-xs font-semibold uppercase tracking-[0.18em] ${
            light ? "text-gold" : "text-terracotta"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-2 text-3xl font-semibold tracking-tight md:text-4xl ${
          light ? "text-cream" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-3 text-base leading-relaxed md:text-lg ${
            light ? "text-cream/75" : "text-slate"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
