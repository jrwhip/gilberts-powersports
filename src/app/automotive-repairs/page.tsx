import { Header } from '@/components/Header'
import { Container } from '@/components/Container'
import { ServiceCallToAction } from '@/components/ServiceCallToAction'
import ContentWithStickyImage from '@/components/ContentWithStickyImage'
import Footer from '@/components/Footer'

const automotiveFeatures = [
  {
    title: "Engine Diagnostics",
    description: "Modern diagnostic equipment for accurate troubleshooting of complex engine problems and performance issues.",
    icon: 'server' as const,
  },
  {
    title: "Brake Systems", 
    description: "Safety-critical brake system service including pad replacement, rotor resurfacing, and complete brake system overhauls.",
    icon: 'globe' as const,
  },
  {
    title: "Transmission Service",
    description: "Complete transmission diagnostics, fluid service, and repairs for both manual and automatic transmissions.",
    icon: 'truck' as const,
  },
  {
    title: "Electrical Systems",
    description: "Complex electrical problem solving including charging systems, starting systems, and modern vehicle electronics.",
    icon: 'funnel' as const,
  },
];

export default function AutomotiveRepairs() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <Container className="pt-20 pb-16">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Automotive Repairs
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Complete automotive care from routine oil changes to complex engine diagnostics and repairs. Trust us for reliable service and quality workmanship.
            </p>
          </div>
        </Container>

        {/* Main Content with Sticky Image */}
        <ContentWithStickyImage
          imageSrc="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=912&h=608&auto=format&fit=crop"
          imageAlt="Professional auto mechanic working on car engine in modern repair facility"
          eyebrowText="Expert Auto Service"
          title="Professional Automotive Repair"
          subtitle="With four generations of automotive experience, we provide comprehensive car and truck repair services you can trust."
          introParagraph="From basic maintenance to complex diagnostics, we have the expertise and equipment to keep your vehicle running smoothly. Our family has been serving the community's automotive needs for four generations, building trust through honest service and quality workmanship."
          features={automotiveFeatures}
          mainContent="We work on all makes and models, from classic cars to modern vehicles. Our experienced mechanics take pride in providing reliable, honest service that keeps you on the road safely. We use quality parts and stand behind our work with comprehensive warranties."
          secondaryTitle="Modern Equipment, Traditional Values"
          secondaryContent="Our shop combines the latest diagnostic technology with old-school craftsmanship and integrity. We believe in explaining what's wrong, showing you the problem when possible, and providing honest recommendations for repairs and maintenance."
          highlightColor="#EA580C"
        />

        {/* Services Grid */}
        <section className="py-24 sm:py-32 bg-gray-50">
          <Container>
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-orange-600">Complete Auto Care</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Services
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                From routine maintenance to major repairs, we handle all your automotive service needs.
              </p>
            </div>
            
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
              {[
                "Oil changes & fluid services",
                "Brake repairs & replacements", 
                "Engine diagnostics & repairs",
                "Transmission service & repair",
                "Suspension & steering repairs",
                "Electrical system diagnostics",
                "Air conditioning service",
                "Tire installation & balancing",
                "State inspections"
              ].map((service) => (
                <div key={service} className="flex items-start rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-orange-600">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
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

        {/* Why Choose Us */}
        <section className="py-24 sm:py-32">
          <Container>
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Why Choose Gilbert Power Sports?
              </h2>
            </div>
            
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="flex flex-col">
                <div className="flex items-center">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-orange-600">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="ml-4 text-lg font-semibold leading-8 text-gray-900">Four Generations of Experience</h3>
                </div>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  Our family has been serving the automotive needs of our community for four generations. This deep experience means we've seen it all and know how to fix it right the first time.
                </p>
              </div>
              
              <div className="flex flex-col">
                <div className="flex items-center">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-orange-600">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  </div>
                  <h3 className="ml-4 text-lg font-semibold leading-8 text-gray-900">Honest, Upfront Pricing</h3>
                </div>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  No surprises, no hidden fees. We provide detailed estimates and explain exactly what work needs to be done and why. You'll always know what you're paying for.
                </p>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-orange-600">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486L21.75 6.75z" />
                    </svg>
                  </div>
                  <h3 className="ml-4 text-lg font-semibold leading-8 text-gray-900">Modern Diagnostic Equipment</h3>
                </div>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  We invest in the latest diagnostic technology to accurately identify problems quickly, saving you time and money by fixing the right issue the first time.
                </p>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-orange-600">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <h3 className="ml-4 text-lg font-semibold leading-8 text-gray-900">Quality Parts & Workmanship</h3>
                </div>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  We use quality parts and stand behind our work with comprehensive warranties. Your safety and satisfaction are our top priorities.
                </p>
              </div>
            </div>
          </Container>
        </section>

        <ServiceCallToAction 
          description="Need automotive repair? Stop by or call for a free estimate. We'll diagnose the problem and give you honest recommendations for getting back on the road."
        />
      </main>
      <Footer />
    </>
  )
}