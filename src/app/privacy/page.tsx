"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

export default function PrivacyPage() {
  const { locale } = useI18n();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-[#FAFAFA]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#0B3D91] text-sm tracking-[0.2em] uppercase font-gothic">
              {locale === "en" ? "PRIVACY POLICY" : "プライバシーポリシー"}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-[#1A1A1A] mt-4 leading-tight">
              {locale === "en" ? "Privacy Policy" : "個人情報保護方針"}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            {locale === "en" ? (
              <div className="space-y-8 font-gothic">
                <p className="text-[#555] leading-relaxed">
                  MIRAI Creation Company Co., Ltd. recognizes the protection of personal information as a social responsibility and commits to complying with the following five principles:
                </p>

                <div className="space-y-6">
                  <div className="border-l-2 border-[#0B3D91] pl-6">
                    <h2 className="text-lg font-heading text-[#1A1A1A] mb-2">1. Clear Purpose of Use</h2>
                    <p className="text-[#555] leading-relaxed">
                      We collect personal information only after clarifying the purpose of use and within the scope of that purpose, preventing any unauthorized use.
                    </p>
                  </div>

                  <div className="border-l-2 border-[#0B3D91] pl-6">
                    <h2 className="text-lg font-heading text-[#1A1A1A] mb-2">2. Strict Management</h2>
                    <p className="text-[#555] leading-relaxed">
                      We will not disclose or provide data to third parties without the customer&apos;s consent.
                    </p>
                  </div>

                  <div className="border-l-2 border-[#0B3D91] pl-6">
                    <h2 className="text-lg font-heading text-[#1A1A1A] mb-2">3. Subcontractor Management</h2>
                    <p className="text-[#555] leading-relaxed">
                      We instruct and supervise our subcontractors to maintain equivalent management systems.
                    </p>
                  </div>

                  <div className="border-l-2 border-[#0B3D91] pl-6">
                    <h2 className="text-lg font-heading text-[#1A1A1A] mb-2">4. Complaint Handling</h2>
                    <p className="text-[#555] leading-relaxed">
                      We respond promptly to complaints regarding personal information and requests for disclosure, correction, or deletion.
                    </p>
                  </div>

                  <div className="border-l-2 border-[#0B3D91] pl-6">
                    <h2 className="text-lg font-heading text-[#1A1A1A] mb-2">5. Continuous Improvement</h2>
                    <p className="text-[#555] leading-relaxed">
                      We comply with relevant laws and regulations and conduct regular reviews.
                    </p>
                  </div>
                </div>

                <div className="bg-[#FAFAFA] p-6 mt-12">
                  <h2 className="text-lg font-heading text-[#1A1A1A] mb-4">Handling of Personal Information</h2>

                  <h3 className="text-sm font-medium text-[#1A1A1A] mt-4 mb-2">Information Collected</h3>
                  <p className="text-[#555] leading-relaxed text-sm">
                    Name, address, phone number, email address, and other information necessary to provide our services.
                  </p>

                  <h3 className="text-sm font-medium text-[#1A1A1A] mt-4 mb-2">Purpose of Use</h3>
                  <ul className="list-disc pl-6 text-[#555] space-y-1 text-sm">
                    <li>Communication and arrangements for service applications</li>
                    <li>Provision of personal data to transportation and accommodation facilities</li>
                    <li>Insurance procedures</li>
                    <li>Product information, surveys, and statistical data compilation</li>
                  </ul>
                </div>

                <div className="bg-[#FAFAFA] p-6">
                  <h2 className="text-lg font-heading text-[#1A1A1A] mb-4">Contact Information</h2>
                  <address className="not-italic text-sm text-[#555] space-y-2">
                    <p>3-13-4 Akasaka, Minato-ku, Tokyo 107-0052</p>
                    <p>3F Yoshida Building No. 3</p>
                    <p className="pt-2">
                      Tel: <a href="tel:03-6230-9855" className="text-[#0B3D91] hover:underline">03-6230-9855</a>
                    </p>
                    <p>
                      E-mail: <a href="mailto:info@miraidukuri.co.jp" className="text-[#0B3D91] hover:underline">info@miraidukuri.co.jp</a>
                    </p>
                  </address>
                </div>

                <p className="text-[#999] text-sm mt-8">
                  Established: June 1, 2022<br />
                  MIRAI Creation Company Co., Ltd.
                </p>
              </div>
            ) : (
              <div className="space-y-8 font-gothic">
                <p className="text-[#555] leading-relaxed">
                  株式会社未来づくりカンパニーは、個人情報保護を社会的責務と認識し、以下の5項目を遵守いたします。
                </p>

                <div className="space-y-6">
                  <div className="border-l-2 border-[#0B3D91] pl-6">
                    <h2 className="text-lg font-heading text-[#1A1A1A] mb-2">1. 利用目的の明確化</h2>
                    <p className="text-[#555] leading-relaxed">
                      利用目的を明確にした上で目的の範囲内に限り、個人情報を取得し、超過利用を防止いたします。
                    </p>
                  </div>

                  <div className="border-l-2 border-[#0B3D91] pl-6">
                    <h2 className="text-lg font-heading text-[#1A1A1A] mb-2">2. 厳重な管理</h2>
                    <p className="text-[#555] leading-relaxed">
                      お客さまにご承諾いただいた場合を除き、第三者に対しデータを開示・提供することはいたしません。
                    </p>
                  </div>

                  <div className="border-l-2 border-[#0B3D91] pl-6">
                    <h2 className="text-lg font-heading text-[#1A1A1A] mb-2">3. 委託先管理</h2>
                    <p className="text-[#555] leading-relaxed">
                      業務委託先に対して同等の管理体制を指導・監督いたします。
                    </p>
                  </div>

                  <div className="border-l-2 border-[#0B3D91] pl-6">
                    <h2 className="text-lg font-heading text-[#1A1A1A] mb-2">4. 苦情対応</h2>
                    <p className="text-[#555] leading-relaxed">
                      個人情報に関する苦情や開示・訂正・削除の請求に速やかに対応いたします。
                    </p>
                  </div>

                  <div className="border-l-2 border-[#0B3D91] pl-6">
                    <h2 className="text-lg font-heading text-[#1A1A1A] mb-2">5. 継続改善</h2>
                    <p className="text-[#555] leading-relaxed">
                      関連法令を遵守し、定期的に見直しを行います。
                    </p>
                  </div>
                </div>

                <div className="bg-[#FAFAFA] p-6 mt-12">
                  <h2 className="text-lg font-heading text-[#1A1A1A] mb-4">個人情報の取扱いについて</h2>

                  <h3 className="text-sm font-medium text-[#1A1A1A] mt-4 mb-2">収集情報</h3>
                  <p className="text-[#555] leading-relaxed text-sm">
                    氏名、住所、電話番号、メールアドレスなどサービス提供に必要な情報
                  </p>

                  <h3 className="text-sm font-medium text-[#1A1A1A] mt-4 mb-2">利用目的</h3>
                  <ul className="list-disc pl-6 text-[#555] space-y-1 text-sm">
                    <li>お申込み時の連絡・手配</li>
                    <li>運送・宿泊機関への個人データ提供</li>
                    <li>保険手続き</li>
                    <li>商品案内、アンケート、統計資料作成</li>
                  </ul>
                </div>

                <div className="bg-[#FAFAFA] p-6">
                  <h2 className="text-lg font-heading text-[#1A1A1A] mb-4">お問合せ窓口</h2>
                  <address className="not-italic text-sm text-[#555] space-y-2">
                    <p>〒107-0052</p>
                    <p>東京都港区赤坂3-13-4 第3吉田ビル3F</p>
                    <p className="pt-2">
                      Tel: <a href="tel:03-6230-9855" className="text-[#0B3D91] hover:underline">03-6230-9855</a>
                    </p>
                    <p>
                      E-mail: <a href="mailto:info@miraidukuri.co.jp" className="text-[#0B3D91] hover:underline">info@miraidukuri.co.jp</a>
                    </p>
                  </address>
                </div>

                <p className="text-[#999] text-sm mt-8">
                  制定日：2022年6月1日<br />
                  株式会社未来づくりカンパニー
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
