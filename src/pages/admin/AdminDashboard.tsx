
import React from 'react';
import { motion } from 'framer-motion';
import AdminLayout from '@/components/AdminLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Utensils, Calendar, Bell, TrendingUp, Clock } from 'lucide-react';

const AdminDashboard = () => {
  const stats = [
    { title: 'Utilisateurs', value: '124', icon: Users, change: '+12%', color: 'bg-blue-500/10 text-blue-500' },
    { title: 'Réservations', value: '48', icon: Calendar, change: '+4%', color: 'bg-purple-500/10 text-purple-500' },
    { title: 'Événements', value: '7', icon: Bell, change: '+2', color: 'bg-orange-500/10 text-orange-500' },
    { title: 'Plats', value: '36', icon: Utensils, change: 'Stable', color: 'bg-green-500/10 text-green-500' },
  ];

  const recentReservations = [
    { name: 'Thomas Martin', date: '24 Juin 2023', time: '19:30', guests: 4, status: 'confirmed' },
    { name: 'Marie Dupont', date: '24 Juin 2023', time: '20:00', guests: 2, status: 'pending' },
    { name: 'Jean Lefebvre', date: '25 Juin 2023', time: '19:00', guests: 6, status: 'confirmed' },
    { name: 'Sophie Bernard', date: '25 Juin 2023', time: '20:30', guests: 3, status: 'confirmed' },
  ];

  const upcomingEvents = [
    { title: 'Soirée dégustation de vins', date: '28 Juin 2023', time: '19:00', registrations: 28 },
    { title: 'Cours de cuisine italienne', date: '3 Juillet 2023', time: '18:00', registrations: 15 },
    { title: 'Dîner jazz', date: '10 Juillet 2023', time: '20:00', registrations: 42 },
  ];

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
          <h2 className="text-2xl font-serif mb-2">Tableau de bord</h2>
          <p className="text-white/70">Bienvenue sur votre espace d'administration.</p>
        </motion.div>
        
        {/* Stats */}
        <motion.div variants={itemVariants}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white/5 border-white/10 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-white/70 mb-1">{stat.title}</p>
                      <p className="text-3xl font-bold">{stat.value}</p>
                      <p className="text-xs text-white/50 mt-1">
                        <span className="text-green-400">{stat.change}</span> ce mois
                      </p>
                    </div>
                    <div className={`p-3 rounded-full ${stat.color}`}>
                      <stat.icon size={24} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
        
        {/* Recent Reservations & Upcoming Events */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Reservations */}
          <motion.div variants={itemVariants}>
            <Card className="bg-white/5 border-white/10 shadow-lg h-full">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg font-medium">Réservations récentes</CardTitle>
                    <CardDescription className="text-white/50">
                      Les dernières réservations reçues
                    </CardDescription>
                  </div>
                  <Calendar className="text-gold-light w-5 h-5" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentReservations.map((reservation, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                      <div>
                        <p className="font-medium">{reservation.name}</p>
                        <div className="flex items-center text-sm text-white/50">
                          <Clock className="w-3 h-3 mr-1" />
                          {reservation.date} à {reservation.time}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm text-white/70 mr-3">{reservation.guests} pers.</span>
                        <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                          reservation.status === 'confirmed' 
                            ? 'bg-green-500/20 text-green-500' 
                            : 'bg-yellow-500/20 text-yellow-500'
                        }`}>
                          {reservation.status === 'confirmed' ? 'Confirmée' : 'En attente'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Upcoming Events */}
          <motion.div variants={itemVariants}>
            <Card className="bg-white/5 border-white/10 shadow-lg h-full">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg font-medium">Événements à venir</CardTitle>
                    <CardDescription className="text-white/50">
                      Planifiés pour les prochains jours
                    </CardDescription>
                  </div>
                  <Bell className="text-gold-light w-5 h-5" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <p className="font-medium">{event.title}</p>
                        <span className="bg-blue-500/20 text-blue-400 text-xs px-2 py-1 rounded-full">
                          {event.registrations} inscrits
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-white/50">
                        <Clock className="w-3 h-3 mr-1" />
                        {event.date} à {event.time}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </AdminLayout>
  );
};

export default AdminDashboard;
