import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Crown, Zap } from "lucide-react";

const plans = [
  {
    name: "Gratuito",
    price: "R$ 0",
    period: "/mês",
    description: "Perfeito para começar",
    features: [
      "Até 5 orçamentos por mês",
      "Templates básicos",
      "Exportação em PDF",
      "Suporte por email"
    ],
    cta: "Começar grátis",
    variant: "outline" as const,
    popular: false
  },
  {
    name: "Profissional",
    price: "R$ 29",
    period: "/mês",
    description: "Para profissionais que querem crescer",
    features: [
      "Orçamentos ilimitados",
      "Templates personalizados",
      "Sua marca nos orçamentos",
      "Histórico completo",
      "Suporte prioritário",
      "Integração WhatsApp"
    ],
    cta: "Teste grátis por 7 dias",
    variant: "hero" as const,
    popular: true
  },
  {
    name: "Empresarial",
    price: "R$ 59",
    period: "/mês",
    description: "Para equipes e empresas",
    features: [
      "Tudo do Profissional",
      "Múltiplos usuários",
      "Relatórios avançados",
      "API personalizada",
      "Suporte telefônico",
      "Treinamento incluso"
    ],
    cta: "Falar com vendas",
    variant: "default" as const,
    popular: false
  }
];

const PricingSection = () => {
  return (
    <section id="planos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Escolha o plano ideal para você
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comece grátis e evolua conforme seu negócio cresce. 
            Todos os planos incluem suporte e atualizações automáticas.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative bg-card shadow-card transition-all duration-300 border-2 ${
                plan.popular 
                  ? 'border-primary scale-105 shadow-elegant' 
                  : 'border-transparent hover:border-primary/20'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-2 shadow-button">
                    <Crown className="h-4 w-4 mr-1" />
                    Mais Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </CardTitle>
                <div className="space-y-2">
                  <div className="flex items-baseline justify-center space-x-1">
                    <span className="text-4xl md:text-5xl font-bold text-primary">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <Check className="h-5 w-5 text-success" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  variant={plan.variant}
                  size="lg" 
                  className="w-full text-lg py-4 h-auto"
                >
                  {plan.popular && <Zap className="h-5 w-5 mr-2" />}
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16 space-y-4">
          <p className="text-muted-foreground">
            ✨ <strong>7 dias grátis</strong> • ✨ <strong>Cancele a qualquer momento</strong> • ✨ <strong>Sem taxa de configuração</strong>
          </p>
          
          <div className="bg-primary-light text-primary p-4 rounded-lg inline-block">
            <p className="font-semibold">
              💎 Desconto especial: <strong>20% OFF</strong> no primeiro mês com o código <strong>ORCEBEM20</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;