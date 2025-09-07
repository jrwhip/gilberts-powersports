import { Header } from '@/components/Header'
import Footer from '@/components/Footer'
import { Container } from '@/components/Container'

const mccormickTractors = [
  {
    name: 'X7 Series',
    image: 'https://www.landinigroup.com/media/2r3j1w1z/x7-660-puma-2022-1.png?width=1200&height=800&mode=max',
    description: 'Powerful and efficient tractors designed for heavy-duty farming operations with advanced technology and comfort.'
  },
  {
    name: 'XT Series',
    image: 'https://www.landinigroup.com/media/0h0j3t5z/xt-140-vineyard-2022-1.png?width=1200&height=800&mode=max',
    description: 'Versatile tractors perfect for specialized applications with excellent maneuverability and performance.'
  },
  {
    name: 'X6 Series',
    image: 'https://www.landinigroup.com/media/1x5l1j5z/x6-145-p6-2022-1.png?width=1200&height=800&mode=max',
    description: 'Compact yet powerful tractors offering great value and reliability for everyday farming needs.'
  },
  {
    name: 'X5 Series',
    image: 'https://www.landinigroup.com/media/1z4f3z5z/x5-120-p5-2022-1.png?width=1200&height=800&mode=max',
    description: 'Compact utility tractors designed for small to medium-sized farms with excellent fuel efficiency.'
  },
]

export default function McCormickPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-red-700 text-white py-20">
          <Container className="text-center">
            <h1 className="text-5xl font-bold mb-6">McCormick Tractors</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Experience the power and reliability of McCormick tractors - built for performance, designed for farmers.
            </p>
          </Container>
        </div>

        {/* Tractors Grid */}
        <section className="py-16 bg-white">
          <Container>
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Tractor Lineup</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {mccormickTractors.map((tractor, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={tractor.image} 
                      alt={tractor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{tractor.name}</h3>
                    <p className="text-gray-600">{tractor.description}</p>
                    <button className="mt-4 px-4 py-2 bg-red-700 text-white rounded hover:bg-red-800 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <Container>
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Why Choose McCormick?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow">
                <div className="text-red-700 text-4xl mb-4">🔧</div>
                <h3 className="text-xl font-semibold mb-2">Reliable Performance</h3>
                <p className="text-gray-600">Built with high-quality components for long-lasting performance in any condition.</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow">
                <div className="text-red-700 text-4xl mb-4">💪</div>
                <h3 className="text-xl font-semibold mb-2">Powerful Engines</h3>
                <p className="text-gray-600">Advanced engine technology for maximum power and fuel efficiency.</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow">
                <div className="text-red-700 text-4xl mb-4">🛠️</div>
                <h3 className="text-xl font-semibold mb-2">Easy Maintenance</h3>
                <p className="text-gray-600">Designed for easy serviceability to minimize downtime and maintenance costs.</p>
              </div>
            </div>
          </Container>
        </section>

        {/* Video Section */}
        <section className="py-16 bg-white">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">See McCormick in Action</h2>
              <p className="mt-4 text-lg text-gray-600">
                Watch the McCormick RS58 X4 in action and see why it's the choice of professionals worldwide.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
                <iframe 
                  src="https://www.youtube.com/embed/5QL1XkPnKL0"
                  title="McCormick RS58 X4 Tractor Overview"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </Container>
        </section>

        {/* Brochure Section */}
        <section className="py-16 bg-gray-50">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
                  McCormick RS58 X4 Brochure
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Get detailed specifications, features, and technical information about 
                  the McCormick RS58 X4 series tractors. Download our comprehensive brochure 
                  to learn more about what makes McCormick tractors the professional's choice.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Complete technical specifications</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Detailed feature descriptions</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">High-quality product imagery</span>
                  </div>
                </div>
                <div className="mt-8">
                  <a 
                    href="https://www.mccormick.it/wp-content/uploads/2021/05/MC_RS58_X4_Brochure_36p_6697659A1_LR_EN.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-red-700 text-white font-semibold rounded-lg hover:bg-red-800 transition-colors"
                  >
                    <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Brochure (PDF)
                  </a>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-[3/4] bg-white rounded-lg shadow-xl p-8">
                  <div className="w-full h-full bg-gradient-to-b from-red-700 to-red-800 rounded-lg flex items-center justify-center">
                    <div className="text-center text-white">
                      <svg className="h-16 w-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <h3 className="text-xl font-bold mb-2">McCormick RS58 X4</h3>
                      <p className="text-red-100">Comprehensive Brochure</p>
                      <p className="text-sm text-red-200 mt-2">36 pages of detailed information</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-red-700 text-white">
          <Container className="text-center">
            <h2 className="text-3xl font-bold mb-6">CALL OR COME IN FOR AN ESTIMATE</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Ready to experience the power and reliability of McCormick tractors? 
              Visit Gilbert Power Sports to schedule a demonstration and get personalized recommendations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/contact" className="px-8 py-3 bg-white text-red-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Contact Us
              </a>
              <a href="tel:+1234567890" className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors">
                Call (123) 456-7890
              </a>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  )
}
