export type ProjectDomain = "relational" | "regional" | "life" | "circular";

export interface Project {
  id: string;
  title: string;
  titleEn?: string;
  subtitle: string;
  description: string;
  fullDescription?: string;
  domain: ProjectDomain;
  domainLabel: string;
  year: string;
  location?: string;
  image: string;
  previewImage?: string; // Optional: separate image for projects list (4:3 ratio, ~800x600px). Falls back to `image` if not set.
  gallery?: string[];
  tags?: string[];
  externalUrl?: string;
  comingSoon?: boolean;
}

export const domainLabels: Record<ProjectDomain, { ja: string; en: string; color: string }> = {
  relational: { ja: "関係資本", en: "Relational Capital", color: "#3B82F6" },
  regional: { ja: "地域資本", en: "Regional Capital", color: "#10B981" },
  life: { ja: "生命資本", en: "Life Capital", color: "#F59E0B" },
  circular: { ja: "循環資本", en: "Circular Capital", color: "#8B5CF6" },
};

export const projects: Project[] = [
  {
    id: "mito-yell",
    title: "Mito-yell",
    titleEn: "ミトエール",
    subtitle: "ミトコンドリア活性化による健康・美容ブランド",
    description: "再生医療・免疫療法の研究を基に開発された、ミトコンドリア活性化による健康と美容をサポートするウェルネスブランド。",
    fullDescription: "Mito-yellは「科学と日常をつなぐ架け橋」をミッションに、ミトコンドリア機能のサポートを通じて健康最適化を目指すウェルネスブランドです。再生医療・免疫療法の研究成果を活かした飲料水やボディケア製品を展開。疲労回復、健康維持、アンチエイジング、運動効率向上など、ライフスタイルに寄り添った製品で、内側からの健康をサポートします。",
    domain: "life",
    domainLabel: "生命資本",
    year: "2025",
    image: "/images/mito.jpg",
    previewImage: "/images/preview-mito.webp",
    externalUrl: "https://www.mitoyell.com/",
    tags: ["ミトコンドリア", "健康", "美容", "ウェルネス", "再生医療"],
  },
  {
    id: "japan-tea-action",
    title: "Japan Tea Action",
    titleEn: "Let's Relax / Drink Japan Tea!",
    subtitle: "日本茶業体制強化推進協議会",
    description: "日本茶文化の普及と茶業の持続可能な発展を目指す全国プロジェクト。生産者と消費者を結ぶ新しいプラットフォームを構築。",
    fullDescription: "身体にも心にもやさしい日本茶の魅力を再発見するプロジェクト。日本茶業体制強化推進協議会が実施し、未来づくりカンパニーが運営を担当。茶の効能・種類・産地・淹れ方・活用法・歴史の6つのカテゴリーで知識を発信し、「Japan Tea Grass Community」などのイベント開催やSNSでの情報発信を通じて、日本茶文化の普及と茶業の持続可能な発展を目指しています。",
    domain: "life",
    domainLabel: "生命資本",
    year: "2020",
    image: "/images/mv-jta.jpg",
    previewImage: "/images/preview-JTA.webp",
    externalUrl: "https://japanteaaction.jp/",
    tags: ["日本茶", "健康", "伝統文化", "コミュニティ"],
  },
  {
    id: "mirai-gochiso",
    title: "未来へのごちそう",
    titleEn: "MIRAI GOCHISO",
    subtitle: "食べることが、未来をつくる。",
    description: "お米を中心とした日本の食文化を復活させ、生産者・地域・地球との繋がりを通じて持続可能な食の未来を創造するレストラン。",
    fullDescription: "「食べることが、未来をつくる」をコンセプトに、お米を中心とした日本の食文化を復活させるレストラン。未来づくりカンパニーが訪れた各地域の生産者から、有機野菜や安心・安全な食材を直接仕入れ、昔ながらの製法で作られた食品を中心に提供。懐かしいおふくろの味を、特別な食体験としてお届けします。",
    domain: "life",
    domainLabel: "生命資本",
    year: "2024",
    location: "東京都港区赤坂",
    image: "/images/miraie.jpg",
    externalUrl: "https://mira-gochi.com/",
    tags: ["食", "持続可能性", "生産者支援", "レストラン", "有機野菜"],
  },
  {
    id: "mirai-experience",
    title: "未来づくりエクスペリエンス",
    titleEn: "Mirai Creation Experience",
    subtitle: "未来を観る、新しい観光体験",
    description: "従来の観光を再定義し、対話型体験プログラムを通じて自分の未来へのヒントを見つける体験を提供。",
    fullDescription: "「観光」の意味を「光を観る」から「未来を観る」へ再定義。ガイドがファシリテーターとなり、地域の人々との対話や共同体験を通じて、好奇心を満たし生き方を表現する「パーソナライズされた体験」を提供します。未来づくりカンパニーが目指すのは、一人ひとりの未来づくりを体験でサポートすること。様々なテーマの体験プログラムを展開中です。",
    domain: "regional",
    domainLabel: "地域資本",
    year: "2021",
    image: "/images/mv_exp-1.jpg",
    previewImage: "/images/preview-mirai.webp",
    externalUrl: "https://exp.miraidukuri.co.jp/en/",
    tags: ["体験", "観光", "対話", "未来づくり"],
  },
  {
    id: "kamimusubi",
    title: "深結の神結び",
    titleEn: "Miyū no Kamimusubi",
    subtitle: "日本神話の叡智を現代に届けるファンコミュニティ",
    description: "ヒーリングシンガー深結（ふかむす）を中心に、神話の語り、祈りの歌、神社巡りを通じて、自分らしい「結び」を見つけるコミュニティ。",
    fullDescription: "出雲観光大使・島根県親善大使として国内外で活躍するヒーリングシンガー深結（ふかむす）が中心となり、日本神話の叡智を現代に届けるファンコミュニティ。神話の語り、祈りの歌、神社巡りなどを通じて、参加者一人ひとりが自分らしい精神的な「結び」を見つける場を提供。EXPO2025大阪・関西、伊勢神宮、出雲大社など主要な場所でのパフォーマンスも行っています。",
    domain: "relational",
    domainLabel: "関係資本",
    year: "2025",
    image: "/images/kamimusubi-miyu.webp",
    previewImage: "/images/preview-myu.webp",
    externalUrl: "https://myu-kamimusubi.jp/",
    tags: ["神話", "スピリチュアル", "コミュニティ", "音楽", "神社"],
  },
  {
    id: "designing-safety",
    title: "Designing Safety",
    titleEn: "デザインセーフティ",
    subtitle: "防犯・防災でつなぐ未来",
    description: "日常に潜む災害・犯罪のリスクに気づき、「気づく力」と「守る行動」を身につける安全教育プログラム。",
    fullDescription: "日常生活の中には、災害や犯罪のリスクが隠れています。Designing Safetyは、それらのリスクに気づき、備え、守る行動ができる力を育てる安全講座です。防犯と防災を「命を守る」という共通軸で統合し、安全を与えられるものではなく、自ら設計・判断・行動する力として身につけるための新しいセーフティプログラム。基礎から応用まで、安心な暮らしに必要な知識と実践を学べます。",
    domain: "life",
    domainLabel: "生命資本",
    year: "2025",
    image: "/images/ds-img.webp",
    previewImage: "/images/ds-preview.webp",
    externalUrl: "https://designing-safety.com/",
    tags: ["防犯", "防災", "安全教育", "講座"],
  },
  {
    id: "hisui-protection",
    title: "HISUI PROTECTION",
    titleEn: "翡翠プロテクション",
    subtitle: "世界に誇る、和の護り ― 心を満たす悠久の旅",
    description: "特殊部隊教官による高度警護と、日本文化の本質に触れる高付加価値観光体験を融合した、富裕層向け新観光モデル。",
    fullDescription: "お茶や忍の美学、縄文の精神、発酵料理や米文化──日本の本質に触れる体験を、安全で心安らぐ時間の中で。悠久の歴史と四季が紡ぐ、唯一無二の旅をお届けします。日本の国石「翡翠（ヒスイ）」をモチーフに、古来より魔除けやお守りとして信仰されてきた「守護」の象徴を体現。特殊部隊教官による高度な警護と、日本文化の深層に触れる体験を組み合わせた、世界の要人向けの新しい観光モデルです。",
    domain: "relational",
    domainLabel: "関係資本",
    year: "2025",
    image: "/images/hisui-og.webp",
    externalUrl: "https://hisuiprotection.com/",
    tags: ["警護", "富裕層", "日本文化", "VIP", "観光"],
  },
  {
    id: "plastic-to-oil",
    title: "廃プラ油化装置",
    titleEn: "Mobile Plastic-to-Oil System",
    subtitle: "走りながら、未来をつくる",
    description: "廃プラスチックを地域内で油化・エネルギー化する移動式インフラ。廃棄物問題とエネルギー問題を同時に解決。",
    fullDescription: "農業・漁業・小売から排出される廃プラスチック。海外輸出の停滞と大型処理施設への依存により、輸送コスト・人手不足が限界に達しています。本プロジェクトは、小型廃プラ油化装置を搭載した車両により、廃プラをその場で処理・油へ変換。発電・熱源・非常用燃料として活用し、水素発生装置×発電機×油化装置を組み合わせた持続的稼働を実現。2026年4月稼働開始予定。",
    domain: "circular",
    domainLabel: "循環資本",
    year: "2026",
    image: "/images/oil-img.webp",
    previewImage: "/images/oil-preview.webp",
    tags: ["廃棄物", "エネルギー", "移動式", "循環", "2026年稼働"],
    comingSoon: true,
  },
  {
    id: "container-farm",
    title: "コンテナファームプロジェクト",
    subtitle: "分散型食料生産システム",
    description: "コンテナ型の垂直農法を活用し、都市部や過疎地域での食料自給率向上と防災機能を兼ね備えたシステムを構築。",
    domain: "circular",
    domainLabel: "循環資本",
    year: "2025",
    image: "/images/containerfarm-img.webp",
    previewImage: "/images/containerfarm-preview.webp",
    tags: ["農業", "テクノロジー", "防災"],
    comingSoon: true,
  },
  {
    id: "energy-circulation",
    title: "地域エネルギー循環モデル",
    subtitle: "分散型エネルギーシステム",
    description: "地域資源を活用した再生可能エネルギーの地産地消モデル。環境負荷軽減と地域経済循環を同時に実現。",
    domain: "circular",
    domainLabel: "循環資本",
    year: "2023",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2940&auto=format&fit=crop",
    tags: ["エネルギー", "循環経済", "地域"],
    comingSoon: true,
  },
  {
    id: "mibyou-project",
    title: "未病息災プロジェクト",
    titleEn: "Mibyou Sokusai Project",
    subtitle: "ポジティブに人生を楽しみながら取り組む健康法",
    description: "「未病」とは「いまだ病ならざる」状態。放置すれば病気へ進行する可能性がありますが、食や運動、心身の健康づくりの自助努力で病気に煩わされない毎日を実現します。",
    fullDescription: "未病息災プロジェクトは、従来の「耐え忍ぶ健康法」ではなく、ポジティブに人生を楽しみながら地域と取り組む健康法を推進しています。「健康」をキーワードに地域の新価値創造を目指し、食事・運動・地域資源の活用を通じて、住民の健康と地域産業の再生・発展を同時に実現。医療専門家だけでなく、食品や地域再生の専門家を含む柔軟なチーム体制で、健康寿命の延伸、既存疾患の悪化防止、そして何らかの病気を持ちながらも元気な日常生活が送れる「未病息災」の状態を目指しています。",
    domain: "life",
    domainLabel: "生命資本",
    year: "2008",
    image: "/images/mibyou-img.webp",
    previewImage: "/images/mibyou-preview.webp",
    externalUrl: "https://mibyo.org/",
    tags: ["未病", "健康寿命", "予防医療", "地域創生", "ウェルネス"],
  },
];
