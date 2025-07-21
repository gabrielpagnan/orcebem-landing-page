import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "5548998437993";
  const message = "Olá! Gostaria de saber mais sobre as fórmulas da Farmacinalis.";
  
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
      aria-label="Entrar em contato via WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
};

export default WhatsAppButton;