
// Remove #home from URL when page loads
if (window.location.hash === '#home') {
    // Use replaceState to change URL without page reload
    window.history.replaceState({}, document.title, window.location.pathname);
}

// Clean up URL when navigating to home section
document.addEventListener('DOMContentLoaded', function() {
    // Find all links that point to #home
    const homeLinks = document.querySelectorAll('a[href="#home"], a[href*="#home"]');
    
    homeLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Scroll to top or home section
            document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }) || 
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // Clean the URL
            window.history.replaceState({}, document.title, window.location.pathname);
        });
    });
});

// Alternative: Remove any hash from URL on page load
// window.history.replaceState({}, document.title, window.location.pathname + window.location.search);