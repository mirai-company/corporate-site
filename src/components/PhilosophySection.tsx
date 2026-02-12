"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const capitals = [
  {
    en: "People to People",
    ja: "人 × 人",
    description: "分断された関係性を回復し、関係資本を再構築する",
  },
  {
    en: "People to Region",
    ja: "人 × 地域",
    description: "埋もれてきた地域資源を読み替え、地域価値を再編集する",
  },
  {
    en: "People to Nature",
    ja: "人 × 自然",
    description: "人と自然の関係を再設計し、循環型社会を実現する",
  },
  {
    en: "People to Body",
    ja: "人 × 身体",
    description: "人を「機能」ではなく、生命として捉え直す",
  },
  {
    en: "People to Food",
    ja: "人 × 食",
    description: "生命循環の起点として、食を捉え直す",
  },
];

export default function PhilosophySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-white">
      {/* Main Philosophy Content */}
      <div className="py-24 md:py-32">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left - Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#0B3D91] text-[11px] tracking-[0.25em] uppercase font-gothic">
                Philosophy
              </span>
              <h2 className="text-4xl md:text-5xl font-heading text-[#1A1A1A] mt-4 leading-[1.2]">
                結びの世界
                <br />
                再起動
              </h2>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 lg:pt-4"
            >
              <p className="text-[15px] text-[#444] leading-[2.1] font-gothic">
                私たちが今直面している社会課題は、人口減少や地域経済の縮小、孤立の広がり、医療や社会保障費の増加、環境負荷やエネルギー、廃棄物の問題など、複雑に重なり合いながら進行しています。
              </p>
              <p className="text-[15px] text-[#444] leading-[2.1] font-gothic">
                こうした課題は、人と人、人と自然、人と時間といった本来つながっていた関係性が分断され、循環が弱まった結果として表に現れているとも言えます。
              </p>
              <p className="text-base text-[#1A1A1A] leading-[2] font-gothic font-medium pt-2">
                今、必要とされているのは、関係性そのものを見直す視点に立った社会の仕組みです。
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mission Statement - Full width dark band */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="bg-[#1A1A1A] py-16 md:py-20"
      >
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-white/90 text-base md:text-lg leading-[2] font-gothic">
              私たちは、この分断を個別課題ではなく社会構造の問題として捉え、
              <span className="text-white font-medium">事業・制度・運営の設計を通じて、関係性を再び結び直すこと</span>
              を使命としています。
            </p>
          </div>
        </div>
      </motion.div>

      {/* Five Capitals */}
      <div className="py-20 md:py-24 bg-[#FAFAF9]">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
            {capitals.map((capital, index) => (
              <motion.div
                key={capital.ja}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.08 }}
              >
                <span className="text-[10px] text-[#0B3D91]/60 tracking-[0.15em] uppercase font-gothic">
                  {capital.en}
                </span>
                <h3 className="text-xl font-heading text-[#1A1A1A] mt-2 mb-3">
                  {capital.ja}
                </h3>
                <p className="text-[13px] text-[#666] leading-[1.9] font-gothic">
                  {capital.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Footer Statement */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 pt-10 border-t border-[#E5E5E5]"
          >
            <p className="text-lg md:text-xl text-[#1A1A1A] font-heading leading-relaxed">
              「やって終わり」ではなく、
              <span className="text-[#0B3D91]">人・地域・資源が回り続ける仕組み</span>
              を設計する
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
