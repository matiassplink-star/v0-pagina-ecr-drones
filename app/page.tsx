import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ChallengeSection } from "@/components/challenge-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { ComparisonSection } from "@/components/comparison-section"
import { MethodSection } from "@/components/method-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ChallengeSection />
      <ProblemSection />
      <SolutionSection />
      <ComparisonSection />
      <MethodSection />
      <WhyChooseSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
