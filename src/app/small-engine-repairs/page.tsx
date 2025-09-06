import { Header } from '@/components/Header'
import { Container } from '@/components/Container'
import { CallToAction } from '@/components/CallToAction'
import ContentWithStickyImage from '@/components/ContentWithStickyImage'
import Footer from '@/components/Footer'

const smallEngineFeatures = [
  {
    title: "Tune-ups & Maintenance",
    description: "Preventive maintenance including spark plugs, air filters, oil changes, and seasonal preparation to keep your equipment reliable.",
    icon: 'server' as const,
  },
  {
    title: "Carburetor Service", 
    description: "Expert carburetor cleaning, adjustment, and rebuilding to restore proper fuel delivery and engine performance.",
    icon: 'funnel' as const,
  },
  {
    title: "Engine Repair",
    description: "Complete small engine diagnosis and repair including recoil starters, pull cords, and internal engine work.",
    icon: 'globe' as const,
  },
  {
    title: "Blade Service",
    description: "Professional blade sharpening, balancing, and replacement to ensure clean cuts and optimal performance.",
    icon: 'truck' as const,
  },
];

export default function SmallEngineRepairs() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <Container className="pt-20 pb-16">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Small Engine Repairs
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Reliable small engine repair, done right. Keep your equipment running smoothly with our expert small engine maintenance and repair services.
            </p>
          </div>
        </Container>

        {/* Main Content with Sticky Image */}
        <ContentWithStickyImage
          imageSrc="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=912&h=608&auto=format&fit=crop"
          imageAlt="Small engine being professionally serviced in repair shop"
          eyebrowText="Expert Small Engine Service"
          title="Professional Small Engine Repair"
          subtitle="From lawnmowers to chainsaws, leaf blowers to generators - we repair all types of small engines with four generations of experience."
          introParagraph="Our experienced technicians have been keeping small engines running for four generations. We understand that your outdoor equipment needs to work when you need it most, whether it's maintaining your property or getting work done."
          features={smallEngineFeatures}
          mainContent="We work on all major brands including Briggs & Stratton, Honda, Kohler, Tecumseh, and more. Most repairs can be completed quickly, often while you wait or within 24-48 hours, so you can get back to your projects without delay."
          secondaryTitle="Fast, Reliable Service"
          secondaryContent="We stock common parts and filters for quick turnaround, and our diagnostic expertise helps us identify problems quickly and accurately. From simple tune-ups to complete engine rebuilds, we have the tools and knowledge to handle any small engine repair."
          highlightColor="#EA580C"
        />

        {/* Equipment We Service */}
        <section className="py-24 sm:py-32 bg-gray-50">
          <Container>
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-orange-600">All Your Equipment</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Equipment We Service
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We repair and maintain all types of small engine equipment for homeowners and professionals.
              </p>
            </div>
            
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">Lawn Equipment</h3>
                <ul className="mt-4 space-y-2 text-base leading-7 text-gray-600">
                  <li>• Push mowers and self-propelled mowers</li>
                  <li>• Riding mowers and zero-turn mowers</li>
                  <li>• String trimmers and edgers</li>
                  <li>• Leaf blowers and vacuums</li>
                </ul>
              </div>
              
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">Power Tools</h3>
                <ul className="mt-4 space-y-2 text-base leading-7 text-gray-600">
                  <li>• Chainsaws and pole saws</li>
                  <li>• Generators and pressure washers</li>
                  <li>• Snowblowers and ice augers</li>
                  <li>• Tillers and cultivators</li>
                </ul>
              </div>
            </div>
          </Container>
        </section>

        {/* Services Grid */}
        <section className="py-24 sm:py-32">
          <Container>
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Common Services
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Professional small engine services to keep your equipment running at peak performance.
              </p>
            </div>
            
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
              {[
                "Tune-ups & preventive maintenance",
                "Carburetor cleaning & adjustment", 
                "Spark plug & air filter replacement",
                "Oil changes & seasonal prep",
                "Pull cord & recoil starter repair",
                "Blade sharpening & replacement"
              ].map((service) => (
                <div key={service} className="flex items-start rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-orange-600">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-base font-semibold leading-6 text-gray-900">{service}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Call to Action Banner */}
        <section className="bg-orange-600 py-16 sm:py-20">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                CALL OR COME IN FOR AN ESTIMATE
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-orange-100">
                Don't let a broken small engine slow you down. Bring it in for a quick diagnosis and honest estimate.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="tel:+1234567890"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-orange-600 shadow-sm hover:bg-orange-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Call Now
                </a>
                <a href="#contact" className="text-sm font-semibold leading-6 text-white">
                  Visit Our Shop <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}