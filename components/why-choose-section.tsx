import { Users, FileText, TrendingUp, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const reasons = [
  {
    icon: Users,
    title: "Gestão Técnica Especializada",
    description: "Liderado por Rômulo Nascimento, com planejamento baseado nas condições reais da lavoura."
  },
  {
    icon: FileText,
    title: "Transparência Total",
    description: "Você recebe relatório completo de telemetria, mapa de cobertura e dados de aplicação."
  },
  {
    icon: TrendingUp,
    title: "Retorno Comprovado",
    description: "Amassamento zero, menos desperdício e aplicação no momento ideal para mais produtividade."
  },
  {
    icon: Shield,
    title: "Confiabilidade Operacional",
    description: "Equipe certificada, manutenção preventiva e foco em cumprir cada aplicação com precisão."
  }
]

export function WhyChooseSection() {
  return (
    <section id="porque" className="py-20 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#E07B00]/10 rounded-full px-4 py-2 mb-6">
            <span className="text-sm text-[#E07B00] font-semibold">Diferenciais</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Por Que Escolher a{" "}
            <span className="text-[#1B4332]">ECR DRONES?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Mais do que pulverização com drone, entregamos uma operação técnica, segura e orientada a resultados.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason) => (
            <Card key={reason.title} className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-[#1B4332]/10 rounded-2xl flex items-center justify-center">
                  <reason.icon className="w-8 h-8 text-[#1B4332]" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
