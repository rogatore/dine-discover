
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from 'framer-motion';

const categories = [
  { id: "entrees", label: "Entrées" },
  { id: "plats", label: "Plats Principaux" },
  { id: "poissons", label: "Poissons & Fruits de Mer" },
  { id: "viandes", label: "Viandes" },
  { id: "vegetariens", label: "Plats Végétariens" },
  { id: "desserts", label: "Desserts" },
  { id: "boissons", label: "Vins & Boissons" },
];

// Menu items for each category
const menuItems = {
  entrees: [
    {
      id: 1,
      name: "Carpaccio de Saint-Jacques",
      description: "Saint-Jacques fraîches, huile d'olive citronnée, fleur de sel et zestes d'agrumes",
      price: "18€",
    },
    {
      id: 2,
      name: "Foie Gras Maison",
      description: "Foie gras mi-cuit, chutney de figues et pain brioché toasté",
      price: "22€",
    },
    {
      id: 3,
      name: "Velouté de Champignons",
      description: "Champignons des bois, crème légère et huile de truffe",
      price: "16€",
    },
    {
      id: 4,
      name: "Œuf Parfait",
      description: "Œuf cuit à basse température, émulsion de pomme de terre, lardons fumés et chapelure d'herbes",
      price: "15€",
    },
    {
      id: 5,
      name: "Tartare de Thon",
      description: "Thon rouge, avocat, mangue et vinaigrette aux agrumes",
      price: "19€",
    },
  ],
  plats: [
    {
      id: 6,
      name: "Suprême de Volaille",
      description: "Suprême de volaille fermière, mousseline de carottes et sauce aux morilles",
      price: "28€",
    },
    {
      id: 7,
      name: "Filet de Bœuf Rossini",
      description: "Filet de bœuf, escalope de foie gras poêlée, sauce aux truffes et pommes fondantes",
      price: "36€",
    },
    {
      id: 8,
      name: "Risotto aux Asperges",
      description: "Asperges vertes, parmesan affiné 24 mois et herbes fraîches",
      price: "26€",
    },
    {
      id: 9,
      name: "Magret de Canard",
      description: "Magret de canard rôti, purée de patate douce, sauce au miel et aux épices",
      price: "32€",
    },
  ],
  poissons: [
    {
      id: 10,
      name: "Filet de Bar en Croûte de Sel",
      description: "Bar de ligne, légumes de saison, émulsion au beurre blanc",
      price: "34€",
    },
    {
      id: 11,
      name: "Saint-Jacques Poêlées",
      description: "Saint-Jacques, risotto noir à l'encre de seiche, émulsion de crustacés",
      price: "36€",
    },
    {
      id: 12,
      name: "Homard Rôti",
      description: "Demi-homard breton rôti, bisque crémeuse, tagliatelles fraîches",
      price: "42€",
    },
    {
      id: 13,
      name: "Sole Meunière",
      description: "Sole entière, beurre noisette aux câpres, purée au citron confit",
      price: "38€",
    },
  ],
  viandes: [
    {
      id: 14,
      name: "Côte de Bœuf pour 2 personnes",
      description: "Côte de bœuf maturée, pommes de terre grenaille, sauce béarnaise",
      price: "78€",
    },
    {
      id: 15,
      name: "Carré d'Agneau",
      description: "Carré d'agneau en croûte d'herbes, jus corsé aux épices, légumes racines",
      price: "34€",
    },
    {
      id: 16,
      name: "Filet Mignon de Veau",
      description: "Filet mignon de veau, gnocchi à la truffe, jus de veau réduit",
      price: "38€",
    },
    {
      id: 17,
      name: "Pigeon Rôti",
      description: "Suprême de pigeon rôti, cuisse confite, mousseline de céleri-rave, sauce au cassis",
      price: "36€",
    },
  ],
  vegetariens: [
    {
      id: 18,
      name: "Risotto aux Champignons",
      description: "Risotto crémeux aux champignons sauvages et truffe noire",
      price: "24€",
    },
    {
      id: 19,
      name: "Assiette de Légumes de Saison",
      description: "Légumes de saison rôtis, purées et condiments, huile d'herbes fraîches",
      price: "22€",
    },
    {
      id: 20,
      name: "Tarte Fine aux Légumes",
      description: "Tarte fine aux légumes confits, chèvre frais et mesclun",
      price: "20€",
    },
    {
      id: 21,
      name: "Gnocchi aux Épinards",
      description: "Gnocchi maison, crème d'épinards, ricotta et pignons de pin torréfiés",
      price: "24€",
    },
  ],
  desserts: [
    {
      id: 22,
      name: "Soufflé au Grand Marnier",
      description: "Soufflé aérien parfumé au Grand Marnier, glace vanille",
      price: "14€",
    },
    {
      id: 23,
      name: "Tarte au Citron Meringuée",
      description: "Crème de citron, meringue italienne légèrement caramélisée",
      price: "12€",
    },
    {
      id: 24,
      name: "Assiette de Fromages Affinés",
      description: "Sélection de fromages affinés, pain aux noix et confiture de figues",
      price: "16€",
    },
    {
      id: 25,
      name: "Fondant au Chocolat",
      description: "Cœur coulant au chocolat noir 70%, glace au caramel beurre salé",
      price: "14€",
    },
    {
      id: 26,
      name: "Millefeuille Vanille",
      description: "Crème légère à la vanille de Madagascar, caramel et croustillant feuilleté",
      price: "13€",
    },
  ],
  boissons: [
    {
      id: 27,
      name: "Sélection de Vins au Verre",
      description: "Demandez notre carte des vins au sommelier",
      price: "8-15€",
    },
    {
      id: 28,
      name: "Cocktails Signature",
      description: "Créations exclusives de notre mixologue",
      price: "14-18€",
    },
    {
      id: 29,
      name: "Champagne",
      description: "Sélection de champagnes prestigieux",
      price: "15-25€",
    },
    {
      id: 30,
      name: "Eaux Minérales",
      description: "Plates ou gazeuses (75cl)",
      price: "6€",
    },
    {
      id: 31,
      name: "Café & Infusions",
      description: "Sélection de cafés grands crus et infusions bio",
      price: "4-7€",
    },
  ],
};

const MenuPage = () => {
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
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6 md:px-12 bg-black text-white relative">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?q=80&w=2070" 
            alt="Restaurant dishes"
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
            <p className="font-serif italic text-gold-light tracking-wide mb-3">Notre carte</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
              Menu Gastronomique
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-white/80 mb-4">
              Une sélection de plats raffinés, préparés avec des produits frais et de saison.
              Notre menu évolue au fil des saisons pour vous offrir le meilleur de la gastronomie.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Menu Section */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="container mx-auto max-w-5xl">
          <Tabs defaultValue="entrees" value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            {/* Category Tabs */}
            <div className="flex justify-center mb-12 overflow-x-auto pb-2">
              <TabsList className="grid grid-flow-col auto-cols-auto gap-2 bg-transparent">
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="px-4 py-2 text-sm font-medium data-[state=active]:bg-gold data-[state=active]:text-white whitespace-nowrap"
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
                >
                  <h2 className="text-2xl font-serif font-bold mb-8 text-center">
                    {category.label}
                  </h2>
                  
                  <div className="space-y-8">
                    {menuItems[category.id as keyof typeof menuItems].map((item) => (
                      <motion.div 
                        key={item.id} 
                        variants={itemVariants}
                        className="border-b border-gray-100 pb-6 last:border-0"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-serif text-xl font-medium">{item.name}</h3>
                          <span className="font-serif text-xl font-semibold text-gold-dark ml-4">{item.price}</span>
                        </div>
                        <p className="text-gray-600">{item.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
          
          <div className="mt-16 text-center">
            <p className="text-gray-600 italic mb-4">
              Tous nos plats sont préparés à la commande avec des produits frais et de saison.<br />
              N'hésitez pas à nous informer de vos allergies ou restrictions alimentaires.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default MenuPage;
