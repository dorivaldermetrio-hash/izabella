"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [headerStyle, setHeaderStyle] = useState<"transparent" | "dark" | "light">("transparent");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let rafId: number | null = null;

    const updateHeaderStyle = () => {
      // Pegar scroll de todas as formas possíveis (desktop e mobile)
      const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      
      // Verificar se está no topo usando scroll ou posição da primeira seção
      const inicio = document.getElementById("inicio");
      const inicioTop = inicio ? inicio.getBoundingClientRect().top : 0;
      const isAtTop = scrollY < 50 || (inicioTop >= -50 && inicioTop <= 50);
      
      if (isAtTop) {
        setHeaderStyle("transparent");
        rafId = null;
        return;
      }

      // Verificar cada seção na ordem
      const sobre = document.getElementById("sobre");
      const conquistas = document.getElementById("conquistas");
      const areas = document.getElementById("areas");
      const educacional = document.getElementById("educacional");
      const contato = document.getElementById("contato");

      const viewportMiddle = window.innerHeight * 0.3;

      // Verificar de baixo para cima
      if (contato && contato.getBoundingClientRect().top <= viewportMiddle) {
        setHeaderStyle("light");
        rafId = null;
        return;
      }
      if (educacional && educacional.getBoundingClientRect().top <= viewportMiddle) {
        setHeaderStyle("dark");
        rafId = null;
        return;
      }
      if (areas && areas.getBoundingClientRect().top <= viewportMiddle) {
        setHeaderStyle("dark");
        rafId = null;
        return;
      }
      if (conquistas && conquistas.getBoundingClientRect().top <= viewportMiddle) {
        setHeaderStyle("light");
        rafId = null;
        return;
      }
      if (sobre && sobre.getBoundingClientRect().top <= viewportMiddle) {
        setHeaderStyle("dark");
        rafId = null;
        return;
      }

      // Se não encontrou nenhuma, ainda está na primeira seção (hero)
      setHeaderStyle("dark");
      rafId = null;
    };

    const handleScroll = () => {
      if (rafId === null) {
        rafId = requestAnimationFrame(updateHeaderStyle);
      }
    };

    // Event listeners para DESKTOP
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", handleScroll, { passive: true });
    
    // Event listeners para MOBILE
    window.addEventListener("touchmove", handleScroll, { passive: true });
    window.addEventListener("touchstart", handleScroll, { passive: true });
    
    // Resize
    window.addEventListener("resize", handleScroll, { passive: true });

    // Chamar imediatamente
    updateHeaderStyle();

    // Chamar após um pequeno delay para garantir que o DOM está pronto
    const timeoutId = setTimeout(updateHeaderStyle, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
      window.removeEventListener("touchstart", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      clearTimeout(timeoutId);
    };
  }, []);

  // Quando o menu está aberto, usar estilo transparente com blur
  // Quando fechado, usar o estilo normal baseado na seção
  const bgColor = isMenuOpen
    ? headerStyle === "light"
      ? "bg-white/60 backdrop-blur-md"
      : "bg-black/60 backdrop-blur-md"
    : headerStyle === "transparent" 
    ? "bg-transparent" 
    : headerStyle === "dark" 
    ? "bg-black/95 backdrop-blur-sm" 
    : "bg-white/95 backdrop-blur-sm";

  const textColor = (headerStyle === "transparent" || headerStyle === "dark") 
    ? "text-white" 
    : "text-black";

  const borderColor = (headerStyle === "transparent" || headerStyle === "dark")
    ? "rgba(255, 255, 255, 0.2)"
    : "rgba(0, 0, 0, 0.1)";

  const textShadow = (headerStyle === "transparent" || headerStyle === "dark")
    ? "1px 1px 2px rgba(0, 0, 0, 0.5)"
    : "none";

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      // Fechar menu mobile após clicar
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 w-full z-50 py-4 md:py-6 pr-8 md:pr-12 lg:pr-16 transition-all duration-500 ${bgColor}`}
      style={{
        borderBottom: `0px solid ${borderColor}`,
      }}
    >
      <nav className="flex items-center justify-between">
        {/* Botão Hambúrguer - apenas mobile */}
        <button
          onClick={toggleMenu}
          className={`md:hidden p-2 pl-8 ${textColor} transition-opacity hover:opacity-80`}
          aria-label="Toggle menu"
          style={{ textShadow }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Links de navegação - desktop */}
        <div className="hidden md:flex items-center gap-6 md:gap-8 lg:gap-10 pl-8 md:pl-16 lg:pl-24">
          <a
            href="#inicio"
            onClick={(e) => handleLinkClick(e, "inicio")}
            className={`font-light text-base md:text-lg lg:text-xl hover:opacity-80 transition-opacity ${textColor} cursor-pointer`}
            style={{ textShadow }}
          >
            Inicio
          </a>
          <a
            href="#sobre"
            onClick={(e) => handleLinkClick(e, "sobre")}
            className={`font-light text-base md:text-lg lg:text-xl hover:opacity-80 transition-opacity ${textColor} cursor-pointer`}
            style={{ textShadow }}
          >
            Sobre Mim
          </a>
          <a
            href="#areas"
            onClick={(e) => handleLinkClick(e, "areas")}
            className={`font-light text-base md:text-lg lg:text-xl hover:opacity-80 transition-opacity ${textColor} cursor-pointer`}
            style={{ textShadow }}
          >
            Áreas de Atuação
          </a>
          <a
            href="#contato"
            onClick={(e) => handleLinkClick(e, "contato")}
            className={`font-light text-base md:text-lg lg:text-xl hover:opacity-80 transition-opacity ${textColor} cursor-pointer`}
            style={{ textShadow }}
          >
            Contato
          </a>
        </div>

        {/* Telefone */}
        <div className="pl-4 md:pl-0">
          <a
            href="http://wa.me/554188980887"
            target="_blank"
            rel="noopener noreferrer"
            className={`font-light text-lg md:text-base lg:text-lg xl:text-xl hover:opacity-80 transition-opacity ${textColor}`}
            style={{ textShadow }}
          >
            (41) 9664-7152
          </a>
        </div>
      </nav>

      {/* Menu Mobile Expandido */}
      {isMenuOpen && (
        <div
          className={`md:hidden absolute top-full left-0 right-0 w-full transition-all duration-300 backdrop-blur-md ${
            headerStyle === "transparent" || headerStyle === "dark"
              ? "bg-black/60"
              : "bg-white/60"
          }`}
          style={{
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="flex flex-col py-4 px-8">
            <a
              href="#inicio"
              onClick={(e) => handleLinkClick(e, "inicio")}
              className={`font-light text-lg py-3 hover:opacity-80 transition-opacity ${textColor} cursor-pointer`}
              style={{ textShadow }}
            >
              Inicio
            </a>
            <a
              href="#sobre"
              onClick={(e) => handleLinkClick(e, "sobre")}
              className={`font-light text-lg py-3 hover:opacity-80 transition-opacity ${textColor} cursor-pointer`}
              style={{ textShadow }}
            >
              Sobre Mim
            </a>
            <a
              href="#areas"
              onClick={(e) => handleLinkClick(e, "areas")}
              className={`font-light text-lg py-3 hover:opacity-80 transition-opacity ${textColor} cursor-pointer`}
              style={{ textShadow }}
            >
              Áreas de Atuação
            </a>
            <a
              href="#contato"
              onClick={(e) => handleLinkClick(e, "contato")}
              className={`font-light text-lg py-3 hover:opacity-80 transition-opacity ${textColor} cursor-pointer`}
              style={{ textShadow }}
            >
              Contato
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
