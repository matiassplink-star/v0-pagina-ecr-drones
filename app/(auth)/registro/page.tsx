"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useAuth, UserPlan } from '@/lib/auth-context'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertCircle, Eye, EyeOff, Loader2, Check } from 'lucide-react'
import { cn } from '@/lib/utils'

const plans: { id: UserPlan; name: string; price: string; features: string[] }[] = [
  {
    id: 'free',
    name: 'Gratuito',
    price: 'R$ 0',
    features: ['Acesso ao fórum básico', '3 aulas introdutórias', 'Materiais de apoio limitados']
  },
  {
    id: 'vip',
    name: 'VIP',
    price: 'R$ 97/mês',
    features: ['Tudo do Gratuito', 'Biblioteca completa de PDFs', 'Fórum VIP exclusivo', 'Certificados de conclusão']
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 'R$ 197/mês',
    features: ['Tudo do VIP', 'Aulas ao vivo semanais', 'Cursos completos gravados', 'Suporte prioritário', 'Mentoria individual']
  }
]

export default function RegisterPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [selectedPlan, setSelectedPlan] = useState<UserPlan>('free')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { register } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (password !== confirmPassword) {
      setError('As senhas não coincidem')
      return
    }

    if (password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres')
      return
    }

    setIsLoading(true)

    const success = await register(name, email, password, selectedPlan)
    
    if (success) {
      router.push('/dashboard')
    } else {
      setError('Este email já está cadastrado')
    }
    
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-8 bg-background">
        <div className="w-full max-w-xl">
          <div className="flex justify-center mb-6">
            <Link href="/">
              <Image
                src="/images/logo-ecr-horizontal.png"
                alt="ECR Drones"
                width={180}
                height={54}
                className="h-12 w-auto"
              />
            </Link>
          </div>
          
          <Card className="border-border/50 shadow-lg">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl text-primary">Crie sua conta</CardTitle>
              <CardDescription>
                Comece sua jornada na aviação agrícola
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="flex items-center gap-2 p-3 text-sm text-red-600 bg-red-50 rounded-lg">
                    <AlertCircle className="h-4 w-4 flex-shrink-0" />
                    {error}
                  </div>
                )}
                
                {/* Plan Selection */}
                <div className="space-y-3">
                  <Label>Escolha seu plano</Label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {plans.map((plan) => (
                      <button
                        key={plan.id}
                        type="button"
                        onClick={() => setSelectedPlan(plan.id)}
                        className={cn(
                          "relative p-4 rounded-lg border-2 text-left transition-all",
                          selectedPlan === plan.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        )}
                      >
                        {selectedPlan === plan.id && (
                          <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                        )}
                        <div className="font-semibold text-foreground">{plan.name}</div>
                        <div className="text-sm text-accent font-bold">{plan.price}</div>
                      </button>
                    ))}
                  </div>
                  <div className="text-xs text-muted-foreground bg-muted/50 p-3 rounded-lg">
                    <strong>{plans.find(p => p.id === selectedPlan)?.name}:</strong>
                    <ul className="mt-1 space-y-0.5">
                      {plans.find(p => p.id === selectedPlan)?.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-1">
                          <Check className="w-3 h-3 text-primary" /> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome completo</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Seu nome"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="h-11"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="h-11"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="password">Senha</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Min. 6 caracteres"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="h-11 pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirmar senha</Label>
                    <Input
                      id="confirmPassword"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Repita a senha"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      className="h-11"
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full h-11 bg-primary hover:bg-primary/90" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Criando conta...
                    </>
                  ) : (
                    'Criar conta'
                  )}
                </Button>
              </form>
            </CardContent>
            <CardFooter>
              <div className="w-full text-center text-sm text-muted-foreground">
                Já tem uma conta?{' '}
                <Link href="/login" className="text-secondary hover:underline font-medium">
                  Faça login
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
      
      {/* Right Side - Image (hidden on mobile) */}
      <div className="hidden lg:block lg:w-2/5 relative">
        <Image
          src="/images/training-class.jpg"
          alt="Treinamento ECR Drones"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-primary/80 to-primary/40 flex items-center justify-center p-12">
          <div className="text-white max-w-sm">
            <h2 className="text-3xl font-bold mb-4">
              Junte-se a mais de 500 operadores
            </h2>
            <p className="text-lg opacity-90">
              Aprenda com quem realmente entende de pulverização aérea com drones agrícolas.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
