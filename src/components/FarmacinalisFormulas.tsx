import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Scale, 
  Moon, 
  Brain, 
  Shield, 
  Heart, 
  Zap,
  Sparkles,
  Activity
} from "lucide-react";

const FarmacinalisFormulas = () => {
  const categories = [
    {
      icon: Scale,
      title: "Emagrecimento",
      description: "Fórmulas personalizadas para acelerar o metabolismo e queima de gordura",
      examples: ["Sibutramina", "Orlistat", "Liraglutida", "Compostos termogênicos"],
      color: "text-red-500"
    },
    {
      icon: Moon,
      title: "Sono e Relaxamento",
      description: "Ativos naturais e farmacêuticos para uma noite de sono reparadora",
      examples: ["Melatonina", "L-Triptofano", "Magnésio", "Compostos calmantes"],
      color: "text-blue-500"
    },
    {
      icon: Brain,
      title: "Foco e Concentração",
      description: "Nootrópicos e vitaminas para melhorar performance mental",
      examples: ["Modafinil", "Ritalina", "Piracetam", "Complexo B"],
      color: "text-purple-500"
    },
    {
      icon: Shield,
      title: "Imunidade",
      description: "Fortalecimento do sistema imunológico com ativos potentes",
      examples: ["Vitamina D3", "Zinco", "Vitamina C", "Própolis"],
      color: "text-green-500"
    },
    {
      icon: Heart,
      title: "Saúde Cardiovascular",
      description: "Cuidados especiais para manter seu coração saudável",
      examples: ["Ômega 3", "Coenzima Q10", "Magnésio", "L-Arginina"],
      color: "text-pink-500"
    },
    {
      icon: Zap,
      title: "Performance Esportiva",
      description: "Suplementos e ativos para maximizar seus resultados nos treinos",
      examples: ["Creatina", "Beta-Alanina", "BCAA", "Pré-treinos"],
      color: "text-orange-500"
    },
    {
      icon: Sparkles,
      title: "Estética e Beleza",
      description: "Ativos para saúde da pele, cabelo e unhas",
      examples: ["Colágeno", "Ácido Hialurônico", "Biotina", "Vitamina E"],
      color: "text-indigo-500"
    },
    {
      icon: Activity,
      title: "Hormônios",
      description: "Reposição hormonal e modulação endócrina personalizada",
      examples: ["DHEA", "Pregnenolona", "Melatonina", "Compostos hormonais"],
      color: "text-teal-500"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="formulas" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Nossas Especialidades
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Desenvolvemos fórmulas personalizadas para diversas áreas da saúde, 
              sempre com foco em qualidade e eficácia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-0 bg-white">
                <CardContent className="p-6">
                  <div className="text-center">
                    <category.icon className={`w-12 h-12 mx-auto mb-4 ${category.color}`} />
                    <h3 className="font-bold text-foreground mb-3">{category.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {category.description}
                    </p>
                    <div className="text-xs text-muted-foreground/70">
                      <strong>Exemplos:</strong>
                      <div className="mt-1">
                        {category.examples.join(", ")}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-gradient-card rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Não encontrou o que procura?
              </h3>
              <p className="text-muted-foreground mb-6">
                Nossa equipe farmacêutica pode desenvolver fórmulas exclusivas 
                para suas necessidades específicas.
              </p>
              <Button 
                size="lg" 
                onClick={() => scrollToSection('orcamento')}
                className="bg-gradient-primary text-white hover:shadow-button transition-all duration-300"
              >
                Consultar Farmacêutico
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FarmacinalisFormulas;