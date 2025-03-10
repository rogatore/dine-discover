
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ReservationForm from '@/components/ReservationForm';
import { motion } from 'framer-motion';
import { Clock, MapPin, Phone, Mail, CalendarCheck } from 'lucide-react';

const ReservationPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-12 bg-black text-white relative">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070" 
            alt="Restaurant interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="font-serif italic text-gold-light tracking-wide mb-3">À votre service</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
              Réserver une Table
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-white/80 mb-4">
              Réservez votre table en quelques clics et profitez d'une expérience culinaire exceptionnelle.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Reservation Section */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-serif font-bold mb-4">Informations</h2>
                <p className="text-gray-600">
                  Pour une réservation de dernière minute ou pour plus de 8 personnes, 
                  nous vous invitons à nous contacter directement par téléphone.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-1">
                    <MapPin size={20} className="text-gold-dark" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Adresse</h3>
                    <p className="text-gray-600">123 Avenue de la Gastronomie, 75008 Paris, France</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-1">
                    <Phone size={20} className="text-gold-dark" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Téléphone</h3>
                    <p className="text-gray-600">+33 1 23 45 67 89</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-1">
                    <Mail size={20} className="text-gold-dark" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Email</h3>
                    <p className="text-gray-600">reservation@dinediscover.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-1">
                    <Clock size={20} className="text-gold-dark" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Horaires d'Ouverture</h3>
                    <p className="text-gray-600">Déjeuner: 12h00 - 14h30 (Mar-Dim)</p>
                    <p className="text-gray-600">Dîner: 19h00 - 22h30 (Mar-Sam)</p>
                    <p className="text-gray-600 italic mt-1">Fermé le Lundi</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <h3 className="font-medium text-lg mb-2">Informations Importantes</h3>
                <ul className="text-gray-600 space-y-2 list-disc pl-5">
                  <li>Nous vous demandons d'arriver à l'heure de votre réservation.</li>
                  <li>Pour les groupes de plus de 8 personnes, veuillez nous contacter directement.</li>
                  <li>Un acompte peut être demandé pour les réservations de groupe.</li>
                  <li>Veuillez nous informer de toute annulation au moins 24 heures à l'avance.</li>
                </ul>
              </div>
            </motion.div>
            
            {/* Reservation Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white rounded-lg shadow-2xl p-2 relative">
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gold flex items-center justify-center">
                  <CalendarCheck size={28} className="text-white" />
                </div>
                <ReservationForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-8 px-6 md:px-12 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="h-96 rounded-lg overflow-hidden shadow-lg">
            {/* Replace with an actual map embed */}
            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
              <p className="text-gray-600">Carte Google Maps ici</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ReservationPage;
