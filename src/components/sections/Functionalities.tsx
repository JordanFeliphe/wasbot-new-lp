import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Lottie from "lottie-react";

import crmKanbanAnimation from "@/assets/lottie/crm.json";
import teamFlowAnimation from "@/assets/lottie/managment.json";

const kanbanFeatures = [
  "Visualize seus atendimentos em colunas organizadas por status.",
  "Mova leads com facilidade entre etapas de conversão.",
  "Atribua responsáveis, tags e notas em cada cartão.",
  "Receba notificações em tempo real sobre mudanças nos cartões.",
  "Filtre e busque conversas por status, responsável ou palavra-chave.",
  "Defina prioridades e prazos para organizar sua fila de atendimentos.",
  "Acompanhe o histórico completo de interações por cliente.",
  "Integre o Kanban com fluxos automatizados para ações recorrentes.",
];

const teamFeatures = [
  "Distribua atendimentos automaticamente com base na fila.",
  "Permita a transferência rápida entre atendentes.",
  "Visualize quem está ativo e em qual conversa.",
  "Envie notas internas sem o cliente visualizar.",
  "Monitore o tempo médio de resposta por atendente.",
];

const Functionalities: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section
      id="features"
      ref={ref}
      className="relative py-20 px-6 md:px-12 max-w-screen-xl mx-auto font-sans overflow-hidden"
    >
      <div className="absolute top-6 left-0 right-0 text-start z-0 select-none pointer-events-none">
        <motion.h2
          className="text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[5vw] xl:text-[4.5vw] f text-secondary/60 opacity-60 leading-none tracking-tight font-light"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.8 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
         Funcionalidades
        </motion.h2>
      </div>

      <motion.div
        className="relative z-10 mb-12 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      ></motion.div>

      {/* 1. CRM com Kanban */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden"
        >
          <Lottie animationData={crmKanbanAnimation} loop className="w-full h-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary text-white font-bold text-lg">
              1
            </div>
            <h3 className="text-2xl md:text-3xl tracking-wide text-secondary font-light">
              CRM com Kanban
            </h3>
          </div>

          <div className="h-[4px] w-28 bg-gradient-to-r from-secondary to-primary rounded-full mb-4" />

          <ul className="space-y-2">
            {kanbanFeatures.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-700 text-base font-light">
                <CheckCircle className="text-white fill-secondary w-5 h-5 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-gray-600">
            Com o CRM estilo Kanban do WasBot, você tem controle total dos fluxos de atendimento em tempo real, com máxima organização e produtividade.
          </p>
        </motion.div>
      </div>

      {/* 2. Gestão de Atendimento */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 order-2 lg:order-1"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary text-white font-bold text-lg">
              2
            </div>
            <h3 className="text-2xl md:text-3xl tracking-wide text-secondary">
              Gestão de atendimento entre funcionários
            </h3>
          </div>

          <div className="h-[4px] w-32 bg-gradient-to-r from-secondary to-primary rounded-full mb-4" />

          <ul className="space-y-2">
            {teamFeatures.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-700 text-base">
                <CheckCircle className="text-white fill-secondary w-5 h-5 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-gray-600">
            Aumente a eficiência operacional com uma gestão clara entre operadores, garantindo agilidade e alinhamento no atendimento.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden order-1 lg:order-2 flex flex-col items-center justify-center"
        >
          <Lottie animationData={teamFlowAnimation} loop className="w-full h-auto mx-auto" />
        </motion.div>
      </div>
    </section>
  );
};

export default Functionalities;
