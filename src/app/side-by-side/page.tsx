import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

// This would ideally come from a CMS or database
const sideBySideModels = [
  {
    id: 'utv1000',
    name: 'UTV 1000',
    description: 'Power and performance for the most demanding off-road adventures.',
    price: 'Starting at $18,999',
    image: 'https://jaredwhipplellc-765105907.imgix.net/segway/utv1000-hero.jpg?auto=format&fit=clip&w=1200',
    features: [
      '1000cc EFI Engine',
      '72 HP @ 7000 RPM',
      'Dual A-Arm Suspension',
      'On-Demand 4WD',
      '2000 lb Towing Capacity'
    ],
    specs: {
      engine: '1000cc EFI, 4-Stroke',
      power: '72 HP @ 7000 RPM',
      transmission: 'Automatic CVT',
      drive: '2WD/4WD with Locking Front Differential',
      suspension: 'Dual A-Arm',
      groundClearance: '12 inches',
      payload: '1000 lbs',
      towing: '2000 lbs'
    }
  },
  {
    id: 'utv800',
    name: 'UTV 800',
    description: 'Versatile and capable for work and play.',
    price: 'Starting at $14,999',
    image: 'https://jaredwhipplellc-765105907.imgix.net/segway/utv800-hero.jpg?auto=format&fit=clip&w=1200',
    features: [
      '800cc EFI Engine',
      '52 HP @ 7000 RPM',
      'Independent Suspension',
      'Selectable 2WD/4WD',
      '1500 lb Towing Capacity'
    ],
    specs: {
      engine: '800cc EFI, 4-Stroke',
      power: '52 HP @ 7000 RPM',
      transmission: 'Automatic CVT',
      drive: '2WD/4WD',
      suspension: 'Independent',
      groundClearance: '11 inches',
      payload: '800 lbs',
      towing: '1500 lbs'
    }
  }
];

export default function SideBySidePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-900 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Segway Side-by-Sides</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
              Experience the perfect blend of power, performance, and precision for all your off-road adventures.
            </p>
          </div>
        </section>

        {/* Model Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Choose Your Model</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {sideBySideModels.map((model) => (
                <Link 
                  key={model.id}
                  href={`/side-by-side/${model.id}`}
                  className="group block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-64 bg-gray-100">
                    <Image
                      src={model.image}
                      alt={model.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold text-white">{model.name}</h3>
                      <p className="text-gray-200">{model.price}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{model.description}</p>
                    <ul className="space-y-2">
                      {model.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <svg className="w-5 h-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <span className="inline-block bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors">
                        View Details
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
