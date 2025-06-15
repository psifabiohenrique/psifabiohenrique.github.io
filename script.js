// Função para criar um card de projeto
function createProjectCard(project) {
  return `
      <div class="projeto-card" data-projeto-id="${project.id}">
        <div class="projeto-header">
          <h3 class="projeto-titulo">${project.title}</h3>
        </div>
        
        <div class="projeto-conteudo">
          <p class="projeto-descricao">${project.description}</p>
          
          <div class="projeto-tecnologias">
            ${project.technologies.map(tech => `
              <span class="tech-tag">
                <i class="tech-icon">${tech.icon}</i>
                ${tech.name}
              </span>
            `).join('')}
          </div>
        </div>
        
        <div class="projeto-acoes">
          <button class="btn btn-secundario" onclick="viewMore(${project.id})">Ver Mais</button>
          <a href="${project.demoLink}" target="_blank" class="btn btn-primario">Live Demo</a>
        </div>
      </div>
    `;
}

// Função para renderizar todos os projetos
function renderProjects() {
  const container = document.querySelector('.projetos-grid');

  if (!container) {
    console.error('Container .projetos-grid não encontrado');
    return;
  }

  // Limpa o container
  container.innerHTML = '';

  // Adiciona cada projeto
  projects.forEach(project => {
    container.innerHTML += createProjectCard(project);
  });
}

// Função para o botão "Ver Mais"
function viewMore(projectId) {
  const project = projects.find(p => p.id === projectId);

  if (project) {
    const modalLoader = new ModalLoader();
    modalLoader.showProject(projectId);
  }
}

// Função para mostrar todos os projetos
function showAll() {
  renderProjects();
}

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function () {
  renderProjects();

  // Adiciona animação de entrada nos cards
  setTimeout(() => {
    const cards = document.querySelectorAll('.projeto-card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';

        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 100);
      }, index * 150);
    });
  }, 100);
});

// Exporta funções para uso global (opcional)
window.showAll = showAll;
window.viewMore = viewMore;