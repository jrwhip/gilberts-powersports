import { Header } from '@/components/Header'
import { Container } from '@/components/Container'
import { ServiceCallToAction } from '@/components/ServiceCallToAction'
import ContentWithStickyImage from '@/components/ContentWithStickyImage'
import Footer from '@/components/Footer'

const atvUtvFeatures = [
  {
    title: "Engine Repairs",
    description: "Complete engine diagnosis, repairs, and rebuilds for all ATV and UTV models, from sport quads to utility side-by-sides.",
    icon: 'funnel' as const,
  },
  {
    title: "Suspension Systems", 
    description: "Expert suspension work and upgrades to handle any terrain, from trail riding to heavy-duty work applications.",
    icon: 'truck' as const,
  },
  {
    title: "Drivetrain Service",
    description: "Transmission, belt, clutch, and differential service to keep your off-road vehicle performing at its best.",
    icon: 'server' as const,
  },
  {
    title: "Electrical & Cooling",
    description: "Complete electrical troubleshooting and cooling system service to prevent overheating and electrical failures.",
    icon: 'globe' as const,
  },
];

export default function AtvUtvRepairs() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <Container className="pt-20 pb-16">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              ATV/UTV Repairs
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Comprehensive ATV/UTV services, engine repairs, suspension work and more. Let us handle your off-road vehicle needs with expert care.
            </p>
          </div>
        </Container>

        {/* Main Content with Sticky Image */}
        <ContentWithStickyImage
          imageSrc="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=912&h=608&auto=format&fit=crop"
          imageAlt="ATV being professionally serviced in modern repair facility"
          eyebrowText="Off-Road Experts"
          title="Professional ATV/UTV Service"
          subtitle="Whether you use your ATV or UTV for work, recreation, or both, we have the expertise to keep your off-road vehicles running at peak performance."
          introParagraph="Our four generations of experience with power equipment makes us the trusted choice for ATV/UTV repairs. We understand the demands placed on off-road vehicles and have the knowledge and tools to handle any repair or maintenance need."
          features={atvUtvFeatures}
          mainContent="We work on all major ATV and UTV brands including Polaris, Can-Am, Honda, Yamaha, Kawasaki, Arctic Cat, and many others. From sport quads to utility side-by-sides, we have the expertise to handle any repair, big or small."
          secondaryTitle="Parts & Performance Upgrades"
          secondaryContent="In addition to repairs, we stock a wide selection of ATV/UTV parts and accessories. From routine maintenance items to performance upgrades, we can help you get the most out of your off-road experience while ensuring reliability and safety."
          highlightColor="#EA580C"
        />

        {/* Services We Provide */}
        <section className="py-24 sm:py-32 bg-gray-50">
          <Container>
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-orange-600">Complete Service</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Services We Provide
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                From routine maintenance to major overhauls, we provide comprehensive ATV/UTV repair and service.
              </p>
            </div>
            
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
              {[
                "Engine repairs and rebuilds",
                "Transmission and drivetrain service", 
                "Suspension work and upgrades",
                "Brake system repairs",
                "Electrical troubleshooting",
                "Cooling system service",
                "Belt and clutch replacement",
                "Pre-season tune-ups",
                "Winterization services"
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

        {/* Brands We Service */}
        <section className="py-24 sm:py-32">
          <Container>
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Brands We Service
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We work on all major ATV and UTV brands, providing expert service regardless of make or model.
              </p>
            </div>
            
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-4">
              {[
                "Polaris", "Can-Am", "Honda", "Yamaha", 
                "Kawasaki", "Arctic Cat", "Suzuki", "KTM"
              ].map((brand) => (
                <div key={brand} className="flex items-center justify-center rounded-lg bg-gray-50 p-8 text-center">
                  <span className="text-lg font-semibold text-gray-900">{brand}</span>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Work vs Recreation */}
        <section className="py-24 sm:py-32 bg-gray-50">
          <Container>
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Work or Play, We've Got You Covered
              </h2>
            </div>
            
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="flex flex-col">
                <div className="mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-600">
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold leading-8 text-gray-900">Work UTVs</h3>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  Heavy-duty utility vehicles for farm work, construction, and industrial applications. We understand the demands of work vehicles and provide service that keeps your operation running smoothly. From hauling equipment to field maintenance, we keep your work UTV reliable and productive.
                </p>
              </div>
              
              <div className="flex flex-col">
                <div className="mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-600">
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold leading-8 text-gray-900">Recreation ATVs/UTVs</h3>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  Sport ATVs and recreational UTVs for trail riding, hunting, and outdoor adventures. We ensure your recreational vehicles are ready for your next adventure with proper maintenance and performance upgrades. From trail preparation to post-season service, we keep you riding safely.
                </p>
              </div>
            </div>
          </Container>
        </section>

        <ServiceCallToAction 
          description="Ready to get back on the trails? Bring your ATV or UTV in for expert service. We'll get you back to having fun in no time."
        />
      </main>
      <Footer />
    </>
  )
}