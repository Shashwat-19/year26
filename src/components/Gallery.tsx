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

const images = [
  { src: p1, caption: 'Beautiful You' },
  { src: p2, caption: 'New Year Glow' },
  { src: p3, caption: 'Everyday Sunshine' },
  { src: p4, caption: 'Precious Moments' },
  { src: p5, caption: 'My Love' },
  { src: p6, caption: 'Just Perfect' },
  { src: p7, caption: 'Smile Always' },
  { src: p8, caption: 'Forever Us' },
  { src: p9, caption: 'Together' },
  { src: p10, caption: 'Endless Love' },
  { src: p11, caption: 'Magic' },
  { src: p12, caption: 'Us' },
  { src: p13, caption: 'Happiness' },
];

export const Gallery = () => {
  return (
    <section className="py-20 px-4 bg-white/30 backdrop-blur-md relative z-10">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-display text-center text-love-red mb-16"
      >
        Our World of Love
      </motion.h2>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-7xl mx-auto">
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-xl shadow-lg aspect-[3/4] bg-pink-100 flex items-center justify-center cursor-pointer"
          >
            <img 
              src={img.src} 
              alt={img.caption} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
              <p className="text-white font-display text-xl tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {img.caption}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
