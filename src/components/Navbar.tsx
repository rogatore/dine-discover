
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-12',
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-serif font-bold tracking-tighter hover:opacity-80 transition-opacity"
          >
            Dine & Discover
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/menu">Menu</NavLink>
            <NavLink to="/reservation">Réservation</NavLink>
            <NavLink to="/events">Événements</NavLink>
            <NavLink to="/gallery">Galerie</NavLink>
            <Button size="sm" variant="outline" className="ml-4 gap-2">
              <User size={16} />
              <span>Se connecter</span>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          'fixed inset-0 bg-background bg-opacity-95 z-40 md:hidden pt-20 px-6 transition-transform duration-300 ease-in-out',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col space-y-6 items-center">
          <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)}>Accueil</MobileNavLink>
          <MobileNavLink to="/menu" onClick={() => setIsMenuOpen(false)}>Menu</MobileNavLink>
          <MobileNavLink to="/reservation" onClick={() => setIsMenuOpen(false)}>Réservation</MobileNavLink>
          <MobileNavLink to="/events" onClick={() => setIsMenuOpen(false)}>Événements</MobileNavLink>
          <MobileNavLink to="/gallery" onClick={() => setIsMenuOpen(false)}>Galerie</MobileNavLink>
          <Button className="mt-6 w-full gap-2">
            <User size={16} />
            <span>Se connecter</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

// Desktop Nav Link
const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="relative font-medium text-sm tracking-wide hover:text-primary transition-colors duration-200 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-gold after:transition-all hover:after:w-full"
  >
    {children}
  </Link>
);

// Mobile Nav Link
const MobileNavLink = ({ to, children, onClick }: { to: string; children: React.ReactNode; onClick: () => void }) => (
  <Link
    to={to}
    className="text-2xl font-medium py-2 transition-colors hover:text-gold-light"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;
