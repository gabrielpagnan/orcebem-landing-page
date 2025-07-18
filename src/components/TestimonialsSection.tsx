import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Wrench, Zap, PaintBucket } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Silva",
    profession: "Eletricista",
    icon: Zap,
    rating: 5,
    text: "Depois que comecei a usar o OrceBem, fechei 40% mais clientes. Os orçamentos ficam tão profissionais que os clientes confiam mais no meu trabalho.",
    highlight: "40% mais clientes"
  },
  {
    name: "Maria Santos", 
    profession: "Encanadora",
    icon: Wrench,
    rating: 5,
    text: "Economizo mais de 2 horas por dia na criação de orçamentos. Agora posso focar no que realmente importa: fazer um trabalho de qualidade.",
    highlight: "2 horas economizadas"
  },
  {
    name: "João Oliveira",
    profession: "Pintor",
    icon: PaintBucket,
    rating: 5,
    text: "Meus clientes sempre elogiam a organização dos orçamentos. Isso me diferencia da concorrência e justifica meus preços mais altos.",
    highlight: "Preços mais altos"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Profissionais de todo o Brasil já estão aumentando suas vendas e 
            impressionando clientes com o OrceBem.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative bg-card shadow-card hover:shadow-elegant transition-all duration-300 border-2 border-transparent hover:border-primary/20">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8">
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center shadow-button">
                    <Quote className="h-4 w-4" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Highlight */}
                <div className="bg-success-light text-success px-3 py-2 rounded-lg inline-block mb-6 font-semibold text-sm">
                  ✨ {testimonial.highlight}
                </div>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <div className="bg-primary-light text-primary w-12 h-12 rounded-full flex items-center justify-center">
                    <testimonial.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">{testimonial.name}</div>
                    <div className="text-muted-foreground text-sm">{testimonial.profession}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid sm:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">500+</div>
            <div className="text-muted-foreground">Profissionais cadastrados</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">5.000+</div>
            <div className="text-muted-foreground">Orçamentos gerados</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">40%</div>
            <div className="text-muted-foreground">Aumento médio em vendas</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;