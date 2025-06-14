import { Header } from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// This would ideally come from a CMS or database
const sideBySideModels = [
  {
    id: 'sx20',
    name: 'Super Villain SX20',
    description: 'Ultimate power and performance for the most demanding off-road adventures. The Super Villain is built to conquer any terrain with unmatched style.',
    price: 'Starting at $24,999',
    images: [
      'https://jaredwhipplellc-765105907.imgix.net/segway/sx20-right-angle.png?auto=format&fit=clip&w=1200',
      'https://jaredwhipplellc-765105907.imgix.net/segway/sx20-right-angle.png?auto=format&fit=clip&w=1200',
      'https://jaredwhipplellc-765105907.imgix.net/segway/sx20-right-angle.png?auto=format&fit=clip&w=1200',
    ],
    features: [
      '1000cc EFI Engine',
      '105 HP @ 7000 RPM',
      'Advanced Suspension System',
      'On-Demand 4WD',
      '2500 lb Towing Capacity',
      'High-Intensity LED Headlights',
      'Digital Display',
      'Premium Sport Seating'
    ],
    specs: {
      'Engine': '1000cc EFI, 4-Stroke',
      'Horsepower': '105 HP @ 7000 RPM',
      'Transmission': 'Automatic CVT with High/Low/Reverse',
      'Drive System': '2WD/4WD with Locking Front Differential',
      'Suspension': 'Independent, 12" Travel',
      'Ground Clearance': '14 inches',
      'Payload Capacity': '1200 lbs',
      'Towing Capacity': '2500 lbs',
      'Fuel Capacity': '10.5 gallons',
      'Wheelbase': '90 inches',
      'Overall Dimensions': '130" L x 68" W x 78" H',
      'Dry Weight': '1650 lbs'
    },
    colors: [
      { name: 'Red', value: '#DA291C' },
      { name: 'Black', value: '#000000' },
      { name: 'Camo', value: '#4A4A3A' }
    ],
    variants: [
      {
        name: 'Super Villain',
        image: 'https://jaredwhipplellc-765105907.imgix.net/segway/sx20-right-angle.png?q=80&w=300&h=200&auto=format&fit=clip',
        description: 'Ultimate power and style'
      }
    ]
  },
  {
    id: 'ut10',
    name: 'UT10 Series',
    description: 'Versatile utility vehicle perfect for work and recreation. The UT10 offers the ideal balance of performance, comfort, and capability.',
    price: 'Starting at $16,999',
    images: [
      'https://jaredwhipplellc-765105907.imgix.net/segway/ut10-s-right-angle.png?auto=format&fit=clip&w=1200',
      'https://jaredwhipplellc-765105907.imgix.net/segway/ut10-p-right-angle.png?auto=format&fit=clip&w=1200',
      'https://jaredwhipplellc-765105907.imgix.net/segway/ut10-crew-s-right-angle.png?auto=format&fit=clip&w=1200',
    ],
    features: [
      '800cc EFI Engine',
      '72 HP @ 7000 RPM',
      'Independent Suspension',
      'Selectable 2WD/4WD',
      '2000 lb Towing Capacity',
      'LED Lighting Package',
      'Digital Gauge Cluster',
      'Multiple Seating Configurations'
    ],
    specs: {
      'Engine': '800cc EFI, 4-Stroke',
      'Horsepower': '72 HP @ 7000 RPM',
      'Transmission': 'Automatic CVT with High/Low/Reverse',
      'Drive System': '2WD/4WD',
      'Suspension': 'Independent, 10" Travel',
      'Ground Clearance': '12 inches',
      'Payload Capacity': '1000 lbs',
      'Towing Capacity': '2000 lbs',
      'Fuel Capacity': '8.9 gallons',
      'Wheelbase': '84 inches',
      'Overall Dimensions': '120" L x 64" W x 74" H',
      'Dry Weight': '1350 lbs'
    },
    colors: [
      { name: 'Red', value: '#DA291C' },
      { name: 'Blue', value: '#0056B8' },
      { name: 'Green', value: '#006B54' }
    ],
    variants: [
      {
        name: 'S',
        image: 'https://jaredwhipplellc-765105907.imgix.net/segway/ut10-s-right-angle.png?q=80&w=300&h=200&auto=format&fit=clip',
        description: 'Compact power for solo adventures'
      },
      {
        name: 'P',
        image: 'https://jaredwhipplellc-765105907.imgix.net/segway/ut10-p-right-angle.png?q=80&w=300&h=200&auto=format&fit=clip',
        description: 'Enhanced performance model'
      },
      {
        name: 'S Crew',
        image: 'https://jaredwhipplellc-765105907.imgix.net/segway/ut10-crew-s-right-angle.png?q=80&w=300&h=200&auto=format&fit=clip',
        description: 'Versatile performance for groups'
      },
      {
        name: 'P Crew',
        image: 'https://jaredwhipplellc-765105907.imgix.net/segway/ut10-crew-p-right-angle.png?q=80&w=300&h=200&auto=format&fit=clip',
        description: 'Premium crew configuration'
      }
    ]
  },
  {
    id: 'ut6',
    name: 'UT6 Series',
    description: 'Compact and agile utility vehicle designed for maneuverability and efficiency. Perfect for tight spaces and precision work.',
    price: 'Starting at $12,999',
    images: [
      'https://jaredwhipplellc-765105907.imgix.net/segway/ut6-p-right-angle.png?auto=format&fit=clip&w=1200',
      'https://jaredwhipplellc-765105907.imgix.net/segway/ut6-s-right-angle.png?auto=format&fit=clip&w=1200',
      'https://jaredwhipplellc-765105907.imgix.net/segway/ut6-m-right-angle.png?auto=format&fit=clip&w=1200',
    ],
    features: [
      '600cc EFI Engine',
      '45 HP @ 6500 RPM',
      'Compact Design',
      'Selectable 2WD/4WD',
      '1200 lb Towing Capacity',
      'LED Headlights',
      'Digital Display',
      'Ergonomic Seating'
    ],
    specs: {
      'Engine': '600cc EFI, 4-Stroke',
      'Horsepower': '45 HP @ 6500 RPM',
      'Transmission': 'Automatic CVT with High/Low/Reverse',
      'Drive System': '2WD/4WD',
      'Suspension': 'Independent, 8" Travel',
      'Ground Clearance': '10 inches',
      'Payload Capacity': '600 lbs',
      'Towing Capacity': '1200 lbs',
      'Fuel Capacity': '6.5 gallons',
      'Wheelbase': '70 inches',
      'Overall Dimensions': '98" L x 58" W x 70" H',
      'Dry Weight': '1050 lbs'
    },
    colors: [
      { name: 'Red', value: '#DA291C' },
      { name: 'Gray', value: '#6C6E70' },
      { name: 'Orange', value: '#FF6B35' }
    ],
    variants: [
      {
        name: 'P',
        image: 'https://jaredwhipplellc-765105907.imgix.net/segway/ut6-p-right-angle.png?q=80&w=300&h=200&auto=format&fit=clip',
        description: 'Compact power for solo adventures'
      },
      {
        name: 'S Crew',
        image: 'https://jaredwhipplellc-765105907.imgix.net/segway/ut6-s-right-angle.png?q=80&w=300&h=200&auto=format&fit=clip',
        description: 'Spacious design for small teams'
      },
      {
        name: 'M',
        image: 'https://jaredwhipplellc-765105907.imgix.net/segway/ut6-m-right-angle.png?q=80&w=300&h=200&auto=format&fit=clip',
        description: 'Mid-size configuration'
      }
    ]
  },
  {
    id: 'villain',
    name: 'Villain Series',
    description: 'Bold design meets serious performance. The Villain series offers aggressive styling with dependable capability.',
    price: 'Starting at $19,999',
    images: [
      'https://jaredwhipplellc-765105907.imgix.net/segway/sx10-p-right-angle.png?auto=format&fit=clip&w=1200',
      'https://jaredwhipplellc-765105907.imgix.net/segway/sx10-s-right-angle.png?auto=format&fit=clip&w=1200',
      'https://jaredwhipplellc-765105907.imgix.net/segway/sx10-wp-right-angle.png?auto=format&fit=clip&w=1200',
    ],
    features: [
      '850cc EFI Engine',
      '80 HP @ 7200 RPM',
      'Sport-Tuned Suspension',
      'On-Demand 4WD',
      '1800 lb Towing Capacity',
      'Aggressive Styling',
      'Performance Exhaust',
      'Sport Seating'
    ],
    specs: {
      'Engine': '850cc EFI, 4-Stroke',
      'Horsepower': '80 HP @ 7200 RPM',
      'Transmission': 'Automatic CVT with High/Low/Reverse',
      'Drive System': '2WD/4WD with Locking Differential',
      'Suspension': 'Independent, 11" Travel',
      'Ground Clearance': '13 inches',
      'Payload Capacity': '900 lbs',
      'Towing Capacity': '1800 lbs',
      'Fuel Capacity': '9.2 gallons',
      'Wheelbase': '86 inches',
      'Overall Dimensions': '122" L x 65" W x 75" H',
      'Dry Weight': '1450 lbs'
    },
    colors: [
      { name: 'Black', value: '#000000' },
      { name: 'Red', value: '#DA291C' },
      { name: 'Metallic Gray', value: '#8C8C8C' }
    ],
    variants: [
      {
        name: 'P',
        image: 'https://jaredwhipplellc-765105907.imgix.net/segway/sx10-p-right-angle.png?q=80&w=300&h=200&auto=format&fit=clip',
        description: 'Performance-focused variant'
      },
      {
        name: 'S',
        image: 'https://jaredwhipplellc-765105907.imgix.net/segway/sx10-s-right-angle.png?q=80&w=300&h=200&auto=format&fit=clip',
        description: 'Sport configuration'
      },
      {
        name: 'WP',
        image: 'https://jaredwhipplellc-765105907.imgix.net/segway/sx10-wp-right-angle.png?q=80&w=300&h=200&auto=format&fit=clip',
        description: 'Work-performance hybrid'
      }
    ]
  }
];

