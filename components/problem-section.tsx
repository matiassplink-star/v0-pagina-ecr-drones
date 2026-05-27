import { AlertTriangle, Droplets, Tractor, Layers } from "lucide-react"

const problems = [
  {
    icon: AlertTriangle,
    number: "1",
    title: "O Desperdício Invisível do Amassamento",
    description: "Ao entrar na lavoura com máquinas pesadas, o produtor perde de 2% a 4% da área total apenas com o esmagamento das plantas pelas trilhas do trator. Em uma propriedade de 1.000 hectares, isso significa adubar e cuidar de até 40 hectares que jamais serão colhidos.",
    highlight: "Com os drones da ECR DRONES, amassamento zero é lucro direto no silo."
  },
  {
    icon: Tractor,
    number: "2",
    title: "A Armadilha das Janelas Climáticas",
    description: "A praga e a doença não esperam o solo secar. Se ocorrer um veranico ou uma chuva intensa no momento crítico da aplicação, o trator fica parado no galpão para evitar o atolamento e a compactação severa do solo.",
    highlight: "Drones operam independente das condições do solo."
  },
  {
    icon: Droplets,
    number: "3",
    title: "Logística e Desperdício de Insumos",
    description: "A pulverização tratorizada exige uma logística pesada de água, utilizando frequentemente de 150 a 200 litros por hectare. Isso resulta em escorrimento, custo operacional elevado e compactação do solo.",
    highlight: "Drones usam apenas 10 a 15 L/ha com máxima eficiência."
  },
  {
    icon: Layers,
    number: "4",
    title: "A Ineficiência do Baixeiro",
    description: "A pressão do pulverizador convencional não consegue fazer com que o produto penetre na massa foliar, deixando o baixeiro desprotegido. O sistema de drones utiliza o efeito Downwash, que empurra a névoa para dentro da planta.",
    highlight: "Cobertura 360º que o trator simplesmente não alcança."
  }
]

export function ProblemSection() {
  return (
    <section id="problema" className="py-20 lg:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-destructive/10 rounded-full px-4 py-2 mb-6">
            <AlertTriangle className="w-4 h-4 text-destructive" />
            <span className="text-sm text-destructive font-semibold">O Custo do &quot;Sempre Foi Assim&quot;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Manter o Modelo Tradicional{" "}
            <span className="text-destructive">Custa Caro</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A pulverização convencional enfrenta gargalos estruturais que o produtor moderno não pode mais ignorar. 
            Cada hectare trabalhado com trator carrega custos ocultos que corroem sua margem de lucro.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem) => (
            <div 
              key={problem.title}
              className="bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-colors shadow-sm hover:shadow-md"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1B4332] rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  {problem.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-3">{problem.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{problem.description}</p>
                  <div className="bg-[#1B4332]/5 border-l-4 border-[#1B4332] p-4 rounded-r-lg">
                    <p className="text-[#1B4332] font-semibold text-sm">{problem.highlight}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Conclusion */}
        <div className="mt-16 text-center bg-card rounded-2xl p-8 border border-border">
          <p className="text-lg text-foreground leading-relaxed max-w-3xl mx-auto">
            <strong className="text-primary">Conclusão:</strong> Continuar &quot;sempre foi assim&quot; é aceitar perdas que a 
            tecnologia já resolveu. A ECR DRONES transforma esse custo invisível em eficiência real, 
            <span className="text-[#E07B00] font-semibold"> protegendo seu chão enquanto olhamos de cima.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
