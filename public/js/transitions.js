// Simple page transitions without framework
document.addEventListener('DOMContentLoaded', function() {
    // Fade in on page load
    document.body.style.opacity = '1';
    
    // Intercept all internal link clicks
    document.addEventListener('click', function(e) {
        const link = e.target.closest('a[href]');
        
        // Check if it's an internal link
        if (link && 
            link.href && 
            link.origin === window.location.origin &&
            !link.hasAttribute('target') &&
            !link.href.includes('tel:') &&
            !link.href.includes('mailto:') &&
            !link.href.includes('#')) {
            
            e.preventDefault();
            
            // Fade out current page
            document.body.classList.add('page-transition');
            
            // Navigate after fade completes
            setTimeout(() => {
                window.location.href = link.href;
            }, 150);
        }
    });
});