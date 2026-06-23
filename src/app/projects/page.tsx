import { client } from "@/sanity/lib/client";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import ProjectsClient from "./ProjectsClient";

export default async function ProjectsPage() {
  const projects = await client.fetch(PROJECTS_QUERY);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-[120px] md:pt-40 md:pb-[136px] bg-[#FAFAFA]">
        <div className="container-custom">
          <div>
            <span className="text-[#0B3D91] text-xs tracking-[0.2em] uppercase font-gothic">
              Projects
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-[#1A1A1A] mt-4 leading-tight">
              事業紹介
            </h1>
            <p className="text-[#555] mt-6 max-w-2xl font-gothic">
              社会課題を横断的に解く、4つの再設計領域における私たちの取り組みをご紹介します。
            </p>
          </div>
        </div>
      </section>

      <ProjectsClient projects={projects} />
    </>
  );
}