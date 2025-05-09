import React from "react";
import Logo from "@/assets/img/wasbot-footer.png";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Funcionalidades", href: "#features" },
    { label: "Benefícios", href: "#benefits" },
    { label: "Preços", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <footer className="bg-secondary text-white font-sans rounded-t-xl shadow-inner">
      <div className="max-w-screen-xl mx-auto px-4 py-4 md:py-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <div className="flex justify-start">
          <img
            src={Logo}
            alt="Logo WasBot"
            className="w-24 md:w-32 object-contain"
            loading="lazy"
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 gap-x-6 text-xs text-white/90 justify-end">
          {navItems.map((item, idx) => (
            <ul key={idx} className="space-y-1">
              <li>
                <a href={item.href} className="hover:underline">
                  {item.label}
                </a>
              </li>
            </ul>
          ))}
        </div>
      </div>

      <div className="border-t border-primary/30 text-center py-2 text-xs text-primary/80">
        © {year} <span className="font-semibold">WasBot</span>. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
