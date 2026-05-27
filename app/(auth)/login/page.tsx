"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useAuth } from '@/lib/auth-context'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertCircle, Eye, EyeOff, Loader2 } from 'lucide-react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    const success = await login(email, password)
    
    if (success) {
      router.push('/dashboard')
    } else {
      setError('Email ou senha incorretos')
    }
    
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md">
          <div className="flex justify-center mb-8">
            <Link href="/">
              <Image
                src="/images/logo-ecr-horizontal.png"
                alt="ECR Drones"
                width={200}
                height={60}
                className="h-14 w-auto"
              />
            </Link>
          </div>
          
          <Card className="border-border/50 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary">Bem-vindo de volta!</CardTitle>
              <CardDescription>
                Acesse sua conta para continuar aprendendo
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="flex items-center gap-2 p-3 text-sm text-red-600 bg-red-50 rounded-lg">
                    <AlertCircle className="h-4 w-4" />
                    {error}
                  </div>
                )}
                
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
                
                <div className="space-y-2">
                  <Label htmlFor="password">Senha</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Sua senha"
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

                <Button type="submit" className="w-full h-11 bg-primary hover:bg-primary/90" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Entrando...
                    </>
                  ) : (
                    'Entrar'
                  )}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <div className="text-center text-sm text-muted-foreground">
                Ainda não tem conta?{' '}
                <Link href="/registro" className="text-secondary hover:underline font-medium">
                  Cadastre-se grátis
                </Link>
              </div>
              
              <div className="w-full pt-4 border-t">
                <p className="text-xs text-center text-muted-foreground mb-3">Contas demo para teste:</p>
                <div className="space-y-1 text-xs text-muted-foreground">
                  <p><strong>Gratuito:</strong> demo@ecrdrones.com / demo123</p>
                  <p><strong>VIP:</strong> vip@ecrdrones.com / vip123</p>
                  <p><strong>Premium:</strong> premium@ecrdrones.com / premium123</p>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
      
      {/* Right Side - Image */}
      <div className="hidden lg:block lg:flex-1 relative">
        <Image
          src="/images/hero-drone-field.jpg"
          alt="Drone agrícola em campo"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 flex items-center justify-center p-12">
          <div className="text-white max-w-md">
            <h2 className="text-3xl font-bold mb-4">
              Capacite-se em Drones Agrícolas
            </h2>
            <p className="text-lg opacity-90">
              Acesse cursos, materiais exclusivos e participe da maior comunidade de operadores de drones do Brasil.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
