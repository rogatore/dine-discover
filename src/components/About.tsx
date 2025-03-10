
import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Column */}
          <div className="w-full md:w-1/2">
            <motion.div
              ref={ref}
              animate={isInView ? 'visible' : 'hidden'}
              initial="hidden"
              variants={containerVariants}
              className="relative"
            >
              <motion.div variants={itemVariants} className="rounded-lg shadow-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2070"
                  alt="Chef preparing a dish"
                  className="w-full h-[400px] object-cover"
                />
              </motion.div>
              <motion.div 
                variants={itemVariants} 
                className="absolute -bottom-6 -right-6 w-48 h-48 rounded-lg shadow-xl overflow-hidden hidden md:block"
              >
                <img 
                  src="https://images.unsplash.com/photo-1579027989536-b7b1f875659b?q=80&w=2070"
                  alt="Restaurant interior"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div 
                variants={itemVariants}
                className="absolute -top-6 -left-6 bg-gold/10 w-full h-full rounded-lg -z-10"
              ></motion.div>
            </motion.div>
          </div>

          {/* Text Column */}
          <div className="w-full md:w-1/2">
            <motion.div
              ref={ref}
              animate={isInView ? 'visible' : 'hidden'}
              initial="hidden"
              variants={containerVariants}
            >
              <motion.p variants={itemVariants} className="text-gold-dark font-medium mb-3">Notre Histoire</motion.p>
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Une passion pour la gastronomie depuis 1995
              </motion.h2>
              <motion.p variants={itemVariants} className="text-gray-700 mb-4 leading-relaxed">
                Fondé par les frères Bouvier, Dine & Discover est né d'une vision commune : créer un lieu où la gastronomie française traditionnelle rencontre l'innovation culinaire moderne.
              </motion.p>
              <motion.p variants={itemVariants} className="text-gray-700 mb-6 leading-relaxed">
                Nos chefs sélectionnent quotidiennement les meilleurs produits locaux et de saison pour vous proposer des plats d'exception. Chaque assiette raconte une histoire, un terroir, et reflète notre engagement envers l'excellence culinaire.
              </motion.p>
              <motion.div variants={itemVariants} className="flex items-center gap-6">
                <div className="text-center">
                  <p className="text-3xl font-serif font-bold text-gold">25+</p>
                  <p className="text-sm text-gray-600">Années d'excellence</p>
                </div>
                <div className="h-10 w-px bg-gray-300"></div>
                <div className="text-center">
                  <p className="text-3xl font-serif font-bold text-gold">4.9</p>
                  <p className="text-sm text-gray-600">Note moyenne</p>
                </div>
                <div className="h-10 w-px bg-gray-300"></div>
                <div className="text-center">
                  <p className="text-3xl font-serif font-bold text-gold">3</p>
                  <p className="text-sm text-gray-600">Récompenses culinaires</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
