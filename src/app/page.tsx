import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SobreMim from "@/components/SobreMim";
import Conquistas from "@/components/Conquistas";
import AreasAtuacao from "@/components/AreasAtuacao";
import Educacional from "@/components/Educacional";
import Contato from "@/components/Contato";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
    <SobreMim />
    <Conquistas />
    <AreasAtuacao />
    <Educacional />
    <Contato />
    <WhatsAppButton />
    </>
  );
}
