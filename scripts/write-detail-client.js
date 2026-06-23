import { writeFileSync, readFileSync } from 'fs'
import { join } from 'path'
import { execSync } from 'child_process'

// Get original content from git
const original = execSync('git show HEAD:"src/app/projects/[id]/ProjectDetailClient.tsx"', { encoding: 'utf8' })

// Patch: replace old imports and Project type with Sanity-compatible version
const patched = original
  .replace(
    `import { Project } from "@/data/projects";`,
    `import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

type SanityImage = { asset?: { _ref: string } } | null;

type Project = {
  _id: string;
  id: { current: string };
  title: string;
  titleEn?: string;
  subtitle?: string;
  subtitleEn?: string;
  description?: string;
  descriptionEn?: string;
  fullDescription?: string;
  fullDescriptionEn?: string;
  domain: string;
  year?: string;
  location?: string;
  locationEn?: string;
  image?: SanityImage;
  previewImage?: SanityImage;
  gallery?: SanityImage[];
  tags?: string[];
  tagsEn?: string[];
  externalUrl?: string;
  comingSoon?: boolean;
};`
  )
  .replace(
    `interface Props {
  project: Project;
  domainInfo: { ja: string; en: string; color: string };
  relatedProjects: Project[];
}`,
    `interface Props {
  project: Project;
  domainInfo: { ja: string; en: string; color: string };
  relatedProjects: Project[];
}`
  )
  .replace(
    `export default function ProjectDetailClient({ project, domainInfo, relatedProjects }: Props) {
  const { locale } = useI18n();
  const isEn = locale === "en";`,
    `export default function ProjectDetailClient({ project, domainInfo, relatedProjects }: Props) {
  const { locale } = useI18n();
  const isEn = locale === "en";
  const mainImageSrc = project.image ? urlFor(project.image).width(1600).height(700).url() : null;`
  )
  .replace(
    `            className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: \`url('\${project.image}')\` }}
            />`,
    `            {mainImageSrc && (
              <Image src={mainImageSrc} alt={isEn && project.titleEn ? project.titleEn : project.title} fill className="object-cover" priority />
            )}`
  )
  .replace(
    /href={`\/projects\/\${related\.id}`}/g,
    'href={`/projects/${related.id}`}'
  )
  .replace(
    /style={{ backgroundImage: `url\('\${related\.image}'\)` }}/g,
    ''
  )

const filePath = join(process.cwd(), 'src', 'app', 'projects', '[id]', 'ProjectDetailClient.tsx')
writeFileSync(filePath, patched, 'utf8')
console.log('Done!')
