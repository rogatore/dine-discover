
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Events from '@/components/Events';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Calendar, Bell } from 'lucide-react';

const EventsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white"
    >
      <Navbar />
      <div className="pt-24 pb-12 px-4 md:px-6 bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-gold-light font-medium mb-3">Calendrier</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
              Nos Événements
            </h1>
            <p className="max-w-2xl mx-auto text-white/80">
              Découvrez notre calendrier d'événements culinaires, d'ateliers et de soirées à thème. 
              Des expériences uniques pour tous les amateurs de gastronomie.
            </p>
            <div className="mt-8 flex justify-center">
              <Button className="bg-gold hover:bg-gold-dark text-black gap-2">
                <Bell size={16} />
                <span>Recevoir les notifications</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Events />
      
      <section className="py-16 px-6 md:px-12 bg-gray-100">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-4">
              Proposez votre événement
            </h3>
            <p className="text-gray-600 mb-6">
              Vous souhaitez organiser un événement privé chez Dine & Discover ? 
              Privatisation, événement d'entreprise, célébration - contactez-nous pour discuter 
              de votre projet et obtenir une offre personnalisée.
            </p>
            <Button className="bg-gold hover:bg-gold-dark text-black gap-2">
              <Calendar size={16} />
              <span>Demander un devis</span>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </motion.div>
  );
};

export default EventsPage;
