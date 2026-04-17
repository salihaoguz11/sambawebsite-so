import { SectionHeading } from "@/components/common/section-heading";
import { Container } from "@/components/ui/container";

const metrics = [
  { value: "70+", label: "Projects launched" },
  { value: "95%", label: "Client retention" },
  { value: "2.1x", label: "Average conversion uplift" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="A strategic partner for startups and growing brands."
          description="We combine product thinking, conversion-focused design, and reliable engineering to build websites that drive measurable business outcomes."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-border bg-surface p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <p className="text-3xl font-semibold text-foreground">{metric.value}</p>
              <p className="mt-2 text-sm text-muted">{metric.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
