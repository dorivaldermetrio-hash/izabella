"use client";

import { FaInstagram, FaFacebook } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import FadeInOnScroll from "./FadeInOnScroll";

export default function Educacional() {
  const videos = [
    {
      id: 1,
      src: "/educa/vd1.mp4",
    },
    {
      id: 2,
      src: "/educa/vd2.mp4",
    },
    {
      id: 3,
      src: "/educa/vd3.mp4",
    },
    {
      id: 4,
      src: "/educa/vd4.mp4",
    },
  ];

  return (
    <section
      id="educacional"
      className="w-full min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center py-20 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 w-full">
        {/* Título */}
        <FadeInOnScroll>
          <div className="mb-16 md:mb-20">
          <div className="flex items-center gap-6 mb-6">
            <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, #B8A082, transparent)" }}></div>
            <h2
              className="text-5xl md:text-6xl lg:text-7xl font-tangerine font-normal whitespace-nowrap"
              style={{
                color: "#B8A082",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              Conteúdo Educacional
            </h2>
            <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, #B8A082, transparent)" }}></div>
          </div>
        </div>
        </FadeInOnScroll>

        {/* Introdução */}
        <FadeInOnScroll delay={100}>
          <div className="max-w-4xl mx-auto mb-12 md:mb-16 text-center">
          <p
            className="text-xl md:text-2xl lg:text-3xl font-light italic leading-relaxed mb-8"
            style={{
              color: "#E5E5E5",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
              letterSpacing: "0.03em",
              lineHeight: "1.7",
            }}
          >
            Compartilhando conhecimento e educação jurídica através das redes sociais
          </p>

          {/* Botões de Redes Sociais */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://www.instagram.com/izabelladebourbon/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 border border-[#B8A082] hover:bg-[#B8A082] transition-all duration-300 rounded-lg"
              style={{
                color: "#B8A082",
              }}
            >
              <FaInstagram className="text-2xl md:text-3xl group-hover:text-black transition-colors" />
              <span className="text-base md:text-lg font-light">Instagram</span>
            </a>
            <a
              href="https://www.facebook.com/izabella.emmendoerfer/?locale=pt_BR"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 border border-[#B8A082] hover:bg-[#B8A082] transition-all duration-300 rounded-lg"
              style={{
                color: "#B8A082",
              }}
            >
              <FaFacebook className="text-2xl md:text-3xl group-hover:text-black transition-colors" />
              <span className="text-base md:text-lg font-light">Facebook</span>
            </a>
          </div>
        </div>
        </FadeInOnScroll>

        {/* Carrossel de Vídeos - APENAS MOBILE */}
        <FadeInOnScroll delay={200}>
          <div className="block md:hidden mb-8">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="w-full"
          >
            {videos.map((video) => (
              <SwiperSlide key={video.id}>
                <div
                  className="group relative bg-gradient-to-br from-gray-900 to-black rounded-lg overflow-hidden border border-gray-800 hover:border-[#B8A082] transition-all duration-300 hover:shadow-2xl"
                  style={{
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <video
                    src={video.src}
                    className="w-full h-full object-cover"
                    controls
                    muted
                    loop
                    style={{
                      aspectRatio: "9/16",
                    }}
                  >
                    Seu navegador não suporta o elemento de vídeo.
                  </video>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        </FadeInOnScroll>

        {/* Grid de Vídeos - APENAS DESKTOP */}
        <FadeInOnScroll delay={200}>
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group relative bg-gradient-to-br from-gray-900 to-black rounded-lg overflow-hidden border border-gray-800 hover:border-[#B8A082] transition-all duration-300 hover:shadow-2xl"
              style={{
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
              }}
            >
              <video
                src={video.src}
                className="w-full h-full object-cover"
                controls
                muted
                loop
                style={{
                  aspectRatio: "9/16",
                }}
              >
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
          ))}
        </div>
        </FadeInOnScroll>

        {/* Mensagem Final */}
        <FadeInOnScroll delay={300}>
          <div className="max-w-4xl mx-auto mt-16 md:mt-20">
          <div className="h-px mb-10" style={{ background: "linear-gradient(to right, transparent, #B8A082, transparent)" }}></div>
          <p
            className="text-xl md:text-2xl lg:text-3xl font-light italic text-center leading-relaxed"
            style={{
              color: "#B8A082",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
              letterSpacing: "0.04em",
              lineHeight: "1.7",
            }}
          >
            "Educação jurídica acessível para todos. Acompanhe nossas redes 
            sociais e aprenda mais sobre seus direitos."
          </p>
          <div className="h-px mt-10" style={{ background: "linear-gradient(to right, transparent, #B8A082, transparent)" }}></div>
        </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}

