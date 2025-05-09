import React, { useEffect, useRef } from "react";
import { Bot, Settings, Workflow, Clock3, MessageSquare } from "lucide-react";
import chatbotAnimation from "@/assets/lottie/Z34eydM4ys.json";

import { motion } from "framer-motion";
import Lottie from "lottie-react";

const steps = [
  {
    title: "Atendimento automático",
    description:
      "Atendimento 100% no automático, sem necessidade de intervenção humana. Tanto com IA como também com fluxos prontos.",
    icon: <Bot size={20} />,
  },
  {
    title: "Online 24/7",
    description:
      "Chatbot inteligente atendendo 24 horas por dia, 7 dias por semana, capaz de entender qualquer pergunta e respondê-la como um humano.",
    icon: <Clock3 size={20} />,
  },
  {
    title: "Transfira entre departamentos",
    description:
      "Atenda de forma mais rápida e eficiente enviando seu contato para ser atendido no departamento certo, pela pessoa certa.",
    icon: <MessageSquare size={20} />,
  },
  {
    title: "Fluxos personalizados",
    description:
      "Crie jornadas exclusivas para seus leads e clientes com base em regras inteligentes.",
    icon: <Workflow size={20} />,
  },
  {
    title: "Configuração simples",
    description:
      "Dê um nome e escolha a personalidade do chatbot. Depois basta colar a base de conhecimento sobre a qual o chatbot saberá dar respostas.",
    icon: <Settings size={20} />,
  },
  {
    title: "Relatórios em tempo real",
    description:
      "Acompanhe métricas importantes sobre o desempenho dos atendimentos em tempo real.",
    icon: <Clock3 size={20} />,
  },
  {
    title: "Integração com CRM",
    description:
      "Sincronize dados dos atendimentos com seu CRM automaticamente.",
    icon: <Workflow size={20} />,
  },
  {
    title: "Treinamento com IA",
    description:
      "Ensine sua IA com exemplos reais e melhore as respostas com o tempo.",
    icon: <Bot size={20} />,
  },
  {
    title: "Respostas humanizadas",
    description:
      "Personalize o tom e a linguagem para tornar as respostas mais naturais.",
    icon: <MessageSquare size={20} />,
  },
  {
    title: "Suporte multilíngue",
    description:
      "Atenda clientes em vários idiomas automaticamente, com tradução inteligente.",
    icon: <Settings size={20} />,
  },
];

const Infographic: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;

    const container = containerRef.current;
    const content = contentRef.current;
    const speed = 0.5;

    let animationId: number;
    let offset = 0;

    const animate = () => {
      offset += speed;

      if (offset >= content.scrollHeight / 2) {
        offset = 0;
      }

      container.scrollTop = offset;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };

    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate);
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="relative py-24 px-4 md:px-12 bg-white font-sans">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="h-fit">
          <span className="bg-secondary text-white text-sm font-medium px-3 py-1 rounded-full">
            Inteligência WasBot
          </span>
          <h2 className="text-2xl md:text-4xl font-light text-gray-900 mt-4 leading-snug">
            Assistentes personalizados ilimitados para encantar seus clientes.
          
          </h2>

          <p className="text-gray-600 text-base mt-4 max-w-md">
          Conduza conversas fluidas trocando automaticamente os atendimentos entre assistentes especializados, sem perder o contexto e mantendo a experiência do cliente sempre natural.
          </p>

          <div className=" max-w-l overflow-hidden  ">
            <Lottie
              animationData={chatbotAnimation}
              loop
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="relative h-[600px]">
          <div className="absolute top-0 bottom-0 left-[36px] w-[5px] bg-secondary rounded-full z-0" />
          <div
            ref={containerRef}
            className="overflow-y-hidden h-full relative"
            style={{
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
            }}
          >
            <div ref={contentRef} className="pl-16 pr-4 flex flex-col gap-6">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative flex items-center gap-4 min-h-[100px] md:gap-6 md:min-h-[120px]"
                >
                  <div className="absolute -left-[34px] top-1/2 -translate-y-1/2 w-4 h-4 bg-primary border-4 border-secondary rounded-full z-10" />
                  <div className="flex items-start gap-4 md:gap-5 bg-white text-secondary rounded-2xl px-4 py-4 md:px-6 md:py-6 shadow-lg w-full">
                    <motion.div
                      animate={{ y: [0, -4, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="w-10 h-10 min-w-[40px] md:w-12 md:h-12 md:min-w-[48px] rounded-xl bg-white text-secondary flex items-center justify-center shadow-md ring-1 ring-secondary/30"
                    >
                      {step.icon}
                    </motion.div>
                    <div className="flex flex-col">
                      <h4 className="text-base md:text-lg font-semibold mb-1 leading-snug">
                        {step.title}
                      </h4>
                      <p className="text-sm leading-relaxed text-black">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {steps.map((step, i) => (
                <motion.div
                  key={`duplicate-${i}`}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: (i + steps.length) * 0.1,
                  }}
                  className="relative flex items-center gap-4 min-h-[100px] md:gap-6 md:min-h-[120px]"
                >
                  <div className="absolute -left-[34px] top-1/2 -translate-y-1/2 w-4 h-4 bg-primary border-4 border-secondary rounded-full z-10" />
                  <div className="flex items-start gap-4 md:gap-5 bg-secondary text-white rounded-2xl px-4 py-4 md:px-6 md:py-6 shadow-lg w-full">
                    <motion.div
                      animate={{ y: [0, -4, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="w-10 h-10 min-w-[40px] md:w-12 md:h-12 md:min-w-[48px] rounded-xl bg-white text-secondary flex items-center justify-center shadow-md ring-1 ring-secondary/30"
                    >
                      {step.icon}
                    </motion.div>
                    <div className="flex flex-col">
                      <h4 className="text-base md:text-lg font-semibold mb-1 leading-snug">
                        {step.title}
                      </h4>
                      <p className="text-sm leading-relaxed text-white/90">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infographic;
