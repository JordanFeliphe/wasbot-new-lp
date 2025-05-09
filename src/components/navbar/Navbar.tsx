import React, { useState, useEffect } from "react";
import WasbotLogo from "@/assets/img/logo-wasbot.png";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Funcionalidades", href: "#features" },
    { label: "Benefícios", href: "#benefits" },
    { label: "Preços", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 300); // tempo de transição do motion.div
  };

  return (
    <nav className="bg-background mx-4 mt-2 sm:mx-3 font-sans rounded-t-[32px] z-40 relative">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center py-4 px-4">
        <div className="flex items-center space-x-3">
          <img
            src={WasbotLogo}
            alt="Wasbot Logo"
            width={120}
            height={40}
            className="h-8 cursor-pointer"
            loading="lazy"
            onClick={() => {
              navigate("/");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        </div>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href} 
              className="text-gray-700 hover:text-primary transition font-medium text-sm"
              onClick={() => setIsOpen(false)} 
            >
              {item.label}
            </a>
          ))}

          <div className="flex items-center gap-3">
            <a
              href="#client"
              className="relative group px-5 py-2 border border-solid border-primary text-gray-700 rounded-full text-sm font-semibold overflow-hidden transition duration-300"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#client");
              }}
            >
              <span className="relative z-10 group-hover:text-white transition duration-300">
                Já sou cliente
              </span>
              <span className="absolute inset-0 bg-primary transform scale-y-0 origin-bottom transition-transform duration-300 ease-in-out group-hover:scale-y-100 z-0" />
            </a>

            <a
              href="#test"
              className="px-5 py-2 bg-secondary text-white rounded-full text-sm font-semibold hover:bg-green-800 transition duration-300"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#test");
              }}
            >
              Testar agora!
            </a>
          </div>
        </div>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(true)}
          aria-label="Abrir menu"
        >
          <Menu size={30} />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-50 flex justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg flex flex-col items-start px-6 py-8 space-y-6"
              initial={{ x: "100%" }}
              animate={{
                x: 0,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              exit={{
                x: "100%",
                transition: { duration: 0.2, ease: "easeIn" },
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-700"
                onClick={() => setIsOpen(false)}
                aria-label="Fechar menu"
              >
                <X size={30} />
              </button>

              <img
                src={WasbotLogo}
                alt="Logo"
                className="h-10"
                loading="lazy"
              />

              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 text-base font-medium hover:text-primary transition"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  {item.label}
                </a>
              ))}

              <a
                href="#client"
                className="w-full mt-4 px-5 py-2 border border-solid border-primar text-primary border-primary rounded-full text-sm font-semibold text-center hover:bg-gray-50 transition"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#client");
                }}
              >
                Já sou cliente
              </a>
              <a
                href="#test"
                className="w-full px-5 py-2 bg-secondary text-white rounded-full text-sm font-semibold text-center hover:bg-green-700 transition"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#test");
                }}
              >
                Testar agora!
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
