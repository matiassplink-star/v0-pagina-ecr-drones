"use client"

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useAuth } from '@/lib/auth-context'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import {
  LayoutDashboard,
  BookOpen,
  Video,
  MessageSquare,
  FileText,
  BarChart3,
  Settings,
  Crown,
  Gem
} from 'lucide-react'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Trilhas de Cursos', href: '/dashboard/cursos', icon: BookOpen },
  { name: 'Aulas ao Vivo', href: '/dashboard/ao-vivo', icon: Video, premium: true },
  { name: 'Fórum', href: '/dashboard/forum', icon: MessageSquare },
  { name: 'Biblioteca', href: '/dashboard/biblioteca', icon: FileText, vip: true },
  { name: 'Estatísticas', href: '/dashboard/estatisticas', icon: BarChart3 },
  { name: 'Configurações', href: '/dashboard/configuracoes', icon: Settings },
]

export function DashboardSidebar() {
  const pathname = usePathname()
  const { user } = useAuth()

  const getPlanBadge = () => {
    if (user?.plan === 'premium') {
      return (
        <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0">
          <Crown className="w-3 h-3 mr-1" />
          Premium
        </Badge>
      )
    }
    if (user?.plan === 'vip') {
      return (
        <Badge className="bg-secondary text-white border-0">
          <Gem className="w-3 h-3 mr-1" />
          VIP
        </Badge>
      )
    }
    return (
      <Badge variant="outline" className="text-muted-foreground">
        Gratuito
      </Badge>
    )
  }

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-col flex-grow bg-card border-r border-border">
          {/* Logo */}
          <div className="flex items-center h-16 px-4 border-b border-border">
            <Link href="/dashboard">
              <Image
                src="/images/logo-ecr-horizontal.png"
                alt="ECR Drones"
                width={150}
                height={45}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* User Info */}
          <div className="p-4 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                {user?.name.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{user?.name}</p>
                <div className="mt-1">{getPlanBadge()}</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {navigation.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
              const isLocked = (item.premium && user?.plan !== 'premium') || 
                              (item.vip && user?.plan === 'free')
              
              return (
                <Link
                  key={item.name}
                  href={isLocked ? '/dashboard/planos' : item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                    isLocked && "opacity-60"
                  )}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  <span className="flex-1">{item.name}</span>
                  {item.premium && (
                    <Crown className={cn("h-4 w-4", isActive ? "text-amber-300" : "text-amber-500")} />
                  )}
                  {item.vip && !item.premium && (
                    <Gem className={cn("h-4 w-4", isActive ? "text-blue-300" : "text-secondary")} />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Upgrade CTA */}
          {user?.plan !== 'premium' && (
            <div className="p-4 border-t border-border">
              <Link
                href="/dashboard/planos"
                className="block p-4 rounded-lg bg-gradient-to-br from-primary to-primary/80 text-white"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Crown className="h-5 w-5 text-amber-300" />
                  <span className="font-semibold">Seja Premium</span>
                </div>
                <p className="text-xs opacity-90">
                  Acesse aulas ao vivo, cursos completos e muito mais!
                </p>
              </Link>
            </div>
          )}
        </div>
      </aside>
    </>
  )
}
