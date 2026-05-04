import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Partners } from "@/components/partners"
import { Services } from "@/components/services"
import { LanguagesFeature } from "@/components/languages-feature"
import { About } from "@/components/about"
import { Programs } from "@/components/programs"
import { TargetAudience } from "@/components/target-audience"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { CTA } from "@/components/cta"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Partners />
      <Services />
      <LanguagesFeature />
      <About />
      <Programs />
      <TargetAudience />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
    </main>
  )
}
