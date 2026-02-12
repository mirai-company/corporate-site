import { newsItems } from "@/data/news";
import { notFound } from "next/navigation";
import NewsDetailClient from "./NewsDetailClient";

// Generate static paths for all news items
export function generateStaticParams() {
  return newsItems.map((item) => ({
    id: item.id,
  }));
}

interface Props {
  params: Promise<{ id: string }>;
}

export default async function NewsDetailPage({ params }: Props) {
  const { id } = await params;
  const newsItem = newsItems.find((item) => item.id === id);

  if (!newsItem) {
    notFound();
  }

  const otherNews = newsItems.filter((item) => item.id !== newsItem.id).slice(0, 3);

  return <NewsDetailClient newsItem={newsItem} otherNews={otherNews} />;
}
