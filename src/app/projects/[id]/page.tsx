import { client } from "@/sanity/lib/client";
import { PROJECT_ITEM_QUERY, PROJECTS_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import { domainLabels } from "@/data/projects";
import ProjectDetailClient from "./ProjectDetailClient";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function generateStaticParams() {
  const projects = await client.fetch(PROJECTS_QUERY);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return projects.map((project: any) => ({
    id: project.id?.current,
  }));
}

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const project: any = await client.fetch(PROJECT_ITEM_QUERY, { id });

  if (!project) {
    notFound();
  }

 const domainInfo = domainLabels[project.domain as keyof typeof domainLabels];

  const allProjects = await client.fetch(PROJECTS_QUERY);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const relatedProjects = allProjects.filter((p: any) =>
    p.domain === project.domain && p.id?.current !== id
  ).slice(0, 2);

  return (
    <ProjectDetailClient
      project={project}
      domainInfo={domainInfo}
      relatedProjects={relatedProjects}
    />
  );
}