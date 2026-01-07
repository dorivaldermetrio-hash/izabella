import FadeInOnScroll from "./FadeInOnScroll";

export default function AreasAtuacao() {
  const areas = [
    {
      titulo: "Direito Empresarial & Estratégico",
      descricao: "Assessoria jurídica para quem empreende e precisa estruturar o negócio com segurança, tomar decisões estratégicas e crescer com respaldo legal.",
      detalhes: [
        "Contratos comerciais e empresariais",
        "Estruturação jurídica de negócios",
        "Consultoria estratégica para crescimento",
        "Apoio jurídico para negócios digitais e infoprodutores",
      ],
      destaque: "Segurança jurídica para crescer com previsibilidade.",
    },
    {
      titulo: "Direito do Trabalho Empresarial & Prevenção de Conflitos",
      descricao: "Atuação estratégica focada na prevenção de passivos trabalhistas, aliando orientação jurídica, desenvolvimento humano e uso de tecnologia para relações de trabalho mais saudáveis.",
      detalhes: [
        "Defesa trabalhista empresarial",
        "Consultoria preventiva",
        "Estruturação de rotinas e políticas internas",
        "Prevenção de conflitos trabalhistas",
      ],
      destaque: "Menos riscos, mais organização.",
    },
    {
      titulo: "Treinamentos Empresariais Integrados",
      descricao: "Treinamentos personalizados que unem Direito, Inteligência Artificial, Marketing Digital e Desenvolvimento Humano, com foco em produtividade, comunicação, responsabilidade e prevenção de riscos jurídicos, incluindo diretrizes da NR-1.",
      detalhes: [
        "Treinamentos preventivos em relações de trabalho (NR-1)",
        "Comunicação estratégica e prevenção de conflitos",
        "Uso da IA para otimização de tarefas e processos",
        "Desenvolvimento de soft skills e responsabilidade individual",
      ],
      destaque: "Empresas mais conscientes, produtivas e juridicamente protegidas.",
    },
    {
      titulo: "Advocacia Extrajudicial Estratégica",
      descricao: "Soluções jurídicas rápidas, eficientes e menos desgastantes, priorizando acordos e economia de tempo e recursos.",
      detalhes: [
        "Inventários extrajudiciais",
        "Divórcios extrajudiciais",
        "Adjudicação compulsória",
        "Soluções consensuais personalizadas",
      ],
      destaque: "Nem todo conflito precisa virar processo.",
    },
    {
      titulo: "Direito Cível, Família e Sucessões",
      descricao: "Atuação em demandas cíveis, de família e sucessões, tanto preventivas quanto litigiosas, com abordagem técnica, estratégica e sensível às particularidades humanas envolvidas.",
      detalhes: [
        "Contratos e obrigações",
        "Responsabilidade civil",
        "Direitos reais",
        "Processos cíveis litigiosos",
        "Direito de família (divórcio, guarda, alimentos, partilha)",
        "Sucessões (inventários judiciais e extrajudiciais)",
        "Consultoria preventiva patrimonial e familiar",
      ],
      destaque: "Quando o conflito envolve patrimônio, relações e histórias de vida, a atuação exige técnica e sensibilidade.",
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
          <div className="max-w-5xl mx-auto mb-16 md:mb-20">
          <p
            className="text-xl md:text-2xl lg:text-3xl font-light italic text-center leading-relaxed"
            style={{
              color: "#E5E5E5",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
              letterSpacing: "0.03em",
              lineHeight: "1.7",
            }}
          >
            Atuação jurídica e estratégica integrada, voltada a profissionais liberais, 
            pequenos e médios empresários e infoprodutores, unindo Direito, Inteligência 
            Artificial, Marketing Digital e Desenvolvimento Humano, com foco em prevenção, 
            estruturação e atuação firme no contencioso quando necessário.
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
                  className="text-xl md:text-2xl lg:text-3xl font-light mb-4"
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
                <div className="space-y-3 mb-6">
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

                {/* Destaque */}
                <div className="pt-4 border-t border-gray-700">
                  <p
                    className="text-sm md:text-base font-light italic"
                    style={{
                      color: "#B8A082",
                      textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    {area.destaque}
                  </p>
                </div>
              </div>
            </div>
            </FadeInOnScroll>
          ))}
        </div>

        {/* Mensagem Final */}
        <FadeInOnScroll delay={700}>
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
            "Especialista em pessoas, não apenas em áreas jurídicas. Cada caso é único 
            e merece uma abordagem integrada que une técnica, estratégia e humanidade."
          </p>
          <div className="h-px mt-10" style={{ background: "linear-gradient(to right, transparent, #B8A082, transparent)" }}></div>
        </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}

