import { Card, CardContent } from "@/components/ui/card";
import { 
  Clock, 
  TrendingUp, 
  Shield, 
  Star, 
  Users, 
  Smartphone,
  PaintBucket,
  Wrench,
  Zap
} from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Economize tempo",
    description: "Crie orçamentos profissionais em menos de 2 minutos. Mais tempo para focar no seu trabalho.",
    color: "text-blue-600"
  },
  {
    icon: TrendingUp,
    title: "Aumente suas vendas",
    description: "Orçamentos organizados transmitem profissionalismo e aumentam a confiança dos clientes.",
    color: "text-green-600"
  },
  {
    icon: Shield,
    title: "Credibilidade profissional",
    description: "Impressione seus clientes com documentos bem estruturados e sua marca personalizada.",
    color: "text-purple-600"
  },
  {
    icon: Star,
    title: "Destaque-se da concorrência",
    description: "Seja o profissional que entrega orçamentos organizados e justifica preços mais altos.",
    color: "text-yellow-600"
  },
  {
    icon: Users,
    title: "Melhore relacionamento",
    description: "Clientes satisfeitos recomendam mais. Orçamentos claros evitam mal-entendidos.",
    color: "text-pink-600"
  },
  {
    icon: Smartphone,
    title: "Use onde estiver",
    description: "Acesse pelo celular, tablet ou computador. Crie orçamentos até mesmo no local de trabalho.",
    color: "text-indigo-600"
  }
];

const professions = [
  {
    icon: Zap,
    name: "Eletricistas",
    description: "Orçamentos detalhados para instalações e manutenções elétricas"
  },
  {
    icon: Wrench,
    name: "Encanadores", 
    description: "Cotações profissionais para serviços hidráulicos e reparos"
  },
  {
    icon: PaintBucket,
    name: "Pintores",
    description: "Orçamentos organizados para projetos de pintura residencial e comercial"
  }
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Por que escolher o OrceBem?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desenvolvido especialmente para profissionais autônomos que querem 
            se destacar e crescer no mercado com organização e profissionalismo.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-card shadow-card hover:shadow-elegant transition-all duration-300 border-2 border-transparent hover:border-primary/20">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-light ${benefit.color}`}>
                    <benefit.icon className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Professions Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Ideal para profissionais de diversas áreas
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            O OrceBem foi desenvolvido pensando nas necessidades específicas 
            de cada tipo de profissional autônomo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {professions.map((profession, index) => (
            <Card key={index} className="bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300 border-2 border-primary/10">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground">
                    <profession.icon className="h-8 w-8" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-foreground mb-4">
                  {profession.name}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {profession.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 text-center">
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 shadow-elegant">
            <h3 className="text-2xl font-bold mb-8">
              Resultados que nossos clientes já alcançaram
            </h3>
            <div className="grid sm:grid-cols-3 gap-8">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-yellow-300">40%</div>
                <div className="text-blue-100">Aumento médio em vendas</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-yellow-300">2 min</div>
                <div className="text-blue-100">Tempo para criar orçamento</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-yellow-300">95%</div>
                <div className="text-blue-100">Taxa de satisfação</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;