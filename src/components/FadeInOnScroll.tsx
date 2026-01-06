"use client";

import { useEffect, useRef, useState } from "react";

interface FadeInOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "left" | "right" | "up" | "down";
}

export default function FadeInOnScroll({ 
  children, 
  delay = 0,
  className = "",
  direction = "up"
}: FadeInOnScrollProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  
  // Função para obter o transform baseado na direção
  const getTransform = (visible: boolean) => {
    if (visible) return "translate(0, 0)";
    
    switch (direction) {
      case "left":
        return "translateX(-30px)";
      case "right":
        return "translateX(30px)";
      case "up":
        return "translateY(20px)";
      case "down":
        return "translateY(-20px)";
      default:
        return "translateY(20px)";
    }
  };

  // Verificar se já está visível no carregamento
  const checkInitialVisibility = () => {
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      // Se o elemento está visível no viewport
      return rect.top < windowHeight && rect.bottom > 0;
    }
    return false;
  };

  const [isVisible, setIsVisible] = useState(() => checkInitialVisibility());

  useEffect(() => {
    // Verificar novamente após um pequeno delay para garantir que o DOM está pronto
    const initialCheck = setTimeout(() => {
      if (checkInitialVisibility()) {
        setIsVisible(true);
      }
    }, 100);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Quando o elemento entra no viewport, fazer fade in
          // Quando sai, fazer fade out
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        // Trigger quando 20% do elemento está visível
        threshold: 0.2,
        // Trigger um pouco antes do elemento entrar completamente
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      clearTimeout(initialCheck);
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(isVisible),
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
