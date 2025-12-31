import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Import all photos
import p1 from '../assets/photo1.jpg';
import p2 from '../assets/photo2.jpg';
import p3 from '../assets/photo3.jpg';
import p4 from '../assets/photo4.jpg';
import p5 from '../assets/photo5.jpg';
import p6 from '../assets/photo6.jpg';
import p7 from '../assets/photo7.jpg';
import p8 from '../assets/photo8.jpg';
import p9 from '../assets/photo9.jpg';
import p10 from '../assets/photo10.jpg';
import p11 from '../assets/photo11.jpg';
import p12 from '../assets/photo12.jpg';
import p13 from '../assets/photo13.jpg';

const photos = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13];

export const FloatingPhotos = () => {
  const [floatingItems, setFloatingItems] = useState<{ id: number; src: string; x: number; delay: number; duration: number }[]>([]);

  useEffect(() => {
    // Generate random floating items
    const items = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      src: photos[i % photos.length], // Cycle through user photos
      x: Math.random() * 90, // Random horizontal position (0-90vw)
      delay: Math.random() * 20, // Random start delay
      duration: 20 + Math.random() * 25, // Slow float duration
    }));
    setFloatingItems(items);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {floatingItems.map((item) => (
        <motion.div
          key={item.id}
          className="absolute bottom-[-150px] opacity-60"
          initial={{ y: 0, x: `${item.x}vw`, rotate: 0 }}
          animate={{
            y: '-120vh',
            rotate: [0, 360],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            delay: item.delay,
            ease: "linear",
          }}
        >
          {/* Polaroid Style */}
          <div className="bg-white p-2 pb-4 shadow-lg transform rotate-[-5deg] w-32 md:w-48">
             <img 
               src={item.src} 
               alt="Memory" 
               className="w-full h-auto object-cover aspect-[3/4]"
             />
          </div>
        </motion.div>
      ))}
    </div>
  );
};
