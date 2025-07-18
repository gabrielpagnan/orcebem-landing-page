import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Final CTA */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para aumentar suas vendas?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Junte-se a centenas de profissionais que já estão criando orçamentos 
            profissionais e fechando mais negócios com o OrceBem.
          </p>
          <Button 
            variant="hero" 
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 shadow-lg text-lg px-8 py-4 h-auto"
          >
            Começar agora - É grátis!
          </Button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="space-y-4">
              <div className="text-2xl font-bold text-primary">
                OrceBem
              </div>
              <p className="text-gray-400 leading-relaxed">
                A ferramenta completa para profissionais criarem orçamentos 
                organizados e impressionarem seus clientes.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-primary">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-primary">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-primary">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-primary">
                  <Youtube className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Product */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-background">Produto</h3>
              <div className="space-y-3">
                <a href="#como-funciona" className="block text-gray-400 hover:text-primary transition-colors">
                  Como funciona
                </a>
                <a href="#planos" className="block text-gray-400 hover:text-primary transition-colors">
                  Planos e preços
                </a>
                <a href="#" className="block text-gray-400 hover:text-primary transition-colors">
                  Templates
                </a>
                <a href="#" className="block text-gray-400 hover:text-primary transition-colors">
                  Integrações
                </a>
              </div>
            </div>

            {/* Support */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-background">Suporte</h3>
              <div className="space-y-3">
                <a href="#" className="block text-gray-400 hover:text-primary transition-colors">
                  Central de ajuda
                </a>
                <a href="#" className="block text-gray-400 hover:text-primary transition-colors">
                  Tutoriais
                </a>
                <a href="#" className="block text-gray-400 hover:text-primary transition-colors">
                  FAQ
                </a>
                <a href="#" className="block text-gray-400 hover:text-primary transition-colors">
                  Contato
                </a>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-background">Contato</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  <span>contato@orcebem.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  <span>(11) 99999-9999</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin className="h-5 w-5 flex-shrink-0" />
                  <span>São Paulo, SP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-700" />

      {/* Bottom Footer */}
      <div className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 OrceBem. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;