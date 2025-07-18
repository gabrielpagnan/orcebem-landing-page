import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary">
              OrceBem
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#como-funciona" className="text-foreground hover:text-primary transition-colors">
              Como funciona
            </a>
            <a href="#beneficios" className="text-foreground hover:text-primary transition-colors">
              Benefícios
            </a>
            <a href="#planos" className="text-foreground hover:text-primary transition-colors">
              Planos
            </a>
            <a href="#depoimentos" className="text-foreground hover:text-primary transition-colors">
              Depoimentos
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="hero" size="lg" className="px-6">
              Comece grátis agora
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a
                href="#como-funciona"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Como funciona
              </a>
              <a
                href="#beneficios"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Benefícios
              </a>
              <a
                href="#planos"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Planos
              </a>
              <a
                href="#depoimentos"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Depoimentos
              </a>
              <Button variant="hero" className="w-full mt-4">
                Comece grátis agora
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;