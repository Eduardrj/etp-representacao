import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full bg-slate-900 text-white overflow-hidden py-16 lg:py-24">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[100px] opacity-30"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        <div className="max-w-4xl mx-auto text-center space-y-8 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/50 border border-blue-700/50 text-blue-200 text-sm font-medium mb-4">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400"></span>
            Atendimento Exclusivo para RJ e ES
          </div>
          
          {/* Logo Area - Destaque com Fundo Transparente */}
          <div className="relative mb-4 group transform transition-all duration-500 hover:scale-105">
            <img 
              src="/etp-logo.png" 
              alt="ETP Representação Comercial"
              className="w-full max-w-[340px] md:max-w-[420px] h-auto object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]"
            />
          </div>
          
          <h1 className="text-3xl md:text-5xl font-medium tracking-tight text-white mt-8">
            Autoridade em Representação B2B
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Conectamos as melhores marcas de saúde e bem-estar às <span className="text-white font-medium">lojas cirúrgicas, redes e distribuidores</span>.
          </p>
          
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a 
              href="#marcas" 
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all shadow-lg hover:shadow-blue-500/50 flex items-center justify-center gap-2"
            >
              Conheça as Marcas
              <ArrowRight size={20} />
            </a>
            <a 
              href="https://wa.me/5521999177573" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold border border-slate-700 transition-all flex items-center justify-center gap-2"
            >
              Falar com Consultor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
