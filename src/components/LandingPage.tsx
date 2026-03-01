import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Target, Zap, Users, ShieldCheck, Briefcase } from 'lucide-react';

const colors = {
  navy: '#051d40',
  white: '#F6F6F6',
};

export default function LandingPage() {
  return (
    <div className="bg-[#F6F6F6] text-[#051d40] font-sans selection:bg-[#051d40] selection:text-white">
      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center px-6 py-20 lg:px-20 bg-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
            O problema raramente é o produto. <br />
            <span className="text-gray-400 italic font-serif">Quase sempre é a estratégia.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
            Eu organizo o marketing de negócios que já têm um bom produto, mas não crescem por falta de direção estratégica.
          </p>
                  <a
          href="https://wa.me/5545998265650?text=Olá,%20vim%20pelo%20site%20e%20quero%20agendar%20uma%20conversa%20estratégica."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#0f5140] text-white px-8 py-3 rounded-full text-lg font-semibold flex items-center gap-3 hover:scale-105 transition-transform"
        >
          Agendar conversa estratégica
          <ArrowRight size={20} />
        </a>
          
        </motion.div>
      </section>

      {/* A VERDADE QUE NINGUÉM FALA */}
      <section className="py-24 px-6 lg:px-20 bg-[#051d40] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-16">Você não precisa de mais marketing.</h2>
          
          <div className="space-y-8 text-xl md:text-3xl font-light opacity-80">
            <p>Mais tráfego não resolve falta de clareza.</p>
            <p>Mais conteúdo não resolve falta de posicionamento.</p>
            <p>Mais design não resolve falta de direção.</p>
          </div>

          <div className="mt-16 pt-16 border-t border-white/10">
            <p className="text-2xl md:text-4xl font-bold">
              Quando a estratégia está errada, qualquer execução vira custo.
            </p>
            <p className="mt-8 text-xl text-emerald-400 font-medium uppercase tracking-widest">
              Marketing sem direção é só investimento mal distribuído.
            </p>
          </div>
        </div>
      </section>

      {/* O DIAGNÓSTICO REAL */}
      <section className="py-24 px-6 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Antes de executar, eu encontro o gargalo.</h2>
              <p className="text-xl text-gray-600 mb-12">
                Na maioria dos casos, o produto é bom. O que trava o crescimento é:
              </p>
              <ul className="space-y-6">
                {[
                  'Falta de estrutura de funil',
                  'Posicionamento desalinhado',
                  'Comunicação genérica',
                  'Perfil que não converte',
                  'Estratégia desconectada do momento do negócio'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-xl font-medium">
                    <Target className="text-[#051d40]" size={24} />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-12 text-lg font-semibold border-l-4 border-[#051d40] pl-6 italic">
                Eu não começo vendendo serviço. Eu começo entendendo o cenário.
              </p>
            </div>
            <div className="bg-[#F6F6F6] p-12 rounded-3xl border border-black/5">
              <div className="grid grid-cols-2 gap-8">
                <div className="p-6 bg-white rounded-2xl shadow-sm">
                  <Users className="mb-4 text-[#051d40]" />
                  <div className="text-3xl font-bold">92%</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">Foco errado</div>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm">
                  <Zap className="mb-4 text-[#051d40]" />
                  <div className="text-3xl font-bold">4.5x</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">ROI Médio</div>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm">
                  <ShieldCheck className="mb-4 text-[#051d40]" />
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">Clareza</div>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm">
                  <Briefcase className="mb-4 text-[#051d40]" />
                  <div className="text-3xl font-bold">2+</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">Anos Exp.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMO EU ATUO */}
      <section className="py-24 px-6 lg:px-20 bg-[#F6F6F6]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Estratégia antes de execução.</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Análise do cenário atual', desc: 'Mergulho profundo nos números e processos.' },
              { title: 'Identificação do ponto de travamento', desc: 'Onde exatamente o dinheiro está sendo perdido.' },
              { title: 'Definição da estratégia ideal', desc: 'Plano de ação focado na fase atual do negócio.' },
              { title: 'Estruturação do time e ferramentas', desc: 'Montagem da base para escala sustentável.' }
            ].map((step, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-black/5 hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-gray-200 mb-6">0{i + 1}</div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center max-w-3xl mx-auto">
            <p className="text-xl text-gray-600 leading-relaxed">
              Alguns precisam de tráfego. Outros de direção. Outros de funil, conteúdo ou CRM. 
              <span className="block mt-4 font-bold text-[#051d40]">A solução depende do momento.</span>
            </p>
          </div>
        </div>
      </section>

      {/* DIFERENCIAL */}
      <section className="py-24 px-6 lg:px-20 bg-white border-y border-black/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Não sou uma agência tradicional.</h2>
          <div className="grid md:grid-cols-2 gap-12 text-xl text-gray-600 leading-relaxed">
            <p>
              Agências vendem pacotes. Eu estruturo crescimento. Prefiro poucos clientes para trabalhar próximo e garantir resultados reais.
            </p>
            <p>
              Construo a base estratégica antes de pensar em escala. Sem atalhos, sem promessas vazias, apenas fundamentos sólidos.
            </p>
          </div>
        </div>
      </section>

      {/* HISTÓRIA */}
      <section className="py-24 px-6 lg:px-20 bg-[#F6F6F6]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Desde cedo, estratégia antes de volume.</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Comecei vendendo camisetas aos 13 anos. Aprendi cedo que vender não é sobre ter produto. 
            É sobre organizar como ele chega até o cliente. Essa lógica continua sendo a mesma hoje, 
            apenas aplicada a cenários mais complexos e digitais.
          </p>
        </div>
      </section>

      {/* SEÇÃO FINAL - CTA */}
      <section className="py-32 px-6 lg:px-20 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            Se o seu produto é bom, o problema provavelmente é a estratégia.
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Vamos identificar onde está o gargalo e organizar o crescimento da forma certa.
          </p>
           <a
          href="https://wa.me/5545998265650?text=Olá,%20vim%20pelo%20site%20e%20quero%20agendar%20uma%20conversa%20estratégica."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#0f5140] text-white px-8 py-3 rounded-full text-lg font-semibold flex items-center gap-3 hover:scale-105 transition-transform"
        >
          Agendar conversa estratégica
          <ArrowRight size={20} />
        </a>
        </div>
      </section>

      <footer className="py-12 px-6 text-center text-gray-400 text-sm border-t border-black/5">
        &copy; {new Date().getFullYear()} Estratégia & Crescimento. Todos os direitos reservados.
      </footer>
    </div>
  );
}
