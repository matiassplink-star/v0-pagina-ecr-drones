"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Phone, 
  Mail, 
  Send,
  MessageCircle,
  User,
  MapPin
} from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    area: "",
    culture: "",
    applications: "",
    vazao: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Format message for WhatsApp
    const message = `Olá! Gostaria de solicitar um orçamento:
    
*Nome:* ${formData.name}
*Telefone:* ${formData.phone}
*Área:* ${formData.area} hectares
*Cultura:* ${formData.culture}
*Número de aplicações:* ${formData.applications}
*Vazão:* ${formData.vazao}
*Observações:* ${formData.message}`

    const whatsappUrl = `https://wa.me/5534988056752?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="contato" className="py-20 lg:py-32 bg-[#1B4332] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="contact-grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#contact-grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
            <MessageCircle className="w-4 h-4 text-[#E07B00]" />
            <span className="text-sm text-[#E07B00] font-semibold">Vamos Fechar Essa Parceria?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Solicite um{" "}
            <span className="text-[#E07B00]">Orçamento</span>
          </h2>
          <p className="text-lg text-white/80">
            Fale com a ECR DRONES e receba uma proposta personalizada para sua fazenda.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-xl bg-white">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Envie seus Dados para Orçamento
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Nome Completo
                    </label>
                    <Input
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-muted border-border"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Telefone / WhatsApp
                    </label>
                    <Input
                      placeholder="(00) 00000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-muted border-border"
                      required
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Área (hectares)
                    </label>
                    <Input
                      placeholder="Ex: 500"
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      className="bg-muted border-border"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Cultura
                    </label>
                    <Input
                      placeholder="Ex: Soja, Milho"
                      value={formData.culture}
                      onChange={(e) => setFormData({ ...formData, culture: e.target.value })}
                      className="bg-muted border-border"
                      required
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Número de Aplicações
                    </label>
                    <Input
                      placeholder="Ex: 3"
                      value={formData.applications}
                      onChange={(e) => setFormData({ ...formData, applications: e.target.value })}
                      className="bg-muted border-border"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Vazão
                    </label>
                    <Input
                      placeholder="Ex: 10 L/ha"
                      value={formData.vazao}
                      onChange={(e) => setFormData({ ...formData, vazao: e.target.value })}
                      className="bg-muted border-border"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Observações (opcional)
                  </label>
                  <textarea
                    placeholder="Informações adicionais..."
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 rounded-md border border-border bg-muted text-foreground text-sm resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white font-semibold py-6"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Enviar via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contato Direto</h3>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <User className="w-6 h-6 text-[#E07B00]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Célio Nascimento</h4>
                    <p className="text-white/70">Gestor e Piloto</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <User className="w-6 h-6 text-[#E07B00]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Rômulo Nascimento</h4>
                    <p className="text-white/70">Gestão Técnica</p>
                  </div>
                </div>
                <a 
                  href="https://wa.me/5534988056752" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex gap-4 items-start hover:bg-white/5 p-3 -m-3 rounded-xl transition-colors"
                >
                  <div className="w-12 h-12 bg-[#25D366]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#25D366]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">(34) 9.8805-6752</h4>
                    <p className="text-white/70">WhatsApp</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h4 className="font-bold text-white mb-4">Próximos Passos</h4>
              <ol className="space-y-4 text-white/80">
                <li className="flex gap-3">
                  <span className="w-6 h-6 bg-[#E07B00] rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0">1</span>
                  <span>Envie área, cultura, número de aplicações e vazão para orçamento</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 bg-[#E07B00] rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0">2</span>
                  <span>Receba proposta personalizada em até 24h</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 bg-[#E07B00] rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0">3</span>
                  <span>Agende visita técnica à sua propriedade</span>
                </li>
              </ol>
            </div>

            {/* Tagline */}
            <div className="text-center pt-6 border-t border-white/10">
              <p className="text-[#E07B00] font-semibold text-lg">
                ECR DRONES — tecnologia de precisão para proteger sua lavoura e maximizar resultado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
