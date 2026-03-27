import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-2">ETP <span className="text-blue-500">Edson Paz</span></h3>
            <p className="text-slate-400">
              Representação Comercial focada em excelência, conectando a indústria aos melhores lojistas e distribuidores.
            </p>
          </div>
          
          {/* Areas */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Área de Atuação</h4>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-center gap-2">
                <MapPin size={18} className="text-blue-500" />
                Rio de Janeiro (RJ)
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={18} className="text-blue-500" />
                Espírito Santo (ES)
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Fale Conosco</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-emerald-400"><Phone size={18} /></div>
                <div>
                  <div className="font-medium text-white">(21) 3555-8564</div>
                  <div className="text-sm text-slate-400">Comercial</div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-emerald-400"><Phone size={18} /></div>
                <div>
                  <div className="font-medium text-white">(21) 3555-7418</div>
                  <div className="text-sm text-slate-400">Comercial</div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-emerald-400"><Phone size={18} /></div>
                <div>
                  <div className="font-medium text-white">(21) 99917-7573</div>
                  <div className="text-sm text-slate-400">Celular / WhatsApp</div>
                </div>
              </li>
              <li className="flex items-center gap-3 mt-4">
                <div className="bg-slate-800 p-2 rounded-lg text-blue-400"><Mail size={18} /></div>
                <a href="mailto:contato@etprepresentacao.com.br" className="hover:text-white transition-colors">
                  contato@etprepresentacao.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} ETP Representação Comercial. Todos os direitos reservados.</p>
          <p>
            Vendas exclusivas no <span className="text-slate-300 font-medium">atacado</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
