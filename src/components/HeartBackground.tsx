import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export const HeartBackground = () => {
  const [hearts, setHearts] = useState<{ id: number; x: number; delay: number; scale: number }[]>([]);

  useEffect(() => {
    const generateHearts = () => {
      const newHearts = Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 20,
        scale: Math.random() * 0.5 + 0.5,
      }));
      setHearts(newHearts);
    };

    generateHearts();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute bottom-[-50px] text-pink-300/30"
          initial={{ y: 0, x: `${heart.x}vw`, opacity: 0, scale: 0 }}
          animate={{
            y: '-110vh',
            opacity: [0, 1, 0],
            scale: heart.scale,
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: heart.delay,
            ease: "linear",
          }}
        >
          <Heart fill="currentColor" size={48} />
        </motion.div>
      ))}
    </div>
  );
};
