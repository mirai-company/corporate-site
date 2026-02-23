"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

export type Locale = "ja" | "en";

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

// Translation dictionary
const translations: Record<Locale, Record<string, string>> = {
  ja: {
    // Navigation
    "nav.philosophy": "Philosophy",
    "nav.about": "About Us",
    "nav.projects": "Projects",
    "nav.news": "News",
    "nav.contact": "Contact",
    "nav.home": "Home",

    // Hero Section
    "hero.headline1": "分断された関係性を、",
    "hero.headline2": "事業として結び直す。",
    "hero.subtitle": "社会課題を、事業・ブランド・体験として実装する",
    "hero.description": "観光プログラム、健康ブランド、地域事業の企画から運営まで",
    "hero.cta.consult": "プロジェクトを相談する",
    "hero.cta.about": "私たちについて",

    // Domains Section
    "domains.label": "Business Domains",
    "domains.title": "4つの事業領域",
    "domains.description": "社会課題を分野横断ではなく構造から捉え直す、4つの再設計領域",
    "domains.viewProjects": "事業を見る",
    "domains.relational.title": "関係資本",
    "domains.relational.titleEn": "Relational Capital",
    "domains.relational.description": "観光・体験事業、ファンコミュニティ、文化・教育を通じて、人と人、人と地域の関係性を構築します。",
    "domains.regional.title": "地域資本",
    "domains.regional.titleEn": "Regional Capital",
    "domains.regional.description": "地方創生2.0、地域ブランド策定、観光×補助金モデルで、地域の持続可能な発展を支援します。",
    "domains.life.title": "生命資本",
    "domains.life.titleEn": "Life Capital",
    "domains.life.description": "未病・予防、食・歩行・生活設計を通じて、医療費抑制と健康寿命延伸に取り組みます。",
    "domains.circular.title": "循環資本",
    "domains.circular.titleEn": "Circular Capital",
    "domains.circular.description": "分散型エネルギー、廃棄物循環、コンテナファームで、環境・防災・自立性向上を実現します。",

    // Philosophy Teaser
    "philosophy.label": "Philosophy",
    "philosophy.headline1": "結びの世界",
    "philosophy.headline2": "再起動",
    "philosophy.summary1": "分断された関係性を、事業・制度・運営の設計を通じて再び結び直す。",
    "philosophy.summary2": "それが私たちの使命です。",
    "philosophy.link": "私たちの理念を詳しく見る",

    // Process Section
    "process.label": "Process",
    "process.title": "実装プロセス",
    "process.description": "社会課題を「結び直す理念」から「実装」「運営」までを一貫して担う",
    "process.01.title": "課題発見",
    "process.01.description": "地域・行政・民間の課題を構造化し、共通言語化する",
    "process.02.title": "構想設計",
    "process.02.description": "未来像・事業テーマ・地域資源の読み替えを行う",
    "process.03.title": "事業化設計",
    "process.03.description": "収益モデル／体験設計／パートナー構築",
    "process.04.title": "社会実装",
    "process.04.description": "現場でのプロトタイプ・PoC・事業立ち上げ",
    "process.05.title": "運営構築",
    "process.05.description": "地域と共に「継続できる運営体制」を構築する",
    "process.06.title": "発進・評価",
    "process.06.description": "成果の可視化・ブランド化・横展開",

    // Projects Section
    "projects.label": "Featured Projects",
    "projects.title": "事業紹介",
    "projects.viewAll": "すべての事業を見る",
    "projects.comingSoon": "近日公開",
    "projects.noProjects": "該当するプロジェクトがありません",
    "projects.pageTitle": "事業紹介",
    "projects.pageDescription": "社会課題を横断的に解く、4つの再設計領域における私たちの取り組みをご紹介します。",
    "projects.filter.all": "すべて",
    "projects.filter.relational": "関係資本",
    "projects.filter.regional": "地域資本",
    "projects.filter.life": "生命資本",
    "projects.filter.circular": "循環資本",
    "projects.loading": "読み込み中...",

    // News Section
    "news.label": "News",
    "news.title": "お知らせ",
    "news.viewAll": "すべてのお知らせを見る",
    "news.readMore": "続きを読む",
    "news.noNews": "該当するお知らせがありません",
    "news.filter.all": "すべて",
    "news.filter.report": "イベントレポート",
    "news.filter.announcement": "イベント告知",

    // CTA Section
    "cta.headline": "共に、未来を結び直しませんか",
    "cta.description": "地域の課題解決、新規事業開発、官民連携プロジェクトなど、お気軽にご相談ください。",
    "cta.consult": "プロジェクトを相談する",
    "cta.about": "私たちについて",

    // Footer
    "footer.tagline1": "社会課題を構造から解決し、",
    "footer.tagline2": "持続可能な未来を創造する",
    "footer.links.about": "会社概要",
    "footer.links.projects": "事業紹介",
    "footer.links.news": "お知らせ",
    "footer.links.contact": "お問い合わせ",

    // About Page
    "about.label": "About Us",
    "about.title": "私たちについて",
    "about.ceo.label": "CEO Profile",
    "about.ceo.title": "代表取締役",
    "about.ceo.company": "株式会社 未来づくりカンパニー",
    "about.ceo.position": "代表取締役",
    "about.ceo.name": "大羽 昭仁",
    "about.ceo.nameEn": "Akihito Oba",
    "about.ceo.roles": "社会課題解決プロデューサー\nトラベルデザイナー\n一般社団法人 未病息災推進協議会 理事",
    "about.ceo.career": "経歴",
    "about.ceo.career1": "名古屋大学卒業後、株式会社博報堂にて地方博覧会、映画祭、地域プロジェクト等を担当。",
    "about.ceo.career2": "2018年に未来づくりカンパニーを設立。広告・観光・地域づくりの現場経験を基盤に、社会課題を事業として実装する活動を続けている。",
    "about.ceo.book": "著書：地域が稼ぐ観光 2018年10月発売（宣伝会議）",
    "about.ceo.statement": "現場と行政の双方を理解した立場で、\n構想から実装・運営までを一貫して担う。",
    "about.ceo.timeline": "略歴",
    "about.team.label": "Team",
    "about.team.title": "メンバー",
    "about.company.label": "Company",
    "about.company.title": "会社概要",
    "about.company.name": "社名",
    "about.company.nameValue": "株式会社未来づくりカンパニー\n英文社名：MIRAI Creation Company Co.,Ltd.",
    "about.company.representative": "代表者",
    "about.company.capital": "資本金",
    "about.company.capitalValue": "888万円",
    "about.company.location": "場所／連絡先",
    "about.company.locationValue": "〒107-0052\n東京都港区赤坂3-13-4\n第3吉田ビル3F\nTel:03-6230-9855／Fax:03-6230-9856",
    "about.company.license": "旅行業登録番号",
    "about.company.licenseValue": "東京都知事登録旅行業第2-8105号",
    "about.company.association": "所属旅行業協会",
    "about.company.associationValue": "日本旅行業協会（JATA）　正会員",
    "about.company.affiliate": "連携会社",
    "about.company.affiliateValue": "株式会社信州未来づくりカンパニー",

    // Philosophy Page
    "philosophy.page.label": "Philosophy",
    "philosophy.page.headline1": "結びの世界",
    "philosophy.page.headline2": "再起動",
    "philosophy.page.mission1": "分断された関係性を、事業・制度・運営の設計を通じて再び結び直す。それが私たちの使命です。",
    "philosophy.page.content1": "私たちが今直面している社会課題は、人口減少や地域経済の縮小、孤立の広がり、医療や社会保障費の増加、環境負荷やエネルギー、廃棄物の問題など、複雑に重なり合いながら進行しています。",
    "philosophy.page.content2": "こうした課題は、人と人、人と自然、人と時間といった本来つながっていた関係性が分断され、循環が弱まった結果として表に現れているとも言えます。",
    "philosophy.page.missionStatement": "私たちは、この分断を個別課題ではなく社会構造の問題として捉え、事業・制度・運営の設計を通じて、関係性を再び結び直すことを使命としています。",
    "philosophy.page.framework.label": "Framework",
    "philosophy.page.framework.title1": "結び直すための",
    "philosophy.page.framework.title2": "「問いの型」",
    "philosophy.page.framework.description": "結びは、答えを出すことではなく、問いを変えることで起こります。",
    "philosophy.page.questions.circulation": "循環",
    "philosophy.page.questions.circulationQ": "これはどこへ戻るか？",
    "philosophy.page.questions.connection": "繋がり",
    "philosophy.page.questions.connectionQ": "何と何の間にあるか？",
    "philosophy.page.questions.time": "時間",
    "philosophy.page.questions.timeQ": "何を引き継いでいるか？",
    "philosophy.page.questions.role": "役割",
    "philosophy.page.questions.roleQ": "誰の役に立っているか？",
    "philosophy.page.principles.label": "Core Principles",
    "philosophy.page.principles.title": "結びを機能させる原理",
    "philosophy.page.principles.description": "分断された世界をつなぐ 5つのコア概念",
    "philosophy.page.principles.circulation": "循環",
    "philosophy.page.principles.circulationDesc": "自然・人・地域・資源を回し続ける構造",
    "philosophy.page.principles.prayer": "祈り",
    "philosophy.page.principles.prayerDesc": "静けさ・内省・世界との一体感を取り戻す力",
    "philosophy.page.principles.coexistence": "共生",
    "philosophy.page.principles.coexistenceDesc": "対立や排除ではなく、ともに生きる設計",
    "philosophy.page.principles.time": "時間",
    "philosophy.page.principles.timeDesc": "過去－現在－未来の連続性を取り戻す視点",
    "philosophy.page.principles.story": "物語",
    "philosophy.page.principles.storyDesc": "意味・文化・精神性を再び立ち上げる力",
    "philosophy.page.capitals.label": "Five Capitals",
    "philosophy.page.capitals.title": "5つの資本",
    "philosophy.page.capitals.statement": "「やって終わり」ではなく、人・地域・資源が回り続ける仕組みを設計する",
    "philosophy.page.cta.description": "私たちの取り組みについてもっと知りたい方へ",
    "philosophy.page.cta.projects": "事業を見る",
    "philosophy.page.cta.about": "私たちについて",

    // Contact Page
    "contact.label": "Contact",
    "contact.title": "お問い合わせ",
    "contact.description": "地域の課題解決、新規事業開発、官民連携プロジェクトなど、お気軽にご相談ください。",
    "contact.form.name": "お名前",
    "contact.form.namePlaceholder": "山田 太郎",
    "contact.form.company": "会社名・組織名",
    "contact.form.companyPlaceholder": "株式会社○○",
    "contact.form.email": "メールアドレス",
    "contact.form.emailPlaceholder": "example@email.com",
    "contact.form.phone": "電話番号",
    "contact.form.phonePlaceholder": "03-1234-5678",
    "contact.form.subject": "お問い合わせ種別",
    "contact.form.subjectPlaceholder": "選択してください",
    "contact.form.subject.business": "事業に関するご相談",
    "contact.form.subject.partnership": "協業・パートナーシップのご提案",
    "contact.form.subject.media": "取材・メディア掲載のご依頼",
    "contact.form.subject.recruit": "採用に関するお問い合わせ",
    "contact.form.subject.other": "その他",
    "contact.form.message": "お問い合わせ内容",
    "contact.form.messagePlaceholder": "お問い合わせ内容をご記入ください",
    "contact.form.required": "*",
    "contact.form.submit": "送信する",
    "contact.form.submitting": "送信中...",
    "contact.success.title": "お問い合わせを受け付けました",
    "contact.success.message": "内容を確認の上、担当者よりご連絡いたします。\nしばらくお待ちください。",
    "contact.sidebar.company": "会社情報",
    "contact.sidebar.companyName": "株式会社未来づくりカンパニー",
    "contact.sidebar.access": "アクセス",
    "contact.sidebar.access1": "東京メトロ千代田線 赤坂駅2番出口より徒歩2分",
    "contact.sidebar.access2": "東京メトロ丸ノ内線・銀座線 赤坂見附駅10番出口より徒歩7分",

    // Common
    "common.required": "*",
    "common.loading": "読み込み中...",
  },
  en: {
    // Navigation
    "nav.philosophy": "Philosophy",
    "nav.about": "About Us",
    "nav.projects": "Projects",
    "nav.news": "News",
    "nav.contact": "Contact",
    "nav.home": "Home",

    // Hero Section
    "hero.headline1": "Reconnecting",
    "hero.headline2": "Fragmented Relationships.",
    "hero.subtitle": "Implementing social solutions as business, brand, and experience",
    "hero.description": "From planning to operation of tourism programs, wellness brands, and regional businesses",
    "hero.cta.consult": "Start a Project",
    "hero.cta.about": "About Us",

    // Domains Section
    "domains.label": "Business Domains",
    "domains.title": "Four Business Domains",
    "domains.description": "Four redesign areas that address social issues structurally, not cross-sectionally",
    "domains.viewProjects": "View Projects",
    "domains.relational.title": "Relational Capital",
    "domains.relational.titleEn": "Relational Capital",
    "domains.relational.description": "Building relationships between people and regions through tourism, experience businesses, fan communities, culture, and education.",
    "domains.regional.title": "Regional Capital",
    "domains.regional.titleEn": "Regional Capital",
    "domains.regional.description": "Supporting sustainable regional development through Regional Revitalization 2.0, regional branding, and tourism-subsidy models.",
    "domains.life.title": "Life Capital",
    "domains.life.titleEn": "Life Capital",
    "domains.life.description": "Working to reduce medical costs and extend healthy lifespans through preventive care, food, walking, and lifestyle design.",
    "domains.circular.title": "Circular Capital",
    "domains.circular.titleEn": "Circular Capital",
    "domains.circular.description": "Achieving environmental protection, disaster prevention, and self-reliance through distributed energy, waste circulation, and container farms.",

    // Philosophy Teaser
    "philosophy.label": "Philosophy",
    "philosophy.headline1": "Rebooting a World",
    "philosophy.headline2": "of Connection",
    "philosophy.summary1": "Reconnecting fragmented relationships through the design of business, systems, and operations.",
    "philosophy.summary2": "This is our mission.",
    "philosophy.link": "Learn More About Our Philosophy",

    // Process Section
    "process.label": "Process",
    "process.title": "Implementation Process",
    "process.description": "Consistently managing from 'reconnection philosophy' to 'implementation' and 'operation'",
    "process.01.title": "Discovery",
    "process.01.description": "Structuring regional, governmental, and private sector challenges into common language",
    "process.02.title": "Concept Design",
    "process.02.description": "Reinterpreting future vision, business themes, and regional resources",
    "process.03.title": "Business Design",
    "process.03.description": "Revenue models / Experience design / Partner building",
    "process.04.title": "Implementation",
    "process.04.description": "On-site prototyping, PoC, and business launch",
    "process.05.title": "Operations",
    "process.05.description": "Building sustainable operational structures with the community",
    "process.06.title": "Launch & Evaluate",
    "process.06.description": "Visualizing results, branding, and horizontal expansion",

    // Projects Section
    "projects.label": "Featured Projects",
    "projects.title": "Projects",
    "projects.viewAll": "View All Projects",
    "projects.comingSoon": "Coming Soon",
    "projects.noProjects": "No matching projects found",
    "projects.pageTitle": "Projects",
    "projects.pageDescription": "Introducing our initiatives across four redesign areas that address social issues comprehensively.",
    "projects.filter.all": "All",
    "projects.filter.relational": "Relational",
    "projects.filter.regional": "Regional",
    "projects.filter.life": "Life",
    "projects.filter.circular": "Circular",
    "projects.loading": "Loading...",

    // News Section
    "news.label": "News",
    "news.title": "News",
    "news.viewAll": "View All News",
    "news.readMore": "Read More",
    "news.noNews": "No matching news found",
    "news.filter.all": "All",
    "news.filter.report": "Event Report",
    "news.filter.announcement": "Announcement",

    // CTA Section
    "cta.headline": "Let's Reconnect the Future Together",
    "cta.description": "Feel free to consult us about regional problem-solving, new business development, public-private partnerships, and more.",
    "cta.consult": "Start a Project",
    "cta.about": "About Us",

    // Footer
    "footer.tagline1": "Solving social issues structurally",
    "footer.tagline2": "and creating a sustainable future",
    "footer.links.about": "About",
    "footer.links.projects": "Projects",
    "footer.links.news": "News",
    "footer.links.contact": "Contact",

    // About Page
    "about.label": "About Us",
    "about.title": "About Us",
    "about.ceo.label": "CEO Profile",
    "about.ceo.title": "Representative Director",
    "about.ceo.company": "MIRAI Creation Company Co., Ltd.",
    "about.ceo.position": "Representative Director",
    "about.ceo.name": "Akihito Oba",
    "about.ceo.nameEn": "Akihito Oba",
    "about.ceo.roles": "Social Issue Resolution Producer\nTravel Designer\nDirector, Mibyou Sokusai Promotion Council",
    "about.ceo.career": "Career",
    "about.ceo.career1": "After graduating from Nagoya University, joined Hakuhodo Inc., where he was in charge of local expositions, film festivals, and regional projects.",
    "about.ceo.career2": "Founded MIRAI Creation Company in 2018. Based on his field experience in advertising, tourism, and community development, he continues to implement social issues as business.",
    "about.ceo.book": "Publication: 'Tourism That Earns for Regions' October 2018 (Sendenkaigi)",
    "about.ceo.statement": "From a position understanding both the field and government,\nconsistently handling from concept to implementation and operation.",
    "about.ceo.timeline": "Timeline",
    "about.team.label": "Team",
    "about.team.title": "Team Members",
    "about.company.label": "Company",
    "about.company.title": "Company Profile",
    "about.company.name": "Company Name",
    "about.company.nameValue": "MIRAI Creation Company Co., Ltd.\nKanji: 株式会社未来づくりカンパニー",
    "about.company.representative": "Representative",
    "about.company.capital": "Capital",
    "about.company.capitalValue": "8.88 million yen",
    "about.company.location": "Location / Contact",
    "about.company.locationValue": "〒107-0052\n3-13-4 Akasaka, Minato-ku, Tokyo\n3F Yoshida Building No. 3\nTel: 03-6230-9855 / Fax: 03-6230-9856",
    "about.company.license": "Travel Business License",
    "about.company.licenseValue": "Tokyo Governor Registered Travel Business No. 2-8105",
    "about.company.association": "Travel Association",
    "about.company.associationValue": "Japan Association of Travel Agents (JATA) - Full Member",
    "about.company.affiliate": "Affiliated Company",
    "about.company.affiliateValue": "Shinshu MIRAI Creation Company Co., Ltd.",

    // Philosophy Page
    "philosophy.page.label": "Philosophy",
    "philosophy.page.headline1": "Rebooting a World",
    "philosophy.page.headline2": "of Connection",
    "philosophy.page.mission1": "Reconnecting fragmented relationships through the design of business, systems, and operations. This is our mission.",
    "philosophy.page.content1": "The social issues we face today—population decline, regional economic contraction, increasing isolation, rising healthcare and social security costs, environmental burden, energy, and waste problems—are progressing in complex overlapping ways.",
    "philosophy.page.content2": "These issues can be seen as the result of fragmented relationships—between people, between people and nature, between people and time—relationships that were originally connected, leading to weakened circulation.",
    "philosophy.page.missionStatement": "We view this fragmentation not as individual problems but as structural social issues, and our mission is to reconnect these relationships through the design of business, systems, and operations.",
    "philosophy.page.framework.label": "Framework",
    "philosophy.page.framework.title1": "Questions for",
    "philosophy.page.framework.title2": "Reconnection",
    "philosophy.page.framework.description": "Connection happens not by finding answers, but by changing questions.",
    "philosophy.page.questions.circulation": "Circulation",
    "philosophy.page.questions.circulationQ": "Where does this return to?",
    "philosophy.page.questions.connection": "Connection",
    "philosophy.page.questions.connectionQ": "What lies between?",
    "philosophy.page.questions.time": "Time",
    "philosophy.page.questions.timeQ": "What are we inheriting?",
    "philosophy.page.questions.role": "Role",
    "philosophy.page.questions.roleQ": "Who benefits from this?",
    "philosophy.page.principles.label": "Core Principles",
    "philosophy.page.principles.title": "Principles That Make Connection Work",
    "philosophy.page.principles.description": "Five core concepts that reconnect a fragmented world",
    "philosophy.page.principles.circulation": "Circulation",
    "philosophy.page.principles.circulationDesc": "Structures that keep nature, people, regions, and resources flowing",
    "philosophy.page.principles.prayer": "Prayer",
    "philosophy.page.principles.prayerDesc": "The power to restore stillness, introspection, and unity with the world",
    "philosophy.page.principles.coexistence": "Coexistence",
    "philosophy.page.principles.coexistenceDesc": "Design for living together, not opposition or exclusion",
    "philosophy.page.principles.time": "Time",
    "philosophy.page.principles.timeDesc": "A perspective that restores the continuity of past, present, and future",
    "philosophy.page.principles.story": "Story",
    "philosophy.page.principles.storyDesc": "The power to revive meaning, culture, and spirituality",
    "philosophy.page.capitals.label": "Five Capitals",
    "philosophy.page.capitals.title": "Five Capitals",
    "philosophy.page.capitals.statement": "Not 'do it and done'—designing systems where people, regions, and resources keep circulating",
    "philosophy.page.cta.description": "For those who want to learn more about our initiatives",
    "philosophy.page.cta.projects": "View Projects",
    "philosophy.page.cta.about": "About Us",

    // Contact Page
    "contact.label": "Contact",
    "contact.title": "Contact Us",
    "contact.description": "Feel free to consult us about regional problem-solving, new business development, public-private partnerships, and more.",
    "contact.form.name": "Name",
    "contact.form.namePlaceholder": "John Doe",
    "contact.form.company": "Company / Organization",
    "contact.form.companyPlaceholder": "ABC Corporation",
    "contact.form.email": "Email",
    "contact.form.emailPlaceholder": "example@email.com",
    "contact.form.phone": "Phone",
    "contact.form.phonePlaceholder": "+81-3-1234-5678",
    "contact.form.subject": "Subject",
    "contact.form.subjectPlaceholder": "Please select",
    "contact.form.subject.business": "Business Consultation",
    "contact.form.subject.partnership": "Partnership Proposal",
    "contact.form.subject.media": "Media / Press Inquiry",
    "contact.form.subject.recruit": "Career Inquiry",
    "contact.form.subject.other": "Other",
    "contact.form.message": "Message",
    "contact.form.messagePlaceholder": "Please enter your inquiry",
    "contact.form.required": "*",
    "contact.form.submit": "Send Message",
    "contact.form.submitting": "Sending...",
    "contact.success.title": "Thank you for your inquiry",
    "contact.success.message": "We will review your message and get back to you soon.\nPlease wait for our response.",
    "contact.sidebar.company": "Company Information",
    "contact.sidebar.companyName": "MIRAI Creation Company Co., Ltd.",
    "contact.sidebar.access": "Access",
    "contact.sidebar.access1": "2-minute walk from Exit 2 of Akasaka Station (Chiyoda Line)",
    "contact.sidebar.access2": "7-minute walk from Exit 10 of Akasaka-mitsuke Station (Marunouchi/Ginza Lines)",

    // Common
    "common.required": "*",
    "common.loading": "Loading...",
  },
};

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("ja");

  const t = useCallback(
    (key: string): string => {
      return translations[locale][key] || key;
    },
    [locale]
  );

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}

export function useLocale() {
  const { locale } = useI18n();
  return locale;
}

export function useTranslation() {
  const { t } = useI18n();
  return t;
}
