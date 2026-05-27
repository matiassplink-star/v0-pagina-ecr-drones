import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook, Youtube, Linkedin } from "lucide-react"

const footerLinks = {
  cursos: [
    { label: "Pilotagem Básica", href: "#" },
    { label: "Operador Agrícola", href: "#" },
    { label: "Especialização Avançada", href: "#" },
    { label: "Cursos In Company", href: "#" }
  ],
  institucional: [
    { label: "Sobre Nós", href: "#sobre" },
    { label: "Nossa Equipe", href: "#" },
    { label: "Infraestrutura", href: "#" },
    { label: "Blog", href: "#" }
  ],
  suporte: [
    { label: "FAQ", href: "#" },
    { label: "Política de Privacidade", href: "#" },
    { label: "Termos de Uso", href: "#" },
    { label: "Contato", href: "#contato" }
  ]
}

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" }
]

export function Footer() {
  return (
    <footer className="bg-[#1B4332] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 lg:py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2">
            <Image
              src="/images/logo-ecr-horizontal.png"
              alt="ECR Drones"
              width={180}
              height={50}
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-sm">
              A Escola de Capacitação Rural em Drones que forma os melhores profissionais 
              para a agricultura de precisão no Brasil.
            </p>
            <div className="flex gap-3">
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

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold text-white mb-4">Cursos</h4>
            <ul className="space-y-3">
              {footerLinks.cursos.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-sm text-white/70 hover:text-[#E07B00] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Institucional</h4>
            <ul className="space-y-3">
              {footerLinks.institucional.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-sm text-white/70 hover:text-[#E07B00] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Suporte</h4>
            <ul className="space-y-3">
              {footerLinks.suporte.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-sm text-white/70 hover:text-[#E07B00] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">
            © 2026 ECR Drones - Escola de Capacitação Rural. Todos os direitos reservados.
          </p>
          <p className="text-sm text-white/60">
            CNPJ: 00.000.000/0001-00
          </p>
        </div>
      </div>
    </footer>
  )
}
