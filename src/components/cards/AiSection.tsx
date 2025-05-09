import React, { memo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Logo from "@/assets/img/wasbot-section.png";
import BackgroundImage from "@/assets/img/background-section.png";

const LogoImage = memo(() => (
  <motion.img
    src={Logo}
    alt="WasBot Logo"
    className="
      w-20 h-20 md:w-32 md:h-32 
      object-contain 
      mx-3 
      bg-white 
      rounded-xl 
      p-2 
      shadow-lg 
      ring-4 
      ring-white
    "
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
    loading="lazy"
  />
));

const AiSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const xWas = useTransform(scrollYProgress, [0, 1], ["-80px", "0px"]);
  const xBot = useTransform(scrollYProgress, [0, 1], ["80px", "0px"]);

  return (
    <section
      ref={ref}
      className="relative w-full h-[250px] md:h-[350px] overflow-hidden font-sans flex items-center justify-center"
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          scale: 1.1
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-secondary/40" />

      <div className="relative z-10 flex items-center justify-center flex-wrap text-white text-4xl md:text-7xl font-extrabold">
        <motion.span className="mr-3" style={{ x: xWas }}>
          Was
        </motion.span>

        <LogoImage />

        <motion.span className="ml-3" style={{ x: xBot }}>
          Bot
        </motion.span>
      </div>

      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-white/10 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
      />
    </section>
  );
};

export default AiSection;
