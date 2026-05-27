"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "O Desafio", href: "#desafio" },
  { label: "A Solução", href: "#solucao" },
  { label: "Comparativo", href: "#comparativo" },
  { label: "Método", href: "#metodo" },
  { label: "Contato", href: "#contato" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo-ecr-horizontal.png"
              alt="ECR Drones - Escola de Capacitação Rural"
              width={200}
              height={56}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="https://wa.me/5534988056752" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-[#25D366] transition-colors"
            >
              <Phone className="h-4 w-4" />
              (34) 9.8805-6752
            </a>
            <Button className="bg-[#E07B00] hover:bg-[#E07B00]/90 text-white font-semibold px-6" asChild>
              <a href="#contato">Solicitar Orçamento</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-foreground/80 hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a 
                href="https://wa.me/5534988056752" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-base font-medium text-[#25D366] py-2"
              >
                <Phone className="h-5 w-5" />
                (34) 9.8805-6752
              </a>
              <Button className="bg-[#E07B00] hover:bg-[#E07B00]/90 text-white font-semibold mt-4" asChild>
                <a href="#contato" onClick={() => setIsMenuOpen(false)}>Solicitar Orçamento</a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
