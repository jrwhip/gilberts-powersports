// Header component with exact functionality from Header.tsx

class HeaderManager {
  constructor() {
    this.servicesDropdown = null
    this.mobileMenu = null
    this.isServicesOpen = false
    this.isMobileMenuOpen = false
    this.init()
  }

  init() {
    this.createHeader()
    this.attachEventListeners()
  }

  createHeader() {
    const headerHTML = `
      <header class="py-10">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav class="relative z-50 flex justify-between">
            <div class="flex items-center md:gap-x-12">
              <a href="/" aria-label="Home">
                <div class="h-10 w-auto">
                  <img
                    src="/img/gilbert-full-logo.svg"
                    alt="Company Logo"
                    width="192"
                    height="40"
                    class="h-10 w-auto"
                    style="priority: true;"
                  />
                </div>
              </a>
              <div class="hidden md:flex md:gap-x-6">
                <a href="/mccormick" class="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900">McCormick</a>
                <div class="services-dropdown relative">
                  <button class="services-dropdown-button inline-flex items-center gap-x-1 rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900">
                    Services
                    <svg class="h-4 w-4 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                    </svg>
                  </button>
                  <div class="services-dropdown-panel absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition opacity-0 scale-95 pointer-events-none" style="transition: transform 200ms ease-out, opacity 150ms ease-in;">
                    <div class="p-4">
                      <div class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                        <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <svg class="h-6 w-6 text-gray-600 group-hover:text-orange-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0V6a1.5 1.5 0 013 0v12.75zM15.75 18.75a1.5 1.5 0 01-3 0V6a1.5 1.5 0 013 0v12.75z" />
                          </svg>
                        </div>
                        <div class="flex-auto">
                          <a href="/tractor-repairs" class="block font-semibold text-gray-900">
                            Tractor Repairs
                            <span class="absolute inset-0"></span>
                          </a>
                          <p class="mt-1 text-gray-600">Farm equipment repair and maintenance</p>
                        </div>
                      </div>
                      <div class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                        <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <svg class="h-6 w-6 text-gray-600 group-hover:text-orange-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                          </svg>
                        </div>
                        <div class="flex-auto">
                          <a href="/small-engine-repairs" class="block font-semibold text-gray-900">
                            Small Engine Repairs
                            <span class="absolute inset-0"></span>
                          </a>
                          <p class="mt-1 text-gray-600">Lawn mowers, chainsaws, and more</p>
                        </div>
                      </div>
                      <div class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                        <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <svg class="h-6 w-6 text-gray-600 group-hover:text-orange-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0V6a1.5 1.5 0 013 0v12.75zM15.75 18.75a1.5 1.5 0 01-3 0V6a1.5 1.5 0 013 0v12.75z" />
                          </svg>
                        </div>
                        <div class="flex-auto">
                          <a href="/automotive-repairs" class="block font-semibold text-gray-900">
                            Automotive Repairs
                            <span class="absolute inset-0"></span>
                          </a>
                          <p class="mt-1 text-gray-600">Complete automotive care and service</p>
                        </div>
                      </div>
                      <div class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                        <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <svg class="h-6 w-6 text-gray-600 group-hover:text-orange-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                          </svg>
                        </div>
                        <div class="flex-auto">
                          <a href="/atv-utv-repairs" class="block font-semibold text-gray-900">
                            ATV/UTV Repairs
                            <span class="absolute inset-0"></span>
                          </a>
                          <p class="mt-1 text-gray-600">Off-road vehicle service and repair</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="/accessories" class="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900">Accessories</a>
              </div>
            </div>
            <div class="flex items-center gap-x-5 md:gap-x-8">
              <a href="/contact" class="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-hidden focus-visible:outline-2 focus-visible:outline-offset-2 bg-segway text-white hover:bg-segway/90 hover:text-slate-100 active:bg-segway/80 active:text-slate-300 focus-visible:outline-segway">
                <span>
                  Contact <span class="hidden lg:inline">Us</span>
                </span>
              </a>
              <div class="-mr-1 md:hidden">
                <button class="mobile-menu-button relative z-10 flex h-8 w-8 items-center justify-center focus:not-focus:outline-hidden" aria-label="Toggle Navigation">
                  <svg aria-hidden="true" class="h-3.5 w-3.5 overflow-visible stroke-slate-700 mobile-menu-icon" fill="none" stroke-width="2" stroke-linecap="round">
                    <path d="M0 1H14M0 7H14M0 13H14" class="hamburger-lines origin-center transition" />
                    <path d="M2 2L12 12M12 2L2 12" class="close-lines origin-center transition scale-90 opacity-0" />
                  </svg>
                </button>
              </div>
            </div>
          </nav>
        </div>
        
        <!-- Mobile menu backdrop -->
        <div class="mobile-menu-backdrop fixed inset-0 bg-slate-300/50 duration-150 opacity-0 pointer-events-none transition ease-out"></div>
        
        <!-- Mobile menu panel -->
        <div class="mobile-menu-panel absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5 scale-95 opacity-0 pointer-events-none transition duration-150 ease-out">
          <a href="/mccormick" class="block w-full p-2">McCormick</a>
          <a href="/tractor-repairs" class="block w-full p-2">Tractor Repairs</a>
          <a href="/small-engine-repairs" class="block w-full p-2">Small Engine Repairs</a>
          <a href="/automotive-repairs" class="block w-full p-2">Automotive Repairs</a>
          <a href="/atv-utv-repairs" class="block w-full p-2">ATV/UTV Repairs</a>
          <a href="/accessories" class="block w-full p-2">Accessories</a>
          <hr class="m-2 border-slate-300/40" />
          <a href="/contact" class="block w-full p-2">Contact</a>
        </div>
      </header>
    `

    document.getElementById('header').innerHTML = headerHTML

    // Get references to elements
    this.servicesDropdown = document.querySelector('.services-dropdown')
    this.mobileMenu = document.querySelector('.mobile-menu-panel')
    this.mobileMenuBackdrop = document.querySelector('.mobile-menu-backdrop')
  }

