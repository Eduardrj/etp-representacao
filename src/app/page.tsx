import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <Brands />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
