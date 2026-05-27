import Image from "next/image"
import { Target, Award, Users, Leaf } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Foco na Prática",
    description: "Mais de 50 horas de voo prático com equipamentos profissionais."
  },
  {
    icon: Award,
    title: "Certificação Reconhecida",
    description: "Certificado válido em todo território nacional, seguindo normas da ANAC."
  },
  {
    icon: Users,
    title: "Instrutores Especializados",
    description: "Aprenda com pilotos experientes e especialistas em agricultura de precisão."
  },
  {
    icon: Leaf,
    title: "Agricultura Sustentável",
    description: "Técnicas que reduzem o uso de insumos e aumentam a produtividade."
  }
]

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/training-class.jpg"
                alt="Sala de treinamento ECR Drones"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-[#1B4332] text-white p-6 rounded-xl shadow-xl max-w-[200px]">
              <p className="text-4xl font-bold">5+</p>
              <p className="text-sm text-white/80">Anos de experiência no mercado</p>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <span className="text-sm text-primary font-semibold">Sobre Nós</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
              A Escola que Forma os{" "}
              <span className="text-[#1E56A0]">Melhores Pilotos</span>{" "}
              do Agronegócio
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              A ECR Drones nasceu com a missão de capacitar profissionais para a nova era da agricultura. 
              Combinamos teoria e prática intensiva para formar operadores de drones preparados para 
              os desafios do campo moderno.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
