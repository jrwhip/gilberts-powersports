import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { HeroSwiper } from '@/components/HeroSwiper'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'

const segwaySlides = [
  {
    video: "/videos/kristi-Site-hero.m4v",
    title: "Discover the Journey",
    subtitle: "Experience the ride of a lifetime",
  },
  {
    video: "/videos/ut6-hero-1.m4v",
    title: "Adventure Awaits",
    subtitle: "Unleash your wild side",
  },
  {
    video: "/videos/super-villain-1.m4v",
    title: "Ride in Style",
    subtitle: "Turn heads wherever you go",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSwiper slides={segwaySlides} />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
