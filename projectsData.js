// Array com os dados dos projetos
const projects = [
    {
      id: 1,
      title: "Portfólio Pessoal",
      description: "Site pessoal desenvolvido para apresentar meus projetos e habilidades, com design responsivo e moderno focado na experiência do usuário.",
      detailedDescription: `
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
      technologies: [
        { name: "HTML", icon: "🌐" },
        { name: "CSS", icon: "🎨" },
        { name: "JavaScript", icon: "⚡" },
        { name: "Responsive", icon: "📱" }
      ],
      images: [
        "images/portifolio/image.png",
        "images/portifolio/image2.png",
        "images/portifolio/image3.png",
        // "images/portfolio-1.jpg",
        // "images/portfolio-2.jpg",
        // "images/portfolio-3.jpg"
      ],
      demoLink: "https://psifabiohenrique.github.io",
      codeLink: "https://github.com/psifabiohenrique/psifabiohenrique.github.io",
      linkType: "demo" // "demo" ou "download"
    },
    {
      id: 2,
      title: "Sistema de Tarefas",
      description: "Aplicação web para gerenciamento de tarefas com interface intuitiva, permitindo criar, editar e organizar atividades do dia a dia.",
      detailedDescription: `
          <p>Sistema completo de gerenciamento de tarefas desenvolvido com stack MERN, oferecendo uma experiência fluida para organização pessoal e profissional.</p>
          <h4>Funcionalidades:</h4>
          <ul>
              <li>Criação, edição e exclusão de tarefas</li>
              <li>Sistema de categorias e tags</li>
              <li>Filtros avançados e busca</li>
              <li>Dashboard com estatísticas</li>
              <li>Notificações e lembretes</li>
              <li>Sincronização em tempo real</li>
          </ul>
          <h4>Tecnologias utilizadas:</h4>
          <ul>
              <li>Frontend: React.js com hooks e context API</li>
              <li>Backend: Node.js com Express</li>
              <li>Banco de dados: MongoDB</li>
              <li>Autenticação: JWT</li>
          </ul>
      `,
      technologies: [
        { name: "React", icon: "⚛️" },
        { name: "Node.js", icon: "🟢" },
        { name: "MongoDB", icon: "🍃" },
        { name: "Express", icon: "🚀" }
      ],
      images: [
        // "images/tasks-1.jpg",
        // "images/tasks-2.jpg",
        // "images/tasks-3.jpg"
      ],
      demoLink: "#",
      codeLink: "#",
      linkType: "demo"
    },
    {
      id: 3,
      title: "E-commerce Landing",
      description: "Landing page moderna para e-commerce com animações suaves, design responsivo e otimizada para conversão de vendas.",
      detailedDescription: `
          <p>Landing page desenvolvida com foco em conversão e experiência do usuário, utilizando as melhores práticas de UX/UI design e otimização para motores de busca.</p>
          <h4>Características:</h4>
          <ul>
              <li>Design responsivo e mobile-first</li>
              <li>Animações CSS3 e JavaScript</li>
              <li>Otimização SEO completa</li>
              <li>Formulários de contato integrados</li>
              <li>Carregamento otimizado de imagens</li>
              <li>Analytics e tracking de conversão</li>
          </ul>
          <h4>Performance:</h4>
          <ul>
              <li>Score 95+ no Google PageSpeed</li>
              <li>Tempo de carregamento < 2s</li>
              <li>Otimizada para Core Web Vitals</li>
          </ul>
      `,
      technologies: [
        { name: "HTML5", icon: "🌐" },
        { name: "CSS3", icon: "🎨" },
        { name: "JavaScript", icon: "⚡" },
        { name: "SASS", icon: "💎" }
      ],
      images: [
        // "images/ecommerce-1.jpg",
        // "images/ecommerce-2.jpg",
        // "images/ecommerce-3.jpg"
      ],
      demoLink: "#",
      codeLink: "#",
      linkType: "demo"
    }
  ];

window.projects = projects;