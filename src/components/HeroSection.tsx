import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Zap, Users, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-hero text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Crie orçamentos
              <span className="block text-yellow-300">profissionais</span>
              em minutos
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              A ferramenta completa para eletricistas, encanadores, pintores e outros 
              profissionais gerarem orçamentos organizados e impressionarem seus clientes.
            </p>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-300 flex-shrink-0" />
                <span className="text-blue-100">Orçamentos em PDF profissionais</span>
              </div>
              <div className="flex items-center space-x-3">
                <Zap className="h-6 w-6 text-yellow-300 flex-shrink-0" />
                <span className="text-blue-100">Geração em menos de 2 minutos</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-6 w-6 text-green-300 flex-shrink-0" />
                <span className="text-blue-100">Impressione seus clientes</span>
              </div>
              <div className="flex items-center space-x-3">
                <TrendingUp className="h-6 w-6 text-yellow-300 flex-shrink-0" />
                <span className="text-blue-100">Aumente suas vendas</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="lg" 
                className="bg-white text-primary hover:bg-gray-100 shadow-lg text-lg px-8 py-4 h-auto"
              >
                Crie seu orçamento agora - GRÁTIS!
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4 h-auto"
              >
                Ver demonstração
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 text-center lg:text-left">
              <p className="text-blue-200 text-sm mb-2">
                ✨ Sem cartão de crédito • ✨ Teste grátis por 7 dias
              </p>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative">
            <Card className="p-2 bg-white/10 backdrop-blur-sm border-white/20 shadow-2xl">
              <img
                src={heroImage}
                alt="Profissional criando orçamento com OrceBem"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </Card>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-primary px-4 py-2 rounded-full font-bold text-sm shadow-lg">
              Grátis!
            </div>
            <div className="absolute -bottom-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
              +40% vendas
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;