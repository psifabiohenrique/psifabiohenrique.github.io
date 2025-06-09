
// Array com os dados dos projetos
const projetos = [
    {
      id: 1,
      titulo: "Portfólio Pessoal",
      descricao: "Site pessoal desenvolvido para apresentar meus projetos e habilidades, com design responsivo e moderno focado na experiência do usuário.",
      tecnologias: [
        { nome: "HTML", icone: "🌐" },
        { nome: "CSS", icone: "🎨" },
        { nome: "JavaScript", icone: "⚡" },
        { nome: "Responsive", icone: "📱" }
      ],
      linkDemo: "https://psifabiohenrique.github.io",
      linkCodigo: "https://github.com/psifabiohenrique/psifabiohenrique.github.io"
    },
    {
      id: 2,
      titulo: "Sistema de Tarefas",
      descricao: "Aplicação web para gerenciamento de tarefas com interface intuitiva, permitindo criar, editar e organizar atividades do dia a dia.",
      tecnologias: [
        { nome: "React", icone: "⚛️" },
        { nome: "Node.js", icone: "🟢" },
        { nome: "MongoDB", icone: "🗄️" },
        { nome: "Express", icone: "🚀" }
      ],
      linkDemo: "#",
      linkCodigo: "#"
    },
    {
      id: 3,
      titulo: "E-commerce Landing",
      descricao: "Landing page moderna para e-commerce com animações suaves, design responsivo e otimizada para conversão de vendas.",
      tecnologias: [
        { nome: "HTML", icone: "🌐" },
        { nome: "SASS", icone: "🎨" },
        { nome: "JavaScript", icone: "⚡" },
        { nome: "Bootstrap", icone: "🅱️" }
      ],
      linkDemo: "#",
      linkCodigo: "#"
    }
  ];
  
  // Função para criar um card de projeto
  function criarCardProjeto(projeto) {
    return `
      <div class="projeto-card" data-projeto-id="${projeto.id}">
        <div class="projeto-header">
          <h3 class="projeto-titulo">${projeto.titulo}</h3>
        </div>
        
        <div class="projeto-conteudo">
          <p class="projeto-descricao">${projeto.descricao}</p>
          
          <div class="projeto-tecnologias">
            ${projeto.tecnologias.map(tech => `
              <span class="tech-tag">
                <i class="tech-icon">${tech.icone}</i>
                ${tech.nome}
              </span>
            `).join('')}
          </div>
        </div>
        
        <div class="projeto-acoes">
          <button class="btn btn-secundario" onclick="verMais(${projeto.id})">Ver Mais</button>
          <a href="${projeto.linkDemo}" target="_blank" class="btn btn-primario">Live Demo</a>
        </div>
      </div>
    `;
  }
  
  // Função para renderizar todos os projetos
  function renderizarProjetos() {
    const container = document.querySelector('.projetos-grid');
    
    if (!container) {
      console.error('Container .projetos-grid não encontrado');
      return;
    }
    
    // Limpa o container
    container.innerHTML = '';
    
    // Adiciona cada projeto
    projetos.forEach(projeto => {
      container.innerHTML += criarCardProjeto(projeto);
    });
  }
  
  // Função para o botão "Ver Mais"
  function verMais(projetoId) {
    const projeto = projetos.find(p => p.id === projetoId);
    
    if (projeto) {
      // Você pode implementar um modal, redirecionamento, etc.
      if (projeto.linkCodigo !== '#') {
        window.open(projeto.linkCodigo, '_blank');
      } else {
        alert(`Mais informações sobre: ${projeto.titulo}\n\n${projeto.descricao}`);
      }
    }
  }
  
  // Função para mostrar todos os projetos
  function mostrarTodos() {
    renderizarProjetos();
  }
  
  // Inicialização quando o DOM estiver carregado
  document.addEventListener('DOMContentLoaded', function() {
    renderizarProjetos();
    
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
  window.mostrarTodos = mostrarTodos;
  window.verMais = verMais;