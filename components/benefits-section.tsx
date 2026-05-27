import Image from "next/image"
import { 
  TrendingUp, 
  DollarSign, 
  Clock, 
  Droplets, 
  MapPin, 
  Shield 
} from "lucide-react"

const benefits = [
  {
    icon: TrendingUp,
    title: "Aumento de Produtividade",
    description: "Aplicação precisa que pode aumentar a produtividade em até 30%.",
    stat: "+30%"
  },
  {
    icon: DollarSign,
    title: "Redução de Custos",
    description: "Economia de até 40% em insumos como defensivos e fertilizantes.",
    stat: "-40%"
  },
  {
    icon: Clock,
    title: "Maior Velocidade",
    description: "Cobertura de até 20 hectares por hora com alta precisão.",
    stat: "20ha/h"
  },
  {
    icon: Droplets,
    title: "Economia de Água",
    description: "Aplicação direcionada que reduz o consumo de água em até 50%.",
    stat: "-50%"
  },
  {
    icon: MapPin,
    title: "Mapeamento Preciso",
    description: "Identificação de pragas e doenças com análise de NDVI.",
    stat: "GPS+"
  },
  {
    icon: Shield,
    title: "Segurança",
    description: "Menor exposição dos trabalhadores a produtos químicos.",
    stat: "100%"
  }
]

export function BenefitsSection() {
  return (
    <section id="beneficios" className="py-20 lg:py-32 bg-[#1B4332] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="benefits-grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#benefits-grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Side */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
              <span className="text-sm text-[#E07B00] font-semibold">Por que Drones?</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
              Vantagens da{" "}
              <span className="text-[#E07B00]">Agricultura com Drones</span>
            </h2>

            <p className="text-lg text-white/80 leading-relaxed mb-10">
              A tecnologia de drones está revolucionando o agronegócio brasileiro. 
              Conheça os benefícios que nossos alunos estão proporcionando às propriedades rurais.
            </p>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit) => (
                <div 
                  key={benefit.title} 
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#E07B00]/20 rounded-lg flex items-center justify-center">
                      <benefit.icon className="w-6 h-6 text-[#E07B00]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-white">{benefit.title}</h3>
                        <span className="text-[#E07B00] font-bold text-sm">{benefit.stat}</span>
                      </div>
                      <p className="text-sm text-white/70">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/operator-practice.jpg"
                alt="Operador de drone em campo"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white text-foreground p-6 rounded-xl shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">R$ 8.500</p>
                  <p className="text-sm text-muted-foreground">Salário médio do operador</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
