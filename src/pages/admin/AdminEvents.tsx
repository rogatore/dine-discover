
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AdminLayout from '@/components/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Calendar, Clock, Users, MapPin, Bell, Plus, Pencil, Trash2, Calendar as CalendarIcon, Search, Filter } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

// Demo event data
const eventsData = [
  {
    id: 1,
    title: "Soirée Dégustation de Vins",
    description: "Découvrez notre sélection de vins accompagnés de tapas et fromages.",
    date: "2023-06-28",
    time: "19:00",
    location: "Salle principale",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3",
    registrations: 28,
    capacity: 30,
    status: "upcoming",
    category: "Dégustation"
  },
  {
    id: 2,
    title: "Cours de Cuisine Italienne",
    description: "Apprenez à préparer des pâtes fraîches et une sauce authentique avec notre chef.",
    date: "2023-07-03",
    time: "18:00",
    location: "Cuisine ouverte",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d",
    registrations: 15,
    capacity: 20,
    status: "upcoming",
    category: "Atelier"
  },
  {
    id: 3,
    title: "Dîner Jazz",
    description: "Profitez d'un dîner gastronomique accompagné de musique jazz live.",
    date: "2023-07-10",
    time: "20:00",
    location: "Terrasse",
    image: "https://images.unsplash.com/photo-1485872299829-c673f5194813",
    registrations: 42,
    capacity: 50,
    status: "upcoming",
    category: "Musique"
  },
  {
    id: 4,
    title: "Brunch du Dimanche",
    description: "Notre fameux brunch dominical avec buffet à volonté.",
    date: "2023-06-18",
    time: "11:00",
    location: "Salle principale",
    image: "https://images.unsplash.com/photo-1533089860892-a9b9ac6cd6b4",
    registrations: 38,
    capacity: 40,
    status: "past",
    category: "Brunch"
  },
  {
    id: 5,
    title: "Menu Spécial Saint-Valentin",
    description: "Menu dégustation en 5 services avec accord mets et vins.",
    date: "2023-02-14",
    time: "19:30",
    location: "Salon privé",
    image: "https://images.unsplash.com/photo-1626200925151-9bdbd8c1ad6a",
    registrations: 30,
    capacity: 30,
    status: "past",
    category: "Événement spécial"
  },
];

const categories = ["Tous", "Dégustation", "Atelier", "Musique", "Brunch", "Événement spécial"];

