
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useToast } from "@/components/ui/use-toast";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LockKeyhole, User, UserPlus, LogIn, UserCog } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const LoginPage = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [isRegisterLoading, setIsRegisterLoading] = useState(false);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>, isAdmin: boolean = false) => {
    e.preventDefault();
    setIsLoginLoading(true);
    
    // Simuler une connexion
    setTimeout(() => {
      setIsLoginLoading(false);
      toast({
        title: isAdmin ? "Connexion administrateur réussie" : "Connexion réussie",
        description: `Bienvenue ${isAdmin ? "Administrateur" : ""} sur Dine & Discover`,
      });
      navigate(isAdmin ? "/admin/dashboard" : "/");
    }, 1500);
  };

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsRegisterLoading(true);
    
    // Simuler une inscription
    setTimeout(() => {
      setIsRegisterLoading(false);
      toast({
        title: "Compte créé avec succès",
        description: "Votre compte a été créé. Vous pouvez maintenant vous connecter.",
      });
    }, 1500);
  };
  
  const switchToRegisterTab = () => {
    const registerTrigger = document.querySelector('[data-value="register"]') as HTMLElement;
    if (registerTrigger) {
      registerTrigger.click();
    }
  };
  
  const switchToLoginTab = () => {
    const loginTrigger = document.querySelector('[data-value="login"]') as HTMLElement;
    if (loginTrigger) {
      loginTrigger.click();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto"
        >
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="login" className="data-[state=active]:bg-gold data-[state=active]:text-black">
                Se connecter
              </TabsTrigger>
              <TabsTrigger value="register" className="data-[state=active]:bg-gold data-[state=active]:text-black">
                S'inscrire
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <Card className="bg-black/40 backdrop-blur-md border border-white/10">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif">Connexion</CardTitle>
                  <CardDescription className="text-white/70">
                    Connectez-vous à votre compte pour accéder à votre espace personnel
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="user">
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                      <TabsTrigger value="user" className="text-sm data-[state=active]:bg-gold-light/30">
                        <User size={14} className="mr-1" /> Utilisateur
                      </TabsTrigger>
                      <TabsTrigger value="admin" className="text-sm data-[state=active]:bg-gold-light/30">
                        <UserCog size={14} className="mr-1" /> Administrateur
                      </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="user">
                      <form onSubmit={(e) => handleLogin(e)}>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input 
                              id="email"
                              type="email" 
                              placeholder="exemple@email.com"
                              required
                              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                            />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <Label htmlFor="password">Mot de passe</Label>
                              <Link to="/reset-password" className="text-xs text-gold-light hover:underline">
                                Mot de passe oublié?
                              </Link>
                            </div>
                            <Input 
                              id="password"
                              type="password" 
                              required
                              className="bg-white/10 border-white/20 text-white"
                            />
                          </div>
                          <Button 
                            type="submit" 
                            className="w-full bg-gold hover:bg-gold-dark text-black"
                            disabled={isLoginLoading}
                          >
                            {isLoginLoading ? (
                              <span className="flex items-center">Connexion en cours...</span>
                            ) : (
                              <span className="flex items-center">
                                <LogIn size={16} className="mr-2" /> Se connecter
                              </span>
                            )}
                          </Button>
                        </div>
                      </form>
                    </TabsContent>
                    
                    <TabsContent value="admin">
                      <form onSubmit={(e) => handleLogin(e, true)}>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="admin-email">Email administrateur</Label>
                            <Input 
                              id="admin-email"
                              type="email" 
                              placeholder="admin@dinediscover.com"
                              required
                              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="admin-password">Mot de passe administrateur</Label>
                            <Input 
                              id="admin-password"
                              type="password" 
                              required
                              className="bg-white/10 border-white/20 text-white"
                            />
                          </div>
                          <Button 
                            type="submit" 
                            className="w-full bg-gold hover:bg-gold-dark text-black"
                            disabled={isLoginLoading}
                          >
                            {isLoginLoading ? (
                              <span className="flex items-center">Connexion en cours...</span>
                            ) : (
                              <span className="flex items-center">
                                <UserCog size={16} className="mr-2" /> Connexion administrateur
                              </span>
                            )}
                          </Button>
                        </div>
                      </form>
                    </TabsContent>
                  </Tabs>
                </CardContent>
                <CardFooter className="flex justify-center border-t border-white/10 pt-6">
                  <p className="text-sm text-white/70">
                    Pas encore de compte?{" "}
                    <Button variant="link" className="text-gold-light p-0" onClick={switchToRegisterTab}>
                      Créer un compte
                    </Button>
                  </p>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="register">
              <Card className="bg-black/40 backdrop-blur-md border border-white/10">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif">Créer un compte</CardTitle>
                  <CardDescription className="text-white/70">
                    Rejoignez-nous pour des expériences culinaires exclusives
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleRegister}>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">Prénom</Label>
                          <Input 
                            id="first-name"
                            required
                            className="bg-white/10 border-white/20 text-white"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Nom</Label>
                          <Input 
                            id="last-name"
                            required
                            className="bg-white/10 border-white/20 text-white"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="register-email">Email</Label>
                        <Input 
                          id="register-email"
                          type="email" 
                          placeholder="exemple@email.com"
                          required
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="register-password">Mot de passe</Label>
                        <Input 
                          id="register-password"
                          type="password" 
                          required
                          className="bg-white/10 border-white/20 text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirmer le mot de passe</Label>
                        <Input 
                          id="confirm-password"
                          type="password" 
                          required
                          className="bg-white/10 border-white/20 text-white"
                        />
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full bg-gold hover:bg-gold-dark text-black"
                        disabled={isRegisterLoading}
                      >
                        {isRegisterLoading ? (
                          <span className="flex items-center">Création en cours...</span>
                        ) : (
                          <span className="flex items-center">
                            <UserPlus size={16} className="mr-2" /> Créer un compte
                          </span>
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-center border-t border-white/10 pt-6">
                  <p className="text-sm text-white/70">
                    Vous avez déjà un compte?{" "}
                    <Button variant="link" className="text-gold-light p-0" onClick={switchToLoginTab}>
                      Se connecter
                    </Button>
                  </p>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default LoginPage;
