// FeatureNavCard component with exact functionality from FeatureNavCard.tsx

class FeatureNavCardManager {
  constructor() {
    this.init();
  }

  init() {
    this.createFeatureNavCards();
    this.attachEventListeners();
  }

  createFeatureNavCards() {
    const featuredNavs = [
      {
        title: "UT 6",
        id: "UT6",
        productLink: "/side-by-side/ut6",
        titleFont: "DIN2014",
        titleColor: "#DA291C",
        subitems: [
          {
            name: "P",
            image: "https://jaredwhipplellc-765105907.imgix.net/segway/ut6-p-right-angle.png?q=80&w=300&h=200&auto=format&fit=clip",
            description: "Compact power for solo adventures.",
          },
          {
            name: "S Crew",
            image: "https://jaredwhipplellc-765105907.imgix.net/segway/ut6-s-right-angle.png?q=80&w=300&h=200&auto=format&fit=clip",
            description: "Spacious design for small teams.",
          },
          {
            name: "M",
            image: "https://jaredwhipplellc-765105907.imgix.net/segway/ut6-m-right-angle.png?q=80&w=300&h=200&auto=format&fit=clip",
            description: "Mid-size configuration.",
          },
        ],
      },
      {
        title: "UT 10",
        id: "UT10",
        productLink: "/side-by-side/ut10",
        titleFont: "DIN2014",
        titleColor: "#DA291C",
        subitems: [
          {
            name: "S",
            image: "https://jaredwhipplellc-765105907.imgix.net/segway/ut10-s-right-angle.png?q=80&w=300&h=200&auto=format&fit=clip",
            description: "Compact power for solo adventures.",
          },
          {
            name: "P",
            image: "https://jaredwhipplellc-765105907.imgix.net/segway/ut10-p-right-angle.png?q=80&w=300&h=200&auto=format&fit=clip",
            description: "Enhanced performance model.",
          },
        ],
      },
      {
        title: "UT 10 Crew",
        id: "UT10Crew",
        productLink: "/side-by-side/ut10",
        titleFont: "DIN2014",
        titleColor: "#DA291C",
        subitems: [
          {
            name: "S Crew",
            image: "https://jaredwhipplellc-765105907.imgix.net/segway/ut10-crew-s-right-angle.png?q=80&w=300&h=200&auto=format&fit=clip",
            description: "Versatile performance for groups.",
          },
          {
            name: "P Crew",
            image: "https://jaredwhipplellc-765105907.imgix.net/segway/ut10-crew-p-right-angle.png?q=80&w=300&h=200&auto=format&fit=clip",
            description: "Premium crew configuration.",
          },
        ],
      },
      {
        title: "Villain",
        id: "VILLAIN",
        productLink: "/side-by-side/villain",
        titleFont: "DIN2014",
        titleColor: "#DA291C",
        subitems: [
          {
            name: "P",
            image: "https://jaredwhipplellc-765105907.imgix.net/segway/sx10-p-right-angle.png?q=80&w=300&h=200&auto=format&fit=clip",
            description: "Performance-focused variant.",
          },
          {
            name: "S",
            image: "https://jaredwhipplellc-765105907.imgix.net/segway/sx10-s-right-angle.png?q=80&w=300&h=200&auto=format&fit=clip",
            description: "Sport configuration.",
          },
          {
            name: "WP",
            image: "https://jaredwhipplellc-765105907.imgix.net/segway/sx10-wp-right-angle.png?q=80&w=300&h=200&auto=format&fit=clip",
            description: "Work-performance hybrid.",
          },
        ],
      },
      {
        title: "Super Villain",
        id: "SUPERVILLAIN",
        productLink: "/side-by-side/sx20",
        titleFont: "DIN2014",
        titleColor: "#DA291C",
        subitems: [
          {
            name: "Super Villain",
            image: "https://jaredwhipplellc-765105907.imgix.net/segway/sx20-right-angle.png?q=80&w=300&h=200&auto=format&fit=clip",
            description: "Ultimate power and style.",
          },
        ],
      },
    ];

    const container = document.getElementById('feature-nav-cards-container');
    if (!container) return;

    container.innerHTML = featuredNavs.map(product => {
      const activeSubitem = product.subitems[0]; // Use first subitem as initial state
      
      return `
        <div class="w-full sm:w-[calc(45%-6px)] lg:w-[calc(40%-16px)] xl:w-96">
          <div class="w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg feature-nav-card" data-product-id="${product.id}">
            <!-- Image container with fixed aspect ratio -->
            <div class="relative h-0 overflow-hidden pb-[66.67%]">
              <a href="${product.productLink}" class="absolute inset-0 block">
                <img
                  src="${activeSubitem.image}"
                  alt="${product.title} ${activeSubitem.name}"
                  class="w-full h-full object-cover transition-transform duration-500 hover:scale-105 feature-nav-image"
                  loading="lazy"
                />
              </a>
            </div>

            <!-- Title -->
            <a
              href="${product.productLink}"
              class="mt-4 block px-4 no-underline hover:underline"
            >
              <h2
                class="text-center text-xl font-bold"
                style="font-family: ${product.titleFont || 'inherit'}; color: ${product.titleColor || '#DA291C'};"
              >
                ${product.title}
              </h2>
            </a>

            <!-- Subitem Buttons -->
            <div class="flex flex-wrap justify-center gap-2 px-4 py-3">
              ${product.subitems.map((subitem, index) => `
                <button
                  class="rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 subitem-button ${
                    index === 0
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }"
                  data-subitem-index="${index}"
                >
                  ${subitem.name}
                </button>
              `).join('')}
            </div>

            <!-- Description -->
            <div class="px-4 pb-4">
              <p class="h-20 overflow-hidden text-sm leading-relaxed text-gray-600 feature-nav-description">
                ${activeSubitem.description}
              </p>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Store product data for reference
    this.featuredNavs = featuredNavs;
  }

  attachEventListeners() {
    // Add event listeners to subitem buttons
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('subitem-button')) {
        const button = e.target;
        const card = button.closest('.feature-nav-card');
        const productId = card.dataset.productId;
        const subitemIndex = parseInt(button.dataset.subitemIndex);
        
        this.handleSubitemClick(card, productId, subitemIndex);
      }
    });
  }

  handleSubitemClick(card, productId, subitemIndex) {
    // Find the product data
    const product = this.featuredNavs.find(p => p.id === productId);
    if (!product) return;

    const selectedSubitem = product.subitems[subitemIndex];
    
    // Update active button
    const buttons = card.querySelectorAll('.subitem-button');
    buttons.forEach((btn, index) => {
      if (index === subitemIndex) {
        btn.className = 'rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 subitem-button bg-red-600 text-white';
      } else {
        btn.className = 'rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 subitem-button bg-gray-100 text-gray-700 hover:bg-gray-200';
      }
    });

    // Update image
    const image = card.querySelector('.feature-nav-image');
    if (image) {
      image.src = selectedSubitem.image;
      image.alt = `${product.title} ${selectedSubitem.name}`;
    }

    // Update description
    const description = card.querySelector('.feature-nav-description');
    if (description) {
      description.textContent = selectedSubitem.description;
    }
  }
}

// Initialize feature nav cards when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new FeatureNavCardManager();
});