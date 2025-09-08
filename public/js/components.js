// Header and Footer HTML components
const HEADER_HTML = `
<nav class="bg-white shadow-md fixed w-full top-0 z-50">
    <div class="container mx-auto px-4">
        <div class="flex justify-between items-center py-4">
            <div class="flex items-center">
                <a href="index.html" class="flex items-center">
                    <img src="img/logo-transparent-background.png" alt="Gilbert Power Sports" class="h-12 w-auto mr-3">
                    <span class="text-xl font-bold text-gray-800">Gilbert Power Sports</span>
                </a>
            </div>
            
            <div class="hidden md:flex items-center space-x-8">
                <a href="index.html" class="text-gray-700 hover:text-red-600 font-medium">Home</a>
                
                <div class="relative group">
                    <button class="text-gray-700 hover:text-red-600 font-medium flex items-center">
                        Services
                        <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div class="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                        <a href="atv-utv-repairs.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600">ATV/UTV Repairs</a>
                        <a href="automotive-repairs.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600">Automotive Repairs</a>
                        <a href="small-engine-repairs.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600">Small Engine Repairs</a>
                        <a href="tractor-repairs.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600">Tractor Repairs</a>
                    </div>
                </div>
                
                <a href="side-by-side.html" class="text-gray-700 hover:text-red-600 font-medium">Side-by-Sides</a>
                <a href="accessories.html" class="text-gray-700 hover:text-red-600 font-medium">Accessories</a>
                <a href="mccormick.html" class="text-gray-700 hover:text-red-600 font-medium">McCormick</a>
                <a href="about.html" class="text-gray-700 hover:text-red-600 font-medium">About</a>
                <a href="contact.html" class="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Contact</a>
            </div>
            
            <!-- Mobile menu button -->
            <div class="md:hidden">
                <button id="mobile-menu-button" class="text-gray-700 hover:text-red-600">
                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </div>
        
        <!-- Mobile menu -->
        <div id="mobile-menu" class="md:hidden hidden">
            <div class="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
                <a href="index.html" class="block px-3 py-2 text-gray-700 hover:text-red-600">Home</a>
                <a href="atv-utv-repairs.html" class="block px-3 py-2 text-gray-700 hover:text-red-600">ATV/UTV Repairs</a>
                <a href="automotive-repairs.html" class="block px-3 py-2 text-gray-700 hover:text-red-600">Automotive Repairs</a>
                <a href="small-engine-repairs.html" class="block px-3 py-2 text-gray-700 hover:text-red-600">Small Engine Repairs</a>
                <a href="tractor-repairs.html" class="block px-3 py-2 text-gray-700 hover:text-red-600">Tractor Repairs</a>
                <a href="side-by-side.html" class="block px-3 py-2 text-gray-700 hover:text-red-600">Side-by-Sides</a>
                <a href="accessories.html" class="block px-3 py-2 text-gray-700 hover:text-red-600">Accessories</a>
                <a href="mccormick.html" class="block px-3 py-2 text-gray-700 hover:text-red-600">McCormick</a>
                <a href="about.html" class="block px-3 py-2 text-gray-700 hover:text-red-600">About</a>
                <a href="contact.html" class="block px-3 py-2 text-gray-700 hover:text-red-600">Contact</a>
            </div>
        </div>
    </div>
</nav>
<div class="h-20"></div>
`;

const FOOTER_HTML = `
<footer class="bg-gray-900 text-white py-12">
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div class="col-span-2">
                <div class="flex items-center mb-4">
                    <img src="img/logo-transparent-background.png" alt="Gilbert Power Sports" class="h-12 w-auto mr-3">
                    <span class="text-xl font-bold">Gilbert Power Sports</span>
                </div>
                <p class="text-gray-300 mb-4">
                    Four generations of trusted service in your community. We provide expert repairs and quality products for all your power sports needs.
                </p>
                <div class="text-gray-300">
                    <p class="mb-2">📍 123 Main Street, Gilbert, AZ 85234</p>
                    <p class="mb-2">📞 (123) 456-7890</p>
                    <p class="mb-2">📧 info@gilbertpowersports.com</p>
                </div>
            </div>
            
            <div>
                <h3 class="text-lg font-semibold mb-4">Services</h3>
                <ul class="space-y-2">
                    <li><a href="atv-utv-repairs.html" class="text-gray-300 hover:text-white">ATV/UTV Repairs</a></li>
                    <li><a href="automotive-repairs.html" class="text-gray-300 hover:text-white">Automotive Repairs</a></li>
                    <li><a href="small-engine-repairs.html" class="text-gray-300 hover:text-white">Small Engine Repairs</a></li>
                    <li><a href="tractor-repairs.html" class="text-gray-300 hover:text-white">Tractor Repairs</a></li>
                </ul>
            </div>
            
            <div>
                <h3 class="text-lg font-semibold mb-4">Products</h3>
                <ul class="space-y-2">
                    <li><a href="side-by-side.html" class="text-gray-300 hover:text-white">Side-by-Sides</a></li>
                    <li><a href="accessories.html" class="text-gray-300 hover:text-white">Accessories</a></li>
                    <li><a href="mccormick.html" class="text-gray-300 hover:text-white">McCormick</a></li>
                    <li><a href="about.html" class="text-gray-300 hover:text-white">About Us</a></li>
                </ul>
            </div>
        </div>
        
        <hr class="border-gray-700 my-8">
        
        <div class="flex flex-col md:flex-row justify-between items-center">
            <p class="text-gray-400 text-sm">
                © 2024 Gilbert Power Sports. All rights reserved.
            </p>
            <p class="text-gray-400 text-sm mt-2 md:mt-0">
                Four Generation Family Business
            </p>
        </div>
    </div>
</footer>
`;

// Function to load header and footer
function loadComponents() {
    const headerElement = document.getElementById('header');
    const footerElement = document.getElementById('footer');
    
    if (headerElement) {
        headerElement.innerHTML = HEADER_HTML;
        
        // Add mobile menu functionality
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }
    }
    
    if (footerElement) {
        footerElement.innerHTML = FOOTER_HTML;
    }
}

// Load components when DOM is ready
document.addEventListener('DOMContentLoaded', loadComponents);