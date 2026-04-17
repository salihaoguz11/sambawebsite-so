import { ProjectCard } from "@/components/cards/project-card";
import { SectionHeading } from "@/components/common/section-heading";
import { Container } from "@/components/ui/container";
import { portfolioItems } from "@/lib/site-data";

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected projects and measurable client outcomes."
          description="A snapshot of how we combine strategy, design, and engineering to deliver high-impact digital products."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {portfolioItems.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