  attachEventListeners() {
    // Services dropdown
    const servicesButton = document.querySelector('.services-dropdown-button')
    const servicesPanel = document.querySelector('.services-dropdown-panel')

    if (servicesButton && servicesPanel) {
      servicesButton.addEventListener('click', (e) => {
        e.preventDefault()
        this.toggleServicesDropdown()
      })

      // Close dropdown when clicking outside
      document.addEventListener('click', (e) => {
        if (!this.servicesDropdown.contains(e.target)) {
          this.closeServicesDropdown()
        }
      })
    }

    // Mobile menu
    const mobileMenuButton = document.querySelector('.mobile-menu-button')
    const mobileMenuBackdrop = document.querySelector('.mobile-menu-backdrop')

    if (mobileMenuButton) {
      mobileMenuButton.addEventListener('click', (e) => {
        e.preventDefault()
        this.toggleMobileMenu()
      })
    }

    if (mobileMenuBackdrop) {
      mobileMenuBackdrop.addEventListener('click', () => {
        this.closeMobileMenu()
      })
    }

    // Close mobile menu when clicking links
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-panel a')
    mobileMenuLinks.forEach((link) => {
      link.addEventListener('click', () => {
        this.closeMobileMenu()
      })
    })
  }

  toggleServicesDropdown() {
    if (this.isServicesOpen) {
      this.closeServicesDropdown()
    } else {
      this.openServicesDropdown()
    }
  }

  openServicesDropdown() {
    const panel = document.querySelector('.services-dropdown-panel')
    if (panel) {
      panel.style.opacity = '1'
      panel.style.transform = 'scale(1)'
      panel.style.pointerEvents = 'auto'
      this.isServicesOpen = true
    }
  }

  closeServicesDropdown() {
    const panel = document.querySelector('.services-dropdown-panel')
    if (panel) {
      panel.style.opacity = '0'
      panel.style.transform = 'scale(0.95)'
      panel.style.pointerEvents = 'none'
      this.isServicesOpen = false
    }
  }

  toggleMobileMenu() {
    if (this.isMobileMenuOpen) {
      this.closeMobileMenu()
    } else {
      this.openMobileMenu()
    }
  }

  openMobileMenu() {
    const panel = document.querySelector('.mobile-menu-panel')
    const backdrop = document.querySelector('.mobile-menu-backdrop')
    const hamburgerLines = document.querySelector('.hamburger-lines')
    const closeLines = document.querySelector('.close-lines')

    if (panel && backdrop) {
      // Show backdrop
      backdrop.style.opacity = '1'
      backdrop.style.pointerEvents = 'auto'

      // Show panel
      panel.style.opacity = '1'
      panel.style.transform = 'scale(1)'
      panel.style.pointerEvents = 'auto'

      // Switch icon
      if (hamburgerLines && closeLines) {
        hamburgerLines.style.opacity = '0'
        hamburgerLines.style.transform = 'scale(0.9)'
        closeLines.style.opacity = '1'
        closeLines.style.transform = 'scale(1)'
      }

      this.isMobileMenuOpen = true
    }
  }

  closeMobileMenu() {
    const panel = document.querySelector('.mobile-menu-panel')
    const backdrop = document.querySelector('.mobile-menu-backdrop')
    const hamburgerLines = document.querySelector('.hamburger-lines')
    const closeLines = document.querySelector('.close-lines')

    if (panel && backdrop) {
      // Hide backdrop
      backdrop.style.opacity = '0'
      backdrop.style.pointerEvents = 'none'

      // Hide panel
      panel.style.opacity = '0'
      panel.style.transform = 'scale(0.95)'
      panel.style.pointerEvents = 'none'

      // Switch icon back
      if (hamburgerLines && closeLines) {
        hamburgerLines.style.opacity = '1'
        hamburgerLines.style.transform = 'scale(1)'
        closeLines.style.opacity = '0'
        closeLines.style.transform = 'scale(0.9)'
      }

      this.isMobileMenuOpen = false
    }
  }
}

// Initialize header when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new HeaderManager()
})
