"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="http://wa.me/554188980887"
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        e.preventDefault();
        if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
          return (window as any).gtag_report_conversion('http://wa.me/554188980887');
        } else {
          window.open('http://wa.me/554188980887', '_blank');
        }
        return false;
      }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      aria-label="Fale conosco no WhatsApp"
    >
      <FaWhatsapp 
        className="text-white text-4xl md:text-3xl group-hover:scale-110 transition-transform duration-300" 
      />
    </a>
  );
}
