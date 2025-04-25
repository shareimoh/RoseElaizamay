// Sample data - Replace with your actual images and quotes
const images = [
    { src: 'images/gallery/photo1.jpg', caption: 'To the most beautiful soul I know' },
    { src: 'images/gallery/photo2.jpg', caption: 'Your smile lights up my world' },
    { src: 'images/gallery/photo3.jpg', caption: 'Forever yours, Elaiza May' }
];

const quotes = [
    "Elaiza May, you are the most beautiful person I know, inside and out.",
    "Every moment with you feels like a dream come true.",
    "Your smile brightens even my darkest days, Elaiza May.",
    "In your eyes, I found my home and my heart.",
    "You are the reason I believe in love, Elaiza May.",
    "Forever isn't long enough to spend with you.",
    "Your love is the greatest gift I've ever received.",
    "With you, every day feels like a celebration.",
    "You make my world complete, Elaiza May.",
    "Happy Birthday to the love of my life!"
];

const memories = [
    { image: 'images/memories/memory1.jpg', text: 'The day we first met' },
    { image: 'images/memories/memory2.jpg', text: 'Special moments' },
    { image: 'images/memories/memory3.jpg', text: 'Together forever' }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    initializeSlider();
    initializeQuotes();
    initializeMemories();
    createFloatingHearts();
    initializeModal();
});

// Image Slider
function initializeSlider() {
    const sliderContainer = document.querySelector('.slider-container');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;

    // Add images to slider
    images.forEach((img, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = img.src;
        imgElement.alt = img.caption;
        imgElement.dataset.index = index;
        sliderContainer.appendChild(imgElement);
    });

    // Update slider position
    function updateSlider() {
        sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Event listeners for buttons
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateSlider();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlider();
    });

    // Auto slide
    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlider();
    }, 5000);
}

// Quotes
function initializeQuotes() {
    const quoteContainer = document.querySelector('.quote-container');
    let currentQuoteIndex = 0;

    function updateQuote() {
        quoteContainer.style.opacity = '0';
        setTimeout(() => {
            quoteContainer.textContent = quotes[currentQuoteIndex];
            quoteContainer.style.opacity = '1';
            currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
        }, 1000);
    }

    // Update quote every 5 seconds
    setInterval(updateQuote, 5000);
    updateQuote();
}

// Memories Grid
function initializeMemories() {
    const memoryGrid = document.querySelector('.memory-grid');
    
    memories.forEach(memory => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        
        const img = document.createElement('img');
        img.src = memory.image;
        img.alt = memory.text;
        
        const p = document.createElement('p');
        p.textContent = memory.text;
        
        card.appendChild(img);
        card.appendChild(p);
        memoryGrid.appendChild(card);
    });
}

// Floating Hearts Animation
function createFloatingHearts() {
    const container = document.querySelector('.floating-hearts');
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤️';
        
        // Random position
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * 100 + 'vh';
        
        // Random size
        heart.style.fontSize = (Math.random() * 2 + 1) + 'rem';
        
        // Random animation duration
        heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
        
        container.appendChild(heart);
        
        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 6000);
    }
    
    // Create hearts periodically
    setInterval(createHeart, 300);
}

// Image Modal
function initializeModal() {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close');
    
    // Add click event to all images
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImg.src = img.src;
        });
    });
    
    // Close modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}); 