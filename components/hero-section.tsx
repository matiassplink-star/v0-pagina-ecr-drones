import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play, ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-drone-field.jpg"
          alt="Drone agrícola sobrevoando plantação"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B4332]/95 via-[#1B4332]/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
            <span className="w-2 h-2 bg-[#E07B00] rounded-full animate-pulse" />
            <span className="text-sm text-white/90 font-medium">Matrículas Abertas 2026</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            <span className="text-balance">Seja um</span>{" "}
            <span className="text-[#E07B00]">Piloto de Drone</span>{" "}
            <span className="text-balance">Agrícola Certificado</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-xl">
            Capacitação completa em operação de drones para agricultura de precisão. 
            Aprenda com especialistas e transforme sua carreira no agronegócio.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mb-10">
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-white">500+</p>
              <p className="text-sm text-white/70">Alunos Formados</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-white">98%</p>
              <p className="text-sm text-white/70">Aprovação</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-white">50h</p>
              <p className="text-sm text-white/70">Prática de Voo</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-[#E07B00] hover:bg-[#E07B00]/90 text-white font-semibold px-8 py-6 text-base"
            >
              Quero me Matricular
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white font-semibold px-8 py-6 text-base backdrop-blur-sm"
            >
              <Play className="mr-2 h-5 w-5" />
              Ver Vídeo
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Grid */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-20 pointer-events-none">
        <svg viewBox="0 0 400 400" className="w-full h-full" fill="none">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1E56A0" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="400" height="400" fill="url(#grid)" />
        </svg>
      </div>
    </section>
  )
}
