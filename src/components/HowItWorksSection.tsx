import { Card, CardContent } from "@/components/ui/card";
import { FileText, Cog, Send, CheckCircle } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: FileText,
    title: "Preenche os dados",
    description: "Digite as informações do serviço, quantidades e valores. Nossa interface intuitiva torna tudo muito simples.",
    color: "text-blue-600"
  },
  {
    step: "02", 
    icon: Cog,
    title: "Sistema gera automaticamente",
    description: "Em segundos, o OrceBem cria um orçamento profissional com sua marca e todas as informações organizadas.",
    color: "text-green-600"
  },
  {
    step: "03",
    icon: Send,
    title: "Envia para o cliente",
    description: "Compartilhe o PDF por WhatsApp, email ou imprima. Seu cliente recebe um orçamento impecável e profissional.",
    color: "text-purple-600"
  }
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Como funciona o OrceBem?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Em apenas 3 passos simples, você cria orçamentos profissionais que impressionam 
            seus clientes e aumentam suas chances de fechar negócios.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <Card key={index} className="relative bg-card shadow-card hover:shadow-elegant transition-all duration-300 border-2 border-transparent hover:border-primary/20">
              <CardContent className="p-8 text-center">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-button">
                    {step.step}
                  </div>
                </div>

                {/* Icon */}
                <div className="mt-8 mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-light ${step.color}`}>
                    <step.icon className="h-8 w-8" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Arrow connectors for desktop */}
        <div className="hidden md:block relative mb-8">
          <div className="absolute top-1/2 left-1/3 transform -translate-y-1/2 text-primary/30">
            <svg width="50" height="20" viewBox="0 0 50 20" fill="currentColor">
              <path d="M0 10 L40 10 M35 5 L40 10 L35 15" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </div>
          <div className="absolute top-1/2 right-1/3 transform -translate-y-1/2 text-primary/30">
            <svg width="50" height="20" viewBox="0 0 50 20" fill="currentColor">
              <path d="M0 10 L40 10 M35 5 L40 10 L35 15" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </div>
        </div>

        {/* Results */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-3 bg-success-light text-success p-4 rounded-lg shadow-card">
            <CheckCircle className="h-6 w-6" />
            <span className="font-semibold text-lg">
              Resultado: Orçamento profissional em menos de 2 minutos!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;