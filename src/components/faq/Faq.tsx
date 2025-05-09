import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "Como o WasBot funciona?",
    answer: `O WasBot é uma solução de atendimento inteligente baseada em inteligência artificial. Ele interpreta as mensagens dos usuários com precisão, identifica intenções e responde de forma natural, como se fosse um humano. Você pode configurar a personalidade do atendente (mais formal, divertido, objetivo, etc.) e ele aprende com o tempo, tornando-se cada vez mais eficaz. Tudo isso sem necessidade de fluxos complicados — basta treinar com perguntas e respostas reais.`
  },
  {
    question: "O WasBot se conecta ao WhatsApp?",
    answer: `Sim! O WasBot é integrado à API oficial do WhatsApp Business, o que permite que sua empresa atenda clientes diretamente no WhatsApp com estabilidade, segurança e escalabilidade. Você poderá automatizar conversas, enviar arquivos, coletar informações e transferir para atendentes humanos — tudo dentro do mesmo canal.`
  },
  {
    question: "Usam a API oficial do WhatsApp?",
    answer: `Sim, utilizamos exclusivamente a API oficial do WhatsApp Business, homologada pela Meta. Isso garante segurança de ponta a ponta, conformidade com as políticas da plataforma e estabilidade nas entregas e recepção de mensagens, mesmo com alto volume de atendimentos.`
  },
  {
    question: "O WasBot entende áudio?",
    answer: `Neste momento, o WasBot ainda não interpreta áudios diretamente, mas já permite encaminhá-los automaticamente para um atendente humano ou registrar o áudio em seu histórico. Em breve, lançaremos um recurso de transcrição automática para que o bot entenda áudios em tempo real.`
  },
  {
    question: "O WasBot entende imagens e vídeos?",
    answer: `Sim. O WasBot pode receber, armazenar e interpretar imagens e vídeos enviados pelo cliente, além de responder com conteúdos multimídia. Por exemplo: ele pode identificar um tipo de documento, enviar imagens de produtos ou coletar evidências de suporte técnico.`
  },
  {
    question: "O WasBot funciona em outros idiomas?",
    answer: `Com certeza. O WasBot possui suporte multilíngue e pode ser treinado em português, inglês, espanhol e outros idiomas. Isso permite atender clientes de diferentes países com a mesma fluidez, adaptando o tom e vocabulário conforme o público.`
  },
  {
    question: "Qual a garantia do WasBot?",
    answer: `Você tem 7 dias de garantia incondicional para testar o WasBot sem compromisso. Durante esse período, nossa equipe oferece suporte completo para implantação e personalização. Se você não ficar satisfeito com a solução, devolvemos 100% do valor investido, sem burocracia.`
  }
];


const FaqSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-screen-xl mx-auto py-16 px-4 md:px-8 font-sans" id="faq">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#014437] mb-4 leading-tight">
            FAQ - Perguntas frequentes
          </h1>
          <p className="text-gray-600 text-lg md:text-xl mb-8 ">
            Tire todas suas dúvidas sobre o WasBot. Se precisar de mais informações, envie um e-mail para{" "}
            <span className="font-semibold text-[#014437]">contato@wasbot.com.br</span>
          </p>
          <div className="bg-secondary p-6 rounded-xl shadow-sm border border-gray-100 mb-4 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-2">
              <Mail className="text-[#88A69F] w-5 h-5" />
              <h3 className="font-semibold text-white">contato@wasbot.com.br</h3>
            </div>
            <p className="text-sm text-slate-50">
              Nossa equipe está pronta para esclarecer todas suas dúvidas sobre o WasBot.
            </p>
          </div>
          <div className="bg-secondary p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-2">
              <Phone className="text-[#88A69F] w-5 h-5" />
              <h3 className="font-semibold text-white">+55 27 99868-8078</h3>
            </div>
            <p className="text-sm text-slate-50">
              Prefere falar por telefone? Nosso time comercial está disponível para atendê-lo.
            </p>
          </div>
        </div>
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className={`rounded-xl overflow-hidden border border-solid border-secondary transition-all duration-300 ${
                  isOpen ? "bg-[#014437] text-white border-gray-800" : "bg-white border-gray-100"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none"
                >
                  <h3 className={`font-semibold ${isOpen ? "text-white" : "text-gray-800"}`}>
                    {item.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <ChevronDown
                      className={`w-5 h-5 ${isOpen ? "text-white" : "text-gray-400"}`}
                    />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: 1,
                        height: "auto"
                      }}
                      exit={{
                        opacity: 0,
                        height: 0
                      }}
                      transition={{
                        duration: 0.4,
                        ease: "easeInOut"
                      }}
                      className="px-6 pb-6"
                    >
                      <div className="border-t border-gray-700 pt-4">
                        <p
                          className={`leading-relaxed ${
                            isOpen ? "text-gray-100" : "text-gray-600"
                          }`}
                        >
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
