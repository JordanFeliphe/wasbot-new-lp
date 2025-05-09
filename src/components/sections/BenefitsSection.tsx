import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Bot, Smartphone, BarChart2, Workflow } from "lucide-react";
import Lottie from "lottie-react";
import robotAnimation from "@/assets/lottie/beneficts.json";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: 40,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

const floatAnim = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

const benefitsLeft = [
  {
    icon: <Bot className="w-6 h-6 text-secondary" />,
    title: "Bot IA Avançado",
    desc: "Automatize conversas com inteligência artificial para agilizar o suporte.",
  },
  {
    icon: <Smartphone className="w-6 h-6 text-secondary" />,
    title: "Integração Completa",
    desc: "Conecte seus canais de atendimento de forma segura e eficiente.",
  },
];

const benefitsRight = [
  {
    icon: <BarChart2 className="w-6 h-6 text-secondary" />,
    title: "Dashboard Personalizado",
    desc: "Acompanhe métricas, fluxos e usuários em um só lugar.",
  },
  {
    icon: <Workflow className="w-6 h-6 text-secondary" />,
    title: "Fluxos Automatizados",
    desc: "Configure jornadas inteligentes com regras e ações específicas.",
  },
];

const BenefitsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1 });

  return (
    <section
      id="benefits"
      ref={ref}
      className="relative w-full bg-white py-32 px-4 md:px-10 font-sans overflow-hidden"
    >

      <motion.div
        className="absolute top-16 left-0 right-0 text-center pointer-events-none"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[5vw] xl:text-[4.5vw] font-extrabold text-secondary leading-none tracking-tight">
          BENEFÍCIOS
        </h2>
      </motion.div>

  
      <motion.div
        className="relative z-10 mb-12 text-center"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        exit="exit"
        variants={fadeInUp}
      >
        <h3 className="text-3xl md:text-5xl font-light text-gray-800">
          <span className="text-secondary font-light">Por que escolher o WasBot?</span>
        </h3>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
        <div className="space-y-12 md:w-1/4">
          {benefitsLeft.map((item, idx) => (
            <motion.div
              key={item.title}
              className="flex items-start gap-4"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              exit="exit"
              variants={fadeInUp}
              custom={idx}
            >
              <motion.div className="bg-secondary/40 p-3 rounded-full" {...floatAnim}>
                {item.icon}
              </motion.div>
              <div className="text-left">
                <h4 className="text-lg font-semibold text-black">{item.title}</h4>
                <p className="text-gray-500 text-sm">{item.desc}</p>
                <a href="#" className="text-green-500 text-sm mt-1 inline-block">
                  Saiba mais →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

     
        <motion.div
          className="relative w-full md:w-1/2 flex justify-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <Lottie
            animationData={robotAnimation}
            loop
            className="w-80 h-80 md:w-96 md:h-96"
          />
        </motion.div>

  
        <div className="space-y-12 md:w-1/4">
          {benefitsRight.map((item, idx) => (
            <motion.div
              key={item.title}
              className="flex items-start gap-4"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              exit="exit"
              variants={fadeInUp}
              custom={idx + 0.5}
            >
              <motion.div className="bg-secondary/40 p-3 rounded-full" {...floatAnim}>
                {item.icon}
              </motion.div>
              <div className="text-left">
                <h4 className="text-lg font-semibold text-black">{item.title}</h4>
                <p className="text-gray-500 text-sm">{item.desc}</p>
                <a href="#" className="text-secondary text-sm mt-1 inline-block">
                  Saiba mais →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
