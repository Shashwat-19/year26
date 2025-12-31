import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles } from 'lucide-react';

export const SurpriseTrigger = () => {
  const triggerConfetti = () => {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 50 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      
      confetti({
        ...defaults, 
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults, 
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);
  };

  return (
    <section className="py-20 text-center pb-32">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={triggerConfetti}
        className="bg-love-red text-white font-display text-2xl px-8 py-4 rounded-full shadow-lg hover:shadow-love-red/50 hover:shadow-2xl transition-all flex items-center mx-auto gap-3"
      >
        <Sparkles fill="white" size={24} />
        Click for a Surprise
        <Sparkles fill="white" size={24} />
      </motion.button>
    </section>
  );
};
