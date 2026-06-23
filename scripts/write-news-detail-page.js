import { writeFileSync } from 'fs'
import { join } from 'path'

const content = `import { client } from "@/sanity/lib/client";
import { NEWS_ITEM_QUERY, NEWS_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import NewsDetailClient from "./NewsDetailClient";

export async function generateStaticParams() {
  const newsItems = await client.fetch(NEWS_QUERY);
  return newsItems.map((item: { id: string }) => ({
    id: item.id,
  }));
}

interface Props {
  params: Promise<{ id: string }>;
}

export default async function NewsDetailPage({ params }: Props) {
  const { id } = await params;
  const newsItem = await client.fetch(NEWS_ITEM_QUERY, { id });

  if (!newsItem) {
    notFound();
  }

  const allNews = await client.fetch(NEWS_QUERY);
  const otherNews = allNews
    .filter((item: { id: string }) => item.id !== id)
    .slice(0, 3);

  return <NewsDetailClient newsItem={newsItem} otherNews={otherNews} />;
}
`

writeFileSync(join(process.cwd(), 'src', 'app', 'news', '[id]', 'page.tsx'), content, 'utf8')
console.log('Done!')