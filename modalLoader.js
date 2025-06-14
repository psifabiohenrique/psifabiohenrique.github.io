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
        const btnPrev = document.querySelector('.carousel-prev');
        const btnNext = document.querySelector('.carousel-next');

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
    }

    show() {
        if (this.modalElement) {
            this.modalElement.style.display = 'block';
        }
    }

    hide() {
        if (this.modalElement) {
            this.modalElement.style.display = 'none';
        }
    }
}

window.ModalLoader = ModalLoader;