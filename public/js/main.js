// Main JavaScript functionality

// Initialize Swiper carousel
function initSwiper() {
    if (typeof Swiper !== 'undefined') {
        new Swiper('.swiper-container', {
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            }
        });
    }
}

// Model data for side-by-side vehicles
const sideBySideModels = {
    'sx20': {
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
    'ut10': {
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
    'ut6': {
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
    'villain': {
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
};

// Initialize everything when DOM loads
document.addEventListener('DOMContentLoaded', function() {
    initSwiper();
});