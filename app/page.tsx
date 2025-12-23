import { Hero } from "@/components/app/Hero";
import { ProjectGrid, projectGridConfig } from "@/components/app/ProjectGrid";

export default function Home() {
  return (
    <div className="mx-auto">
      <Hero
        title="Hi. I'm Isaac. A Software Engineer"
        subtitle="An enthusiastic full-stack Software Engineer, ready to take on new and exciting challenges."
      />
      <ProjectGrid items={projectGridConfig} />
    </div>
  );
}
