import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, Gift, ArrowRight } from "lucide-react";
import { useState } from "react";

const LeadCaptureSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    profession: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você integraria com sua ferramenta de email marketing
    console.log("Lead capturado:", formData);
    alert("Obrigado! Você receberá um email com acesso gratuito em instantes.");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 bg-gradient-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-yellow-400 text-primary px-4 py-2 rounded-full font-bold text-sm mb-6">
                <Gift className="h-5 w-5" />
                <span>OFERTA ESPECIAL</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Comece agora e receba
                <span className="block text-yellow-300">7 dias grátis!</span>
              </h2>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Cadastre-se agora e ganhe acesso completo ao OrceBem por 7 dias. 
                Sem compromisso, sem cartão de crédito, sem pegadinhas.
              </p>

              {/* Benefits */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                  <span className="text-blue-100">Orçamentos ilimitados por 7 dias</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                  <span className="text-blue-100">Templates profissionais inclusos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                  <span className="text-blue-100">Suporte especializado</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                  <span className="text-blue-100">Cancele quando quiser</span>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <Card className="bg-white shadow-2xl">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Cadastre-se gratuitamente
                  </h3>
                  <p className="text-muted-foreground">
                    Preencha os dados abaixo e comece agora mesmo
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome completo</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Digite seu nome"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email profissional</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="pl-10 h-12"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">WhatsApp (opcional)</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(11) 99999-9999"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="pl-10 h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="profession">Sua profissão</Label>
                    <Select onValueChange={(value) => handleInputChange("profession", value)}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Selecione sua área" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="eletricista">Eletricista</SelectItem>
                        <SelectItem value="encanador">Encanador</SelectItem>
                        <SelectItem value="pintor">Pintor</SelectItem>
                        <SelectItem value="pedreiro">Pedreiro</SelectItem>
                        <SelectItem value="marceneiro">Marceneiro</SelectItem>
                        <SelectItem value="ar-condicionado">Técnico em Ar Condicionado</SelectItem>
                        <SelectItem value="jardineiro">Jardineiro</SelectItem>
                        <SelectItem value="outros">Outros</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full text-lg py-4 h-auto bg-primary hover:bg-primary-hover"
                  >
                    Começar meus 7 dias grátis agora
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>

                  <p className="text-xs text-muted-foreground text-center leading-relaxed">
                    Ao se cadastrar, você concorda com nossos{" "}
                    <a href="#" className="text-primary hover:underline">Termos de Uso</a> e{" "}
                    <a href="#" className="text-primary hover:underline">Política de Privacidade</a>.
                    Não enviamos spam.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureSection;