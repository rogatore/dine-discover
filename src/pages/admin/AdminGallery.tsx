
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AdminLayout from '@/components/AdminLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Image, Upload, Trash2, Plus, Search, Filter } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '@/components/ui/form';

const galleryImages = [
  { id: 1, title: 'Entrée du restaurant', url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4', category: 'Ambiance' },
  { id: 2, title: 'Plat signature', url: 'https://images.unsplash.com/photo-1600891964092-4316c288032e', category: 'Cuisine' },
  { id: 3, title: 'Terrasse', url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5', category: 'Ambiance' },
  { id: 4, title: 'Cocktail spécial', url: 'https://images.unsplash.com/photo-1536935338788-846bb9981813', category: 'Boissons' },
  { id: 5, title: 'Salle principale', url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0', category: 'Ambiance' },
  { id: 6, title: 'Dessert du chef', url: 'https://images.unsplash.com/photo-1551024601-bec78aea704b', category: 'Cuisine' },
  { id: 7, title: 'Bar', url: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187', category: 'Ambiance' },
  { id: 8, title: 'Événement musical', url: 'https://images.unsplash.com/photo-1485872299829-c673f5194813', category: 'Événements' },
];

const categories = ['Toutes', 'Ambiance', 'Cuisine', 'Boissons', 'Événements'];

const AdminGallery = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState(galleryImages);
  const [selectedImages, setSelectedImages] = useState<number[]>([]);
  
  const filteredImages = images.filter(image => {
    const matchesCategory = activeTab === 'all' || image.category.toLowerCase() === activeTab;
    const matchesSearch = image.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleImageUpload = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Image téléchargée avec succès",
      description: "L'image a été ajoutée à la galerie."
    });
  };

  const toggleImageSelection = (id: number) => {
    if (selectedImages.includes(id)) {
      setSelectedImages(selectedImages.filter(imgId => imgId !== id));
    } else {
      setSelectedImages([...selectedImages, id]);
    }
  };

  const deleteSelectedImages = () => {
    setImages(images.filter(image => !selectedImages.includes(image.id)));
    toast({
      title: `${selectedImages.length} image(s) supprimée(s)`,
      description: "Les images sélectionnées ont été supprimées de la galerie."
    });
    setSelectedImages([]);
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
              <h2 className="text-2xl font-serif mb-2">Gestion de la Galerie</h2>
              <p className="text-white/70">Ajoutez, modifiez ou supprimez des images de la galerie.</p>
            </div>
            <Button className="bg-gold hover:bg-gold-dark text-black">
              <Plus size={16} className="mr-2" /> Ajouter une image
            </Button>
          </div>
        </motion.div>
        
        <motion.div variants={itemVariants} className="mb-8">
          <Card className="bg-white/5 border-white/10 shadow-lg">
            <CardContent className="p-6">
              <form onSubmit={handleImageUpload}>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="image-title">Titre de l'image</Label>
                    <Input 
                      id="image-title" 
                      placeholder="Entrez un titre descriptif" 
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="image-category">Catégorie</Label>
                    <select 
                      id="image-category" 
                      className="w-full h-10 rounded-md bg-white/10 border border-white/20 text-white px-3 py-2"
                    >
                      {categories.filter(cat => cat !== 'Toutes').map((category) => (
                        <option key={category} value={category.toLowerCase()}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="image-upload">Télécharger une image</Label>
                    <div className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center hover:border-gold-light transition-colors">
                      <Upload className="mx-auto h-12 w-12 text-white/50 mb-4" />
                      <p className="text-sm text-white/70 mb-2">
                        Glissez-déposez une image ou cliquez pour parcourir
                      </p>
                      <p className="text-xs text-white/50">
                        PNG, JPG ou GIF. Taille maximale de 5Mo.
                      </p>
                      <input 
                        id="image-upload" 
                        type="file" 
                        accept="image/*" 
                        className="hidden" 
                      />
                      <Button 
                        type="button" 
                        variant="outline" 
                        size="sm" 
                        className="mt-4 bg-white/10 border-white/20 hover:bg-white/20"
                        onClick={() => document.getElementById('image-upload')?.click()}
                      >
                        Parcourir
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button type="submit" className="bg-gold hover:bg-gold-dark text-black">
                      <Upload size={16} className="mr-2" /> Télécharger l'image
                    </Button>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <Card className="bg-white/5 border-white/10 shadow-lg">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                  <div className="relative w-full sm:w-64">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 h-4 w-4" />
                    <Input 
                      placeholder="Rechercher une image..." 
                      className="pl-10 bg-white/10 border-white/20 text-white"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Filter className="h-4 w-4 text-white/50" />
                    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                      <TabsList className="bg-white/10">
                        {categories.map((category) => (
                          <TabsTrigger 
                            key={category} 
                            value={category === 'Toutes' ? 'all' : category.toLowerCase()}
                            className="data-[state=active]:bg-gold data-[state=active]:text-black"
                          >
                            {category}
                          </TabsTrigger>
                        ))}
                      </TabsList>
                    </Tabs>
                  </div>
                </div>
                
                {selectedImages.length > 0 && (
                  <Button 
                    variant="destructive" 
                    onClick={deleteSelectedImages}
                    className="shrink-0"
                  >
                    <Trash2 size={16} className="mr-2" />
                    Supprimer ({selectedImages.length})
                  </Button>
                )}
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredImages.map((image) => (
                  <div 
                    key={image.id} 
                    className={`relative group rounded-lg overflow-hidden border ${
                      selectedImages.includes(image.id)
                        ? 'border-gold-light ring-2 ring-gold-light'
                        : 'border-white/10'
                    }`}
                  >
                    <div 
                      className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center"
                    >
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="bg-white/20 border-white/50 hover:bg-white/30"
                          onClick={() => toggleImageSelection(image.id)}
                        >
                          {selectedImages.includes(image.id) ? 'Désélectionner' : 'Sélectionner'}
                        </Button>
                        <Button 
                          size="sm" 
                          variant="destructive"
                          onClick={() => {
                            setImages(images.filter(img => img.id !== image.id));
                            toast({
                              title: "Image supprimée",
                              description: "L'image a été supprimée de la galerie."
                            });
                          }}
                        >
                          <Trash2 size={14} />
                        </Button>
                      </div>
                    </div>
                    <img 
                      src={image.url}
                      alt={image.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-3 bg-black/30">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-sm">{image.title}</h3>
                          <p className="text-xs text-white/70">{image.category}</p>
                        </div>
                        <div 
                          className={`w-5 h-5 rounded-full border-2 ${
                            selectedImages.includes(image.id)
                              ? 'bg-gold-light border-gold-light'
                              : 'border-white/50'
                          } cursor-pointer`}
                          onClick={() => toggleImageSelection(image.id)}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {filteredImages.length === 0 && (
                <div className="text-center py-12">
                  <Image className="mx-auto h-12 w-12 text-white/30 mb-4" />
                  <h3 className="text-lg font-medium mb-1">Aucune image trouvée</h3>
                  <p className="text-white/50">
                    Aucune image ne correspond à vos critères de recherche.
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

export default AdminGallery;
