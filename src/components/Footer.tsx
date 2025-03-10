
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6 md:px-12">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-serif font-bold tracking-tighter">
              Dine & Discover
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Une expérience gastronomique d'exception dans un cadre élégant et chaleureux, 
              où chaque plat raconte une histoire.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-gold-light transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-light transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-light transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin size={20} className="shrink-0 mt-1" />
                <p className="text-sm">123 Avenue de la Gastronomie, 75008 Paris, France</p>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone size={20} />
                <p className="text-sm">+33 1 23 45 67 89</p>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail size={20} />
                <p className="text-sm">contact@dinediscover.com</p>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium mb-4">Horaires d'Ouverture</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-gray-400">
                <Clock size={20} className="shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-medium text-white">Déjeuner</p>
                  <p className="text-sm">Mardi à Dimanche: 12h00 - 14h30</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-gray-400">
                <Clock size={20} className="shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-medium text-white">Dîner</p>
                  <p className="text-sm">Mardi à Samedi: 19h00 - 22h30</p>
                </div>
              </div>
              <p className="text-sm text-gray-400 italic mt-2">Fermé le Lundi</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-gold-light transition-colors text-sm">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-400 hover:text-gold-light transition-colors text-sm">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/reservation" className="text-gray-400 hover:text-gold-light transition-colors text-sm">
                  Réservation
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-400 hover:text-gold-light transition-colors text-sm">
                  Événements
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-gold-light transition-colors text-sm">
                  Galerie
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Dine & Discover. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
