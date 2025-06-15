class ModalLoader {
    constructor() {
        this.modalElement = null;
        this.currentImageIndex = 0;
        this.images = [];
        this.isInitialized = false;
    }

    async initialize() {
        if(this.isInitialized) return;

        const target = document.getElementById('modal-loader');
        try {
            const response = await fetch('./modal-detail-project.html');
            if(response.ok) {
                const htmlContent = await response.text();
                target.innerHTML = htmlContent;
                this.modalElement = document.getElementById('modal-detail');
                this.setupEventListeners();
                this.isInitialized = true;
                return true;
            }
        } catch (error) {
            console.warn('Failed to load modal content:', error);
            return false;
        }
        return false;
    }

    setupEventListeners() {
        if (!this.modalElement) return;

        // Botões de fechar
        const btnCloseHeader = document.getElementById('btn-close-modal')
        const btnCloseFooter = document.getElementById('btn-close')
        const overlay = this.modalElement.querySelector('.modal-overlay');

        [btnCloseHeader, btnCloseFooter, overlay].forEach(element => {
            if(element) {
                element.addEventListener('click', () => this.hide())
            }
        });

        // ESC para fechar
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isVisible()) {
                this.hide();
            }
        });

        //  Controles do carrossel
        const btnPrev = document.getElementById('carousel-prev');
        const btnNext = document.getElementById('carousel-next');

        if(btnPrev) btnPrev.addEventListener('click', () => this.previousImage());
        if(btnNext) btnNext.addEventListener('click', () => this.nextImage());

        document.addEventListener('keydown', (e) => {
            if (!this.isVisible()) return;

            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                this.previousImage();
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                this.nextImage();
            }
        });
    }

    async showProject(projectId) {
        if (!this.isInitialized) {
            const initialized = await this.initialize();
            if (!initialized) return;
        }

        const project = projects.find(p => p.id === projectId);
        if(!project) {
            console.error('Projeto não encontrado: ', projectId);
            return
        }

        this.populateModal(project);
        this.show();
    }

    populateModal(project) {
        const title = document.getElementById('modal-title');
        if(title) title.textContent = project.title;
        
        // Populate technologies
        const technologiesContainer = document.getElementById('modal-tecnologies');
        if(technologiesContainer && project.technologies) {
            technologiesContainer.innerHTML = project.technologies.map(tech => `
                <span class="tech-tag">
                    <i class="tech-icon">${tech.icon}</i>
                    ${tech.name}
                </span>
            `).join('');
        }
        
        // Populate description
        const descriptionContainer = document.getElementById('modal-description');
        if(descriptionContainer) {
            descriptionContainer.innerHTML = project.detailedDescription || project.description;
        }
        
        // Update action buttons
        const btnDemo = document.getElementById('btn-demo');
        const btnCode = document.getElementById('btn-codigo');
        
        if(btnDemo && project.demoLink) {
            btnDemo.href = project.demoLink;
        }
        
        if(btnCode && project.codeLink) {
            btnCode.href = project.codeLink;
        }
        
        // Setup images for carousel
        if(project.images && project.images.length > 0) {
            this.images = project.images;
            this.currentImageIndex = 0;
            this.setupCarousel();
        }
    }
    
    setupCarousel() {
        const carouselContainer = document.getElementById('image-carousel-container');
        const indicatorsContainer = document.getElementById('carousel-indicators');

        if(carouselContainer && this.images.length > 0) {
            // Create carousel images
            carouselContainer.innerHTML = this.images.map((image, index) => `
                <img src="${image}" alt="Project image ${index + 1}"
                     class="carousel-image ${index === 0 ? 'active' : ''}"
                     style="display: ${index === 0 ? 'block' : 'none'}">
            `).join('');

            // Create indicators
            if(indicatorsContainer) {
                indicatorsContainer.innerHTML = this.images.map((_, index) => `
                    <button class="carousel-indicator ${index === 0 ? 'active' : ''}"
                            data-index="${index}"></button>
                `).join('');

                // Add event listeners to indicators
                const indicators = indicatorsContainer.querySelectorAll('.carousel-indicator');
                indicators.forEach((indicator, index) => {
                    indicator.addEventListener('click', () => this.goToImage(index));
                });
            }
        }
    }
    
    previousImage() {
        if(this.images.length <= 1) return;
        
        this.currentImageIndex = this.currentImageIndex === 0 
            ? this.images.length - 1 
            : this.currentImageIndex - 1;
        this.updateCarousel();
    }
    
    nextImage() {
        if(this.images.length <= 1) return;
        
        this.currentImageIndex = this.currentImageIndex === this.images.length - 1 
            ? 0 
            : this.currentImageIndex + 1;
        this.updateCarousel();
    }
    
    goToImage(index) {
        if(index >= 0 && index < this.images.length) {
            this.currentImageIndex = index;
            this.updateCarousel();
        }
    }
    
    updateCarousel() {
        const images = document.querySelectorAll('.carousel-image');
        const indicators = document.querySelectorAll('.carousel-indicator');
        
        images.forEach((img, index) => {
            img.style.display = index === this.currentImageIndex ? 'block' : 'none';
            img.classList.toggle('active', index === this.currentImageIndex);
        });
        
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentImageIndex);
        });
    }
    
    isVisible() {
        // return this.modalElement && this.modalElement.style.display === 'block';
        return this.modalElement && this.modalElement.classList.contains('active');
    }

    show() {
        if (this.modalElement) {
            this.modalElement.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    hide() {
        if (this.modalElement) {
            this.modalElement.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
}

window.ModalLoader = ModalLoader;