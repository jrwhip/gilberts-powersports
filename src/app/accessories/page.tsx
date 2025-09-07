import { Header } from '@/components/Header'
import { Container } from '@/components/Container'
import { ServiceCallToAction } from '@/components/ServiceCallToAction'
import Footer from '@/components/Footer'

const accessories = [
  {
    name: "UT 10 Side Mirror Set",
    price: "$49.47",
    description: "Complete side mirror set for UT 10 models",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400&h=300&auto=format&fit=crop",
    note: "Shipping included"
  },
  {
    name: "UT 10 Front Windshield",
    price: "$494.53",
    description: "Durable front windshield for UT 10 models",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=400&h=300&auto=format&fit=crop"
  },
  {
    name: "UT10 Rear Windshield",
    price: "$318.89",
    description: "Rear windshield for UT10 models",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=400&h=300&auto=format&fit=crop"
  },
  {
    name: "UT 10 Turn Signal Kit",
    price: "$142.97",
    description: "Complete turn signal kit for UT 10 models",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400&h=300&auto=format&fit=crop"
  },
  {
    name: "UT10 Crew Turn Signal Kit",
    price: "$142.97",
    description: "Turn signal kit specifically for UT10 Crew models",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400&h=300&auto=format&fit=crop"
  },
  {
    name: "UT10 Crew Front Windshield",
    price: "$538.97",
    description: "Front windshield for UT10 Crew models",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=400&h=300&auto=format&fit=crop"
  },
  {
    name: "UT 10 Crew Rear Windshield",
    price: "$328.87",
    description: "Rear windshield for UT 10 Crew models",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=400&h=300&auto=format&fit=crop"
  },
  {
    name: "UT 10 Full Upper Door Kit",
    price: "$1,402.08",
    description: "Complete full upper door kit for UT 10 models",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400&h=300&auto=format&fit=crop"
  },
  {
    name: "Villain Sx10W Half Door Assembly",
    price: "$274.97",
    description: "Half door assembly for Villain Sx10W models",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400&h=300&auto=format&fit=crop"
  },
  {
    name: "Turn Signal Kit",
    price: "$153.97",
    description: "Universal turn signal kit",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400&h=300&auto=format&fit=crop"
  },
  {
    name: "Front Windshield",
    price: "$505.97",
    description: "Universal front windshield",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=400&h=300&auto=format&fit=crop"
  },
  {
    name: "Spare Tire Mount",
    price: "$252.65",
    description: "Spare tire mount for secure tire storage",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400&h=300&auto=format&fit=crop"
  }
];

export default function AccessoriesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <Container className="pt-20 pb-16">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Segway Accessories
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Enhance your Segway UTV with premium accessories. From windshields to turn signals, 
              we have everything you need to customize your ride.
            </p>
          </div>
        </Container>

        {/* Products Grid */}
        <section className="py-16 bg-white">
          <Container>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {accessories.map((accessory, index) => (
                <div key={index} className="group relative bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-square w-full overflow-hidden rounded-t-lg bg-gray-200">
                    <img
                      src={accessory.image}
                      alt={accessory.name}
                      className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {accessory.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {accessory.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xl font-bold text-orange-600">
                          {accessory.price}
                        </p>
                        {accessory.note && (
                          <p className="text-sm text-green-600 font-medium">
                            {accessory.note}
                          </p>
                        )}
                      </div>
                    </div>
                    <button className="mt-4 w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors">
                      Get Quote
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Installation Services */}
        <section className="py-16 bg-gray-50">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Professional Installation Available
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Our experienced technicians can install any accessory to ensure proper fit and function.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-orange-600">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">Expert Installation</h3>
                <p className="mt-2 text-gray-600">
                  Professional installation by certified technicians
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-orange-600">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">Quality Guarantee</h3>
                <p className="mt-2 text-gray-600">
                  All installations come with our workmanship guarantee
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-orange-600">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">Fast Service</h3>
                <p className="mt-2 text-gray-600">
                  Most installations completed same day
                </p>
              </div>
            </div>
          </Container>
        </section>

        <ServiceCallToAction 
          title="CALL OR COME IN FOR AN ESTIMATE"
          description="Need help choosing the right accessories for your Segway? Our experts are here to help you customize your UTV."
        />
      </main>
      <Footer />
    </>
  )
}