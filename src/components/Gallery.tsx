
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { X, ZoomIn, ArrowLeft, ArrowRight } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070",
    alt: "Intérieur élégant du restaurant",
    description: "Notre espace principal avec son ambiance chaleureuse et raffinée",
    size: "big"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1521917441209-e886f0404a7b?q=80&w=2070",
    alt: "Présentation d'un plat gastronomique",
    description: "Découvrez notre approche artistique de la présentation des plats",
    size: "small"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974",
    alt: "Préparation de cocktails",
    description: "Nos mixologues créent des cocktails signature uniques",
    size: "small"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1554306274-f23873d9a26c?q=80&w=2070",
    alt: "Ambiance du restaurant",
    description: "Une atmosphère intime idéale pour vos dîners romantiques",
    size: "small"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1507914997-7d4f70413a9f?q=80&w=1780",
    alt: "Expérience de dégustation",
    description: "Nos dégustations de vins accompagnées de mets raffinés",
    size: "small"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1523459346521-92e52a3561a3?q=80&w=1974",
    alt: "Chef préparant un plat",
    description: "Nos chefs en action, préparant des plats d'exception",
    size: "big"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070",
    alt: "Salle de réception",
    description: "Notre salle de réception pour vos événements spéciaux",
    size: "big"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1974",
    alt: "Détail de table",
    description: "L'attention portée aux détails est notre signature",
    size: "small"
  },
];

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [selectedImage, setSelectedImage] = useState<null | typeof galleryImages[0]>(null);

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
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: 0.7,
        ease: [0.43, 0.13, 0.23, 0.96]
      } 
    }
  };

  const openLightbox = (image: typeof galleryImages[0]) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction: 'next' | 'prev') => {
    if (!selectedImage) return;
    
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % galleryImages.length;
    } else {
      newIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    }
    
    setSelectedImage(galleryImages[newIndex]);
  };

  // Close on escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight' && selectedImage) navigateImage('next');
      if (e.key === 'ArrowLeft' && selectedImage) navigateImage('prev');
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <section id="gallery" className="py-24 px-6 md:px-12 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-gold-dark font-medium mb-3">Notre Galerie</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Découvrez l'Expérience
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Un aperçu visuel de notre restaurant, de notre cuisine et de l'atmosphère unique que nous avons créée pour vous.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              className={`relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group
                ${image.size === 'big' ? 'md:col-span-2 md:row-span-2' : ''}`}
              onClick={() => openLightbox(image)}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <p className="text-white font-medium mb-1">{image.alt}</p>
                  <p className="text-white/80 text-sm">{image.description}</p>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn size={20} className="text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
        >
          <div 
            className="absolute inset-0 z-0" 
            onClick={closeLightbox}
          ></div>
          
          <button 
            className="absolute top-4 right-4 bg-black/40 hover:bg-black/60 rounded-full p-2 text-white z-20"
            onClick={closeLightbox}
          >
            <X size={24} />
          </button>
          
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 rounded-full p-3 text-white z-20"
            onClick={() => navigateImage('prev')}
          >
            <ArrowLeft size={24} />
          </button>
          
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 rounded-full p-3 text-white z-20"
            onClick={() => navigateImage('next')}
          >
            <ArrowRight size={24} />
          </button>
          
          <div className="relative z-10 max-w-6xl max-h-[85vh] overflow-hidden">
            <motion.img 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="max-h-[75vh] max-w-full object-contain rounded-lg"
            />
            <div className="bg-black/60 backdrop-blur-sm p-4 mt-2 rounded-lg">
              <h3 className="text-white text-xl font-medium mb-1">{selectedImage.alt}</h3>
              <p className="text-white/80">{selectedImage.description}</p>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;
