import { Clock, DollarSign, Wheat } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const challenges = [
  {
    icon: Clock,
    title: "Janelas Climáticas",
    description: "O tempo ideal de aplicação é cada vez mais curto e imprevisível. Atrasos de 24 a 48 horas podem comprometer a eficácia do tratamento, especialmente em surtos de ferrugem asiática ou lagarta-do-cartucho."
  },
  {
    icon: DollarSign,
    title: "Custo dos Insumos",
    description: "Defensivos agrícolas representam uma das maiores parcelas do custo de produção. Qualquer ineficiência na aplicação — seja por deriva, escorrimento ou cobertura inadequada — se traduz diretamente em dinheiro perdido."
  },
  {
    icon: Wheat,
    title: "Produtividade em Risco",
    description: "O potencial genético das cultivares modernas só se expressa plenamente com manejo preciso e no momento certo. Falhas na aplicação comprometem o investimento em sementes, fertilizantes e tecnologia."
  }
]

export function ChallengeSection() {
  return (
    <section id="desafio" className="py-20 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <span className="text-sm text-primary font-semibold">O Desafio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            O Desafio Oculto na Lavoura
          </h2>
          <p className="text-xl text-[#E07B00] font-medium mb-6 italic">
            {'"Cada safra é uma corrida contra o tempo, onde o lucro é decidido nos detalhes."'}
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            O produtor rural precisa equilibrar produtividade, custo dos insumos e janelas climáticas cada vez mais curtas. 
            Nesse cenário, pequenas decisões operacionais podem gerar perdas acumuladas e reduzir a margem da safra.
          </p>
        </div>

        {/* Challenge Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((challenge) => (
            <Card key={challenge.title} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-[#E07B00]/10 rounded-xl flex items-center justify-center mb-6">
                  <challenge.icon className="w-7 h-7 text-[#E07B00]" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{challenge.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{challenge.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
