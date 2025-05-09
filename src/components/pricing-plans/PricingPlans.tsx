import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Rocket } from "lucide-react";

const plans = [
  {
    name: "Iniciante",
    subtitle: "Para pequenas demandas",
    price: "R$197,00",
    features: [
      "1 canal conectado (Whatsapp)",
      "Até 2 usuários (você e mais um gerente ou atendente)",
      "Chatbots de IA ilimitados (não cobramos ChatGPT)",
      "Até 2 fluxos",
      "Campanhas / envios em massa",
      "Possibilidade de transferência para humano",
      "Agendamento de mensagens",
      "Tags e rótulos nas conversas",
      "Lista de contatos ilimitados",
      "Sistema 100% na nuvem (não precisa deixar PC ligado)",
    ],
    bg: "bg-transparent",
    border: "border-2 border-primary border-solid",
    iconBg: "bg-primary/10",
    highlight: false,
  },
  {
    name: "Profissional",
    subtitle: "Para atendimento multicanal",
    price: "R$297,00",
    features: [
      "Tudo do Plano Iniciante, mais:",
      "API para disparo de mensagens",
      "Chatbots de IA ilimitados (não cobramos ChatGPT)",
      "Até 5 fluxos",
      "Até 3 canais conectados (Whatsapp)",
      "Até 3 usuários (gerentes e atendentes)",
    ],
    bg: "bg-white",
    text: "text-[#00332C]",
    border: "border-2 border-primary border-solid",
    iconBg: "bg-primary/10",
    highlight: true,
  },
  {
    name: "Premium",
    subtitle: "Para altas demandas",
    price: "R$497,00",
    features: [
      "Tudo do Plano Profissional, mais:",
      "API para disparo de mensagens",
      "Chatbots de IA ilimitados (não cobramos ChatGPT)",
      "Fluxos ilimitados",
      "Campanhas / envios em massa",
      "Até 5 canais conectados (Whatsapp - consulte para mais)",
      "Até 5 usuários (gerentes e atendentes - consulte para mais)",
      "Suporte premium",
      "Auxílio no setup",
      "Relatórios avançados",
      "Acesso prioritário a novas funcionalidades",
    ],
    bg: "bg-dark",
    border: "border-2 border-primary border-solid",
    iconBg: "bg-primary/10",
    highlight: false,
  },
];

const PricingPlans: React.FC = () => {
  return (
    <section className="w-full bg-secondary py-20 px-6 md:px-12 font-sans text-white" id="pricing">
      <motion.div 
        className="max-w-6xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Planos e Preços
        </motion.h2>
        <motion.p
          className="text-gray-300 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Temos planos para todos os tamanhos de empresa. Escolha o melhor para
          você e teste agora mesmo com garantia de 7 dias.
        </motion.p>
      </motion.div>

      <div className="flex flex-col md:flex-row justify-center items-start gap-8">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            className={`rounded-2xl w-full max-w-sm p-8 shadow-xl relative transition-all duration-300 ${
              plan.bg
            } ${plan.text || "text-white"} ${plan.border}`}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              delay: i * 0.15,
              duration: 0.5,
              ease: "backOut",
              type: "spring",
              stiffness: 100,
              damping: 10
            }}
            whileHover={{ 
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)"
            }}
          >
            {plan.highlight && (
              <motion.span
                className="absolute -top-4 left-1/2 -translate-x-1/2 bg-dark border border-solid border-primary text-white text-sm font-semibold px-4 py-1 rounded-full"
                initial={{ scale: 0.8 }}
                animate={{ 
                  scale: 1,
                  boxShadow: "0 0 15px 5px rgba(0, 131, 44, 0.3)"
                }}
                transition={{
                  scale: { 
                    duration: 0.4,
                    delay: 0.5 + i * 0.1,
                    type: "spring",
                    stiffness: 300
                  },
                  boxShadow: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }
                }}
              >
                Recomendado
              </motion.span>
            )}

            <motion.div 
              className="flex flex-col gap-2 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              <div className="flex items-center gap-3">
                <motion.div 
                  className={`p-2 rounded-xl ${plan.iconBg}`}
                  initial={{ rotate: -15, scale: 0.8 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <Rocket className="w-5 h-5 text-primary" />
                </motion.div>
                <h3 className="text-2xl font-semibold">{plan.name}</h3>
              </div>
              <p className="text-sm text-gray-300">{plan.subtitle}</p>
              <motion.p 
                className="text-4xl font-bold"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                {plan.price} <span className="text-sm">/mês</span>
              </motion.p>
            </motion.div>

            <motion.div 
              className="w-full border-t-2 border-solid border-primary my-4"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.6 + i * 0.1 }}
            />

            <div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start gap-2 text-sm leading-relaxed"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: 0.7 + i * 0.1 + idx * 0.03,
                      duration: 0.3
                    }}
                  >
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.7 + i * 0.1 + idx * 0.03 }}
                    >
                      <CheckCircle className="text-green-400 w-4 h-4 mt-1" />
                    </motion.span>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.a
                href="#"
                className="relative bg-secondary group w-full block text-center px-5 py-3 border border-solid border-primary text-white rounded-full text-sm font-semibold overflow-hidden transition duration-600"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.1 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 group-hover:text-white transition duration-600">
                  Assinar agora!
                </span>
                <span className="absolute inset-0 bg-primary transform scale-y-0 origin-bottom transition-transform duration-700 ease-in-out group-hover:scale-y-100 z-0" />
              </motion.a>

              <motion.p 
                className="text-sm font-semibold text-center mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 + i * 0.1 }}
              >
                7 dias de garantia total
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PricingPlans;