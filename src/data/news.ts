export type NewsCategory = "event" | "media" | "announcement" | "release";

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  titleEn?: string;
  category: NewsCategory;
  excerpt: string;
  excerptEn?: string;
  content?: string;
  contentEn?: string;
  image?: string;
  externalLink?: string;
}

export const categoryLabels: Record<NewsCategory, { ja: string; en: string }> = {
  event: { ja: "イベント", en: "Event" },
  media: { ja: "メディア掲載", en: "Media" },
  announcement: { ja: "お知らせ", en: "Announcement" },
  release: { ja: "プレスリリース", en: "Press Release" },
};

export const newsItems: NewsItem[] = [
  {
    id: "1",
    date: "2025.10.14",
    title: "2025年11月2日・滝田洋二郎監督をお迎えしてトークイベントを開催いたします。",
    titleEn: "Talk event with director Yoji Takita scheduled for November 2, 2025",
    category: "event",
    excerpt: "アカデミー賞受賞監督・滝田洋二郎氏をお招きし、映画と地域創生をテーマにしたトークイベントを開催します。",
    excerptEn: "Academy Award-winning director Yoji Takita will join us for a talk event on film and regional revitalization.",
    content: "アカデミー賞受賞監督・滝田洋二郎氏をお招きし、映画と地域創生をテーマにしたトークイベントを開催します。\n\n「おくりびと」「陰陽師」などの名作を生み出した滝田監督と、地域の物語を映像化することの意義と可能性について深く対話します。\n\n【日時】2025年11月2日（土）14:00〜16:00\n【場所】東京都内（詳細は申込者にお知らせします）\n【参加費】無料\n【定員】50名（先着順）",
    image: "/images/director1.jpeg",
    externalLink: "https://myu-kamimusubi.jp/event/JhyvqjeM",
  },
  {
    id: "2",
    date: "2025.09.24",
    title: "株式会社ライトコーポレーションと共同で「資本開発倶楽部」を設立しました。",
    titleEn: "Establishment of 'Capital Development Club' in partnership with Light Corporation",
    category: "release",
    excerpt: "4つの資本（関係資本・地域資本・生命資本・循環資本）を統合的に開発する新しい事業モデルの研究・実践コミュニティを設立。",
    excerptEn: "Established a new research and practice community for developing four types of capital: relational, regional, life, and circular capital.",
    content: "株式会社未来づくりカンパニーは、株式会社ライトコーポレーションと共同で「資本開発倶楽部」を設立いたしました。\n\n資本開発倶楽部は、従来の金融資本中心の考え方から脱却し、4つの資本（関係資本・地域資本・生命資本・循環資本）を統合的に開発する新しい事業モデルの研究・実践コミュニティです。",
    externalLink: "https://prtimes.jp/main/html/rd/p/000000026.000066948.html",
  },
  {
    id: "3",
    date: "2025.04.02",
    title: "『Anchor』4月号に弊社代表大羽とつまみ枝豆氏の対談記事が掲載されました。",
    titleEn: "CEO Oba and Tsumami Edamame featured in Anchor magazine April issue",
    category: "media",
    excerpt: "ビジネス誌『Anchor』にて、代表・大羽昭仁とつまみ枝豆氏による対談「地域と笑いの力」が掲載されました。",
    excerptEn: "Business magazine 'Anchor' features a dialogue between CEO Akihito Oba and Tsumami Edamame on 'The Power of Regions and Laughter'.",
    content: "ビジネス誌『Anchor』4月号にて、弊社代表・大羽昭仁とタレント・つまみ枝豆氏による対談記事「地域と笑いの力」が掲載されました。\n\nエンターテインメントと地域創生の接点、笑いが持つコミュニティの力について、ユーモアを交えながら深い議論を展開しています。",
    externalLink: "https://miraidukuri.co.jp/38xp7a/wp-content/uploads/2025/04/anchor.pdf",
  },
  {
    id: "4",
    date: "2025.02.25",
    title: "ミトエール ECサイトにて「水戸献水」炭酸飲料の販売を開始しました。",
    titleEn: "Launch of 'Mitouken Water' carbonated beverage on Mito-yell e-commerce site",
    category: "announcement",
    excerpt: "水戸の名水を使用した炭酸飲料「水戸献水」の販売をミトエールECサイトにて開始しました。",
    excerptEn: "Started selling 'Mitouken Water' carbonated beverage made with Mito's famous spring water on the Mito-yell e-commerce site.",
    externalLink: "https://www.mitoyell.com",
  },
  {
    id: "5",
    date: "2024.11.14",
    title: "赤坂に「未来へのごちそう gogo」がオープンしました。",
    titleEn: "Opening of 'Mirai e no Gochisou gogo' restaurant in Akasaka",
    category: "announcement",
    excerpt: "地域の食材と生産者のストーリーを届けるレストラン「未来へのごちそう gogo」が赤坂にオープン。",
    excerptEn: "Restaurant 'Mirai e no Gochisou gogo', showcasing regional ingredients and producer stories, opens in Akasaka.",
    externalLink: "https://mira-gochi.com",
  },
  {
    id: "6",
    date: "2024.10.11",
    title: "鹿児島にて「薩摩サムライスピリットツアー」プログラムを販売開始。",
    titleEn: "Satsuma Samurai Spirit Tour programs launched in Kagoshima",
    category: "announcement",
    excerpt: "鹿児島の武士道精神と歴史文化を体験するツアープログラムの販売を開始しました。",
    excerptEn: "Started sales of tour programs experiencing the samurai spirit and historical culture of Kagoshima.",
    externalLink: "https://exp.miraidukuri.co.jp",
  },
  {
    id: "7",
    date: "2024.10.02",
    title: "八戸圏域 食と祈りの体験プログラムを販売開始。",
    titleEn: "Hachinohe region food and prayer experience program now available",
    category: "announcement",
    excerpt: "八戸圏域の豊かな海産物と精神文化を体験するプログラムを日英両言語で提供開始。",
    excerptEn: "Experience programs for Hachinohe's rich seafood and spiritual culture now available in Japanese and English.",
    externalLink: "https://exp.miraidukuri.co.jp",
  },
  {
    id: "8",
    date: "2024.10.01",
    title: "臼杵市ガストロノミーツアープログラム（ユネスコ創造都市）を販売開始。",
    titleEn: "Usuki City gastronomic tour program (UNESCO Creative City) launched",
    category: "announcement",
    excerpt: "ユネスコ創造都市・臼杵市の発酵文化と食を巡るガストロノミーツアーを開始。",
    excerptEn: "Gastronomic tour exploring fermentation culture and cuisine in UNESCO Creative City Usuki.",
    externalLink: "https://exp.miraidukuri.co.jp",
  },
  {
    id: "9",
    date: "2024.08.31",
    title: "長野県にて縄文文化体験ツアーを販売開始。",
    titleEn: "Jomon Era cultural tour in Nagano Prefecture now available",
    category: "announcement",
    excerpt: "縄文時代の精神性と現代をつなぐ体験プログラムを長野県で展開開始。",
    excerptEn: "Experience programs connecting Jomon era spirituality with modern times launched in Nagano Prefecture.",
    externalLink: "https://exp.miraidukuri.co.jp",
  },
  {
    id: "10",
    date: "2024.08.31",
    title: "多賀城市1300年記念 歴史体験プログラムを販売開始。",
    titleEn: "Tagajo historical experience program for 1,300th anniversary launched",
    category: "announcement",
    excerpt: "多賀城創建1300年を記念した歴史文化体験プログラムを日英両言語で提供。",
    excerptEn: "Historical and cultural experience programs commemorating 1,300 years of Tagajo, available in Japanese and English.",
    externalLink: "https://exp.miraidukuri.co.jp",
  },
  {
    id: "11",
    date: "2024.08.30",
    title: "琵琶湖サンセットクルーズ＆長浜手筒花火体験を販売開始。",
    titleEn: "Lake Biwa sunset cruise with handmade fireworks in Nagahama launched",
    category: "announcement",
    excerpt: "琵琶湖でのサンセットクルーズと長浜の伝統的な手筒花火を体験するプログラム。",
    excerptEn: "Experience program combining a Lake Biwa sunset cruise with traditional Nagahama handmade fireworks.",
    externalLink: "https://exp.miraidukuri.co.jp/biwako/",
  },
  {
    id: "12",
    date: "2024.02.19",
    title: "お茶とレモン go-go にてディナーコース＆飲み放題プランを開始。",
    titleEn: "Dinner course with all-you-can-drink launched at Ocha to Lemon go-go",
    category: "announcement",
    excerpt: "赤坂の「お茶とレモン go-go」にてディナーコースと飲み放題プランをスタート。",
    excerptEn: "Dinner course with all-you-can-drink plan started at 'Ocha to Lemon go-go' in Akasaka.",
    externalLink: "https://go-go-akasaka.com/#menu",
  },
];
