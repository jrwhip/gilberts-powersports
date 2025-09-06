import { Header } from '@/components/Header'
import { Container } from '@/components/Container'
import { ServiceCallToAction } from '@/components/ServiceCallToAction'
import ContentWithStickyImage from '@/components/ContentWithStickyImage'
import Footer from '@/components/Footer'

const tractorFeatures = [
  {
    title: "Engine Overhauls",
    description: "Complete engine rebuilds and diagnostics with modern equipment and four generations of expertise.",
    icon: 'funnel' as const,
  },
  {
    title: "Fuel Systems", 
    description: "Fuel pump repairs, injector cleaning, and comprehensive system diagnostics to keep your equipment running efficiently.",
    icon: 'server' as const,
  },
  {
    title: "Transmission & Drivetrain",
    description: "Expert repairs and maintenance for all drivetrain components, from simple adjustments to complete rebuilds.",
    icon: 'truck' as const,
  },
  {
    title: "Hydraulics Systems",
    description: "Repairs and maintenance for all hydraulic components including pumps, cylinders, hoses, and control valves.",
    icon: 'globe' as const,
  },
];

export default function TractorRepairs() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <Container className="pt-20 pb-16">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Tractor Repairs
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              From routine maintenance to more complex repairs, we handle all your farm equipment needs with four generations of expertise.
            </p>
          </div>
        </Container>

        {/* Main Content with Sticky Image */}
        <ContentWithStickyImage
          imageSrc="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=912&h=608&auto=format&fit=crop"
          imageAlt="Professional tractor repair in modern shop facility"
          eyebrowText="Expert Service"
          title="Professional Tractor Repair"
          subtitle="Our expert mechanics provide comprehensive repair and maintenance services for all types of farm equipment."
          introParagraph="With four generations of experience, we understand the critical role your equipment plays in your operation. We work on all major tractor brands and models, from vintage equipment to the latest models."
          features={tractorFeatures}
          mainContent="Our shop is equipped with the latest diagnostic equipment and tools needed to handle any repair job, big or small. We pride ourselves on getting your equipment back in the field as quickly as possible, minimizing your downtime during critical seasons."
          secondaryTitle="Why Choose Gilbert Power Sports?"
          secondaryContent="Four generations of expertise means we've seen it all. From simple tune-ups to complete engine rebuilds, we have the knowledge and experience to get your equipment running like new. We stock a wide range of parts and can source hard-to-find components for older equipment."
          highlightColor="#EA580C"
        />

        {/* Brands We Service */}
        <section className="py-24 sm:py-32 bg-gray-50">
          <Container>
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-orange-600">All Major Brands</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Equipment We Service
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We work on all major tractor and farm equipment brands, providing expert service regardless of make or model.
              </p>
            </div>
            
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
              {[
                "John Deere", "Case IH", "New Holland", "Kubota", "Massey Ferguson", "Caterpillar",
                "Ford", "International Harvester", "AGCO", "Deutz-Fahr", "Fendt", "Versatile"
              ].map((brand) => (
                <div key={brand} className="flex items-center justify-center rounded-lg bg-white p-8 shadow-sm ring-1 ring-gray-200">
                  <span className="text-lg font-semibold text-gray-900">{brand}</span>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <ServiceCallToAction 
          description="Get your farm equipment running at peak performance. Contact us today for a free estimate on your tractor repair needs."
        />
      </main>
      <Footer />
    </>
  )
}