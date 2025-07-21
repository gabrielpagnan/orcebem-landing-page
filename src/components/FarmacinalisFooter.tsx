import { Phone, Instagram, MessageCircle, MapPin, Clock } from "lucide-react";

const FarmacinalisFooter = () => {
  return (
    <footer id="contato" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Logo e Descrição */}
            <div className="lg:col-span-2">
              <img 
                src="/lovable-uploads/a8fda2aa-05d0-4bdc-ad79-8d37a077611b.png" 
                alt="Farmacinalis Logo" 
                className="h-16 w-auto mb-6 bg-white p-2 rounded"
              />
              <p className="text-gray-300 mb-6 leading-relaxed">
                A Farmacinalis é sua farmácia de manipulação especializada em fórmulas 
                personalizadas para saúde, estética e performance. Cuidamos da sua saúde 
                com qualidade e confiança.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://wa.me/5548998437993" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 p-3 rounded-full transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a 
                  href="https://instagram.com/farmacinallis" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 p-3 rounded-full transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Contato */}
            <div>
              <h3 className="text-xl font-bold mb-6">Contato</h3>
              <div className="space-y-4">
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
                    <p className="text-sm text-gray-400">Atendemos todo o Brasil</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Instagram className="w-5 h-5 text-primary" />
                  <div>
                    <a 
                      href="https://instagram.com/farmacinallis" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      @farmacinallis
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Horários */}
            <div>
              <h3 className="text-xl font-bold mb-6">Horário de Atendimento</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Segunda a Sexta</p>
                    <p className="text-sm text-gray-400">8h às 18h</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Sábado</p>
                    <p className="text-sm text-gray-400">8h às 12h</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="font-medium text-gray-400">Domingo</p>
                    <p className="text-sm text-gray-500">Fechado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Frases de Impacto */}
          <div className="border-t border-gray-700 pt-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-gray-800 p-6 rounded-lg">
                <p className="text-lg font-semibold text-primary mb-2">
                  "Fórmulas feitas sob medida pra você"
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <p className="text-lg font-semibold text-primary mb-2">
                  "A farmácia que cuida da sua saúde com qualidade e confiança"
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <p className="text-lg font-semibold text-primary mb-2">
                  "Resultados reais, com ativos de verdade"
                </p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>
              © 2024 Farmacinalis - Manipulação e Drogaria. Todos os direitos reservados.
            </p>
            <p className="mt-2 text-sm">
              Responsável Técnico: Farmacêutico CRF/SC
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FarmacinalisFooter;