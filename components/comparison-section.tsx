import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Droplets, Gauge, MapPin, AlertCircle, Wind } from "lucide-react"

const comparisonData = [
  {
    indicator: "Perda por amassamento",
    conventional: "2,5% a 4% da área",
    drone: "0%",
    droneHighlight: true
  },
  {
    indicator: "Compactação do solo",
    conventional: "Alta",
    drone: "Zero",
    droneHighlight: true
  },
  {
    indicator: "Consumo de água",
    conventional: "150 a 200 L/ha",
    drone: "10 a 15 L/ha",
    droneHighlight: true
  },
  {
    indicator: "Acesso a áreas difíceis",
    conventional: "Limitado",
    drone: "100%",
    droneHighlight: true
  },
  {
    indicator: "Velocidade de aplicação",
    conventional: "Variável",
    drone: "10 a 50 km/hora",
    droneHighlight: true
  },
  {
    indicator: "Risco de deriva",
    conventional: "Médio",
    drone: "Controlado",
    droneHighlight: true
  }
]

const resultStats = [
  {
    icon: TrendingUp,
    value: "1.350",
    unit: "sacas",
    label: "Ganho na colheita",
    description: "Eliminação de 3% de perda por amassamento"
  },
  {
    icon: Droplets,
    value: "R$ 155.250",
    unit: "",
    label: "Retorno financeiro",
    description: "Preço base R$ 115,00/sc - ano 2026"
  },
  {
    icon: Gauge,
    value: "10-30",
    unit: "ha/h",
    label: "Eficiência operacional",
    description: "Capacidade do drone em campo"
  },
  {
    icon: MapPin,
    value: "10-15",
    unit: "L/ha",
    label: "Economia de água",
    description: "vs 150-200 L/ha convencional"
  }
]

export function ComparisonSection() {
  return (
    <section id="comparativo" className="py-20 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-semibold">Estudo de Caso</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            O Impacto nos{" "}
            <span className="text-[#E07B00]">Números</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comparação direta entre pulverização tratorizada e operação com drone 
            em uma área de <strong>500 hectares de soja</strong>.
          </p>
        </div>

        {/* Comparison Table */}
        <Card className="border-0 shadow-xl mb-16 overflow-hidden">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-6 text-foreground font-semibold bg-muted">Indicador</th>
                    <th className="text-center p-6 text-foreground font-semibold bg-muted">Pulverização Convencional</th>
                    <th className="text-center p-6 text-white font-semibold bg-[#1B4332]">ECR DRONES</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={row.indicator} className={index % 2 === 0 ? "bg-background" : "bg-muted/50"}>
                      <td className="p-6 text-foreground font-medium">{row.indicator}</td>
                      <td className="p-6 text-center text-muted-foreground">{row.conventional}</td>
                      <td className={`p-6 text-center font-semibold ${row.droneHighlight ? "text-[#1B4332] bg-[#1B4332]/5" : "text-foreground"}`}>
                        {row.drone}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Result Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resultStats.map((stat) => (
            <Card key={stat.label} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-3xl font-bold text-foreground">{stat.value}</span>
                  {stat.unit && <span className="text-lg text-muted-foreground">{stat.unit}</span>}
                </div>
                <h4 className="font-semibold text-foreground mb-1">{stat.label}</h4>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Highlight Box */}
        <div className="mt-12 bg-[#E07B00]/10 border border-[#E07B00]/30 rounded-2xl p-8 text-center">
          <p className="text-lg text-foreground">
            Em uma propriedade de <strong>500 hectares</strong>, a eliminação de 3% de perda por 
            amassamento representa <strong className="text-[#E07B00]">1.350 sacas a mais na colheita</strong>, 
            ou <strong className="text-[#E07B00]">R$ 155.250,00 de ganho</strong> levando em consideração 
            a produção de 90 sacos por hectare.
          </p>
        </div>
      </div>
    </section>
  )
}
