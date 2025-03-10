
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Menu, 
  Calendar, 
  ImageIcon, 
  Bell, 
  LogOut, 
  Settings,
  Utensils,
  BarChart
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    toast({
      title: "Déconnexion réussie",
      description: "Vous avez été déconnecté avec succès."
    });
    navigate('/login');
  };

  const navItems = [
    { path: '/admin/dashboard', label: 'Tableau de bord', icon: LayoutDashboard },
    { path: '/admin/users', label: 'Utilisateurs', icon: Users },
    { path: '/admin/content', label: 'Contenu', icon: Utensils },
    { path: '/admin/menu', label: 'Menu', icon: Menu },
    { path: '/admin/gallery', label: 'Galerie', icon: ImageIcon },
    { path: '/admin/reservations', label: 'Réservations', icon: Calendar },
    { path: '/admin/events', label: 'Événements', icon: Bell },
    { path: '/admin/analytics', label: 'Analyses', icon: BarChart },
    { path: '/admin/settings', label: 'Paramètres', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex">
      {/* Sidebar */}
      <motion.aside 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-64 bg-black/60 backdrop-blur-md border-r border-white/10 p-6 flex flex-col h-screen sticky top-0"
      >
        <div className="flex items-center mb-8">
          <Link to="/admin/dashboard" className="text-2xl font-serif font-bold text-gold">
            Dine & Discover
          </Link>
        </div>
        
        <nav className="flex-1 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-3 py-2 rounded-md transition-colors ${
                location.pathname === item.path
                  ? 'bg-gold text-black font-medium'
                  : 'text-white/70 hover:bg-white/10'
              }`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.label}
            </Link>
          ))}
        </nav>
        
        <div className="mt-auto pt-6 border-t border-white/10">
          <Button 
            variant="ghost" 
            className="w-full justify-start text-white/70 hover:text-white hover:bg-white/10"
            onClick={handleLogout}
          >
            <LogOut className="w-5 h-5 mr-3" />
            Déconnexion
          </Button>
        </div>
      </motion.aside>
      
      {/* Main content */}
      <div className="flex-1">
        <header className="h-16 px-6 border-b border-white/10 bg-black/40 backdrop-blur-md flex items-center sticky top-0 z-10">
          <h1 className="text-xl font-medium">
            {navItems.find(item => item.path === location.pathname)?.label || 'Administration'}
          </h1>
        </header>
        
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
