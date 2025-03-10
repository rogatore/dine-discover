
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070",
    alt: "Restaurant interior",
    size: "big"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1521917441209-e886f0404a7b?q=80&w=2070",
    alt: "Elegant dish presentation",
    size: "small"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974",
    alt: "Cocktail preparation",
    size: "small"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1554306274-f23873d9a26c?q=80&w=2070",
    alt: "Restaurant ambiance",
    size: "small"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1507914997-7d4f70413a9f?q=80&w=1780",
    alt: "Dining experience",
    size: "small"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1523459346521-92e52a3561a3?q=80&w=1974",
    alt: "Chef preparing dish",
    size: "big"
  },
];

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: 0.7,
        ease: [0.43, 0.13, 0.23, 0.96]
      } 
    }
  };

  return (
    <section id="gallery" className="py-24 px-6 md:px-12 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-gold-dark font-medium mb-3">Notre Galerie</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Découvrez l'Expérience
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Un aperçu visuel de notre restaurant, de notre cuisine et de l'atmosphère unique que nous avons créée pour vous.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              className={`relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 
                ${image.size === 'big' ? 'md:col-span-2 md:row-span-2' : ''}`}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-medium">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
