"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth-context'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import {
  Menu,
  Bell,
  LogOut,
  User,
  Settings,
  Crown,
  Gem,
  LayoutDashboard,
  BookOpen,
  Video,
  MessageSquare,
  FileText,
  BarChart3
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

export function DashboardHeader() {
  const { user, logout } = useAuth()
  const router = useRouter()
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleLogout = () => {
    logout()
    router.push('/')
  }

  const getPlanBadge = () => {
    if (user?.plan === 'premium') {
      return (
        <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 text-xs">
          <Crown className="w-3 h-3 mr-1" />
          Premium
        </Badge>
      )
    }
    if (user?.plan === 'vip') {
      return (
        <Badge className="bg-secondary text-white border-0 text-xs">
          <Gem className="w-3 h-3 mr-1" />
          VIP
        </Badge>
      )
    }
    return (
      <Badge variant="outline" className="text-muted-foreground text-xs">
        Gratuito
      </Badge>
    )
  }

  return (
    <header className="sticky top-0 z-40 bg-card/95 backdrop-blur border-b border-border">
      <div className="flex items-center justify-between h-16 px-4 lg:px-6">
        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center h-16 px-4 border-b">
                  <Image
                    src="/images/logo-ecr-horizontal.png"
                    alt="ECR Drones"
                    width={140}
                    height={42}
                    className="h-9 w-auto"
                  />
                </div>
                
                <div className="p-4 border-b">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                      {user?.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{user?.name}</p>
                      <div className="mt-1">{getPlanBadge()}</div>
                    </div>
                  </div>
                </div>

                <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                  {navigation.map((item) => {
                    const isActive = pathname === item.href
                    const isLocked = (item.premium && user?.plan !== 'premium') || 
                                    (item.vip && user?.plan === 'free')
                    
                    return (
                      <Link
                        key={item.name}
                        href={isLocked ? '/dashboard/planos' : item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                          isActive
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground hover:bg-muted",
                          isLocked && "opacity-60"
                        )}
                      >
                        <item.icon className="h-5 w-5" />
                        <span className="flex-1">{item.name}</span>
                        {item.premium && <Crown className="h-4 w-4 text-amber-500" />}
                        {item.vip && !item.premium && <Gem className="h-4 w-4 text-secondary" />}
                      </Link>
                    )
                  })}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Page Title */}
        <div className="flex-1 lg:flex-initial">
          <h1 className="text-sm font-medium text-muted-foreground lg:hidden">
            ECR Drones
          </h1>
          <div className="hidden lg:block">
            <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20 text-xs font-medium">
              Sistema Acadêmico Operacional Ativo
            </Badge>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="gap-2 px-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                  {user?.name.charAt(0).toUpperCase()}
                </div>
                <span className="hidden sm:inline text-sm font-medium">
                  {user?.name.split(' ')[0]}
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>
                <div className="flex flex-col gap-1">
                  <span>{user?.name}</span>
                  <span className="text-xs font-normal text-muted-foreground">{user?.email}</span>
                  <div className="mt-1">{getPlanBadge()}</div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/dashboard/configuracoes">
                  <User className="mr-2 h-4 w-4" />
                  Meu Perfil
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/dashboard/planos">
                  <Crown className="mr-2 h-4 w-4" />
                  Meus Planos
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                <LogOut className="mr-2 h-4 w-4" />
                Sair
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
