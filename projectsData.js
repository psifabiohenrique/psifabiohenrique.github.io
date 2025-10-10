
// Array com os dados dos projetos
const projects = [
  {
    id: 1,
    title: "Psi Assist AI",
    description:
      "Aplicação web para automatização da criação de prontuários e relatórios psicológicos, através do uso de IA.",
    detailedDescription: `
    <p>Aplicação construída com django, executa um servidor local, para garantir maior privacidade dos dados psicológicos registrados. Ela permite gravar o áudio dos atendimentos psicológicos e utiliza a API do Google GEMINI para produzir um registro de prontuário para cada atendimento e atualizar informações gerais que são utilizadas na construção de relatórios psicológicos. Além disso, a aplicação possui um CRUD completo de pacientes e prontuários.</p>
    <h4>Funcionalidades:</h4>
    <ul>
    <li>Criação, edição e exclusão de pacientes</li>
    <li>Criação, edição e exclusão de prontuários psicológicos</li>
    <li>Criação de prontuários psicológicos automatizados com IA</li>
    <li>Registro incremental e automatizado com IA, de informações relavantes para relatórios psicológicos</li>
    <li>Sistema de registro de áudio do atendimento</li>
    <li>Empacotamento e distribuição do servidor para execução local</li>
    <li>Design atraente, feito com os templates do django e tailwindcss</li>
    </ul>
    <h4>Tecnologias utilizadas:</h4>
    <ul>
    <li>Frontend: HTML, CSS, JavaScript, tailwind, Django templates</li>
    <li>Backend: Django</li>
    </ul>
    `,
    technologies: [
      { name: "HTML", icon: "🌐" },
      { name: "CSS", icon: "🎨" },
      { name: "Tailwindcss", icon: "🔩" },
      { name: "JavaScript", icon: "⚡" },
      { name: "AudioContext - JS", icon: "🎤" },
      { name: "Python", icon: "🐍" },
      { name: "Django", icon: "🎯" },
      { name: "GEMINI", icon: "🤖" },
    ],
    images: [
      "images/psi-assist/image1.png",
      "images/psi-assist/image2.png",
      "images/psi-assist/image3.png",
    ],
    demoLink: "https://github.com/psifabiohenrique/psi-assist-backend/releases",
    codeLink: "https://github.com/psifabiohenrique/psi-assist-backend",
    linkType: "download",
  },
  {
    id: 4,
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
    id: 2,
    title: "Notícias da Paróquia",
    description:
      "Aplicação web com multitenancy para gerenciamento de sites institucionais com gerenciamento de notícias para igrejas.",
    detailedDescription: `
    <p>Sistema completo de gerenciamento de notícias desenvolvido com Django, HTML, CSS e JavaScript, oferecendo uma experiência fluida para várias instituições religiosas devido ao multitenancy implementado, possibilitando que várias paróquias utilizem um mesmo backend para gerir suas informações institucionais e suas notícias/atualizações.</p>
    <h4>Funcionalidades:</h4>
    <ul>
    <li>Criação, edição e exclusão de igrejas, padres e notícias de cada igreja</li>
    <li>Multitenancy das igrejas, com acesso ao backend (CRUD) separado</li>
    <li>Sistema de categorias</li>
    <li>Filtros avançados e busca</li>
    <li>Design responsivo e mobile-first</li>
    <li>Carrossel de notícias em destaque</li>
    <li>Dashboard com acesso ao catálogo de igrejas e padres cadastrados</li>
    </ul>
    <h4>Tecnologias utilizadas:</h4>
    <ul>
    <li>Frontend: HTML, CSS, JavaScript, Django templates</li>
    <li>Backend: Django</li>
    <li>Banco de dados: PostgreSQL</li>
    <li>Containerização: Docker</li>
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
    id: 3,
    title: "Experimento Desconto de Atraso",
    description:
      "Programa para pesquisadores realizarem estudos sobre o fenômeno de desconto de atraso e de demanda (temas dentro da economia comportamental).",
    detailedDescription: `
    <p>Programa desenvolvido para auxiliar pesquisadores da análise experimental do comportamento a realizarem experimentos de economia comportamental (desconto de atraso e demanda) com participantes humanos.</p>
    <p>O programa possui configurações extremamente flexíveis, possibilitando que o pesquisador altere todas as instruções, manipule diferentes tipos e quantidades de variáveis e utilize diferentes reforçadores hipotéticos.</p>
    <p>Para avaliar os reforçadores, o programa conta com opção para que o participante escolha os reforçadores preferidos dentro de uma lista, os ranqueie, e responda o questionário de desconto para os reforçadores do ranking que o pesquisador determinar.</p>
    <p>O programa foi desenvolvido utilizando JavaScript com Electron, para atender à demanda de um pesquisador que trabalhou comigo no meu mestrado. Ele precisava de um programa que funcionasse localmente.</p>
    <p>JavaScript foi escolhido por permitir grande flexibilidade na elaboração do design, já que permite o uso de HTML e CSS.</p>
    <h4>Funcionalidades:</h4>
    <ul>
    <li>Utilização de JavaScript com Electron para desenvolvimento local</li>
    <li>Flexibilidade na configuração de experimentos</li>
    <li>Documentação clara e detalhada para usuários e desenvolvedores</li>
    <li>Dados dos participantes persistidos em CSV para facilitar acesso dos pesquisadores</li>
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
    demoLink: "https://github.com/psifabiohenrique/DelayDiscounting2/releases",
    codeLink: "https://github.com/psifabiohenrique/DelayDiscounting2",
    linkType: "download",
  },
];

window.projects = projects;