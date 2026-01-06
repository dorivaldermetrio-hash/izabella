import FadeInOnScroll from "./FadeInOnScroll";

export default function Conquistas() {
  return (
    <section
      id="conquistas"
      className="w-full min-h-screen bg-white flex items-center justify-center py-20 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 w-full">
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
              Resultados
            </h2>
            <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, #B8A082, transparent)" }}></div>
          </div>
        </div>
        </FadeInOnScroll>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-16 md:mb-20">
          {/* Card 1 - Casos Resolvidos */}
          <FadeInOnScroll delay={100}>
            <div 
            className="group relative bg-gradient-to-br from-gray-50 to-white p-8 md:p-10 rounded-lg border border-gray-200 hover:border-[#B8A082] transition-all duration-300 hover:shadow-xl"
            style={{
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
            }}
          >
            <div className="absolute top-0 right-0 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity">
              <div className="w-full h-full" style={{ background: "radial-gradient(circle, #B8A082, transparent)" }}></div>
            </div>
            <div className="relative">
              <div 
                className="text-5xl md:text-6xl lg:text-7xl font-light mb-4"
                style={{
                  color: "#B8A082",
                  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
                }}
              >
                300+
              </div>
              <div className="h-px w-16 mb-4" style={{ background: "linear-gradient(to right, #B8A082, transparent)" }}></div>
              <h3 
                className="text-xl md:text-2xl font-light mb-2"
                style={{
                  color: "#1a1a1a",
                  letterSpacing: "0.05em",
                }}
              >
                Casos Resolvidos
              </h3>
              <p 
                className="text-sm md:text-base font-light leading-relaxed"
                style={{
                  color: "#666666",
                  lineHeight: "1.6",
                }}
              >
                Mais de trezentos casos solucionados com excelência e dedicação
              </p>
            </div>
          </div>
          </FadeInOnScroll>

          {/* Card 2 - Anos de Experiência */}
          <FadeInOnScroll delay={200}>
            <div 
            className="group relative bg-gradient-to-br from-gray-50 to-white p-8 md:p-10 rounded-lg border border-gray-200 hover:border-[#B8A082] transition-all duration-300 hover:shadow-xl"
            style={{
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
            }}
          >
            <div className="absolute top-0 right-0 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity">
              <div className="w-full h-full" style={{ background: "radial-gradient(circle, #B8A082, transparent)" }}></div>
            </div>
            <div className="relative">
              <div 
                className="text-5xl md:text-6xl lg:text-7xl font-light mb-4"
                style={{
                  color: "#B8A082",
                  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
                }}
              >
                20
              </div>
              <div className="h-px w-16 mb-4" style={{ background: "linear-gradient(to right, #B8A082, transparent)" }}></div>
              <h3 
                className="text-xl md:text-2xl font-light mb-2"
                style={{
                  color: "#1a1a1a",
                  letterSpacing: "0.05em",
                }}
              >
                Anos de Experiência
              </h3>
              <p 
                className="text-sm md:text-base font-light leading-relaxed"
                style={{
                  color: "#666666",
                  lineHeight: "1.6",
                }}
              >
                Duas décadas de dedicação ao direito e à justiça
              </p>
            </div>
          </div>
          </FadeInOnScroll>

          {/* Card 3 - Área de Atuação */}
          <FadeInOnScroll delay={300}>
            <div 
            className="group relative bg-gradient-to-br from-gray-50 to-white p-8 md:p-10 rounded-lg border border-gray-200 hover:border-[#B8A082] transition-all duration-300 hover:shadow-xl"
            style={{
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
            }}
          >
            <div className="absolute top-0 right-0 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity">
              <div className="w-full h-full" style={{ background: "radial-gradient(circle, #B8A082, transparent)" }}></div>
            </div>
            <div className="relative">
              <div 
                className="text-4xl md:text-5xl lg:text-6xl font-light mb-4"
                style={{
                  color: "#B8A082",
                  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
                }}
              >
                PR
              </div>
              <div className="h-px w-16 mb-4" style={{ background: "linear-gradient(to right, #B8A082, transparent)" }}></div>
              <h3 
                className="text-xl md:text-2xl font-light mb-2"
                style={{
                  color: "#1a1a1a",
                  letterSpacing: "0.05em",
                }}
              >
                Área de Atuação
              </h3>
              <p 
                className="text-sm md:text-base font-light leading-relaxed"
                style={{
                  color: "#666666",
                  lineHeight: "1.6",
                }}
              >
                Curitiba e Litoral Paranaense com atendimento personalizado
              </p>
            </div>
          </div>
          </FadeInOnScroll>

          {/* Card 4 - Empresas */}
          <FadeInOnScroll delay={400}>
            <div 
            className="group relative bg-gradient-to-br from-gray-50 to-white p-8 md:p-10 rounded-lg border border-gray-200 hover:border-[#B8A082] transition-all duration-300 hover:shadow-xl"
            style={{
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
            }}
          >
            <div className="absolute top-0 right-0 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity">
              <div className="w-full h-full" style={{ background: "radial-gradient(circle, #B8A082, transparent)" }}></div>
            </div>
            <div className="relative">
              <div 
                className="text-5xl md:text-6xl lg:text-7xl font-light mb-4"
                style={{
                  color: "#B8A082",
                  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
                }}
              >
                +
              </div>
              <div className="h-px w-16 mb-4" style={{ background: "linear-gradient(to right, #B8A082, transparent)" }}></div>
              <h3 
                className="text-xl md:text-2xl font-light mb-2"
                style={{
                  color: "#1a1a1a",
                  letterSpacing: "0.05em",
                }}
              >
                Empresas Atendidas
              </h3>
              <p 
                className="text-sm md:text-base font-light leading-relaxed"
                style={{
                  color: "#666666",
                  lineHeight: "1.6",
                }}
              >
                Assessoria jurídica especializada para empresas de diversos segmentos
              </p>
            </div>
          </div>
          </FadeInOnScroll>
        </div>

        {/* Texto de Destaque */}
        <FadeInOnScroll delay={500}>
          <div className="max-w-4xl mx-auto mt-16 md:mt-20">
            <div className="h-px mb-10" style={{ background: "linear-gradient(to right, transparent, #B8A082, transparent)" }}></div>
            <p 
              className="text-xl md:text-2xl lg:text-3xl font-light italic text-center leading-relaxed"
              style={{
                color: "#1a1a1a",
                letterSpacing: "0.03em",
                lineHeight: "1.7",
              }}
            >
              "Números que refletem comprometimento, resultados que transformam vidas 
              e empresas. Cada caso é uma oportunidade de fazer a diferença."
            </p>
            <div className="h-px mt-10" style={{ background: "linear-gradient(to right, transparent, #B8A082, transparent)" }}></div>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}