type Params = {
  params: {
    modelId: string;
  };
};

export default function ModelPage({ params }: Params) {
  const model = sideBySideModels.find(m => m.id === params.modelId);
  
  if (!model) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Product Header */}
        <div className="bg-gray-50 py-8">
          <div className="container mx-auto px-4">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-red-600">
                    Home
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <Link href="/side-by-side" className="ml-1 text-sm font-medium text-gray-700 hover:text-red-600 md:ml-2">
                      Side-by-Sides
                    </Link>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">{model.name}</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Product Gallery */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src={model.images[0]}
                    alt={model.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {model.images.map((image, index) => (
                    <div key={index} className="relative h-24 bg-gray-100 rounded-md overflow-hidden">
                      <Image
                        src={image}
                        alt={`${model.name} view ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-6">
                <h1 className="text-4xl font-bold text-gray-900">{model.name}</h1>
                <p className="text-2xl font-semibold text-red-600">{model.price}</p>
                
                <div className="pt-4 border-t border-gray-200">
                  <h2 className="text-lg font-medium text-gray-900">Available Colors</h2>
                  <div className="mt-3 flex space-x-2">
                    {model.colors.map((color, index) => (
                      <button
                        key={index}
                        className="w-8 h-8 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        style={{ backgroundColor: color.value }}
                        title={color.name}
                      >
                        <span className="sr-only">{color.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <h2 className="text-lg font-medium text-gray-900">Key Features</h2>
                  <ul className="mt-3 space-y-2">
                    {model.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-4">
                  <button className="w-full bg-red-600 text-white py-3 px-6 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors">
                    Schedule a Test Drive
                  </button>
                  <p className="mt-2 text-center text-sm text-gray-500">
                    Or call us at (123) 456-7890
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Specifications</h2>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <tbody className="divide-y divide-gray-200">
                  {Object.entries(model.specs).map(([key, value]) => (
                    <tr key={key} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {key}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-red-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to experience the {model.name}?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today to schedule a test drive or learn more about our financing options.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-red-600 font-semibold py-3 px-8 rounded-md hover:bg-gray-100 transition-colors">
                Contact Us
              </button>
              <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-md hover:bg-white/10 transition-colors">
                View Financing Options
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export function generateStaticParams() {
  return sideBySideModels.map((model) => ({
    modelId: model.id,
  }));
}
