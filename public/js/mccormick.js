// McCormick page JavaScript

class McCormickManager {
  constructor() {
    this.tractors = [
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
      }
    ];
    
    this.init();
  }

  init() {
    this.loadTractors();
  }

  loadTractors() {
    const container = document.getElementById('tractors-container');
    if (!container) return;

    container.innerHTML = this.tractors.map(tractor => {
      return `
        <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div class="h-48 overflow-hidden">
            <img 
              src="${tractor.image}" 
              alt="${tractor.name}"
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-2">${tractor.name}</h3>
            <p class="text-gray-600">${tractor.description}</p>
            <button class="mt-4 px-4 py-2 bg-red-700 text-white rounded hover:bg-red-800 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      `;
    }).join('');
  }
}

// Initialize McCormick manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new McCormickManager();
});