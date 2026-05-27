import Image from "next/image"
import { Shield, Map, Settings, FileText } from "lucide-react"

const steps = [
  {
    icon: Map,
    title: "Mapeamento da Propriedade",
    description: "Nossa equipe realiza o mapeamento da propriedade, identifica obstáculos e define o plano operacional com precisão centimétrica."
  },
  {
    icon: Settings,
    title: "Calibração do Equipamento",
    description: "Calibramos o equipamento conforme a recomendação técnica de cada produto, ajustando gotas, vazão e parâmetros de voo."
  },
  {
    icon: Shield,
    title: "Operação Segura",
    description: "Durante a operação, mantemos rotina organizada de apoio em solo para acelerar reabastecimento e troca de baterias."
  },
  {
    icon: FileText,
    title: "Relatório Técnico",
    description: "Ao final, o cliente recebe um relatório técnico completo com telemetria e rastreabilidade de todo o processo."
  }
]

export function MethodSection() {
  return (
    <section id="metodo" className="py-20 lg:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Side */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-semibold">Nosso Método</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
              Segurança e{" "}
              <span className="text-[#1E56A0]">Rigor Técnico</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Na ECR DRONES, não vendemos apenas voos — entregamos proteção de lavoura com responsabilidade técnica. 
              Nosso trabalho começa com um planejamento cuidadoso, baseado em boas práticas de campo e na análise 
              detalhada da área.
            </p>

            {/* Steps */}
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={step.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/training-class.jpg"
                alt="Equipe ECR Drones"
                fill
                className="object-cover"
              />
            </div>
            {/* Equipment Badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#1B4332] text-white p-6 rounded-xl shadow-xl max-w-[220px]">
              <p className="text-2xl font-bold">XAG P100PRO</p>
              <p className="text-sm text-white/80">Equipamento de alta performance</p>
            </div>
          </div>
        </div>

        {/* Equipment Info */}
        <div className="mt-20 bg-card rounded-2xl p-8 lg:p-12 border border-border shadow-lg">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Nossos Equipamentos: XAG P100PRO
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              A ECR DRONES opera com <strong className="text-foreground">dois drones agrícolas XAG P100PRO</strong>, 
              equipamentos projetados para aplicações de alta performance em larga escala. Com tanque de <strong className="text-foreground">52 litros</strong>, 
              nossos drones combinam potência, precisão e confiabilidade para atender propriedades de diferentes portes 
              com eficiência operacional. Em condições reais de campo, entrega cobertura de <strong className="text-[#E07B00]">10 a 30 hectares por hora</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
