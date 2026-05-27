"use client"

import Link from 'next/link'
import { useAuth } from '@/lib/auth-context'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import {
  BookOpen,
  Video,
  MessageSquare,
  FileText,
  BarChart3,
  ArrowRight,
  Play,
  Download,
  Users,
  Clock,
  Award,
  Crown,
  Gem,
  Lock,
  Calendar,
  TrendingUp,
  Zap
} from 'lucide-react'

const courses = [
  {
    id: 1,
    module: '1. INTRODUÇÃO',
    title: 'Drones no Agro',
    duration: '8 Aulas',
    status: 'completed',
    lessons: 8
  },
  {
    id: 2,
    module: '2. ANÁLISE NDVI',
    title: 'Mapeamento Aéreo',
    duration: '14 Aulas',
    status: 'in-progress',
    lessons: 14
  },
  {
    id: 3,
    module: '3. APLICAÇÃO',
    title: 'Pulverização',
    duration: '18 Aulas',
    status: 'locked',
    lessons: 18
  }
]

const forumTopics = [
  { title: 'Calibração de Bicos', replies: 14, isHot: true },
  { title: 'Configuração XAG P100', replies: 8, isHot: false },
  { title: 'Manutenção preventiva', replies: 6, isHot: false }
]

const materials = [
  { name: 'Manual DJI T40/T100 Pro.pdf', size: '12.5 MB', type: 'pdf' },
  { name: 'Guia de Calibração ANAC.pdf', size: '3.2 MB', type: 'pdf' },
  { name: 'Planilha de Voo.xlsx', size: '1.1 MB', type: 'xlsx' }
]

