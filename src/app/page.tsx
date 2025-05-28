import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { HeroSwiper } from '@/components/HeroSwiper'
import FeatureNavCard from '@/components/FeatureNavCard'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'

const segwaySlides = [
  {
    video: "videos/kristi-site-hero.m4v",
    title: "Discover the Journey",
    subtitle: "Experience the ride of a lifetime",
  },
  {
    video: "videos/ut6-hero-1.m4v",
    title: "Adventure Awaits",
    subtitle: "Unleash your wild side",
  },
  {
    video: "videos/super-villain-1.m4v",
    title: "Ride in Style",
    subtitle: "Turn heads wherever you go",
  },
];

const featuredNavs = [
  {
    title: "UT 6",
    id: "UT6",
    productLink: "/products/sx20",
    titleFont: "DIN2014",
    titleColor: "#DA291C",
    subitems: [
      {
        name: "P",
        image:
          "https://jaredwhipplellc-765105907.imgix.net/segway/ut6-p-right-angle.png?q=80&w=300&h=200&auto=format&fit=clip",
        description: "Compact power for solo adventures.",
      },
      {
        name: "S Crew",
        image:
          "https://jaredwhipplellc-765105907.imgix.net/segway/ut6-s-right-angle.png?q=80&w=300&h=200&auto=format&fit=clip",
        description: "Spacious design for small teams.",
      },
      {
        name: "M",
        image:
          "https://jaredwhipplellc-765105907.imgix.net/segway/ut6-m-right-angle.png?q=80&w=300&h=200&auto=format&fit=clip",
        description: "Spacious design for small teams.",
      },
    ],
  },
  {
    title: "UT 10",
    id: "UT10",
    productLink: "/ut10",
    titleFont: "DIN2014",
    titleColor: "#DA291C",
    subitems: [
      {
        name: "S",
        image:
          "https://jaredwhipplellc-765105907.imgix.net/segway/ut10-s-right-angle.png?q=80&w=300&h=200&auto=format&fit=clip",
        description: "Compact power for solo adventures.",
      },
      {
        name: "P",
        image:
          "https://jaredwhipplellc-765105907.imgix.net/segway/ut10-p-right-angle.png?q=80&w=300&h=200&auto=format&fit=clip",
        description: "Spacious design for small teams.",
      },
    ],
  },
  {
    title: "UT 10 Crew",
    id: "UT10Crew",
    productLink: "/ut10",
    titleFont: "DIN2014",
    titleColor: "#DA291C",
    subitems: [
      {
        name: "S Crew",
        image:
          "https://jaredwhipplellc-765105907.imgix.net/segway/ut10-crew-s-right-angle.png?q=80&w=300&h=200&auto=format&fit=clip",
        description: "Versatile performance for groups.",
      },
      {
        name: "P Crew",
        image:
          "https://jaredwhipplellc-765105907.imgix.net/segway/ut10-crew-p-right-angle.png?q=80&w=300&h=200&auto=format&fit=clip",
        description: "Versatile performance for groups.",
      },
    ],
  },
  {
    title: "Villian",
    id: "VILLIAN",
    productLink: "/products/sx20",
    titleFont: "DIN2014",
    titleColor: "#DA291C",
    subitems: [
      {
        name: "P",
        image:
          "https://jaredwhipplellc-765105907.imgix.net/segway/sx10-p-right-angle.png?q=80&w=300&h=200&auto=format&fit=clip",
        description: "Compact power for solo adventures.",
      },
      {
        name: "S",
        image:
          "https://jaredwhipplellc-765105907.imgix.net/segway/sx10-s-right-angle.png?q=80&w=300&h=200&auto=format&fit=clip",
        description: "Spacious design for small teams.",
      },
      {
        name: "WP",
        image:
          "https://jaredwhipplellc-765105907.imgix.net/segway/sx10-wp-right-angle.png?q=80&w=300&h=200&auto=format&fit=clip",
        description: "Spacious design for small teams.",
      },
    ],
  },
  {
    title: "Super Villian",
    id: "SUPERVILLIAN",
    productLink: "/products/sx20",
    titleFont: "DIN2014",
    titleColor: "#DA291C",
    subitems: [
      {
        name: "Super Villain",
        image:
          "https://jaredwhipplellc-765105907.imgix.net/segway/sx20-right-angle.png?q=80&w=300&h=200&auto=format&fit=clip",
        description: "Compact power for solo adventures.",
      },
    ],
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSwiper slides={segwaySlides} />

        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8 text-center">
            Explore Our Models
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {featuredNavs.map((product) => (
              <div
                key={product.id}
                className="w-full sm:w-[calc(45%-6px)] lg:w-[calc(40%-16px)] xl:w-96"
              >
                <FeatureNavCard product={product} />
              </div>
            ))}
          </div>
        </div>
        <ContentWithStickyImage
          imageSrc="//jaredwhipplellc-765105907.imgix.net/segway/segway-for-work-chainsaw.jpg?q=80&w=808&h=479&auto=format&fit=clip"
          imageAlt="segway and man with chainsaw"
          eyebrowText="Farm smarter"
          title="Revolutionize Farm Work"
          subtitle="The Segway UT10 brings efficiency and power to your daily farm tasks with a design built to handle the toughest jobs from sunrise to sunset."
          introParagraph="Tackle farm chores with confidence using this rugged utility vehicle made to take on mud, rocks, and whatever else your land presents. It’s a dependable workhorse designed for the demands of real farm life."
          features={features}
          mainContent="From checking livestock to maintaining fences, the UT10 handles it all. Its durable construction stands up to daily farm demands while keeping you productive without delays or interruptions. Whether you’re hauling supplies to the barn, inspecting cattle in distant fields, or clearing brush, this vehicle delivers consistent performance."
          secondaryTitle="Work All Day"
          secondaryContent="With its 105-horsepower gasoline engine and large fuel capacity, complete farm tasks without stopping to refuel constantly or worrying about losing power in remote areas. It’s built to keep going as long as you do, no matter the size of your farm or the scope of your work."
        />
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
