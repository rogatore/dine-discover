
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Menu from '@/components/Menu';
import Gallery from '@/components/Gallery';
import Events from '@/components/Events';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Index = () => {
  // Animation observer setup for scroll animations
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isVisible = (rect.top <= window.innerHeight * 0.75);
        if (isVisible) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check

    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      
      {/* Reservation CTA */}
      <section className="py-24 px-6 md:px-12 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070" 
            alt="Restaurant interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
                Réservez Votre Table
              </h2>
              <p className="text-lg text-white/80">
                Profitez d'une expérience culinaire d'exception dans un cadre élégant et chaleureux.
                Réservez dès maintenant pour garantir votre table.
              </p>
              <Button asChild size="lg" className="bg-gold hover:bg-gold-dark text-black mt-4 gap-2">
                <Link to="/reservation">
                  <Calendar className="mr-2 h-5 w-5" />
                  Réserver maintenant
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Menu />
      <Gallery />
      <Events />
      
      {/* Newsletter Subscription */}
      <section className="py-16 px-6 md:px-12 bg-gold-dark/10">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-4">
              Restez Informé
            </h3>
            <p className="text-gray-600 mb-6">
              Inscrivez-vous à notre newsletter pour recevoir nos offres spéciales et être informé de nos événements à venir.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Votre adresse e-mail" 
                className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-light"
                required
              />
              <Button type="submit" className="bg-gold hover:bg-gold-dark text-black whitespace-nowrap">
                S'inscrire
              </Button>
            </form>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
