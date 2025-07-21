import { Users, Award, Clock, MapPin } from "lucide-react";

const FarmacinalisAbout = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Sobre a Farmacinalis
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Somos uma farmácia de manipulação especializada em criar fórmulas personalizadas 
              para atender suas necessidades específicas de saúde, estética e performance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Nosso Diferencial
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Na Farmacinalis, cada fórmula é cuidadosamente preparada com matérias-primas 
                de alta qualidade, seguindo rigorosos padrões farmacêuticos. Nossa equipe 
                especializada desenvolve soluções personalizadas para suas necessidades específicas.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Trabalhamos com as mais modernas técnicas de manipulação farmacêutica, 
                garantindo eficácia, segurança e qualidade em cada produto que desenvolvemos.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="text-center p-6 bg-primary-light rounded-lg">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-foreground mb-2">Atendimento Personalizado</h4>
                <p className="text-sm text-muted-foreground">Cada cliente é único e merece um atendimento especial</p>
              </div>
              <div className="text-center p-6 bg-primary-light rounded-lg">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-foreground mb-2">Qualidade Garantida</h4>
                <p className="text-sm text-muted-foreground">Matérias-primas selecionadas e processos rigorosos</p>
              </div>
              <div className="text-center p-6 bg-primary-light rounded-lg">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-foreground mb-2">Agilidade</h4>
                <p className="text-sm text-muted-foreground">Preparação rápida sem comprometer a qualidade</p>
              </div>
              <div className="text-center p-6 bg-primary-light rounded-lg">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-foreground mb-2">Localização</h4>
                <p className="text-sm text-muted-foreground">Fácil acesso e entrega para sua comodidade</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-card rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Por que escolher a manipulação?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Personalização</h4>
                <p className="text-muted-foreground">Fórmulas adaptadas às suas necessidades específicas</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Dosagem Exata</h4>
                <p className="text-muted-foreground">Concentrações precisas para máxima eficácia</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Inovação</h4>
                <p className="text-muted-foreground">Acesso aos mais modernos ativos farmacêuticos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FarmacinalisAbout;