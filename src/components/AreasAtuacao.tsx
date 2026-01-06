import FadeInOnScroll from "./FadeInOnScroll";

export default function AreasAtuacao() {
  const areas = [
    {
      titulo: "Direito Empresarial",
      descricao: "Assessoria jurídica completa para empresas, incluindo contratos comerciais, compliance, fusões e aquisições, e consultoria estratégica para o crescimento sustentável do seu negócio.",
      detalhes: [
        "Contratos comerciais e empresariais",
        "Compliance e governança corporativa",
        "Fusões e aquisições",
        "Consultoria estratégica",
      ],
    },
    {
      titulo: "Direito Trabalhista",
      descricao: "Atuação especializada em questões trabalhistas, representando tanto empresas quanto trabalhadores, com foco em soluções que equilibram direitos e necessidades de ambas as partes.",
      detalhes: [
        "Rescisões e acordos trabalhistas",
        "Negociação coletiva",
        "Prevenção de passivos trabalhistas",
        "Consultoria em relações de trabalho",
      ],
    },
    {
      titulo: "Direito de Família",
      descricao: "Abordagem sensível e técnica em questões familiares, combinando expertise jurídica com compreensão psicológica para resolver conflitos familiares de forma harmoniosa.",
      detalhes: [
        "Divórcios e separações",
        "Guarda e pensão alimentícia",
        "Sucessões e inventários",
        "Constelação familiar sistêmica",
      ],
    },
    {
      titulo: "Psicologia Forense",
      descricao: "Atuação como perita em processos judiciais, utilizando conhecimento em psicologia forense para análise de casos complexos e elaboração de laudos técnicos especializados.",
      detalhes: [
        "Laudos psicológicos forenses",
        "Avaliação de capacidade civil",
        "Análise de danos psicológicos",
        "Perícias em processos judiciais",
      ],
    },
  ];

  return (
    <section
      id="areas"
      className="w-full min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center py-20 md:py-32"
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
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              Áreas de Atuação
            </h2>
            <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, #B8A082, transparent)" }}></div>
          </div>
        </div>
        </FadeInOnScroll>

        {/* Introdução */}
        <FadeInOnScroll delay={100}>
          <div className="max-w-4xl mx-auto mb-16 md:mb-20">
          <p
            className="text-xl md:text-2xl lg:text-3xl font-light italic text-center leading-relaxed"
            style={{
              color: "#E5E5E5",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
              letterSpacing: "0.03em",
              lineHeight: "1.7",
            }}
          >
            Atuação especializada em diversas áreas do direito, sempre com 
            excelência técnica e sensibilidade humana.
          </p>
        </div>
        </FadeInOnScroll>

        {/* Grid de Áreas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 mb-16 md:mb-20">
          {areas.map((area, index) => (
            <FadeInOnScroll key={index} delay={200 + (index * 100)}>
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900 to-black p-8 md:p-10 rounded-lg border border-gray-800 hover:border-[#B8A082] transition-all duration-300 hover:shadow-2xl"
              style={{
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
              }}
            >
              {/* Decoração sutil */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity">
                <div className="w-full h-full" style={{ background: "radial-gradient(circle, #B8A082, transparent)" }}></div>
              </div>

              <div className="relative">
                {/* Título da Área */}
                <h3
                  className="text-2xl md:text-3xl lg:text-4xl font-light mb-4"
                  style={{
                    color: "#B8A082",
                    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
                    letterSpacing: "0.05em",
                  }}
                >
                  {area.titulo}
                </h3>

                {/* Linha decorativa */}
                <div className="h-px w-20 mb-6" style={{ background: "linear-gradient(to right, #B8A082, transparent)" }}></div>

                {/* Descrição */}
                <p
                  className="text-base md:text-lg font-light leading-relaxed mb-6"
                  style={{
                    color: "#D4D4D4",
                    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
                    lineHeight: "1.8",
                  }}
                >
                  {area.descricao}
                </p>

                {/* Lista de Detalhes */}
                <div className="space-y-3">
                  {area.detalhes.map((detalhe, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div
                        className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                        style={{
                          backgroundColor: "#B8A082",
                        }}
                      ></div>
                      <p
                        className="text-sm md:text-base font-light"
                        style={{
                          color: "#E5E5E5",
                          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
                        }}
                      >
                        {detalhe}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            </FadeInOnScroll>
          ))}
        </div>

        {/* Mensagem Final */}
        <FadeInOnScroll delay={600}>
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
            "Cada área de atuação recebe a mesma dedicação e excelência, 
            sempre com foco em resultados que transformam vidas e negócios."
          </p>
          <div className="h-px mt-10" style={{ background: "linear-gradient(to right, transparent, #B8A082, transparent)" }}></div>
        </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}

