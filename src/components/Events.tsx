
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, Clock, MapPin, ChevronDown, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const events = [
  {
    id: 1,
    title: "Soirée Dégustation de Vins",
    description: "Une soirée exceptionnelle de dégustation de vins rares, accompagnés de mets raffinés spécialement préparés par notre chef.",
    longDescription: "Découvrez notre soirée dégustation de vins, un événement gastronomique unique où nos sommeliers vous guideront à travers une sélection des meilleurs crus français et internationaux. Chaque vin sera accompagné d'un mets raffiné, spécialement conçu pour sublimer les arômes et saveurs. Un moment d'exception pour les amateurs de vin et de gastronomie.",
    date: "26 Juin 2023",
    time: "19:00 - 22:00",
    location: "Salle privée",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070",
    price: "85€ par personne",
    spots: 12,
    spotsLeft: 5
  },
  {
    id: 2,
    title: "Atelier Cuisine avec le Chef",
    description: "Apprenez les secrets de notre cuisine lors d'un atelier exclusif avec notre chef exécutif. Inclut déjeuner et boissons.",
    longDescription: "Participez à un atelier interactif où notre chef exécutif partagera avec vous ses techniques et astuces professionnelles. Vous apprendrez à réaliser plusieurs plats de notre menu, avant de les déguster tous ensemble dans une ambiance conviviale. Une expérience inoubliable pour les passionnés de cuisine qui souhaitent perfectionner leurs compétences culinaires.",
    date: "15 Juillet 2023",
    time: "10:00 - 14:00",
    location: "Cuisine principale",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070",
    price: "120€ par personne",
    spots: 8,
    spotsLeft: 3
  },
  {
    id: 3,
    title: "Dîner Jazz Live",
    description: "Un dîner 5 services accompagné d'un concert de jazz live pour une soirée mémorable. Menu spécial créé pour l'occasion.",
    longDescription: "Immergez-vous dans l'atmosphère feutrée de notre soirée jazz, où un menu gastronomique en 5 services sera accompagné par les performances live d'un trio de jazz de renom. Notre chef a créé un menu spécial pour cette occasion, mettant en valeur des produits de saison et des saveurs exceptionnelles. Une expérience sensorielle complète qui ravira vos papilles tout en vous berçant de douces mélodies.",
    date: "30 Juillet 2023",
    time: "19:30 - 23:00",
    location: "Restaurant principal",
    image: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?q=80&w=2070",
    price: "95€ par personne",
    spots: 30,
    spotsLeft: 12
  },
  {
    id: 4,
    title: "Brunch Gastronomique",
    description: "Un brunch de luxe avec une sélection de mets sucrés et salés, accompagnés de champagne et jus frais pressés.",
    longDescription: "Notre brunch gastronomique dominical est une expérience culinaire à ne pas manquer. Une sélection abondante de spécialités sucrées et salées, préparées avec les meilleurs ingrédients de saison. Accompagnez votre repas de champagne, de cocktails signature ou de jus de fruits frais pressés. Un moment de détente et de plaisir pour bien commencer votre dimanche.",
    date: "6 Août 2023",
    time: "11:00 - 15:00",
    location: "Terrasse panoramique",
    image: "https://images.unsplash.com/photo-1513442542250-854d436a73f2?q=80&w=2074",
    price: "65€ par personne",
    spots: 40,
    spotsLeft: 15
  }
];

const Events = () => {
  const { toast } = useToast();
  const [selectedEvent, setSelectedEvent] = useState<null | (typeof events)[0]>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null);
  const [bookingDetails, setBookingDetails] = useState({
    name: "",
    email: "",
    phone: "",
    guests: 2
  });

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

  const toggleEventDetails = (eventId: number) => {
    setExpandedEvent(expandedEvent === eventId ? null : eventId);
  };

  const handleBookEvent = (event: (typeof events)[0]) => {
    setSelectedEvent(event);
    setIsBookingOpen(true);
  };

  const submitBooking = () => {
    // En situation réelle, vous intégreriez ici l'API de réservation
    
    toast({
      title: "Réservation confirmée !",
      description: `Votre réservation pour "${selectedEvent?.title}" a été enregistrée. Vous recevrez un email de confirmation sous peu.`,
    });
    
    setIsBookingOpen(false);
    setBookingDetails({
      name: "",
      email: "",
      phone: "",
      guests: 2
    });
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {events.map((event) => (
            <motion.div 
              key={event.id}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-gold-dark text-white px-3 py-1 rounded-full text-sm font-medium">
                  {event.spotsLeft} places restantes
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-serif text-xl font-medium">{event.title}</h3>
                  <span className="font-medium text-gold-dark">{event.price}</span>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                
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
                
                <div className="mt-auto pt-4 flex flex-col gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex justify-between w-full"
                    onClick={() => toggleEventDetails(event.id)}
                  >
                    <span>Plus de détails</span>
                    <ChevronDown 
                      size={16} 
                      className={`transition-transform duration-300 ${expandedEvent === event.id ? 'rotate-180' : ''}`} 
                    />
                  </Button>
                  
                  {expandedEvent === event.id && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-3 p-3 bg-gray-50 rounded-md text-sm text-gray-700"
                    >
                      <p>{event.longDescription}</p>
                    </motion.div>
                  )}
                  
                  <Button 
                    onClick={() => handleBookEvent(event)}
                    className="bg-gold hover:bg-gold-dark text-black"
                  >
                    Réserver
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Réservation Dialog */}
      <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Réserver : {selectedEvent?.title}</DialogTitle>
            <DialogDescription>
              Complétez ce formulaire pour réserver votre place à cet événement spécial.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Nom complet
              </Label>
              <Input 
                id="name" 
                className="col-span-3" 
                value={bookingDetails.name}
                onChange={(e) => setBookingDetails({...bookingDetails, name: e.target.value})}
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input 
                id="email" 
                type="email" 
                className="col-span-3"
                value={bookingDetails.email}
                onChange={(e) => setBookingDetails({...bookingDetails, email: e.target.value})}
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="phone" className="text-right">
                Téléphone
              </Label>
              <Input 
                id="phone" 
                type="tel" 
                className="col-span-3"
                value={bookingDetails.phone}
                onChange={(e) => setBookingDetails({...bookingDetails, phone: e.target.value})}
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="guests" className="text-right">
                Participants
              </Label>
              <div className="col-span-3 flex items-center">
                <Input 
                  id="guests" 
                  type="number"
                  min="1"
                  max={selectedEvent?.spotsLeft || 1}
                  className="w-20"
                  value={bookingDetails.guests}
                  onChange={(e) => setBookingDetails({...bookingDetails, guests: parseInt(e.target.value) || 1})}
                />
                <span className="ml-3 flex items-center text-sm text-gray-500">
                  <Users size={16} className="mr-1" />
                  {selectedEvent?.spotsLeft} places disponibles
                </span>
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="date" className="text-right">
                Date
              </Label>
              <div className="col-span-3 flex items-center gap-2 bg-gray-100 p-2 rounded-md">
                <Calendar size={16} className="text-gold-dark" />
                <span>{selectedEvent?.date}</span>
                <span className="mx-2">•</span>
                <Clock size={16} className="text-gold-dark" />
                <span>{selectedEvent?.time}</span>
              </div>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Annuler</Button>
            </DialogClose>
            <Button onClick={submitBooking} className="bg-gold hover:bg-gold-dark text-black">
              Confirmer la réservation
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Events;
