// Array com os dados dos projetos
const projects = [
  {
    id: 3,
    title: "Portfólio Pessoal",
    description:
      "Site pessoal desenvolvido para apresentar meus projetos e habilidades, com design responsivo e moderno focado na experiência do usuário.",
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
      { name: "Responsive", icon: "📱" },
    ],
    images: [
      "images/portifolio/image.png",
      "images/portifolio/image2.png",
      "images/portifolio/image3.png",
    ],
    demoLink: "https://psifabiohenrique.github.io",
    codeLink: "https://github.com/psifabiohenrique/psifabiohenrique.github.io",
    linkType: "demo", // "demo" ou "download"
  },
  {
    id: 1,
    title: "Notícias da Pároquia",
    description:
      "Aplicação web com multitenency para gerenciamento de site institucionais com gerenciamento de notícia para igrejas.",
    detailedDescription: `
          <p>Sistema completo de gerenciamento de notícias desenvolvido com django, HTML, CSS e javascript, oferecendo uma experiência fluida para várias instituições religiosas devido ao multitenancy implementado, possibilitando que várias paróquias utilizem um mesmo backend para gerir suas informações institucionais e suas notícias/atualizações.</p>
          <h4>Funcionalidades:</h4>
          <ul>
            <li>Criação, edição e exclusão de igrejas, padres e notícias de cada igreja</li>
            <li>Multitenancy das igrejas, com acesso ao backend (crud) separado</li>
            <li>Sistema de categorias</li>
            <li>Filtros avançados e busca</li>
            <li>Design responsivo e mobile-first</li>
            <li>Carrosel de notícias em destaque</li>
            <li>Dashboard com acesso ao catálogo de igrejas e padres cadastrados</li>
          </ul>
          <h4>Tecnologias utilizadas:</h4>
          <ul>
              <li>Frontend: HTML, CSS, JavaScript, Django templates</li>
              <li>Backend: Django</li>
              <li>Banco de dados: PostgreSQL</li>
              <li>Conteinerização: Docker</li>
          </ul>
      `,
    technologies: [
      { name: "HTML", icon: "🌐" },
      { name: "CSS", icon: "🎨" },
      { name: "JavaScript", icon: "⚡" },
      { name: "Python", icon: "🐍" },
      { name: "Django", icon: "🎯" },
      { name: "Docker", icon: "🐳" },
      { name: "PostgreSQL", icon: "🐘" },
    ],
    images: [
      "images/paroquia-news/image1.png",
      "images/paroquia-news/image2.png",
      "images/paroquia-news/image3.png",
      "images/paroquia-news/image4.png",
    ],
    demoLink: "https://paroquia-news.fly.dev/",
    codeLink: "https://github.com/psifabiohenrique/parish_news",
    linkType: "demo",
  },
  {
    id: 2,
    title: "Experimento Desconto de Atraso",
    description:
      "Programa para pesquisadores realizarem estudos sobre o fenômeno de desconto de atraso e de demanda (temas dentro da economia comportamental)",
    detailedDescription: `
          <p>Programa desenvolvido para auxiliar pesquisadores da análise experimental do comportamento a realizarem experimentos de economia comportamental (desconto de atraso e demanda) com participantes humanos.</p>
          <p>O programa possui configurações extremamente flexíveis, possibilitando que o pesquisador altere todas as instruções, manipule diferentes tipos e quantidades de variáveis e utilize diferentes reforçadores hipotéticos.</p>
          <p>Para avaliar os reforçadores, o programa conta com opção para que o participante escolha os reforçadores preferidos dentro de uma lista, ranqueie eles, e responda o questionário de desconto para os reforçadores do ranque que o pesquisador determinar.</p>
          <p>O programa foi desenvolvido utilizando javascript com eléctron, para atender à demanda de um pesquisador que trabalhou comigo no meu mestrado. Ele precisava de um programa que funcione localmente.</p>
          <p>Javascript foi escolhido por permitir grande flexibilidade na elaboração do design, já que permite o uso de html e css.</p>
          <h4>Funcionalidades:</h4>
          <ul>
            <li>Utilização de JavaScript com Electron para desenvolvimento local</li>
            <li>Flexibilidade na configuração de experimentos</li>
            <li>Documentação clara e detalhada para usuários e desenvolvedores</li>
            <li>Dados dos participantes persistido em CSV para facilitar acesso dos pesquisadores</li>
          </ul>
          <h4>Tecnologias utilizadas:</h4>
          <ul>
              <li>Frontend: HTML, CSS, JavaScript</li>
              <li>Backend: Electron</li>
              <li>Base de dados: CSV</li>
          </ul>
      `,
    technologies: [
      { name: "HTML", icon: "🌐" },
      { name: "CSS", icon: "🎨" },
      { name: "JavaScript", icon: "⚡" },
      { name: "Electron", icon: "🖥️" },
    ],
    images: [
      "images/desconto-atraso/image1.png",
      "images/desconto-atraso/image2.png",
      "images/desconto-atraso/image3.png",
      "images/desconto-atraso/image4.png",
      "images/desconto-atraso/image5.png",
      "images/desconto-atraso/image6.png",
    ],
    demoLink: "https://github.com/psifabiohenrique/DelayDiscounting2/releases/tag/2.0.2",
    codeLink: "https://github.com/psifabiohenrique/DelayDiscounting2",
    linkType: "download",
  },
];

window.projects = projects;
