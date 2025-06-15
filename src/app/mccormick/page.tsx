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

        {/* CTA Section */}
        <section className="py-16 bg-red-700 text-white">
          <Container className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Experience McCormick?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Visit our showroom or contact us today to schedule a test drive and see the difference a McCormick tractor can make on your farm.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-3 bg-white text-red-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Contact Us
              </button>
              <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors">
                Find a Dealer
              </button>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  )
}
