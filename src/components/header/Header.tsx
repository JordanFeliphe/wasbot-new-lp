import React, { memo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lottie from "lottie-react";
import chatbotAnimation from "@/assets/lottie/header.json";
import { Star } from "lucide-react";

const SkillBadge = memo(({ skill }: { skill: string }) => (
  <span className="px-4 py-1 bg-secondary rounded-full text-sm font-medium text-white shadow-sm">
    {skill}
  </span>
));

const Header: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const skills: string[] = [
    "chatbot",
    "atendimento automático",
    "IA conversacional",
    "fluxos inteligentes",
  ];

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const yWoman = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <section
      ref={ref}
      className="relative bg-background mx-4 sm:mx-3 pt-32 pb-20 font-sans overflow-hidden rounded-b-[32px]"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br opacity-90"
        style={{
          y: yBg,
          scale: scaleBg,
        }}
      />
      <motion.div
        className="absolute top-6 left-0 right-0 px-4 sm:px-10 text-center z-10 select-none pointer-events-none"
        style={{ y: yText }}
      >
        <h1 className="text-[15vw] md:text-[15vw] font-extrabold text-secondary/60 leading-none ">
          WASBOT
        </h1>
      </motion.div>

      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-20 px-4">
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left z-30">
          <motion.div
            className="flex flex-wrap gap-2 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {skills.map((skill) => (
              <SkillBadge key={skill} skill={skill} />
            ))}
          </motion.div>

          <motion.p
            className="text-black text-2xl md:text-2xl max-w-2xl mx-auto md:mx-0 font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Automatize seu atendimento com o poder da IA mais avançada e conte
            com nosso time para te guiar desde o primeiro passo. Aqui, você não
            anda sozinho.
          </motion.p>

          <motion.div
            className="max-w-sm w-full bg-white/60 backdrop-blur-md border border-white/30 rounded-3xl p-5 shadow-xl flex items-center justify-between gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="flex flex-col gap-2">
              <p className="text-sm text-gray-700 font-semibold">
                Pessoas que usam o{" "}
                <span className="text-secondary">WasBot</span>
              </p>
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/150?img=${i}`}
                    alt={`User ${i}`}
                    className="w-9 h-9 rounded-full border-2 border-white shadow"
                  />
                ))}
              </div>
            </div>

            <div className="text-right">
              <div className="flex justify-end gap-[2px] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="text-yellow-400 fill-yellow-300"
                  />
                ))}
              </div>
              <p className="text-base font-semibold text-gray-900">200+</p>
              <p className="text-xs text-gray-600">Clientes Satisfeitos</p>
            </div>
          </motion.div>
        </div>

        <div className="w-full md:w-1/2 mt-12 md:mt-0 relative flex justify-center z-30">
          <motion.div
            className="w-full max-w-[640px] md:max-w-[720px] xl:max-w-[800px] object-contain md:translate-y-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            style={{ y: yWoman }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Lottie
              animationData={chatbotAnimation}
              loop
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-b from-transparent to-white pointer-events-none z-10" />
    </section>
  );
};

export default Header;
