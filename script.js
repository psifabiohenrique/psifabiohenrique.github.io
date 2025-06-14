
// Array com os dados dos projetos
const projects = [
  {
    id: 1,
    title: "Portfólio Pessoal",
    descricao: "Site pessoal desenvolvido para apresentar meus projetos e habilidades, com design responsivo e moderno focado na experiência do usuário.",
    descricaoDetalhada: `
        <p>Este portfólio foi desenvolvido com foco na experiência do usuário e design responsivo. O projeto demonstra minhas habilidades em desenvolvimento front-end e design de interfaces.</p>
        <h4>Características principais:</h4>
        <ul>
            <li>Design responsivo que se adapta a diferentes dispositivos</li>
            <li>Animações suaves e transições elegantes</li>
            <li>Código semântico e acessível</li>
            <li>Otimizado para performance e SEO</li>
            <li>Sistema de modal dinâmico para exibição de projetos</li>
        </ul>
        <h4>Desafios superados:</h4>
        <ul>
            <li>Implementação de carrossel de imagens responsivo</li>
            <li>Sistema de modal reutilizável</li>
            <li>Otimização de carregamento de recursos</li>
        </ul>
    `,
    tecnologias: [
      { nome: "HTML", icone: "🌐" },
      { nome: "CSS", icone: "🎨" },
      { nome: "JavaScript", icone: "⚡" },
      { nome: "Responsive", icone: "📱" }
    ],
    imagens: [
      "images/portfolio-1.jpg",
      "images/portfolio-2.jpg",
      "images/portfolio-3.jpg"
    ],
    linkDemo: "https://psifabiohenrique.github.io",
    linkCodigo: "https://github.com/psifabiohenrique/psifabiohenrique.github.io",
    tipoLink: "demo" // "demo" ou "download"
  },
  {
    id: 2,
    title: "Sistema de Tarefas",
    descricao: "Aplicação web para gerenciamento de tarefas com interface intuitiva, permitindo criar, editar e organizar atividades do dia a dia.",
    descricaoDetalhada: `
        <p>Sistema completo de gerenciamento de tarefas desenvolvido com stack MERN, oferecendo uma experiência fluida para organização pessoal e profissional.</p>
        <h4>Funcionalidades:</h4>
        <ul>
            <li>Criação, edição e exclusão de tarefas</li>
            <li>Sistema de categorias e tags</li>
            <li>Filtros avançados e busca</li>
            <li>Dashboard com estatísticas</li>
            <li>Notificações e lembretes</li>
        </ul>
        <h4>Tecnologias utilizadas:</h4>
        <ul>
            <li>Frontend: React com hooks e context API</li>
            <li>Backend: Node.js com Express</li>
            <li>Banco de dados: MongoDB com Mongoose</li>
            <li>Autenticação: JWT</li>
        </ul>
    `,
    tecnologias: [
      { nome: "React", icone: "⚛️" },
      { nome: "Node.js", icone: "🟢" },
      { nome: "MongoDB", icone: "🗄️" },
      { nome: "Express", icone: "🚀" }
    ],
    imagens: [
      "images/tarefas-1.jpg",
      "images/tarefas-2.jpg",
      "images/tarefas-3.jpg",
      "images/tarefas-4.jpg"
    ],
    linkDemo: "#",
    linkCodigo: "#",
    tipoLink: "demo"
  },
  {
    id: 3,
    title: "E-commerce Landing",
    descricao: "Landing page moderna para e-commerce com animações suaves, design responsivo e otimizada para conversão de vendas.",
    descricaoDetalhada: `
        <p>Landing page desenvolvida com foco em conversão e experiência do usuário, utilizando as melhores práticas de design e desenvolvimento web.</p>
        <h4>Características:</h4>
        <ul>
            <li>Design moderno e atrativo</li>
            <li>Animações CSS e JavaScript</li>
            <li>Formulários otimizados</li>
            <li>Integração com analytics</li>
            <li>Otimizada para SEO</li>
        </ul>
        <h4>Métricas de performance:</h4>
        <ul>
            <li>Tempo de carregamento: < 2 segundos</li>
            <li>Score de acessibilidade: 95+</li>
            <li>Compatibilidade: 99% dos navegadores</li>
        </ul>
    `,
    tecnologias: [
      { nome: "HTML", icone: "🌐" },
      { nome: "SASS", icone: "🎨" },
      { nome: "JavaScript", icone: "⚡" },
      { nome: "Bootstrap", icone: "🅱️" }
    ],
    imagens: [
      "images/ecommerce-1.jpg",
      "images/ecommerce-2.jpg"
    ],
    linkDemo: "#",
    linkCodigo: "#",
    tipoLink: "demo"
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
    const modalLoader = new ModalLoader();
    modalLoader.initialize('teste');
  }
}

// Função para mostrar todos os projetos
function mostrarTodos() {
  renderizarProjetos();
}

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function () {
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