import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, Instagram, Facebook, Youtube } from "lucide-react"

const footerLinks = [
  { label: "Início", href: "#inicio" },
  { label: "O Desafio", href: "#desafio" },
  { label: "A Solução", href: "#solucao" },
  { label: "Comparativo", href: "#comparativo" },
  { label: "Nosso Método", href: "#metodo" },
  { label: "Contato", href: "#contato" },
]

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
  return (
    <footer className="bg-[#0D2818] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo-ecr-horizontal.png"
                alt="ECR Drones"
                width={200}
                height={60}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-white/70 leading-relaxed mb-6 max-w-md">
              Tecnologia de precisão flutuante para proteger sua lavoura e maximizar resultados. 
              Pulverização com drones de alta capacidade para o agronegócio moderno.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#E07B00] transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/70 hover:text-[#E07B00] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-6">Contato</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://wa.me/5534988056752" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/70 hover:text-[#25D366] transition-colors"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span>(34) 9.8805-6752</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:contato@ecrdrones.com.br" 
                  className="flex items-center gap-3 text-white/70 hover:text-[#E07B00] transition-colors"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span>contato@ecrdrones.com.br</span>
                </a>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-white/50 text-sm">Responsáveis:</p>
              <p className="text-white/70 text-sm">Célio Nascimento - Gestor e Piloto</p>
              <p className="text-white/70 text-sm">Rômulo Nascimento - Gestão Técnica</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} ECR Drones - Escola de Capacitação Rural. Todos os direitos reservados.
          </p>
          <p className="text-[#E07B00] text-sm font-medium">
            Tecnologia de Precisão Flutuante
          </p>
        </div>
      </div>
    </footer>
  )
}
