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
                  MIRAI Creation Company Co., Ltd. recognizes the importance of personal information and considers protecting personal information as a social responsibility. We commit to complying with the following principles:
                </p>

                <div className="space-y-6">
                  <div className="border-l-2 border-[#0B3D91] pl-6">
                    <h2 className="text-lg font-heading text-[#1A1A1A] mb-2">1. Limited Collection & Use</h2>
                    <p className="text-[#555] leading-relaxed">
                      We collect personal information only after clarifying the purpose of use and limit collection to the scope of that purpose. We implement internal safeguards to prevent unauthorized expansion of use.
                    </p>
                  </div>

                  <div className="border-l-2 border-[#0B3D91] pl-6">
                    <h2 className="text-lg font-heading text-[#1A1A1A] mb-2">2. Strict Management</h2>
                    <p className="text-[#555] leading-relaxed">
                      We will not disclose or provide data to third parties without explicit consent from the customer. We implement appropriate measures to prevent leakage, loss, or damage of personal information.
                    </p>
                  </div>

                  <div className="border-l-2 border-[#0B3D91] pl-6">
                    <h2 className="text-lg font-heading text-[#1A1A1A] mb-2">3. Third-Party Oversight</h2>
                    <p className="text-[#555] leading-relaxed">
                      We provide equivalent data protection instructions and monitoring to service providers and subcontractors who handle personal information on our behalf.
                    </p>
                  </div>

                  <div className="border-l-2 border-[#0B3D91] pl-6">
                    <h2 className="text-lg font-heading text-[#1A1A1A] mb-2">4. Complaint Resolution</h2>
                    <p className="text-[#555] leading-relaxed">
                      We have established systems for addressing concerns regarding personal information. Individuals can request disclosure, correction, deletion, or suspension of use in accordance with legal procedures, and we will respond promptly.
                    </p>
                  </div>

                  <div className="border-l-2 border-[#0B3D91] pl-6">
                    <h2 className="text-lg font-heading text-[#1A1A1A] mb-2">5. Continuous Improvement</h2>
                    <p className="text-[#555] leading-relaxed">
                      We comply with relevant laws and guidelines, and conduct regular policy reviews to continuously improve our personal information protection practices.
                    </p>
                  </div>
                </div>

                {/* Data Handling Section */}
                <div className="bg-[#FAFAFA] p-6 mt-12">
                  <h2 className="text-lg font-heading text-[#1A1A1A] mb-4">Handling of Personal Information</h2>

                  <h3 className="text-sm font-medium text-[#1A1A1A] mt-4 mb-2">Information Collected</h3>
                  <p className="text-[#555] leading-relaxed text-sm">
                    Name, address, phone number, email address, and other information necessary to provide our services.
                  </p>

                  <h3 className="text-sm font-medium text-[#1A1A1A] mt-6 mb-2">Purpose of Use</h3>
                  <ul className="list-disc pl-6 text-[#555] space-y-1 text-sm">
                    <li>Customer communication regarding bookings and service applications</li>
                    <li>Coordinating with transportation and accommodation providers</li>
                    <li>Insurance procedures</li>
                    <li>Marketing communications about products and services</li>
                    <li>Post-service feedback requests</li>
                    <li>Surveys, statistical data compilation, and customer service improvement</li>
                  </ul>
                </div>

                {/* Contact Section */}
                <div className="bg-[#FAFAFA] p-6">
                  <h2 className="text-lg font-heading text-[#1A1A1A] mb-4">Contact for Data Requests</h2>
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
                  株式会社未来づくりカンパニーは、個人情報の重要性を認識し、個人情報を保護することが社会的責務であると考え、以下の方針に基づき個人情報の保護に努めます。
                </p>

                <div className="space-y-6">
                  <div className="border-l-2 border-[#0B3D91] pl-6">
                    <h2 className="text-lg font-heading text-[#1A1A1A] mb-2">1. 利用目的の明確化と制限</h2>
                    <p className="text-[#555] leading-relaxed">
                      利用目的を明確にした上で、目的の範囲内に限り個人情報を取得いたします。社内体制を整備し、利用目的の範囲を超えた利用を防止いたします。
                    </p>
                  </div>

                  <div className="border-l-2 border-[#0B3D91] pl-6">
                    <h2 className="text-lg font-heading text-[#1A1A1A] mb-2">2. 厳重な管理</h2>
                    <p className="text-[#555] leading-relaxed">
                      お客さまにご承諾いただいた場合を除き、第三者に対しデータを開示・提供することはいたしません。個人情報の漏えい、滅失又はき損の防止その他の安全管理のために適切な措置を講じます。
                    </p>
                  </div>

                  <div className="border-l-2 border-[#0B3D91] pl-6">
                    <h2 className="text-lg font-heading text-[#1A1A1A] mb-2">3. 委託先の監督</h2>
                    <p className="text-[#555] leading-relaxed">
                      業務委託先に対して、当社と同等の個人情報保護の管理体制を整備するよう指導・監督いたします。
                    </p>
                  </div>

                  <div className="border-l-2 border-[#0B3D91] pl-6">
                    <h2 className="text-lg font-heading text-[#1A1A1A] mb-2">4. 苦情・相談への対応</h2>
                    <p className="text-[#555] leading-relaxed">
                      個人情報に関する苦情・相談に対応する体制を整備いたします。ご本人からの開示、訂正、削除、利用停止等のご請求に対し、法令に定める手続きに従い、速やかに対応いたします。
                    </p>
                  </div>

                  <div className="border-l-2 border-[#0B3D91] pl-6">
                    <h2 className="text-lg font-heading text-[#1A1A1A] mb-2">5. 継続的な改善</h2>
                    <p className="text-[#555] leading-relaxed">
                      個人情報の保護に関する法令、国が定める指針その他の規範を遵守するとともに、定期的に見直しを行い、継続的な改善に努めます。
                    </p>
                  </div>
                </div>

                {/* Data Handling Section */}
                <div className="bg-[#FAFAFA] p-6 mt-12">
                  <h2 className="text-lg font-heading text-[#1A1A1A] mb-4">個人情報の取扱いについて</h2>

                  <h3 className="text-sm font-medium text-[#1A1A1A] mt-4 mb-2">収集する情報</h3>
                  <p className="text-[#555] leading-relaxed text-sm">
                    氏名、住所、電話番号、メールアドレスなど、サービス提供に必要な情報を収集いたします。
                  </p>

                  <h3 className="text-sm font-medium text-[#1A1A1A] mt-6 mb-2">利用目的</h3>
                  <ul className="list-disc pl-6 text-[#555] space-y-1 text-sm">
                    <li>お申込み・ご予約に関するご連絡・手配</li>
                    <li>運送機関・宿泊機関等への個人データの提供</li>
                    <li>保険の手続き</li>
                    <li>商品・サービスに関するご案内</li>
                    <li>ご利用後のご意見・ご感想のお伺い</li>
                    <li>アンケート、統計資料の作成、お客様サービスの向上</li>
                  </ul>
                </div>

                {/* Contact Section */}
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
