"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  Instagram,
  Facebook,
  Youtube,
  Linkedin
} from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Endereço",
    content: "Av. Brasil, 1500 - Centro",
    subcontent: "Ribeirão Preto, SP - CEP 14015-000"
  },
  {
    icon: Phone,
    title: "Telefone",
    content: "(16) 3333-3333",
    subcontent: "(16) 99999-9999 (WhatsApp)"
  },
  {
    icon: Mail,
    title: "E-mail",
    content: "contato@ecrdrones.com.br",
    subcontent: "matriculas@ecrdrones.com.br"
  },
  {
    icon: Clock,
    title: "Horário",
    content: "Segunda a Sexta: 8h às 18h",
    subcontent: "Sábado: 8h às 12h"
  }
]

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" }
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <section id="contato" className="py-20 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Mail className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-semibold">Contato</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Entre em{" "}
            <span className="text-[#E07B00]">Contato</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Tire suas dúvidas, solicite informações ou agende uma visita à nossa escola.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Envie sua Mensagem
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
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      E-mail
                    </label>
                    <Input
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-muted border-border"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Telefone / WhatsApp
                    </label>
                    <Input
                      placeholder="(00) 00000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-muted border-border"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Curso de Interesse
                    </label>
                    <select
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full h-10 px-3 rounded-md border border-border bg-muted text-foreground text-sm"
                    >
                      <option value="">Selecione um curso</option>
                      <option value="basico">Pilotagem Básica</option>
                      <option value="agricola">Operador Agrícola</option>
                      <option value="avancado">Especialização Avançada</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Mensagem
                  </label>
                  <textarea
                    placeholder="Como podemos ajudar?"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 rounded-md border border-border bg-muted text-foreground text-sm resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                >
                  Enviar Mensagem
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info) => (
              <div 
                key={info.title} 
                className="flex gap-4 p-5 bg-muted rounded-xl hover:bg-muted/80 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                  <p className="text-foreground/80">{info.content}</p>
                  <p className="text-sm text-muted-foreground">{info.subcontent}</p>
                </div>
              </div>
            ))}

            {/* Social Media */}
            <div className="pt-6 border-t border-border">
              <h4 className="font-semibold text-foreground mb-4">Siga-nos nas Redes</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                  </a>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-6 aspect-video bg-muted rounded-xl overflow-hidden border border-border">
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <MapPin className="w-12 h-12 mx-auto mb-2 text-primary/50" />
                  <p className="text-sm">Mapa da localização</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
