import { useCallback } from "react";

const useSmoothScroll = () => {
  const smoothScrollTo = useCallback((targetY: number, duration = 2000) => {
    const startY = window.scrollY;
    const difference = targetY - startY;
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      window.scrollTo(0, startY + difference * easeInOutCubic(progress));

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        console.log("Scroll finalizado!");
      }
    };

    requestAnimationFrame(animateScroll);
  }, []);


  const easeInOutCubic = (t: number) => 
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  return smoothScrollTo;
};

export default useSmoothScroll;