export default function DashboardPage() {
  const { user } = useAuth()
  
  const canAccessVip = user?.plan === 'vip' || user?.plan === 'premium'
  const canAccessPremium = user?.plan === 'premium'

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-foreground">
            Olá, <span className="text-accent">{user?.name.split(' ')[0]}!</span>
          </h1>
          <p className="text-muted-foreground mt-1">
            Bem-vindo à plataforma de aprendizado operacional da ECR Drones. Gerencie seu progresso nas trilhas agrícolas, 
            acesse materiais tecnológicos do MAPA e tire dúvidas de pulverização no fórum com operadores mais de campo.
          </p>
        </div>
        
        {/* Progress Card */}
        <Card className="lg:min-w-[280px] border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="relative">
                <svg className="w-16 h-16 transform -rotate-90">
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="6"
                    className="text-muted"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeDasharray={175.9}
                    strokeDashoffset={175.9 - (175.9 * (user?.progress || 0)) / 100}
                    className="text-primary"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-bold">{user?.progress}%</span>
                </div>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Seu Progresso</p>
                <p className="text-sm font-medium">
                  {user?.completedLessons} de {user?.totalLessons} aulas concluídas
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Trilhas Operacionais */}
        <Card className="lg:col-span-2 xl:col-span-2 border-border/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <div>
                <CardTitle className="text-lg">Trilhas Operacionais de Campo</CardTitle>
                <CardDescription className="text-xs">
                  Estude as técnicas aeronáuticas rurais, processamento de NDVI de alta definição no QGis e pulverização precisa com dados de datas com os drones P100PRO e DJI T40/T50
                </CardDescription>
              </div>
            </div>
            <Badge className="bg-primary/10 text-primary border-0">
              Acesso Total Liberado
            </Badge>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className={`p-4 rounded-lg border ${
                    course.status === 'completed' 
                      ? 'border-primary/30 bg-primary/5' 
                      : course.status === 'in-progress'
                      ? 'border-secondary/30 bg-secondary/5'
                      : 'border-border bg-muted/30'
                  }`}
                >
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">
                    {course.module}
                  </p>
                  <p className="font-semibold mt-1">{course.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {course.status === 'completed' ? 'Concluído' : course.status === 'in-progress' ? 'Em andamento' : 'Pendente'} · {course.duration}
                  </p>
                </div>
              ))}
            </div>
            <Button asChild className="w-full bg-primary hover:bg-primary/90">
              <Link href="/dashboard/cursos">
                Acessar Sala de Aulas
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Transmissões ao Vivo */}
        <Card className="border-border/50 relative overflow-hidden">
          {!canAccessPremium && (
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-10 flex items-center justify-center">
              <div className="text-center p-4">
                <Lock className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                <p className="text-sm font-medium">Exclusivo Premium</p>
                <Button asChild size="sm" className="mt-2 bg-gradient-to-r from-amber-500 to-orange-500">
                  <Link href="/dashboard/planos">Fazer Upgrade</Link>
                </Button>
              </div>
            </div>
          )}
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-red-500/10">
                <Video className="h-5 w-5 text-red-500" />
              </div>
              <CardTitle className="text-lg">Transmissões ao Vivo</CardTitle>
            </div>
            <Badge className="bg-red-500/10 text-red-500 border-0">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-1.5 animate-pulse" />
              Transmitir
            </Badge>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Participe de mentoria operacional ao vivo com os instrutores da ECR Drones, tirando suas dúvidas sobre bicos e vazão científicas completas na hora.
            </p>
            <div className="p-3 rounded-lg bg-muted/50 border border-border mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Calendar className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">Quarta Técnica com Rômulo</p>
                  <p className="text-xs text-muted-foreground">Hoje às 19:30 · YouTube Live</p>
                </div>
              </div>
            </div>
            <Button variant="outline" className="w-full" disabled={!canAccessPremium}>
              Sintonizar Live
              <Play className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        {/* Fórum de Operadores */}
        <Card className="border-border/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-secondary/10">
                <MessageSquare className="h-5 w-5 text-secondary" />
              </div>
              <CardTitle className="text-lg">Fórum de Operadores</CardTitle>
            </div>
            <Badge variant="outline">Comunidade</Badge>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Troque experiências, mapas de voo, compartilhe receitas de calda, calibração de bicos de atomizadores rotativos e obtenha soluções para problemas no solo.
            </p>
            <div className="space-y-2 mb-4">
              <p className="text-xs text-muted-foreground">Tópicos mais ativos:</p>
              {forumTopics.slice(0, 2).map((topic, i) => (
                <div key={i} className="flex items-center justify-between p-2 rounded bg-muted/50">
                  <span className="text-sm font-medium">{topic.title}</span>
                  <Badge variant="secondary" className="text-xs">
                    +{topic.replies} respostas
                  </Badge>
                </div>
              ))}
            </div>
            <Button asChild variant="outline" className="w-full">
              <Link href="/dashboard/forum">
                Entrar no Fórum
                <Users className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Biblioteca Técnica */}
        <Card className="border-border/50 relative overflow-hidden">
          {!canAccessVip && (
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-10 flex items-center justify-center">
              <div className="text-center p-4">
                <Lock className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                <p className="text-sm font-medium">Exclusivo VIP</p>
                <Button asChild size="sm" className="mt-2 bg-secondary">
                  <Link href="/dashboard/planos">Fazer Upgrade</Link>
                </Button>
              </div>
            </div>
          )}
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-accent/10">
                <FileText className="h-5 w-5 text-accent" />
              </div>
              <CardTitle className="text-lg">Biblioteca Técnica</CardTitle>
            </div>
            <Badge className="bg-accent/10 text-accent border-0">Ilimitado</Badge>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Tenha acesso aos manuais oficiais da ANAC, cartilhas de calibração de bicos agrícolas da XAG/DJI e planilhas integradas de cálculo de vazão de pulverização.
            </p>
            <div className="p-3 rounded-lg bg-muted/50 border border-border mb-4">
              <p className="text-xs text-muted-foreground mb-2">Arquivo em destaque:</p>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-red-500" />
                <span className="text-sm font-medium">Manual DJI T40/T100 Pro.pdf</span>
              </div>
            </div>
            <Button asChild variant="outline" className="w-full" disabled={!canAccessVip}>
              <Link href="/dashboard/biblioteca">
                Acessar Downloads
                <Download className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Estatísticas de Produtividade */}
        <Card className="border-border/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-green-500/10">
                <BarChart3 className="h-5 w-5 text-green-500" />
              </div>
              <CardTitle className="text-lg">Estatísticas de Produtividade</CardTitle>
            </div>
            <Badge className="bg-green-500/10 text-green-500 border-0">Mercado do Agro</Badge>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              A operação certificada de drones reduz o desperdício de insumos no tratamento de culturas em até 40%, além de otimizar a velocidade de pulverização para 20 hectares por hora.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center p-3 rounded-lg bg-green-500/10">
                <TrendingUp className="h-5 w-5 text-green-500 mx-auto mb-1" />
                <p className="text-2xl font-bold text-green-600">+50%</p>
                <p className="text-xs text-muted-foreground">Produtividade</p>
              </div>
              <div className="text-center p-3 rounded-lg bg-accent/10">
                <Zap className="h-5 w-5 text-accent mx-auto mb-1" />
                <p className="text-2xl font-bold text-accent">R$ 8.500</p>
                <p className="text-xs text-muted-foreground">Salário Médio</p>
              </div>
            </div>
            <Button asChild variant="outline" className="w-full">
              <Link href="/dashboard/estatisticas">
                Simular ROI de Voo
                <BarChart3 className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
