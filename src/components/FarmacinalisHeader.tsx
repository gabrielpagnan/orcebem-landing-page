import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const FarmacinalisHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/a8fda2aa-05d0-4bdc-ad79-8d37a077611b.png" 
              alt="Farmacinalis Logo" 
              className="h-14 w-auto transition-transform hover:scale-105"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Sobre Nós
            </button>
            <button 
              onClick={() => scrollToSection('formulas')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Fórmulas
            </button>
            <button 
              onClick={() => scrollToSection('orcamento')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Orçamento
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contato
            </button>
            <Button 
              onClick={() => scrollToSection('orcamento')}
              className="bg-gradient-primary text-white hover:shadow-button transition-all duration-300"
            >
              Solicitar Orçamento
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-left text-muted-foreground hover:text-primary transition-colors"
              >
                Sobre Nós
              </button>
              <button 
                onClick={() => scrollToSection('formulas')}
                className="text-left text-muted-foreground hover:text-primary transition-colors"
              >
                Fórmulas
              </button>
              <button 
                onClick={() => scrollToSection('orcamento')}
                className="text-left text-muted-foreground hover:text-primary transition-colors"
              >
                Orçamento
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-left text-muted-foreground hover:text-primary transition-colors"
              >
                Contato
              </button>
              <Button 
                onClick={() => scrollToSection('orcamento')}
                className="bg-gradient-primary text-white w-full"
              >
                Solicitar Orçamento
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default FarmacinalisHeader;