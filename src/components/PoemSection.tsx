import { PoemCard } from './PoemCard';
import { motion } from 'framer-motion';

const poems = [
  {
    title: "A New Chapter",
    content: [
      "Another year has come and gone,",
      "But my love for you lives on.",
      "With every sunrise, every hue,",
      "I find more reasons to love you."
    ]
  },
  {
    title: "My Constancy",
    content: [
      "Seasons change and flowers fade,",
      "But the memories we have made,",
      "Are etched forever in my heart,",
      "Promise we will never part."
    ]
  },
  {
    title: "To You, My Joy",
    content: [
      "You are the light within my day,",
      "The stars that guide me on my way.",
      "This New Year's wish I send above,",
      "Is for endless joy and endless love."
    ]
  }
];

export const PoemSection = () => {
  return (
    <section className="py-20 px-4">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-display text-center text-love-red mb-16"
      >
        Verses of My Heart
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {poems.map((poem, index) => (
          <PoemCard 
            key={index}
            title={poem.title}
            content={poem.content}
            delay={index * 0.2}
          />
        ))}
      </div>
    </section>
  );
};
