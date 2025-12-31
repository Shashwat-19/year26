import { motion } from 'framer-motion';

interface PoemProps {
  title: string;
  content: string[];
  delay: number;
}

export const PoemCard = ({ title, content, delay }: PoemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-pink-200 max-w-md w-full mx-auto hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1"
    >
      <h3 className="text-2xl font-display text-love-red mb-4 border-b border-pink-100 pb-2">{title}</h3>
      <div className="space-y-2">
        {content.map((line, index) => (
          <p key={index} className="text-gray-700 font-body leading-relaxed italic">
            {line}
          </p>
        ))}
      </div>
    </motion.div>
  );
};
