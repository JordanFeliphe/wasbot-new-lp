import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import FounderImage from "@/assets/img/Silvio3.webp"; 
import LegalDirectorImage from "@/assets/img/Nunes2.webp"; 
import ClinicalDirectorImage from "@/assets/img/Andrade2.webp"; 
import LogoMid from "@/assets/img/logoMid.webp"; 

const profiles = [
  {
    id: 1,
    name: "Sílvio Martins",
    title: "Fundador / CEO",
    image: FounderImage,
    description: "Inspirando inovação e liderando o Mind's Club rumo ao futuro.",
  },
  {
    id: 2,
    name: "Dr. Rodrigo H. M. Nunes",
    title: "Diretor Jurídico",
    image: LegalDirectorImage,
    description: "Garantindo a segurança jurídica e a conformidade da plataforma.",
  },
  {
    id: 3,
    name: "Dr. Daniel M. Andrade",
    title: "Diretor Clínico",
    image: ClinicalDirectorImage,
    description: "Promovendo excelência no atendimento psicológico e na saúde mental.",
  },
  {
    id: 4,
    name: "Midnight Tech",
    title: "Desenvolvedora do Sistema",
    image: LogoMid,
    description: "Construindo soluções tecnológicas para transformar a experiência digital.",
  },
];

const ProfileCards: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.section 
      ref={ref}
      className="py-16 px-6 md:px-12 w-full mx-auto bg-slate-100 font-sans text-center"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div 
        className="mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-4xl font-light text-secondary">
          Nossa Equipe
        </h2>
        <p className="font-light text-black text-lg mt-3">
          Conheça as pessoas por trás do Mind's Club
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {profiles.map((profile, index) => (
          <motion.div
            key={profile.id}
            className="relative bg-white text-black rounded-xl shadow-lg w-80 h-auto text-center overflow-hidden transition-transform duration-300 hover:scale-[1.04]"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
          >
            <div className="absolute top-0 left-0 w-full h-4 bg-secondary"></div>
            <div className="relative w-full flex justify-center">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary mt-10 shadow-md">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="mt-8 px-6 pb-6 font-light text-primary">
              <h3 className="text-xl text-primary">{profile.name}</h3>
              <h4 className="text-base text-primary">{profile.title}</h4>
              <p className="text-sm mt-3">{profile.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ProfileCards;
