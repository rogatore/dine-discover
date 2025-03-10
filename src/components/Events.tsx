
import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const events = [
  {
    id: 1,
    title: "Soirée Dégustation de Vins",
    description: "Une soirée exceptionnelle de dégustation de vins rares, accompagnés de mets raffinés spécialement préparés par notre chef.",
    date: "26 Juin 2023",
    time: "19:00 - 22:00",
    location: "Salle privée",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070",
    price: "85€ par personne"
  },
  {
    id: 2,
    title: "Atelier Cuisine avec le Chef",
    description: "Apprenez les secrets de notre cuisine lors d'un atelier exclusif avec notre chef exécutif. Inclut déjeuner et boissons.",
    date: "15 Juillet 2023",
    time: "10:00 - 14:00",
    location: "Cuisine principale",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070",
    price: "120€ par personne"
  },
  {
    id: 3,
    title: "Dîner Jazz Live",
    description: "Un dîner 5 services accompagné d'un concert de jazz live pour une soirée mémorable. Menu spécial créé pour l'occasion.",
    date: "30 Juillet 2023",
    time: "19:30 - 23:00",
    location: "Restaurant principal",
    image: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?q=80&w=2070",
    price: "95€ par personne"
  }
];

const Events = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section id="events" className="py-24 px-6 md:px-12 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-gold-dark font-medium mb-3">Événements à Venir</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Expériences Culinaires Spéciales
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Découvrez nos événements exclusifs qui associent gastronomie, divertissement et partage pour des moments inoubliables.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {events.map((event) => (
            <motion.div 
              key={event.id}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif text-xl font-medium mb-3">{event.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{event.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <CalendarDays size={16} className="text-gold-dark" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Clock size={16} className="text-gold-dark" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <MapPin size={16} className="text-gold-dark" />
                    <span>{event.location}</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gold-dark">{event.price}</span>
                  <Button size="sm" variant="outline">Réserver</Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Events;
