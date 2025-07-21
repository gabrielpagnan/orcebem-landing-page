import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MapPin, Clock, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FarmacinalisContact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    formula: "",
    message: "",
    prescription: null as File | null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.name || !formData.phone || !formData.formula) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha nome, telefone e fórmula desejada.",
        variant: "destructive"
      });
      return;
    }

    // Simular envio do formulário
    toast({
      title: "Orçamento solicitado!",
      description: "Entraremos em contato em breve. Obrigado!",
    });

    // Reset do formulário
    setFormData({
      name: "",
      phone: "",
      email: "",
      city: "",
      formula: "",
      message: "",
      prescription: null
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, prescription: file }));
    }
  };

  return (
    <section id="orcamento" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Solicite seu Orçamento
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Preencha o formulário abaixo e nossa equipe entrará em contato 
              para elaborar sua fórmula personalizada.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Formulário */}
            <div className="lg:col-span-2">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">
                    Formulário de Orçamento
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Nome Completo *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          placeholder="Seu nome completo"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Telefone/WhatsApp *</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                          placeholder="(48) 99999-9999"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">E-mail</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          placeholder="seu@email.com"
                        />
                      </div>
                      <div>
                        <Label htmlFor="city">Cidade</Label>
                        <Input
                          id="city"
                          value={formData.city}
                          onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
                          placeholder="Sua cidade"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="formula">Categoria da Fórmula *</Label>
                      <Select value={formData.formula} onValueChange={(value) => setFormData(prev => ({ ...prev, formula: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione a categoria" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="emagrecimento">Emagrecimento</SelectItem>
                          <SelectItem value="sono">Sono e Relaxamento</SelectItem>
                          <SelectItem value="foco">Foco e Concentração</SelectItem>
                          <SelectItem value="imunidade">Imunidade</SelectItem>
                          <SelectItem value="cardiovascular">Saúde Cardiovascular</SelectItem>
                          <SelectItem value="performance">Performance Esportiva</SelectItem>
                          <SelectItem value="estetica">Estética e Beleza</SelectItem>
                          <SelectItem value="hormonios">Hormônios</SelectItem>
                          <SelectItem value="outro">Outro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Detalhes da Fórmula</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        placeholder="Descreva sua necessidade específica, ativos desejados, dosagem, etc."
                        rows={4}
                      />
                    </div>

                    <div>
                      <Label htmlFor="prescription">Receita Médica (opcional)</Label>
                      <div className="mt-2 flex items-center gap-4">
                        <label htmlFor="prescription" className="cursor-pointer">
                          <div className="flex items-center gap-2 px-4 py-2 border border-border rounded-md hover:bg-muted/50 transition-colors">
                            <Upload className="w-4 h-4" />
                            <span className="text-sm">
                              {formData.prescription ? formData.prescription.name : "Escolher arquivo"}
                            </span>
                          </div>
                          <input
                            id="prescription"
                            type="file"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={handleFileChange}
                            className="hidden"
                          />
                        </label>
                        {formData.prescription && (
                          <span className="text-sm text-muted-foreground">
                            Arquivo selecionado
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Formatos aceitos: PDF, JPG, PNG (máx. 5MB)
                      </p>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-primary text-white hover:shadow-button transition-all duration-300"
                      size="lg"
                    >
                      Solicitar Orçamento
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Informações de Contato */}
            <div className="space-y-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">
                    Informações de Contato
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">(48) 99843-7993</p>
                      <p className="font-medium">(48) 99818-3667</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Florianópolis - SC</p>
                      <p className="text-sm text-muted-foreground">Atendemos todo o Brasil</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Atendimento</p>
                      <p className="text-sm text-muted-foreground">Segunda a Sexta: 8h às 18h</p>
                      <p className="text-sm text-muted-foreground">Sábado: 8h às 12h</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card bg-gradient-card">
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-foreground mb-2">
                    Atendimento Rápido
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Respondemos em até 2 horas durante o horário comercial
                  </p>
                  <a 
                    href="https://wa.me/5548998437993" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button className="bg-green-600 hover:bg-green-700 text-white">
                      WhatsApp Direto
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FarmacinalisContact;