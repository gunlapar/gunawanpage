class Carousel {
    constructor() {
        this.container = document.querySelector('.carousel-track');
        this.cards = Array.from(document.querySelectorAll('.card'));
        this.currentIndex = Math.floor(this.cards.length / 2);
        
        this.setupButtons();
        this.updateCards();
    }

    setupButtons() {
        document.querySelector('.nav-arrow.left').addEventListener('click', () => this.slide('left'));
        document.querySelector('.nav-arrow.right').addEventListener('click', () => this.slide('right'));
    }

    updateCards() {
        this.cards.forEach((card, index) => {
            const offset = index - this.currentIndex;
            let className = '';

            if (offset === 0) className = 'center';
            else if (offset === -1) className = 'left';
            else if (offset === 1) className = 'right';
            else if (offset < -1) className = 'far-left';
            else if (offset > 1) className = 'far-right';

            card.className = `card ${className}`;
        });
    }

    slide(direction) {
        if (direction === 'left' && this.currentIndex > 0) {
            this.currentIndex--;
        } else if (direction === 'right' && this.currentIndex < this.cards.length - 1) {
            this.currentIndex++;
        }
        this.updateCards();
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Carousel();
});