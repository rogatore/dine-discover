
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 brightness-[0.4] z-0">
        {/* Use a placeholder color that will show until the video loads */}
        <div className="absolute inset-0 bg-black/80"></div>
        
        {/* Replace with an actual video URL in production */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
          poster="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070"
        >
          {/* Add a video source in production */}
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="font-serif italic text-gold-light tracking-wide mb-3">Une expérience culinaire unique</p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            Dine & Discover
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/80 mb-10">
            Découvrez une cuisine gastronomique dans un cadre élégant et intime. 
            Notre restaurant associe saveurs authentiques et techniques modernes 
            pour créer une expérience culinaire inoubliable.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button asChild size="lg" className="bg-gold hover:bg-gold-dark text-black">
            <Link to="/reservation">Réserver une table</Link>
          </Button>
          <Button asChild variant="ghost" size="lg" className="text-white border-2 border-gold-light hover:bg-gold-light/20 group transition-all duration-300">
            <Link to="/menu" className="flex items-center gap-2">
              Découvrir notre menu 
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5
          }}
        >
          <div className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/60 rounded-full animate-bounce"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
