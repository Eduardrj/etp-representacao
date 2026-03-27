export default function Brands() {
  const brands = [
    { name: "G-TECH", desc: "Equipamentos de medição e saúde", logo: "/brands/g-tech.jpg" },
    { name: "FIBRASCA", desc: "Travesseiros e bem-estar", logo: "/brands/fibrasca.jpg" },
    { name: "BALMAK", desc: "Balanças e medição de precisão", logo: "/brands/balmak.jpg" },
    { name: "ORTOMIX", desc: "Produtos ortopédicos e saúde", logo: "/brands/ortomix.jpg" },
    { name: "CINTA MODERNA", desc: "Modeladores e cintas corporais", logo: "/brands/cinta-moderna.jpg" }
  ];

  return (
    <section id="marcas" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">- Marcas Representadas -</h2>
          <p className="text-lg text-slate-600">
            Trabalhamos exclusivamente com marcas líderes de mercado para garantir a qualidade de ponta a ponta no seu catálogo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {brands.map((brand, i) => (
            <div 
              key={i} 
              className="p-8 rounded-2xl border border-slate-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-slate-50 flex flex-col items-center text-center"
            >
              <div className="mb-6 bg-white w-full h-32 rounded-xl shadow-sm border border-slate-100 flex items-center justify-center overflow-hidden p-4">
                <img 
                  src={brand.logo} 
                  alt={`Logo ${brand.name}`}
                  className="max-h-full max-w-full object-contain mix-blend-multiply"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{brand.name}</h3>
              <p className="text-slate-600 font-medium">{brand.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
