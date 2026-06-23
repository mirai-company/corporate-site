import { client } from "@/sanity/lib/client";
import { NEWS_QUERY } from "@/sanity/lib/queries";
import NewsClient from "./NewsClient";

export default async function NewsPage() {
  const newsItems = await client.fetch(NEWS_QUERY);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-4 md:pt-40 md:pb-4 bg-[#FAFAFA]">
        <div className="container-custom">
          <div>
            <span className="text-[#0B3D91] text-sm tracking-[0.2em] uppercase font-gothic">
              NEWS
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-[#333333] mt-4 leading-tight">
              お知らせ
            </h1>
          </div>
        </div>
      </section>

      <NewsClient newsItems={newsItems} />
    </>
  );
}