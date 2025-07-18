import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Download, Share } from "lucide-react";
import mockupInterface from "@/assets/mockup-interface.jpg";
import budgetPdf from "@/assets/budget-pdf.jpg";

const MockupsSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Veja como fica seu orçamento
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interface intuitiva e orçamentos PDF profissionais que impressionam seus clientes 
            e demonstram o profissionalismo do seu trabalho.
          </p>
        </div>

        {/* Mockups Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Interface Mockup */}
          <div className="space-y-6">
            <Card className="shadow-elegant bg-gradient-card border-2 border-primary/10">
              <CardContent className="p-2">
                <img
                  src={mockupInterface}
                  alt="Interface do OrceBem - Criação de orçamentos"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </CardContent>
            </Card>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Interface simples e intuitiva
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Crie orçamentos profissionais sem complicações. Nossa interface foi 
                desenvolvida pensando na praticidade do seu dia a dia.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center space-x-2 bg-primary-light text-primary px-3 py-2 rounded-full text-sm font-medium">
                  <Eye className="h-4 w-4" />
                  <span>Pré-visualização em tempo real</span>
                </div>
                <div className="flex items-center space-x-2 bg-success-light text-success px-3 py-2 rounded-full text-sm font-medium">
                  <Download className="h-4 w-4" />
                  <span>Salvamento automático</span>
                </div>
              </div>
            </div>
          </div>

          {/* PDF Mockup */}
          <div className="space-y-6">
            <Card className="shadow-elegant bg-gradient-card border-2 border-primary/10">
              <CardContent className="p-2">
                <img
                  src={budgetPdf}
                  alt="Exemplo de orçamento PDF gerado pelo OrceBem"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </CardContent>
            </Card>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                PDFs profissionais prontos
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Orçamentos com sua marca, organizados e detalhados. Seus clientes 
                vão perceber a diferença na qualidade e profissionalismo.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center space-x-2 bg-primary-light text-primary px-3 py-2 rounded-full text-sm font-medium">
                  <Share className="h-4 w-4" />
                  <span>Fácil compartilhamento</span>
                </div>
                <div className="flex items-center space-x-2 bg-success-light text-success px-3 py-2 rounded-full text-sm font-medium">
                  <Download className="h-4 w-4" />
                  <span>Download instantâneo</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="inline-block bg-primary text-primary-foreground shadow-elegant">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Pronto para criar seus primeiros orçamentos?
              </h3>
              <p className="text-blue-100 mb-6 text-lg">
                Comece agora e veja como é fácil impressionar seus clientes
              </p>
              <Button 
                variant="hero" 
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 shadow-lg text-lg px-8 py-4 h-auto"
              >
                Criar meu primeiro orçamento
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MockupsSection;