const AdminEvents = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("upcoming");
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [searchQuery, setSearchQuery] = useState("");
  const [events, setEvents] = useState(eventsData);

  // Filter events based on active tab, category and search query
  const filteredEvents = events.filter(event => {
    const matchesTab = activeTab === "all" || event.status === activeTab;
    const matchesCategory = activeCategory === "Tous" || event.category === activeCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         event.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesCategory && matchesSearch;
  });

  const handleDeleteEvent = (id: number) => {
    setEvents(events.filter(event => event.id !== id));
    toast({
      title: "Événement supprimé",
      description: "L'événement a été supprimé avec succès."
    });
  };

  const handleEventSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Événement créé",
      description: "Le nouvel événement a été créé avec succès."
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <AdminLayout>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-serif mb-2">Gestion des Événements</h2>
              <p className="text-white/70">Créez et gérez les événements de votre restaurant.</p>
            </div>
            <Button className="bg-gold hover:bg-gold-dark text-black">
              <Plus size={16} className="mr-2" /> Créer un événement
            </Button>
          </div>
        </motion.div>
        
        {/* Create Event Form */}
        <motion.div variants={itemVariants} className="mb-8">
          <Card className="bg-white/5 border-white/10 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">Créer un nouvel événement</CardTitle>
              <CardDescription className="text-white/70">
                Remplissez les informations ci-dessous pour créer un nouvel événement.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleEventSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="event-title">Titre de l'événement</Label>
                      <Input 
                        id="event-title" 
                        placeholder="Ex: Soirée dégustation de vins" 
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="event-description">Description</Label>
                      <textarea 
                        id="event-description" 
                        placeholder="Description détaillée de l'événement..." 
                        className="w-full h-24 rounded-md bg-white/10 border border-white/20 text-white px-3 py-2 placeholder:text-white/50"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="event-category">Catégorie</Label>
                      <select 
                        id="event-category" 
                        className="w-full h-10 rounded-md bg-white/10 border border-white/20 text-white px-3 py-2"
                      >
                        {categories.filter(cat => cat !== "Tous").map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="event-image">Image de l'événement</Label>
                      <div className="border-2 border-dashed border-white/20 rounded-lg p-4 text-center hover:border-gold-light transition-colors">
                        <p className="text-sm text-white/70 mb-2">
                          Glissez-déposez une image ou cliquez pour parcourir
                        </p>
                        <input 
                          id="event-image" 
                          type="file" 
                          accept="image/*" 
                          className="hidden" 
                        />
                        <Button 
                          type="button" 
                          variant="outline" 
                          size="sm" 
                          className="mt-2 bg-white/10 border-white/20 hover:bg-white/20"
                          onClick={() => document.getElementById('event-image')?.click()}
                        >
                          Parcourir
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="event-date">Date</Label>
                        <div className="relative">
                          <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 h-4 w-4" />
                          <Input 
                            id="event-date" 
                            type="date" 
                            className="pl-10 bg-white/10 border-white/20 text-white"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="event-time">Heure</Label>
                        <div className="relative">
                          <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 h-4 w-4" />
                          <Input 
                            id="event-time" 
                            type="time" 
                            className="pl-10 bg-white/10 border-white/20 text-white"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="event-location">Lieu</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 h-4 w-4" />
                        <Input 
                          id="event-location" 
                          placeholder="Ex: Salle principale, Terrasse..." 
                          className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="event-capacity">Capacité</Label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 h-4 w-4" />
                        <Input 
                          id="event-capacity" 
                          type="number" 
                          min="1"
                          placeholder="Nombre maximum de participants" 
                          className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                        />
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <Button type="submit" className="w-full bg-gold hover:bg-gold-dark text-black">
                        <Bell size={16} className="mr-2" /> Créer l'événement
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
        
        {/* Events List */}
        <motion.div variants={itemVariants}>
          <Card className="bg-white/5 border-white/10 shadow-lg">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                  <div className="relative w-full sm:w-64">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 h-4 w-4" />
                    <Input 
                      placeholder="Rechercher un événement..." 
                      className="pl-10 bg-white/10 border-white/20 text-white"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  
                  <div className="flex gap-4">
                    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                      <TabsList className="bg-white/10">
                        <TabsTrigger 
                          value="all" 
                          className="data-[state=active]:bg-gold data-[state=active]:text-black"
                        >
                          Tous
                        </TabsTrigger>
                        <TabsTrigger 
                          value="upcoming" 
                          className="data-[state=active]:bg-gold data-[state=active]:text-black"
                        >
                          À venir
                        </TabsTrigger>
                        <TabsTrigger 
                          value="past" 
                          className="data-[state=active]:bg-gold data-[state=active]:text-black"
                        >
                          Passés
                        </TabsTrigger>
                      </TabsList>
                    </Tabs>
                    
                    <select 
                      className="h-10 rounded-md bg-white/10 border border-white/20 text-white px-3 py-2"
                      value={activeCategory}
                      onChange={(e) => setActiveCategory(e.target.value)}
                    >
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              
              {filteredEvents.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {filteredEvents.map((event) => (
                    <div 
                      key={event.id} 
                      className="bg-white/5 rounded-lg overflow-hidden border border-white/10 flex flex-col sm:flex-row"
                    >
                      <div className="w-full sm:w-48 h-48 sm:h-auto">
                        <img 
                          src={event.image} 
                          alt={event.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 p-4 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-medium text-lg">{event.title}</h3>
                            <span className={`px-2 py-1 rounded text-xs ${
                              event.status === 'upcoming' 
                                ? 'bg-green-500/20 text-green-500' 
                                : 'bg-gray-500/20 text-gray-400'
                            }`}>
                              {event.status === 'upcoming' ? 'À venir' : 'Passé'}
                            </span>
                          </div>
                          <p className="text-sm text-white/70 mb-3 line-clamp-2">{event.description}</p>
                          <div className="flex flex-wrap gap-y-2 text-xs text-white/60">
                            <div className="flex items-center mr-4">
                              <Calendar className="h-3 w-3 mr-1" />
                              {new Date(event.date).toLocaleDateString('fr-FR', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric'
                              })}
                            </div>
                            <div className="flex items-center mr-4">
                              <Clock className="h-3 w-3 mr-1" />
                              {event.time}
                            </div>
                            <div className="flex items-center mr-4">
                              <MapPin className="h-3 w-3 mr-1" />
                              {event.location}
                            </div>
                            <div className="flex items-center">
                              <Users className="h-3 w-3 mr-1" />
                              {event.registrations}/{event.capacity} inscrits
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-end gap-2 mt-4">
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="bg-white/10 border-white/30 hover:bg-white/20"
                          >
                            <Pencil size={14} className="mr-1" /> Modifier
                          </Button>
                          <Button 
                            size="sm" 
                            variant="destructive"
                            onClick={() => handleDeleteEvent(event.id)}
                          >
                            <Trash2 size={14} className="mr-1" /> Supprimer
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Bell className="mx-auto h-12 w-12 text-white/30 mb-4" />
                  <h3 className="text-lg font-medium mb-1">Aucun événement trouvé</h3>
                  <p className="text-white/50">
                    Aucun événement ne correspond à vos critères de recherche.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </AdminLayout>
  );
};

export default AdminEvents;
