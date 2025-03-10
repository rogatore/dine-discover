
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';

const GalleryPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white"
    >
      <Navbar />
      <div className="pt-24 pb-12 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
              Notre Galerie
            </h1>
            <p className="max-w-2xl mx-auto text-gray-600">
              Découvrez l'atmosphère et l'expérience culinaire unique de Dine & Discover à travers notre galerie d'images.
            </p>
          </div>
        </div>
      </div>
      
      <Gallery />
      
      <Footer />
    </motion.div>
  );
};

export default GalleryPage;
