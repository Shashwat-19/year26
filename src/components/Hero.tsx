import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2026-01-01T00:00:00'); // Next New Year

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-8"
      >
        <Sparkles className="inline-block text-yellow-400 mb-4" size={32} />
        <h1 className="text-5xl md:text-7xl font-display text-love-red mb-4">
          Happy New Year, My Love
        </h1>
        <p className="text-xl md:text-2xl font-light text-gray-700 max-w-2xl mx-auto">
          Another year of loving you, clearer than ever before.
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-4 gap-4 md:gap-8 max-w-3xl w-full"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="flex flex-col items-center bg-white/50 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-pink-100">
            <span className="text-4xl md:text-6xl font-bold text-love-red font-display">
              {value.toString().padStart(2, '0')}
            </span>
            <span className="uppercase text-xs md:text-sm tracking-widest text-gray-500 mt-2">
              {unit}
            </span>
          </div>
        ))}
      </motion.div>

      <motion.div
        className="absolute bottom-10 animate-bounce text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        Scroll for more ❤️
      </motion.div>
    </section>
  );
};
