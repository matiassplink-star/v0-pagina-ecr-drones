import Image from "next/image"
import { Zap, Target, Droplets, Wind } from "lucide-react"

export function SolutionSection() {
  return (
    <section id="solucao" className="py-20 lg:py-32 bg-[#1B4332] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="solution-grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#solution-grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4 text-[#E07B00]" />
            <span className="text-sm text-[#E07B00] font-semibold">A Solução</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Tecnologia de{" "}
            <span className="text-[#E07B00]">Precisão Flutuante</span>
          </h2>
          <p className="text-lg text-white/80 leading-relaxed">
            É aqui que entra a virada de chave para a sua propriedade. A pulverização com drone de alta capacidade 
            não é apenas uma inovação tecnológica — é uma ferramenta de otimização financeira que transforma a 
            forma como você protege sua lavoura.
          </p>
        </div>

        {/* XAG P100PRO Feature */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Drones XAG P100PRO de 52 Litros
            </h3>
            <p className="text-white/80 leading-relaxed mb-8">
              Com capacidade de cobrir <strong className="text-white">10 a 30 hectares por hora</strong>, nossos drones 
              reduzem o tempo de resposta em janelas críticas, permitem operar mesmo com solo encharcado e evitam 
              perdas causadas pelo amassamento e pelo atraso da aplicação.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                <Target className="w-8 h-8 text-[#E07B00] mb-3" />
                <h4 className="font-semibold mb-2">Aplicação Precisa</h4>
                <p className="text-sm text-white/70">Melhor cobertura da planta com controle centimétrico</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                <Droplets className="w-8 h-8 text-[#E07B00] mb-3" />
                <h4 className="font-semibold mb-2">Economia de Água</h4>
                <p className="text-sm text-white/70">Apenas 10 a 15 L/ha vs 150-200 L/ha do trator</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/operator-practice.jpg"
                alt="Operador ECR Drones em campo"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white text-foreground p-6 rounded-xl shadow-xl">
              <p className="text-3xl font-bold text-[#1B4332]">52L</p>
              <p className="text-sm text-muted-foreground">Capacidade do Tanque</p>
            </div>
          </div>
        </div>

        {/* Vortex Effect */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Wind className="w-8 h-8 text-[#E07B00]" />
                <h3 className="text-2xl font-bold">Efeito Vortex: A Física a Favor da Sua Lavoura</h3>
              </div>
              <p className="text-white/80 leading-relaxed mb-6">
                O <strong className="text-white">Efeito Vortex (Downwash)</strong> é o fluxo de ar descendente gerado pelas hélices 
                do drone durante o voo. Esse movimento empurra as gotas do defensivo para dentro da massa foliar, 
                ajudando a aplicação a alcançar todas as partes da planta.
              </p>
              <p className="text-white/80 leading-relaxed">
                Na pulverização convencional com trator, a cobertura costuma ficar mais concentrada no topo das plantas. 
                Já com o drone, o fluxo de ar ajuda a levar as gotas até o <strong className="text-white">baixeiro</strong>, 
                onde muitas pragas e doenças se escondem.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-red-500/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🚜</span>
                </div>
                <h4 className="font-semibold mb-2">Trator Convencional</h4>
                <p className="text-sm text-white/70">Cobertura mais superficial, concentrada no topo das plantas</p>
              </div>
              <div className="bg-[#E07B00]/20 rounded-xl p-6 text-center border-2 border-[#E07B00]/50">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#E07B00]/30 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🚁</span>
                </div>
                <h4 className="font-semibold mb-2">ECR DRONES</h4>
                <p className="text-sm text-white/70">Penetração profunda, cobertura uniforme do topo ao baixeiro</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
