class Gallery {
    constructor() {
        this.slider = document.querySelector('.slider');
        this.items = document.querySelectorAll('.item');
        this.isAnimating = false;
        this.init();
    }

    init() {
        document.addEventListener('click', this.handleClick.bind(this));
        this.setupKeyboardNavigation();
        this.setupTouchEvents();
    }

    handleClick(e) {
        if (this.isAnimating) return;
        
        if (e.target.matches('.next')) {
            this.slide('next');
        } else if (e.target.matches('.prev')) {
            this.slide('prev');
        }
    }

    slide(direction) {
        this.isAnimating = true;
        const items = document.querySelectorAll('.item');
        
        if (direction === 'next') {
            this.slider.append(items[0]);
        } else {
            this.slider.prepend(items[items.length - 1]);
        }

        setTimeout(() => {
            this.isAnimating = false;
        }, 750); // Match transition duration
    }

    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') {
                this.slide('next');
            } else if (e.key === 'ArrowLeft') {
                this.slide('prev');
            }
        });
    }

    setupTouchEvents() {
        let startX = 0;
        let isDragging = false;

        this.slider.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
        });

        this.slider.addEventListener('touchend', (e) => {
            if (!isDragging) return;
            
            const endX = e.changedTouches[0].clientX;
            const diff = startX - endX;

            if (Math.abs(diff) > 50) {
                this.slide(diff > 0 ? 'next' : 'prev');
            }
            
            isDragging = false;
        });
    }
}

// Initialize gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Gallery();
});