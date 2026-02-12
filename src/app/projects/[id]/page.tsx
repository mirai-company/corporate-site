import { projects, domainLabels } from "@/data/projects";
import { notFound } from "next/navigation";
import ProjectDetailClient from "./ProjectDetailClient";

// Generate static paths for all projects
export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  const domainInfo = domainLabels[project.domain];
  const relatedProjects = projects
    .filter((p) => p.domain === project.domain && p.id !== project.id)
    .slice(0, 2);

  return (
    <ProjectDetailClient
      project={project}
      domainInfo={domainInfo}
      relatedProjects={relatedProjects}
    />
  );
}
