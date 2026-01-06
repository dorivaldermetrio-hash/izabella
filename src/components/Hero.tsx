"use client";

import { useEffect, useRef } from "react";
import FadeInOnScroll from "./FadeInOnScroll";

export default function Hero() {
  const parallaxBgRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let lastScrollPosition = 0;
    let rafId: number | null = null;

    // Função para aplicar efeito de paralaxe
    const applyParallax = () => {
      const parallaxBg = parallaxBgRef.current;
      const section = sectionRef.current;
      
      if (!parallaxBg || !section) return;

      // Tentar pegar scroll da página (funciona para desktop e mobile)
      const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      
      // Pegar posição da seção no viewport (importante para mobile)
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      
      // Log da posição da tela/página
      console.log(`POSIÇÃO DA TELA: ${scrollY}px | sectionTop: ${sectionTop.toFixed(0)}px`);
      
      // Se estiver no topo (scroll = 0), resetar o paralaxe para 0
      // Isso corrige o bug no mobile quando rola muito rápido para cima
      if (scrollY === 0) {
        parallaxBg.style.transform = `translateY(0px)`;
        lastScrollPosition = 0;
        rafId = null;
        return;
      }
      
      // Pegar sectionScroll para fallback
      const sectionScroll = Math.max(0, -sectionTop);
      
      // Usar scrollY se disponível, senão usar sectionScroll
      const scrollPosition = scrollY > 0 ? scrollY : sectionScroll;
      // Multiplicador menor (0.3) para movimento mais suave
      const translateY = scrollPosition * 0.3;
      
      // Só aplicar se mudou (otimização)
      if (Math.abs(scrollPosition - lastScrollPosition) > 0.1) {
        parallaxBg.style.transform = `translateY(${translateY}px)`;
        lastScrollPosition = scrollPosition;
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

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="w-[100dvw] h-[100dvh] flex items-center relative bg-black"
      style={{ overflow: "hidden" }}
    >
      {/* Div de fundo com efeito paralaxe - EXATAMENTE como no seu exemplo */}
      <div
        ref={parallaxBgRef}
        className="parallax-bg absolute w-full top-0 left-0 z-0"
        style={{
          backgroundImage: 'url("/fundo6.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
          willChange: "transform",
          transition: "transform 0.3s ease-out",
          zIndex: 0,
        }}
      ></div>
      
      {/* Conteúdo sobreposto */}
      <div className="pl-0 md:pl-16 lg:pl-24 flex flex-col items-center relative z-20 w-full md:w-auto">
        <FadeInOnScroll delay={0}>
          <h1
            className="text-7xl md:text-8xl lg:text-9xl font-tangerine font-normal mb-4"
            style={{
              color: "#B8A082",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
            }}
          >
            Izabella de Bourbon
          </h1>
        </FadeInOnScroll>
        
        <FadeInOnScroll delay={200}>
          <div className="flex flex-col items-center w-full max-w-md">
          <svg
            className="w-3/4 md:w-full mb-3"
            height="2"
            viewBox="0 0 200 2"
            preserveAspectRatio="none"
          >
            <path
              d="M 0,1 Q 50,0.5 100,1 T 200,1"
              stroke="#B8A082"
              strokeWidth="1.5"
              fill="none"
              style={{
                filter: "drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.2))",
              }}
            />
          </svg>
            <p
              className="text-base md:text-2xl lg:text-3xl font-light tracking-widest uppercase"
              style={{
                color: "#B8A082",
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
                letterSpacing: "0.3em",
              }}
            >
              Advogada
            </p>
          <svg
            className="w-3/4 md:w-full mt-3 mb-4"
            height="2"
            viewBox="0 0 200 2"
            preserveAspectRatio="none"
          >
            <path
              d="M 0,1 Q 50,1.5 100,1 T 200,1"
              stroke="#B8A082"
              strokeWidth="1.5"
              fill="none"
              style={{
                filter: "drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.2))",
              }}
            />
          </svg>
            <p
              className="text-base md:text-2xl lg:text-3xl font-light italic text-center whitespace-nowrap"
              style={{
                color: "#FFFFFF",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                letterSpacing: "0.1em",
              }}
            >
              Excelência e Dedicação em Direito
            </p>
            <p
              className="text-sm md:text-lg lg:text-xl font-light italic text-center mt-3"
              style={{
                color: "#FFFFFF",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                letterSpacing: "0.05em",
              }}
            >
              Defendendo seus direitos com comprometimento e experiência
            </p>
          <svg
            className="w-3/4 md:w-full mt-6 mb-6"
            height="1"
            viewBox="0 0 300 1"
            preserveAspectRatio="none"
          >
            <path
              d="M 0,0.5 Q 75,0.3 150,0.5 T 300,0.5"
              stroke="#FFFFFF"
              strokeWidth="1"
              fill="none"
              opacity="0.6"
              style={{
                filter: "drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.3))",
              }}
            />
          </svg>
            <FadeInOnScroll delay={400} direction="left">
              <div className="flex flex-col md:flex-row gap-4 w-full justify-center px-4 md:px-0">
                <a
                  href="http://wa.me/554188980887"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 md:px-8 py-3 md:py-4 bg-black text-white font-semibold tracking-wide text-xs md:text-sm uppercase transition-all duration-300 hover:bg-gray-800 whitespace-nowrap text-center"
                  style={{
                    letterSpacing: "0.15em",
                  }}
                >
                  Agende uma Consulta
                </a>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    const sobreMim = document.getElementById("sobre");
                    if (sobreMim) {
                      sobreMim.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}
                  className="px-6 md:px-8 py-3 md:py-4 bg-white text-black font-semibold tracking-wide text-xs md:text-sm uppercase transition-all duration-300 hover:bg-gray-100 whitespace-nowrap"
                  style={{
                    letterSpacing: "0.15em",
                  }}
                >
                  Saiba Mais
                </button>
              </div>
            </FadeInOnScroll>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
