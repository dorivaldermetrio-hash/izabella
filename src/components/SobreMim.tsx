import FadeInOnScroll from "./FadeInOnScroll";

export default function SobreMim() {
  return (
    <section
      id="sobre"
      className="w-full min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center py-20 md:py-32"
    >
      <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-24">
        {/* Título - Alinhado à esquerda com design elegante */}
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
              Sobre Mim
            </h2>
            <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, #B8A082, transparent)" }}></div>
          </div>
        </div>
        </FadeInOnScroll>

        {/* Frase de Impacto - Mais elegante */}
        <FadeInOnScroll delay={100}>
          <div className="mb-20 md:mb-24">
          <p
            className="text-3xl md:text-4xl lg:text-5xl font-light italic text-left max-w-2xl"
            style={{
              color: "#FFFFFF",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              letterSpacing: "0.03em",
              lineHeight: "1.4",
            }}
          >
            Resolvo seu conflito.
          </p>
          </div>
        </FadeInOnScroll>

        {/* Conteúdo Principal - Layout refinado */}
        <FadeInOnScroll delay={200}>
          <div className="grid md:grid-cols-[1.2fr_1fr] gap-16 md:gap-20 mb-20 md:mb-24">
            {/* Coluna Esquerda - Texto Principal */}
            <div className="flex flex-col gap-8 md:gap-10">
            <div className="space-y-6 md:space-y-8">
              <p
                className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed"
                style={{
                  color: "#E5E5E5",
                  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
                  lineHeight: "1.9",
                }}
              >
                Com uma trajetória dedicada à justiça e ao bem-estar das pessoas, 
                atuo de forma integrada, combinando conhecimento jurídico sólido 
                com uma compreensão profunda da psique humana e das dinâmicas familiares.
              </p>
              <p
                className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed"
                style={{
                  color: "#E5E5E5",
                  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
                  lineHeight: "1.9",
                }}
              >
                Minha abordagem única permite não apenas resolver questões legais, 
                mas também compreender as raízes dos conflitos, oferecendo soluções 
                que vão além do processo judicial, promovendo verdadeira transformação 
                e harmonia nas relações.
              </p>
              <p
                className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed"
                style={{
                  color: "#E5E5E5",
                  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
                  lineHeight: "1.9",
                }}
              >
                Acredito que cada caso é único e merece atenção personalizada, 
                onde a excelência técnica se une à sensibilidade humana para 
                alcançar os melhores resultados.
              </p>
            </div>
          </div>

          {/* Coluna Direita - Qualificações com design refinado */}
          <FadeInOnScroll delay={300}>
            <div className="flex flex-col justify-start pt-4">
            <div className="space-y-8 md:space-y-10">
              <div className="relative pl-8 md:pl-10">
                <div 
                  className="absolute left-0 top-0 bottom-0 w-0.5"
                  style={{ 
                    background: "linear-gradient(to bottom, #B8A082, transparent)",
                    opacity: 0.8
                  }}
                ></div>
                <h3
                  className="text-2xl md:text-3xl lg:text-4xl font-light mb-3"
                  style={{
                    color: "#B8A082",
                    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
                    letterSpacing: "0.08em",
                  }}
                >
                  Advogada
                </h3>
                <p
                  className="text-base md:text-lg font-light leading-relaxed"
                  style={{
                    color: "#D4D4D4",
                    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
                    lineHeight: "1.7",
                  }}
                >
                  Atuação dedicada com foco em resultados e excelência jurídica
                </p>
              </div>

              <div className="relative pl-8 md:pl-10">
                <div 
                  className="absolute left-0 top-0 bottom-0 w-0.5"
                  style={{ 
                    background: "linear-gradient(to bottom, #B8A082, transparent)",
                    opacity: 0.8
                  }}
                ></div>
                <h3
                  className="text-2xl md:text-3xl lg:text-4xl font-light mb-3"
                  style={{
                    color: "#B8A082",
                    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
                    letterSpacing: "0.08em",
                  }}
                >
                  Professora
                </h3>
                <p
                  className="text-base md:text-lg font-light leading-relaxed"
                  style={{
                    color: "#D4D4D4",
                    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
                    lineHeight: "1.7",
                  }}
                >
                  Compartilhando conhecimento e formando novos profissionais
                </p>
              </div>

              <div className="relative pl-8 md:pl-10">
                <div 
                  className="absolute left-0 top-0 bottom-0 w-0.5"
                  style={{ 
                    background: "linear-gradient(to bottom, #B8A082, transparent)",
                    opacity: 0.8
                  }}
                ></div>
                <h3
                  className="text-2xl md:text-3xl lg:text-4xl font-light mb-3"
                  style={{
                    color: "#B8A082",
                    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
                    letterSpacing: "0.08em",
                  }}
                >
                  Mestre em Psicologia Forense
                </h3>
                <p
                  className="text-base md:text-lg font-light leading-relaxed"
                  style={{
                    color: "#D4D4D4",
                    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
                    lineHeight: "1.7",
                  }}
                >
                  Especialização que enriquece a compreensão dos casos e das pessoas
                </p>
              </div>

              <div className="relative pl-8 md:pl-10">
                <div 
                  className="absolute left-0 top-0 bottom-0 w-0.5"
                  style={{ 
                    background: "linear-gradient(to bottom, #B8A082, transparent)",
                    opacity: 0.8
                  }}
                ></div>
                <h3
                  className="text-2xl md:text-3xl lg:text-4xl font-light mb-3"
                  style={{
                    color: "#B8A082",
                    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
                    letterSpacing: "0.08em",
                  }}
                >
                  Consteladora Familiar
                </h3>
                <p
                  className="text-base md:text-lg font-light leading-relaxed"
                  style={{
                    color: "#D4D4D4",
                    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
                    lineHeight: "1.7",
                  }}
                >
                  Abordagem sistêmica para compreender e transformar dinâmicas familiares
                </p>
              </div>
            </div>
          </div>
          </FadeInOnScroll>
        </div>
        </FadeInOnScroll>

        {/* Mensagem Final - Mais elegante */}
        <FadeInOnScroll delay={400}>
          <div className="mt-16 md:mt-20">
          <div className="max-w-4xl">
            <div className="h-px mb-10" style={{ background: "linear-gradient(to right, transparent, #B8A082, transparent)" }}></div>
            <p
              className="text-xl md:text-2xl lg:text-3xl font-light italic text-left"
              style={{
                color: "#B8A082",
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
                letterSpacing: "0.04em",
                lineHeight: "1.7",
              }}
            >
              "Cada história merece ser ouvida, cada conflito merece ser resolvido 
              com dedicação, expertise e humanidade."
            </p>
            <div className="h-px mt-10" style={{ background: "linear-gradient(to right, transparent, #B8A082, transparent)" }}></div>
          </div>
        </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
