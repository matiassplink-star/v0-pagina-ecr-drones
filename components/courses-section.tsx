import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Check, Clock, Users, BookOpen, ArrowRight } from "lucide-react"

const courses = [
  {
    title: "Pilotagem Básica",
    subtitle: "Para Iniciantes",
    price: "R$ 1.997",
    duration: "40 horas",
    students: "Turmas de 12 alunos",
    featured: false,
    features: [
      "Fundamentos de pilotagem de drones",
      "Legislação e normas da ANAC",
      "20 horas de voo prático",
      "Manutenção básica do equipamento",
      "Certificado de conclusão"
    ]
  },
  {
    title: "Operador Agrícola",
    subtitle: "Mais Popular",
    price: "R$ 3.497",
    duration: "80 horas",
    students: "Turmas de 10 alunos",
    featured: true,
    features: [
      "Tudo do curso básico",
      "Aplicação de defensivos e fertilizantes",
      "Mapeamento e georreferenciamento",
      "50 horas de voo prático",
      "Análise de NDVI e diagnóstico",
      "Certificação profissional completa"
    ]
  },
  {
    title: "Especialização Avançada",
    subtitle: "Para Profissionais",
    price: "R$ 5.997",
    duration: "120 horas",
    students: "Turmas de 8 alunos",
    featured: false,
    features: [
      "Tudo do curso de operador",
      "Agricultura de precisão avançada",
      "Gestão de frota de drones",
      "Análise de dados e relatórios",
      "Consultoria para produtores",
      "Mentoria por 6 meses"
    ]
  }
]

export function CoursesSection() {
  return (
    <section id="cursos" className="py-20 lg:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-semibold">Nossos Cursos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Escolha o Curso Ideal para{" "}
            <span className="text-[#E07B00]">Sua Carreira</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Formação completa do básico ao avançado. Invista no seu futuro na agricultura de precisão.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card 
              key={course.title} 
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                course.featured 
                  ? "border-2 border-[#E07B00] shadow-lg scale-[1.02]" 
                  : "border-border hover:border-primary/30"
              }`}
            >
              {course.featured && (
                <div className="absolute top-0 right-0 bg-[#E07B00] text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
                  Recomendado
                </div>
              )}
              
              <CardHeader className="pb-4">
                <p className="text-sm text-[#1E56A0] font-medium">{course.subtitle}</p>
                <h3 className="text-2xl font-bold text-foreground">{course.title}</h3>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-3xl font-bold text-primary">{course.price}</span>
                  <span className="text-muted-foreground text-sm">/ curso completo</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students}</span>
                  </div>
                </div>

                <div className="h-px bg-border" />

                <ul className="space-y-3">
                  {course.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button 
                  className={`w-full font-semibold ${
                    course.featured 
                      ? "bg-[#E07B00] hover:bg-[#E07B00]/90 text-white" 
                      : "bg-primary hover:bg-primary/90 text-primary-foreground"
                  }`}
                >
                  Matricular Agora
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Não sabe qual curso escolher? Fale com nossa equipe!
          </p>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
            Falar com Consultor
          </Button>
        </div>
      </div>
    </section>
  )
}
