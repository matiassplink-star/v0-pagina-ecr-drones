import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 lg:py-32 bg-muted relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#1B4332] rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Content */}
            <div className="p-8 md:p-12 lg:p-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                Pronto para Decolar sua{" "}
                <span className="text-[#E07B00]">Carreira?</span>
              </h2>
              <p className="text-lg text-white/80 mb-8">
                As vagas são limitadas para garantir qualidade no ensino. 
                Reserve sua vaga agora e dê o primeiro passo para se tornar um piloto de drone agrícola.
              </p>

              {/* Benefits List */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-white/90">
                  <span className="w-6 h-6 bg-[#E07B00] rounded-full flex items-center justify-center text-xs font-bold">✓</span>
                  Parcelamento em até 12x sem juros
                </li>
                <li className="flex items-center gap-3 text-white/90">
                  <span className="w-6 h-6 bg-[#E07B00] rounded-full flex items-center justify-center text-xs font-bold">✓</span>
                  Material didático incluso
                </li>
                <li className="flex items-center gap-3 text-white/90">
                  <span className="w-6 h-6 bg-[#E07B00] rounded-full flex items-center justify-center text-xs font-bold">✓</span>
                  Certificado reconhecido nacionalmente
                </li>
              </ul>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="bg-[#E07B00] hover:bg-[#E07B00]/90 text-white font-semibold px-8"
                >
                  Matricular Agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white font-semibold px-8"
                >
                  Baixar Catálogo
                </Button>
              </div>

              {/* Contact Info */}
              <div className="flex flex-wrap gap-6 pt-6 border-t border-white/10">
                <a href="tel:+5516999999999" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>(16) 99999-9999</span>
                </a>
                <a href="mailto:contato@ecrdrones.com.br" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>contato@ecrdrones.com.br</span>
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="relative hidden lg:block">
              <Image
                src="/images/certification.jpg"
                alt="Certificado ECR Drones"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#1B4332]/50" />
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E07B00]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#1E56A0]/10 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  )
}
