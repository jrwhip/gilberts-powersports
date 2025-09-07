import { Header } from '@/components/Header'
import { Container } from '@/components/Container'
import { ServiceCallToAction } from '@/components/ServiceCallToAction'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <Container className="pt-20 pb-16">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              About Gilbert Power Sports
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Four generations of dedicated service to our community, 
              built on trust, expertise, and unwavering commitment to quality.
            </p>
          </div>
        </Container>

        {/* Family Story Section */}
        <section className="py-16 bg-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
                  Four Generations of Excellence
                </h2>
                <div className="space-y-6 text-gray-600">
                  <p className="text-lg">
                    What started as a small repair shop has grown into a trusted name in power equipment 
                    service and sales. The Gilbert family has been serving our community for four generations, 
                    passing down not just technical knowledge, but a commitment to honest service and 
                    treating every customer like family.
                  </p>
                  
                  <p>
                    Our story began when the first generation Gilbert opened a small shop with nothing but 
                    determination and a desire to help neighbors keep their equipment running. That same 
                    spirit drives us today, whether we're working on a vintage tractor or the latest 
                    Segway UTV.
                  </p>
                  
                  <p>
                    Each generation has brought their own expertise and innovation, while maintaining the 
                    core values that our customers have come to trust: honest estimates, quality 
                    workmanship, and standing behind every job we do.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
                  <Image
                    src="/img/2X9A3768.jpg"
                    alt="Four generations of the Gilbert family"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute inset-0 ring-1 ring-inset ring-gray-900/10 rounded-lg" />
                <p className="mt-4 text-sm text-gray-500 text-center">
                  Four generations of the Gilbert family continuing the tradition of excellence
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Our Values
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Four generations have taught us what matters most: integrity, expertise, and genuine care for our customers.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-orange-600 mb-4">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Integrity</h3>
                <p className="text-gray-600">
                  Honest estimates, transparent pricing, and doing the right thing every time.
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-orange-600 mb-4">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443a55.381 55.381 0 015.25 2.882V15M15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm-1.5 0h1.5m-1.5 0v-1.5m1.5 1.5v-1.5m-3.75 0v-1.5m0 1.5a.75.75 0 01-.75-.75m.75.75v-1.5m0 0a.75.75 0 00-.75-.75M12 10.5V9m0 1.5v-1.5m0 1.5h.75m-.75-1.5h.75m-12 1.5h.75m-.75 0v3M2.25 8.25V12m2.25-3.75V12" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Expertise</h3>
                <p className="text-gray-600">
                  Four generations of knowledge and experience with all types of power equipment.
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-orange-600 mb-4">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Community</h3>
                <p className="text-gray-600">
                  We're your neighbors, committed to serving our local community with pride.
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-orange-600 mb-4">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486L21.75 6.75z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality</h3>
                <p className="text-gray-600">
                  We stand behind every repair and use only quality parts and materials.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-white">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                What We Do
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                From the simplest tune-up to the most complex repair, we handle it all with expertise gained over four generations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Repair Services</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Tractor repairs and maintenance</li>
                  <li>• Small engine service (mowers, chainsaws, generators)</li>
                  <li>• Automotive repairs and diagnostics</li>
                  <li>• ATV/UTV service and repair</li>
                  <li>• Emergency repair services</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Equipment Sales</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Segway UTVs and accessories</li>
                  <li>• McCormick tractors and implements</li>
                  <li>• Parts and accessories for all equipment</li>
                  <li>• Used equipment sales</li>
                  <li>• Financing options available</li>
                </ul>
              </div>
            </div>
          </Container>
        </section>

        {/* Timeline Section */}
        <section className="py-16 bg-gray-50">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Our Heritage
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Four generations of service, innovation, and community commitment.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-lg font-semibold text-orange-600">1st Gen</span>
                </div>
                <div className="ml-8">
                  <h3 className="text-lg font-semibold text-gray-900">The Foundation</h3>
                  <p className="text-gray-600">
                    Started with a small repair shop and a commitment to helping neighbors keep their equipment running.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-lg font-semibold text-orange-600">2nd Gen</span>
                </div>
                <div className="ml-8">
                  <h3 className="text-lg font-semibold text-gray-900">Expansion</h3>
                  <p className="text-gray-600">
                    Added automotive services and expanded to serve the growing needs of our community.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-lg font-semibold text-orange-600">3rd Gen</span>
                </div>
                <div className="ml-8">
                  <h3 className="text-lg font-semibold text-gray-900">Modernization</h3>
                  <p className="text-gray-600">
                    Invested in modern diagnostic equipment and became an authorized dealer for major brands.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-lg font-semibold text-orange-600">4th Gen</span>
                </div>
                <div className="ml-8">
                  <h3 className="text-lg font-semibold text-gray-900">Today</h3>
                  <p className="text-gray-600">
                    Continuing the tradition of excellence while embracing new technologies and serving new generations of customers.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <ServiceCallToAction 
          title="CALL OR COME IN FOR AN ESTIMATE"
          description="Experience four generations of trusted service. Visit us today and become part of the Gilbert Power Sports family."
        />
      </main>
      <Footer />
    </>
  )
}