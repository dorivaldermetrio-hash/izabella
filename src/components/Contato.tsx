"use client";

import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";
import FadeInOnScroll from "./FadeInOnScroll";

export default function Contato() {
  const contatos = [
    {
      nome: "Facebook",
      icone: FaFacebook,
      cor: "#1877F2",
      url: "https://www.facebook.com/izabella.emmendoerfer/?locale=pt_BR",
    },
    {
      nome: "Instagram",
      icone: FaInstagram,
      cor: "#E4405F",
      url: "https://www.instagram.com/izabelladebourbon/",
    },
    {
      nome: "WhatsApp",
      icone: FaWhatsapp,
      cor: "#25D366",
      url: "http://wa.me/554188980887",
    },
    {
      nome: "Ligação",
      icone: FaPhone,
      cor: "#B8A082",
      url: "tel:4196647152",
    },
    {
      nome: "Email",
      icone: FaEnvelope,
      cor: "#B8A082",
      url: "mailto:renato.devmaximiano@gmail.com",
    },
  ];

  return (
    <section
      id="contato"
      className="w-full min-h-screen bg-gradient-to-b from-white via-gray-50 to-white flex items-center justify-center py-20 md:py-32"
    >
      <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-24 w-full">
        {/* Título */}
        <FadeInOnScroll>
          <div className="mb-20 md:mb-28">
          <div className="flex items-center gap-6 mb-6">
            <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, #B8A082, transparent)" }}></div>
            <h2
              className="text-5xl md:text-6xl lg:text-7xl font-tangerine font-normal whitespace-nowrap"
              style={{
                color: "#B8A082",
              }}
            >
              Contato
            </h2>
            <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, #B8A082, transparent)" }}></div>
          </div>
        </div>
        </FadeInOnScroll>

        {/* Introdução */}
        <FadeInOnScroll delay={100}>
          <div className="max-w-4xl mx-auto mb-16 md:mb-20 text-center">
          <p
            className="text-xl md:text-2xl lg:text-3xl font-light italic leading-relaxed"
            style={{
              color: "#1a1a1a",
              letterSpacing: "0.03em",
              lineHeight: "1.7",
            }}
          >
            Entre em contato e descubra como posso ajudar você ou sua empresa
          </p>
        </div>
        </FadeInOnScroll>

        {/* Grid de Contatos */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 mb-16 md:mb-20">
          {contatos.map((contato, index) => {
            const Icone = contato.icone;
            return (
              <FadeInOnScroll key={index} delay={200 + (index * 50)}>
              <a
                key={index}
                href={contato.url}
                target={contato.url.startsWith("http") ? "_blank" : undefined}
                rel={contato.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex flex-col items-center justify-center p-8 md:p-10 bg-white rounded-lg border border-gray-200 hover:border-[#B8A082] transition-all duration-300 hover:shadow-xl cursor-pointer"
                style={{
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
                }}
              >
                <div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${contato.cor}15`,
                  }}
                >
                  <Icone
                    className="text-3xl md:text-4xl transition-colors duration-300"
                    style={{
                      color: contato.cor,
                    }}
                  />
                </div>
                <p
                  className="text-base md:text-lg font-light text-center"
                  style={{
                    color: "#1a1a1a",
                    letterSpacing: "0.05em",
                  }}
                >
                  {contato.nome}
                </p>
              </a>
              </FadeInOnScroll>
            );
          })}
        </div>

        {/* Mensagem Final */}
        <FadeInOnScroll delay={500}>
          <div className="max-w-4xl mx-auto mt-16 md:mt-20">
          <div className="h-px mb-10" style={{ background: "linear-gradient(to right, transparent, #B8A082, transparent)" }}></div>
          <p
            className="text-xl md:text-2xl lg:text-3xl font-light italic text-center leading-relaxed"
            style={{
              color: "#B8A082",
              letterSpacing: "0.04em",
              lineHeight: "1.7",
            }}
          >
            "Estou aqui para ajudar. Escolha a forma de contato que preferir 
            e vamos conversar sobre como posso resolver seu caso."
          </p>
          <div className="h-px mt-10" style={{ background: "linear-gradient(to right, transparent, #B8A082, transparent)" }}></div>
        </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}

