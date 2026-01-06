import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SobreMim from "@/components/SobreMim";
import Conquistas from "@/components/Conquistas";
import Depoimentos from "@/components/Depoimentos";
import AreasAtuacao from "@/components/AreasAtuacao";
import Educacional from "@/components/Educacional";
import Contato from "@/components/Contato";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
    <SobreMim />
    <Conquistas />
    <Depoimentos />
    <AreasAtuacao />
    <Educacional />
    <Contato />
    </>
  );
}
