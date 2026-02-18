"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

// Web3Forms Access Key
const WEB3FORMS_ACCESS_KEY = "c22cd755-eaca-46a6-87b7-e7aed2564c9a";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { t, locale } = useI18n();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          company: formData.company || "未記入",
          phone: formData.phone || "未記入",
          subject: formData.subject,
          message: formData.message,
          from_name: "未来づくりカンパニー お問い合わせ",
          // Auto-response email to the person who submitted the form
          autoresponse: true,
          autoresponse_from: "info@miraidukuri.co.jp",
          autoresponse_sender: "未来づくりカンパニー",
          autoresponse_replyto: "info@miraidukuri.co.jp",
          autoresponse_subject: locale === "en"
            ? "Thank you for contacting MIRAI Creation Company"
            : "【未来づくりカンパニー】お問い合わせありがとうございます",
          autoresponse_message: locale === "en"
            ? `Dear ${formData.name},\n\nThank you for contacting MIRAI Creation Company.\n\nWe have received your inquiry and will respond within 2-3 business days.\n\n---\nYour message:\n${formData.message}\n---\n\nBest regards,\nMIRAI Creation Company\nTel: 03-6230-9855\nhttps://miraidukuri.co.jp`
            : `${formData.name} 様\n\nこの度は未来づくりカンパニーにお問い合わせいただき、誠にありがとうございます。\n\nお問い合わせ内容を確認の上、2〜3営業日以内にご連絡させていただきます。\n\n---\nお問い合わせ内容:\n${formData.message}\n---\n\n株式会社未来づくりカンパニー\nTel: 03-6230-9855\nhttps://miraidukuri.co.jp`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
      } else {
        setError(locale === "en" ? "Failed to send. Please try again." : "送信に失敗しました。もう一度お試しください。");
      }
    } catch {
      setError(locale === "en" ? "Network error. Please try again." : "ネットワークエラー。もう一度お試しください。");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
              {t("contact.label")}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-[#1A1A1A] mt-4 leading-tight">
              {t("contact.title")}
            </h1>
            <p className="text-[#555] mt-6 max-w-2xl font-gothic">
              {t("contact.description")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2"
            >
              {isSubmitted ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 bg-[#0B3D91]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-8 h-8 text-[#0B3D91]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-heading text-[#1A1A1A] mb-4">
                    {t("contact.success.title")}
                  </h2>
                  <p className="text-[#555] font-gothic whitespace-pre-line">
                    {t("contact.success.message")}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot field for spam protection - hidden from users */}
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

                  {/* Error message */}
                  {error && (
                    <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-sm font-gothic">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-[#1A1A1A] mb-2 font-gothic"
                      >
                        {t("contact.form.name")} <span className="text-red-500">{t("contact.form.required")}</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[#E5E5E5] focus:border-[#0B3D91] focus:ring-1 focus:ring-[#0B3D91] outline-none transition-colors font-gothic"
                        placeholder={t("contact.form.namePlaceholder")}
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-[#1A1A1A] mb-2 font-gothic"
                      >
                        {t("contact.form.company")}
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[#E5E5E5] focus:border-[#0B3D91] focus:ring-1 focus:ring-[#0B3D91] outline-none transition-colors font-gothic"
                        placeholder={t("contact.form.companyPlaceholder")}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[#1A1A1A] mb-2 font-gothic"
                      >
                        {t("contact.form.email")} <span className="text-red-500">{t("contact.form.required")}</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[#E5E5E5] focus:border-[#0B3D91] focus:ring-1 focus:ring-[#0B3D91] outline-none transition-colors font-gothic"
                        placeholder={t("contact.form.emailPlaceholder")}
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-[#1A1A1A] mb-2 font-gothic"
                      >
                        {t("contact.form.phone")}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[#E5E5E5] focus:border-[#0B3D91] focus:ring-1 focus:ring-[#0B3D91] outline-none transition-colors font-gothic"
                        placeholder={t("contact.form.phonePlaceholder")}
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-[#1A1A1A] mb-2 font-gothic"
                    >
                      {t("contact.form.subject")} <span className="text-red-500">{t("contact.form.required")}</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#E5E5E5] focus:border-[#0B3D91] focus:ring-1 focus:ring-[#0B3D91] outline-none transition-colors font-gothic bg-white"
                    >
                      <option value="">{t("contact.form.subjectPlaceholder")}</option>
                      <option value="business">{t("contact.form.subject.business")}</option>
                      <option value="partnership">{t("contact.form.subject.partnership")}</option>
                      <option value="media">{t("contact.form.subject.media")}</option>
                      <option value="recruit">{t("contact.form.subject.recruit")}</option>
                      <option value="other">{t("contact.form.subject.other")}</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[#1A1A1A] mb-2 font-gothic"
                    >
                      {t("contact.form.message")} <span className="text-red-500">{t("contact.form.required")}</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#E5E5E5] focus:border-[#0B3D91] focus:ring-1 focus:ring-[#0B3D91] outline-none transition-colors font-gothic resize-none"
                      placeholder={t("contact.form.messagePlaceholder")}
                    />
                  </div>

                  {/* Submit */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto px-12 py-4 bg-[#0B3D91] text-white text-sm tracking-wider hover:bg-[#072B66] hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer font-gothic"
                    >
                      {isSubmitting ? t("contact.form.submitting") : t("contact.form.submit")}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="sticky top-32 space-y-8">
                {/* Company Info */}
                <div className="bg-[#FAFAFA] p-6">
                  <h3 className="text-sm font-medium text-[#1A1A1A] mb-4 font-gothic">
                    {t("contact.sidebar.company")}
                  </h3>
                  <address className="not-italic text-sm text-[#555] space-y-3 font-gothic">
                    <p className="font-medium text-[#1A1A1A]">
                      {t("contact.sidebar.companyName")}
                    </p>
                    <p>
                      〒107-0052
                      <br />
                      {locale === "en" ? "3-13-4 Akasaka, Minato-ku, Tokyo" : "東京都港区赤坂3-13-4"}
                      <br />
                      {locale === "en" ? "3F Yoshida Building No. 3" : "第3吉田ビル3F"}
                    </p>
                    <p>
                      <a
                        href="tel:03-6230-9855"
                        className="hover:text-[#0B3D91] transition-colors duration-200 cursor-pointer"
                      >
                        Tel: 03-6230-9855
                      </a>
                    </p>
                    <p>Fax: 03-6230-9856</p>
                  </address>
                </div>

                {/* Access */}
                <div className="bg-[#FAFAFA] p-6">
                  <h3 className="text-sm font-medium text-[#1A1A1A] mb-4 font-gothic">
                    {t("contact.sidebar.access")}
                  </h3>
                  <ul className="text-sm text-[#555] space-y-2 font-gothic">
                    <li>{t("contact.sidebar.access1")}</li>
                    <li>{t("contact.sidebar.access2")}</li>
                  </ul>
                </div>

                {/* Google Map */}
                <div className="aspect-[4/3] overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.1547430799614!2d139.73515117677047!3d35.67319393258903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfcaecb10f3%3A0x7cc4fa3cd0e5dc7b!2z5qCq5byP5Lya56S-5pyq5p2l44Gl44GP44KK44Kr44Oz44OR44OL44O8!5e0!3m2!1sja!2sjp!4v1707900000000!5m2!1sja!2sjp"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={locale === "en" ? "MIRAI Creation Company Location" : "株式会社未来づくりカンパニー所在地"}
                  />
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </>
  );
}
