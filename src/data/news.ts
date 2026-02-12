export type NewsCategory = "report" | "announcement";

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  category: NewsCategory;
  excerpt: string;
  content?: string;
  image?: string;
}

export const categoryLabels: Record<NewsCategory, string> = {
  report: "イベントレポート",
  announcement: "イベント告知",
};

export const newsItems: NewsItem[] = [
  {
    id: "1",
    date: "2025.10.14",
    title: "2025年11月2日・滝田洋二郎監督をお迎えしてトークイベントを開催いたします。",
    category: "announcement",
    excerpt: "アカデミー賞受賞監督・滝田洋二郎氏をお招きし、映画と地域創生をテーマにしたトークイベントを開催します。地域の物語を映像化することの意義と可能性について対話します。",
    content: "アカデミー賞受賞監督・滝田洋二郎氏をお招きし、映画と地域創生をテーマにしたトークイベントを開催します。\n\n「おくりびと」「陰陽師」などの名作を生み出した滝田監督と、地域の物語を映像化することの意義と可能性について深く対話します。\n\n【日時】2025年11月2日（土）14:00〜16:00\n【場所】東京都内（詳細は申込者にお知らせします）\n【参加費】無料\n【定員】50名（先着順）\n\nお申し込みはお問い合わせフォームよりお願いいたします。",
    image: "/images/director1.jpeg",
  },
  {
    id: "2",
    date: "2025.09.24",
    title: "株式会社ライトコーポレーションと共同で「資本開発倶楽部」を設立しました。",
    category: "report",
    excerpt: "4つの資本（関係資本・地域資本・生命資本・循環資本）を統合的に開発する新しい事業モデルの研究・実践コミュニティを設立しました。",
    content: "株式会社未来づくりカンパニーは、株式会社ライトコーポレーションと共同で「資本開発倶楽部」を設立いたしました。\n\n資本開発倶楽部は、従来の金融資本中心の考え方から脱却し、4つの資本（関係資本・地域資本・生命資本・循環資本）を統合的に開発する新しい事業モデルの研究・実践コミュニティです。\n\n企業、自治体、NPO、研究者など多様なメンバーが参加し、社会課題を構造的に解決する事業の共同開発を行ってまいります。\n\n参加に関心のある方は、お問い合わせフォームよりご連絡ください。",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2940&auto=format&fit=crop",
  },
  {
    id: "3",
    date: "2025.04.02",
    title: "『Anchor』4月号に弊社代表大羽とつまみ枝豆氏の対談記事が記載されました。",
    category: "report",
    excerpt: "ビジネス誌『Anchor』にて、代表・大羽昭仁とつまみ枝豆氏による対談「地域と笑いの力」が掲載されました。",
    content: "ビジネス誌『Anchor』4月号にて、弊社代表・大羽昭仁とタレント・つまみ枝豆氏による対談記事「地域と笑いの力」が掲載されました。\n\nエンターテインメントと地域創生の接点、笑いが持つコミュニティの力について、ユーモアを交えながら深い議論を展開しています。\n\n書店にてぜひお手に取りください。",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2940&auto=format&fit=crop",
  },
  {
    id: "4",
    date: "2025.02.15",
    title: "Japan Tea Action が農林水産省の「食かけるプロジェクト」に採択されました。",
    category: "report",
    excerpt: "日本茶文化の普及と茶業振興を目指す Japan Tea Action が、農林水産省の推進する「食かけるプロジェクト」に採択されました。",
    content: "Japan Tea Action が、農林水産省の推進する「食かけるプロジェクト」に採択されました。\n\n「食かけるプロジェクト」は、日本の食文化を世界に発信し、インバウンド需要を創出することを目的とした取り組みです。\n\nJapan Tea Action では、日本茶の産地を巡るツーリズムコンテンツの開発や、茶農家と海外の飲食店をつなぐプラットフォームの構築を進めてまいります。",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=2864&auto=format&fit=crop",
  },
  {
    id: "5",
    date: "2024.12.01",
    title: "十日町市JOMON EXPERIENCEが観光庁「新たな旅のスタイル」モデル事業に選定。",
    category: "report",
    excerpt: "縄文文化を体験する十日町市のJOMON EXPERIENCEが、観光庁の「新たな旅のスタイル」モデル事業に選定されました。",
    content: "十日町市で展開するJOMON EXPERIENCEが、観光庁の「新たな旅のスタイル」モデル事業に選定されました。\n\n国宝「火焔型土器」の出土地として知られる十日町市で、縄文時代の精神性と現代をつなぐ体験プログラムが高く評価されました。\n\n今後は、ワーケーションとの連携や、企業研修プログラムとしての展開も計画しています。",
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=2940&auto=format&fit=crop",
  },
];
