"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { FaGoogle, FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import FadeInOnScroll from "./FadeInOnScroll";

export default function Depoimentos() {
  const parallaxBgRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let lastScrollPosition = 0;
    let rafId: number | null = null;

    // Função para aplicar efeito de paralaxe - funciona na entrada E saída da seção
    const applyParallax = () => {
      const parallaxBg = parallaxBgRef.current;
      const section = sectionRef.current;
      
      if (!parallaxBg || !section) return;

      // Pegar posição da seção no viewport
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      // Calcular offset baseado na posição da seção
      // Quando sectionTop = windowHeight: seção começando a entrar
      // Quando sectionTop = 0: seção no topo do viewport
      // Quando sectionTop = -sectionHeight: seção saiu completamente
      const parallaxOffset = windowHeight - sectionTop;
      
      // Aplicar paralaxe: a imagem se move mais devagar que o scroll
      // Multiplicador 0.3 para movimento suave
      // Subtrair um valor maior para que a imagem comece mais acima e sempre cubra a seção
      // Isso garante que mesmo quando a seção começa a entrar, a imagem já está posicionada corretamente
      const translateY = (parallaxOffset * 0.3) - (windowHeight * 0.3);
      
      // Só aplicar se mudou (otimização)
      if (Math.abs(translateY - lastScrollPosition) > 0.1) {
        parallaxBg.style.transform = `translateY(${translateY}px)`;
        lastScrollPosition = translateY;
      }
      
      rafId = null;
    };

    // Função wrapper com requestAnimationFrame para suavidade
    const handleParallax = () => {
      if (rafId === null) {
        rafId = requestAnimationFrame(applyParallax);
      }
    };

    // Event listeners para DESKTOP (scroll do mouse)
    window.addEventListener("scroll", handleParallax, { passive: true });
    window.addEventListener("wheel", handleParallax, { passive: true });
    
    // Event listeners para MOBILE (touch/arraste)
    window.addEventListener("touchmove", handleParallax, { passive: true });
    window.addEventListener("touchstart", handleParallax, { passive: true });
    
    // Resize
    window.addEventListener("resize", handleParallax, { passive: true });

    // Chamar imediatamente
    applyParallax();

    return () => {
      window.removeEventListener("scroll", handleParallax);
      window.removeEventListener("wheel", handleParallax);
      window.removeEventListener("touchmove", handleParallax);
      window.removeEventListener("touchstart", handleParallax);
      window.removeEventListener("resize", handleParallax);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);
  const depoimentos = [
    {
      nome: "Maria Silva",
      comentario: "Excelente profissional! A Doutora Izabella resolveu meu caso com muita dedicação e competência. Recomendo sem hesitação.",
      estrelas: 5,
    },
    {
      nome: "João Santos",
      comentario: "Atendimento impecável e resultados surpreendentes. A experiência com a Doutora foi transformadora para minha empresa.",
      estrelas: 5,
    },
    {
      nome: "Ana Costa",
      comentario: "Profissional excepcional que combina conhecimento técnico com sensibilidade humana. Minha família está muito grata.",
      estrelas: 5,
    },
    {
      nome: "Carlos Oliveira",
      comentario: "Mais de 20 anos de experiência fazem toda a diferença. A Doutora Izabella é referência em direito e psicologia forense.",
      estrelas: 5,
    },
    {
      nome: "Patricia Mendes",
      comentario: "A Doutora Izabella foi fundamental na resolução do conflito da minha empresa. Profissionalismo e sensibilidade incomparáveis.",
      estrelas: 4,
    },
    {
      nome: "Roberto Alves",
      comentario: "Atendimento humanizado e resultados excepcionais. A combinação de direito e psicologia faz toda a diferença no trabalho dela.",
      estrelas: 5,
    },
    {
      nome: "Fernanda Lima",
      comentario: "Resolveu uma questão familiar complexa com muita sabedoria. Recomendo a todos que precisam de uma advogada competente e sensível.",
      estrelas: 5,
    },
    {
      nome: "Marcos Pereira",
      comentario: "Excelente assessoria jurídica para minha empresa. A Doutora Izabella entende as necessidades do negócio e oferece soluções estratégicas.",
      estrelas: 4,
    },
    {
      nome: "Juliana Rocha",
      comentario: "Profissional que realmente se importa com seus clientes. O trabalho da Doutora Izabella transformou positivamente minha situação.",
      estrelas: 5,
    },
    {
      nome: "Ricardo Souza",
      comentario: "Conhecimento técnico impecável aliado a uma abordagem humana única. A melhor experiência jurídica que já tive.",
      estrelas: 5,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="depoimentos"
      className="w-full flex items-center justify-center py-5 md:py-5 md:pb-20 relative overflow-hidden"
      style={{
        minHeight: "400px",
      }}
    >
      {/* Div de fundo com efeito paralaxe - MESMA LÓGICA DO HERO */}
      <div
        ref={parallaxBgRef}
        className="absolute w-full top-0 left-0 z-0"
        style={{
          backgroundImage: "url('/fundoParalaxe.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "200%",
          minHeight: "100%",
          willChange: "transform",
          transition: "transform 0.3s ease-out",
          zIndex: 0,
        }}
      ></div>

      {/* Overlay escuro para melhor legibilidade */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 w-full relative z-20">
        {/* Título */}
        <FadeInOnScroll>
          <div className="mb-20 md:mb-28">
          <div className="flex items-center gap-6 mb-6">
            <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, #B8A082, transparent)" }}></div>
            <h2
              className="text-5xl md:text-6xl lg:text-7xl font-tangerine font-normal whitespace-nowrap"
              style={{
                color: "#B8A082",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              Depoimentos
            </h2>
            <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, #B8A082, transparent)" }}></div>
          </div>
        </div>
        </FadeInOnScroll>

        {/* Carrossel */}
        <FadeInOnScroll delay={100}>
          <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="w-full"
        >
          {depoimentos.map((depoimento, index) => (
            <SwiperSlide key={index}>
              <div
                className="group relative bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-white/20 hover:border-[#B8A082] transition-all duration-300 hover:shadow-2xl h-full"
                style={{
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                }}
              >
                {/* Ícone do Google */}
                <div className="flex items-center gap-2 mb-4">
                  <FaGoogle 
                    className="text-2xl"
                    style={{ color: "#4285F4" }}
                  />
                  <span 
                    className="text-sm font-light"
                    style={{ color: "#666666" }}
                  >
                    Google
                  </span>
                </div>

                {/* Comentário */}
                <p
                  className="text-sm md:text-base font-light leading-relaxed mb-6"
                  style={{
                    color: "#1a1a1a",
                    lineHeight: "1.7",
                  }}
                >
                  "{depoimento.comentario}"
                </p>

                {/* Avatar, Nome e Estrelas */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full flex-shrink-0 overflow-hidden relative">
                      <Image
                        src={`/pessoas/pessoa${index + 1}.jpg`}
                        alt={depoimento.nome}
                        width={48}
                        height={48}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <p
                        className="text-base md:text-lg font-light"
                        style={{
                          color: "#1a1a1a",
                          letterSpacing: "0.02em",
                        }}
                      >
                        {depoimento.nome}
                      </p>
                    </div>
                  </div>
                  {/* Estrelas */}
                  <div className="flex items-center gap-1 ml-16">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`text-sm ${
                          i < depoimento.estrelas
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
