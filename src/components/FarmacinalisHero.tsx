import { Button } from "@/components/ui/button";
import { Heart, Shield, Zap } from "lucide-react";

const FarmacinalisHero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-hero text-white py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Fórmulas feitas sob medida 
            <span className="block text-green-300">pra você</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-green-100 leading-relaxed">
            A farmácia que cuida da sua saúde com qualidade e confiança
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('orcamento')}
              className="bg-white text-primary hover:bg-green-50 text-lg px-8 py-4 font-semibold shadow-button transition-all duration-300 transform hover:scale-105"
            >
              Solicitar Orçamento
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => scrollToSection('sobre')}
              className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4 font-semibold transition-all duration-300"
            >
              Conheça Nossa História
            </Button>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <Heart className="w-12 h-12 mx-auto mb-4 text-green-300" />
              <h3 className="text-2xl font-bold mb-2">Saúde</h3>
              <p className="text-green-100">Cuidamos da sua saúde com fórmulas personalizadas</p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 mx-auto mb-4 text-green-300" />
              <h3 className="text-2xl font-bold mb-2">Qualidade</h3>
              <p className="text-green-100">Ativos de qualidade farmacêutica comprovada</p>
            </div>
            <div className="text-center">
              <Zap className="w-12 h-12 mx-auto mb-4 text-green-300" />
              <h3 className="text-2xl font-bold mb-2">Resultados</h3>
              <p className="text-green-100">Resultados reais, com ativos de verdade</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FarmacinalisHero;