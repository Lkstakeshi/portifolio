// DOM Content Loaded - runs when the page is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded successfully!');
    
    // Example: Add click event to the header
    const header = document.querySelector('header');
    header.addEventListener('click', function() {
        console.log('Header clicked!');
    });
});

// Example function
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet('Portfolio Viewer'));
