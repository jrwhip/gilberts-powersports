// Accessories page JavaScript

class AccessoriesManager {
  constructor() {
    this.accessories = [
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
    
    this.init();
  }

  init() {
    this.loadAccessories();
  }

  loadAccessories() {
    const container = document.getElementById('accessories-container');
    if (!container) return;

    container.innerHTML = this.accessories.map(accessory => {
      return `
        <div class="group relative bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
          <div class="aspect-square w-full overflow-hidden rounded-t-lg bg-gray-200">
            <img
              src="${accessory.image}"
              alt="${accessory.name}"
              class="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
          <div class="p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-2">
              ${accessory.name}
            </h3>
            <p class="text-sm text-gray-600 mb-4">
              ${accessory.description}
            </p>
            <div class="flex items-center justify-between">
              <div>
                <p class="text-xl font-bold text-orange-600">
                  ${accessory.price}
                </p>
                ${accessory.note ? `<p class="text-sm text-green-600 font-medium">${accessory.note}</p>` : ''}
              </div>
            </div>
            <button class="mt-4 w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors">
              Get Quote
            </button>
          </div>
        </div>
      `;
    }).join('');
  }
}

// Initialize accessories when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new AccessoriesManager();
});