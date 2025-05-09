import { useEffect } from "react";
import useSmoothScroll from "@/hooks/useSmoothScroll";
import Navbar from "@/components/navbar/Navbar";
import Header from "@/components/header/Header";
import Functionalities from "@/components/sections/Functionalities";
import Footer from "@/components/footer/Footer";
import AiSection from "@/components/cards/AiSection";
import Infographic from "@/components/infographic/Infographic";
import BenefitsSection from "@/components/sections/BenefitsSection";
import Faq from "@/components/faq/Faq";
import PricingPlans from "@/components/pricing-plans/PricingPlans";

const Home: React.FC = () => {
  const smoothScrollTo = useSmoothScroll();

  useEffect(() => {
    const links = document.querySelectorAll<HTMLAnchorElement>("a[href^='#']");

    links.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        if (!targetId) return;

        const target = document.querySelector<HTMLElement>(targetId);
        if (target) {
          smoothScrollTo(target.offsetTop, 2000);
        }
      });
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", () => {});
      });
    };
  }, [smoothScrollTo]);

  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-white">
      <Navbar />
      <Header />
      <Functionalities />
      <AiSection />
      <Infographic />
      <BenefitsSection />
      <PricingPlans/>
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
