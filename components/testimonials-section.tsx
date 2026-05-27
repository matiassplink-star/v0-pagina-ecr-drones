"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    name: "Carlos Eduardo Silva",
    role: "Operador de Drone Agrícola",
    location: "Ribeirão Preto, SP",
    text: "O curso da ECR Drones mudou minha vida. Hoje trabalho como operador em uma grande fazenda de soja e meu salário triplicou. A formação prática foi fundamental para minha contratação.",
    rating: 5
  },
  {
    name: "Ana Paula Mendes",
    role: "Consultora Agrícola",
    location: "Sorriso, MT",
    text: "Como engenheira agrônoma, adicionar a certificação em drones ao meu currículo foi um diferencial enorme. Os instrutores são muito capacitados e o suporte pós-curso é excelente.",
    rating: 5
  },
  {
    name: "Roberto Almeida",
    role: "Produtor Rural",
    location: "Rio Verde, GO",
    text: "Fiz o curso para operar drones na minha própria fazenda. A economia com insumos já pagou o investimento no primeiro ano. Recomendo para todo produtor que quer modernizar.",
    rating: 5
  },
  {
    name: "Fernanda Costa",
    role: "Pilota de Drone",
    location: "Dourados, MS",
    text: "A didática dos professores é impecável. Mesmo sem experiência prévia com drones, consegui me formar com segurança. Hoje tenho minha própria empresa de serviços agrícolas.",
    rating: 5
  }
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="depoimentos" className="py-20 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Quote className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-semibold">Depoimentos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            O Que Nossos{" "}
            <span className="text-[#1E56A0]">Alunos Dizem</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Histórias reais de pessoas que transformaram suas carreiras com a ECR Drones.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-card to-muted">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col items-center text-center">
                {/* Quote Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-8">
                  <Quote className="w-8 h-8 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#E07B00] text-[#E07B00]" />
                  ))}
                </div>

                {/* Text */}
                <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 max-w-2xl">
                  &ldquo;{testimonials[currentIndex].text}&rdquo;
                </blockquote>

                {/* Author */}
                <div>
                  <p className="font-bold text-foreground text-lg">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-[#1E56A0] font-medium">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {testimonials[currentIndex].location}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-primary/30 hover:bg-primary/10"
            >
              <ChevronLeft className="h-5 w-5 text-primary" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? "bg-primary w-6" 
                      : "bg-primary/30 hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-primary/30 hover:bg-primary/10"
            >
              <ChevronRight className="h-5 w-5 text-primary" />
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
          <div className="text-center">
            <p className="text-4xl font-bold text-primary">500+</p>
            <p className="text-muted-foreground">Alunos Formados</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-[#1E56A0]">98%</p>
            <p className="text-muted-foreground">Taxa de Aprovação</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-[#E07B00]">4.9</p>
            <p className="text-muted-foreground">Avaliação Média</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary">85%</p>
            <p className="text-muted-foreground">Empregados em 3 meses</p>
          </div>
        </div>
      </div>
    </section>
  )
}
