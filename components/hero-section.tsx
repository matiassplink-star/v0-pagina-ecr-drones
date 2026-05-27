import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

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
            <span className="text-sm text-white/90 font-medium">Tecnologia de Precisão Flutuante</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            <span className="text-balance">Pulverização com</span>{" "}
            <span className="text-[#E07B00]">Drone de Alta Capacidade</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-xl">
            Com os drones XAG P100PRO de 52 litros, a ECR DRONES entrega aplicação rápida, 
            precisa e eficiente. Amassamento zero é lucro direto no silo.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mb-10">
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-white">10-30</p>
              <p className="text-sm text-white/70">Hectares/hora</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-white">52L</p>
              <p className="text-sm text-white/70">Capacidade</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-white">0%</p>
              <p className="text-sm text-white/70">Amassamento</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-[#E07B00] hover:bg-[#E07B00]/90 text-white font-semibold px-8 py-6 text-base"
              asChild
            >
              <a href="#contato">
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white font-semibold px-8 py-6 text-base backdrop-blur-sm"
              asChild
            >
              <a href="https://wa.me/5534988056752" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" />
                (34) 9.8805-6752
              </a>
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
