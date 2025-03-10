
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const categories = [
  { id: "entrees", label: "Entrées" },
  { id: "plats", label: "Plats" },
  { id: "desserts", label: "Desserts" },
  { id: "boissons", label: "Boissons" },
];

const menuItems = {
  entrees: [
    {
      id: 1,
      name: "Carpaccio de Saint-Jacques",
      description: "Saint-Jacques fraîches, huile d'olive citronnée, fleur de sel",
      price: "18€",
      image: "https://images.unsplash.com/photo-1533745848184-3db07256e163?q=80&w=2072"
    },
    {
      id: 2,
      name: "Foie Gras Maison",
      description: "Foie gras mi-cuit, chutney de figues et pain brioché",
      price: "22€",
      image: "https://images.unsplash.com/photo-1605209971703-73c7ed7c923e?q=80&w=2070"
    },
    {
      id: 3,
      name: "Velouté de Champignons",
      description: "Champignons des bois, crème légère et huile de truffe",
      price: "16€",
      image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=2071"
    },
  ],
  plats: [
    {
      id: 4,
      name: "Filet de Bœuf Rossini",
      description: "Filet de bœuf, escalope de foie gras poêlée, sauce aux truffes",
      price: "36€",
      image: "https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=2031"
    },
    {
      id: 5,
      name: "Risotto aux Asperges",
      description: "Asperges vertes, parmesan affiné et herbes fraîches",
      price: "28€",
      image: "https://images.unsplash.com/photo-1589187151053-5ec8818e661b?q=80&w=2187"
    },
    {
      id: 6,
      name: "Filet de Bar en Croûte de Sel",
      description: "Bar de ligne, légumes de saison, émulsion au beurre blanc",
      price: "32€",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=2070"
    },
  ],
  desserts: [
    {
      id: 7,
      name: "Soufflé au Grand Marnier",
      description: "Soufflé aérien parfumé au Grand Marnier, glace vanille",
      price: "14€",
      image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=1974"
    },
    {
      id: 8,
      name: "Tarte au Citron Meringuée",
      description: "Crème de citron, meringue italienne légèrement caramélisée",
      price: "12€",
      image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1964"
    },
    {
      id: 9,
      name: "Assiette de Fromages Affinés",
      description: "Sélection de fromages affinés, pain aux noix et confiture de figues",
      price: "16€",
      image: "https://images.unsplash.com/photo-1505575967455-40e256f73376?q=80&w=2070"
    },
  ],
  boissons: [
    {
      id: 10,
      name: "Sélection de Vins au Verre",
      description: "Demandez notre carte des vins au sommelier",
      price: "8-15€",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070"
    },
    {
      id: 11,
      name: "Cocktails Signature",
      description: "Créations exclusives de notre mixologue",
      price: "14-18€",
      image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=1972"
    },
    {
      id: 12,
      name: "Champagne",
      description: "Sélection de champagnes prestigieux",
      price: "15-25€",
      image: "https://images.unsplash.com/photo-1592903354425-6aea74304180?q=80&w=2031"
    },
  ],
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("entrees");

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="menu" className="py-24 px-6 md:px-12 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-gold-dark font-medium mb-3">Délectez-vous</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Notre Menu
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Découvrez nos plats signature, préparés avec passion et des ingrédients locaux soigneusement sélectionnés pour une expérience gastronomique inoubliable.
          </p>
        </motion.div>

        <Tabs defaultValue="entrees" value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          {/* Category Tabs */}
          <div className="flex justify-center mb-10">
            <TabsList className="grid grid-flow-col auto-cols-auto gap-2 bg-transparent">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="px-6 py-2 text-sm font-medium data-[state=active]:bg-gold data-[state=active]:text-white"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Menu Items */}
          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {menuItems[category.id as keyof typeof menuItems].map((item) => (
                  <motion.div 
                    key={item.id} 
                    variants={itemVariants}
                    className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="h-56 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-serif text-xl font-medium">{item.name}</h3>
                        <span className="font-serif text-lg font-semibold text-gold-dark">{item.price}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12 text-center">
          <Button asChild className="gap-2">
            <Link to="/menu">
              Voir le menu complet <ChevronRight size={16} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
