import { QuestionDTO } from "../dto/quiz.dto";

export const MOCK_QUESTIONS: QuestionDTO[] = [
  {
    id: 1,
    question_translated: {
      pt: "O que é o controle de versão e por que ele é importante no desenvolvimento de software?",
      en: "What is version control, and why is it important in software development?"
    },
    alternatives: [
      {
        id: 1,
        alternative_translated: {
          pt: "É um sistema para rastrear alterações no código-fonte e garantir que as versões antigas possam ser acessadas.",
          en: "It is a system to track changes in source code and ensure that older versions can be accessed."
        },
        is_correct: true
      },
      {
        id: 2,
        alternative_translated: {
          pt: "É uma ferramenta para depuração e correção de bugs.",
          en: "It is a tool for debugging and bug fixing."
        },
        is_correct: false
      },
      {
        id: 3,
        alternative_translated: {
          pt: "É um método para distribuir código para diferentes desenvolvedores de maneira automática.",
          en: "It is a method for distributing code to different developers automatically."
        },
        is_correct: false
      },
      {
        id: 4,
        alternative_translated: {
          pt: "É um tipo de backup para o código-fonte do software.",
          en: "It is a type of backup for the software source code."
        },
        is_correct: false
      }
    ],
    domain: "Domain 1: Introduction to Git and GitHub",
    topic: "Git and GitHub Basics",
    answer_explanation: {
      pt: "O controle de versão permite o rastreamento e a recuperação de alterações feitas no código-fonte ao longo do tempo, o que é essencial para a colaboração em equipe e para evitar a perda de informações importantes.",
      en: "Version control allows tracking and recovering changes made to source code over time, which is essential for team collaboration and preventing the loss of important information."
    },
    reference_link: "https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control.html#_about_version_control"
  },
  {
    id: 2,
    question_translated: {
      pt: 'Qual é a principal característica de um sistema de controle de versão distribuído?',
      en: 'What is the main characteristic of a distributed version control system?'
    },
    alternatives: [
      {
        id: 1,
        alternative_translated: {
          pt: 'Ele exige conexão constante com um servidor central para salvar qualquer alteração.',
          en: 'It requires a constant connection to a central server to save any changes.'
        },
        is_correct: false
      },
      {
        id: 2,
        alternative_translated: {
          pt: 'Cada colaborador possui uma cópia completa do repositório, incluindo todo o histórico de versões.',
          en: 'Each contributor has a full copy of the repository, including the entire version history.'
        },
        is_correct: true
      },
      {
        id: 3,
        alternative_translated: {
          pt: 'As alterações só podem ser feitas em um único computador autorizado pelo administrador.',
          en: 'Changes can only be made on a single computer authorized by the administrator.'
        },
        is_correct: false
      },
      {
        id: 4,
        alternative_translated: {
          pt: 'Os repositórios são sincronizados automaticamente com todos os membros da equipe em tempo real.',
          en: 'Repositories are automatically synchronized with all team members in real time.'
        },
        is_correct: false
      }
    ],
    domain: 'Domain 1: Introduction to Git and GitHub',
    topic: 'Git and GitHub Basics',
    answer_explanation: {
      pt: 'Em um sistema de controle de versão distribuído, como o Git, cada desenvolvedor tem uma cópia completa do repositório, o que permite trabalhar offline e ter acesso ao histórico completo de mudanças.',
      en: 'In a distributed version control system like Git, each developer has a full copy of the repository, which allows working offline and having access to the complete history of changes.'
    },
    reference_link: 'https://git-scm.com/book/en/v2/Distributed-Git-Distributed-Workflows'
  },
  {
    id: 3,
    question_translated: {
      pt: 'Qual é uma diferença fundamental entre controle de versão centralizado e distribuído?',
      en: 'What is a fundamental difference between centralized and distributed version control?'
    },
    alternatives: [
      {
        id: 1,
        alternative_translated: {
          pt: 'No modelo centralizado, cada desenvolvedor possui uma cópia completa do repositório local.',
          en: 'In the centralized model, each developer has a complete local copy of the repository.'
        },
        is_correct: false
      },
      {
        id: 2,
        alternative_translated: {
          pt: 'No modelo distribuído, os commits são automaticamente enviados para o servidor principal.',
          en: 'In the distributed model, commits are automatically pushed to the main server.'
        },
        is_correct: false
      },
      {
        id: 3,
        alternative_translated: {
          pt: 'No modelo centralizado, todas as operações exigem conexão com o servidor central.',
          en: 'In the centralized model, all operations require a connection to the central server.'
        },
        is_correct: true
      },
      {
        id: 4,
        alternative_translated: {
          pt: 'O modelo distribuído não permite colaboração entre vários desenvolvedores.',
          en: 'The distributed model does not allow collaboration between multiple developers.'
        },
        is_correct: false
      }
    ],
    domain: 'Domain 1: Introduction to Git and GitHub',
    topic: 'Git and GitHub Basics',
    answer_explanation: {
      pt: 'No controle de versão centralizado, os desenvolvedores precisam estar conectados ao servidor principal para realizar ações como commits e atualizações. Já no modelo distribuído, como o Git, essas operações podem ser feitas localmente.',
      en: 'In centralized version control, developers must be connected to the main server to perform actions like commits and updates. In distributed systems like Git, these operations can be done locally.'
    },
    reference_link: 'https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control'
  },
  {
    id: 4,
    question_translated: {
      pt: 'O que melhor descreve o Git em relação ao controle de versão?',
      en: 'What best describes Git in relation to version control?'
    },
    alternatives: [
      {
        id: 1,
        alternative_translated: {
          pt: 'É um sistema de controle de versão distribuído usado principalmente para controlar versões de documentos em texto simples.',
          en: 'It is a distributed version control system mainly used for controlling versions of plain text documents.'
        },
        is_correct: false
      },
      {
        id: 2,
        alternative_translated: {
          pt: 'É uma plataforma online para hospedagem de repositórios e colaboração entre desenvolvedores.',
          en: 'It is an online platform for hosting repositories and developer collaboration.'
        },
        is_correct: false
      },
      {
        id: 3,
        alternative_translated: {
          pt: 'É um sistema de controle de versão distribuído que permite aos desenvolvedores rastrear mudanças no código-fonte de forma eficiente.',
          en: 'It is a distributed version control system that allows developers to efficiently track changes in source code.'
        },
        is_correct: true
      },
      {
        id: 4,
        alternative_translated: {
          pt: 'É um software para automatizar testes e implantações em projetos de software.',
          en: 'It is software used to automate testing and deployment in software projects.'
        },
        is_correct: false
      }
    ],
    domain: 'Domain 1: Introduction to Git and GitHub',
    topic: 'Git and GitHub Basics',
    answer_explanation: {
      pt: 'O Git é um sistema de controle de versão distribuído amplamente utilizado no desenvolvimento de software para rastrear mudanças no código e colaborar entre equipes de forma eficiente.',
      en: 'Git is a distributed version control system widely used in software development to track changes in code and collaborate efficiently among teams.'
    },
    reference_link: 'https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F'
  },
  {
    id: 5,
    question_translated: {
      pt: 'O que é o GitHub e qual é seu principal propósito no desenvolvimento de software?',
      en: 'What is GitHub and what is its main purpose in software development?'
    },
    alternatives: [
      {
        id: 1,
        alternative_translated: {
          pt: 'É uma ferramenta de linha de comando usada para gerenciar branches localmente.',
          en: 'It is a command-line tool used to manage branches locally.'
        },
        is_correct: false
      },
      {
        id: 2,
        alternative_translated: {
          pt: 'É uma plataforma online que permite hospedar repositórios Git e colaborar com outros desenvolvedores.',
          en: 'It is an online platform that allows hosting Git repositories and collaborating with other developers.'
        },
        is_correct: true
      },
      {
        id: 3,
        alternative_translated: {
          pt: 'É uma linguagem de programação usada para desenvolver aplicações web baseadas em controle de versão.',
          en: 'It is a programming language used to develop web applications based on version control.'
        },
        is_correct: false
      },
      {
        id: 4,
        alternative_translated: {
          pt: 'É um sistema de backup automático para arquivos de projetos de software.',
          en: 'It is an automatic backup system for software project files.'
        },
        is_correct: false
      }
    ],
    domain: 'Domain 1: Introduction to Git and GitHub',
    topic: 'Git and GitHub Basics',
    answer_explanation: {
      pt: 'O GitHub é uma plataforma baseada na web que permite hospedar projetos Git, revisar código, gerenciar tarefas e colaborar com outros desenvolvedores por meio de recursos como Pull Requests e Issues.',
      en: 'GitHub is a web-based platform that allows hosting Git projects, reviewing code, managing tasks, and collaborating with other developers through features like Pull Requests and Issues.'
    },
    reference_link: 'https://docs.github.com/en/get-started/start-your-journey/about-github-and-git'
  },
  {
    id: 6,
    question_translated: {
      pt: 'Qual é a principal diferença entre Git e GitHub?',
      en: 'What is the main difference between Git and GitHub?'
    },
    alternatives: [
      {
        id: 1,
        alternative_translated: {
          pt: 'Git é uma plataforma online e GitHub é um sistema de controle de versão.',
          en: 'Git is an online platform and GitHub is a version control system.'
        },
        is_correct: false
      },
      {
        id: 2,
        alternative_translated: {
          pt: 'Git é usado para gerenciamento de projetos e GitHub é uma linguagem de programação.',
          en: 'Git is used for project management and GitHub is a programming language.'
        },
        is_correct: false
      },
      {
        id: 3,
        alternative_translated: {
          pt: 'Git é um sistema de controle de versão distribuído, enquanto o GitHub é uma plataforma que hospeda repositórios Git e facilita a colaboração.',
          en: 'Git is a distributed version control system, while GitHub is a platform that hosts Git repositories and facilitates collaboration.'
        },
        is_correct: true
      },
      {
        id: 4,
        alternative_translated: {
          pt: 'Git é uma ferramenta gráfica e GitHub é baseado em linha de comando.',
          en: 'Git is a graphical tool and GitHub is command-line based.'
        },
        is_correct: false
      }
    ],
    domain: 'Domain 1: Introduction to Git and GitHub',
    topic: 'Git and GitHub Basics',
    answer_explanation: {
      pt: 'Git é um sistema local para controle de versão de código, enquanto GitHub é uma plataforma baseada na web que permite hospedar, compartilhar e colaborar em repositórios que usam Git.',
      en: 'Git is a local system for version control of code, while GitHub is a web-based platform that allows hosting, sharing, and collaborating on repositories that use Git.'
    },
    reference_link: 'https://docs.github.com/en/get-started/start-your-journey/about-github-and-git'
  },
  {
    id: 7,
    question_translated: {
      pt: 'O que é um repositório no GitHub?',
      en: 'What is a repository on GitHub?'
    },
    alternatives: [
      {
        id: 1,
        alternative_translated: {
          pt: 'Um local na nuvem onde arquivos de backup são armazenados automaticamente.',
          en: 'A cloud location where backup files are automatically stored.'
        },
        is_correct: false
      },
      {
        id: 2,
        alternative_translated: {
          pt: 'Um tipo de servidor usado para compilar código-fonte.',
          en: 'A type of server used to compile source code.'
        },
        is_correct: false
      },
      {
        id: 3,
        alternative_translated: {
          pt: 'Um banco de dados que armazena usuários do GitHub.',
          en: 'A database that stores GitHub users.'
        },
        is_correct: false
      },
      {
        id: 4,
        alternative_translated: {
          pt: 'Um local central onde os arquivos de um projeto são armazenados e gerenciados com controle de versão.',
          en: 'A central place where project files are stored and managed with version control.'
        },
        is_correct: true
      }
    ],
    domain: 'Domain 1: Introduction to Git and GitHub',
    topic: 'Git and GitHub Basics',
    answer_explanation: {
      pt: 'Um repositório no GitHub é onde os arquivos de um projeto ficam armazenados, incluindo o histórico de alterações. Ele permite o gerenciamento e colaboração usando Git.',
      en: 'A repository on GitHub is where a project’s files are stored, including its change history. It allows for version management and collaboration using Git.'
    },
    reference_link: 'https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories'
  },
  {
    id: 8,
    question_translated: {
      pt: 'O que é um commit no contexto do Git?',
      en: 'What is a commit in the context of Git?'
    },
    alternatives: [
      {
        id: 1,
        alternative_translated: {
          pt: 'Um comando que envia os arquivos diretamente para o servidor de produção.',
          en: 'A command that sends files directly to the production server.'
        },
        is_correct: false
      },
      {
        id: 2,
        alternative_translated: {
          pt: 'Uma cópia de segurança automática feita a cada 24 horas.',
          en: 'An automatic backup made every 24 hours.'
        },
        is_correct: false
      },
      {
        id: 3,
        alternative_translated: {
          pt: 'Uma instrução que apaga o histórico de alterações de um repositório.',
          en: 'An instruction that deletes the change history of a repository.'
        },
        is_correct: false
      },
      {
        id: 4,
        alternative_translated: {
          pt: 'Um snapshot do código em um determinado momento, registrando as alterações feitas.',
          en: 'A snapshot of the code at a specific moment, recording the changes made.'
        },
        is_correct: true
      }
    ],
    domain: 'Domain 1: Introduction to Git and GitHub',
    topic: 'Git and GitHub Basics',
    answer_explanation: {
      pt: 'Um commit representa um ponto específico no histórico do repositório, contendo informações sobre o que foi alterado, por quem e quando.',
      en: 'A commit represents a specific point in the repository history, containing information about what was changed, by whom, and when.'
    },
    reference_link: 'https://docs.github.com/en/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/about-commits'
  },
  {
    id: 9,
    question_translated: {
      pt: 'Para que serve o conceito de "branch" (ramo) no Git?',
      en: 'What is the purpose of a "branch" in Git?'
    },
    alternatives: [
      {
        id: 1,
        alternative_translated: {
          pt: 'Para apagar versões antigas do código automaticamente.',
          en: 'To automatically delete old versions of the code.'
        },
        is_correct: false
      },
      {
        id: 2,
        alternative_translated: {
          pt: 'Para dividir um arquivo em partes menores.',
          en: 'To split a file into smaller parts.'
        },
        is_correct: false
      },
      {
        id: 3,
        alternative_translated: {
          pt: 'Para isolar mudanças e trabalhar em funcionalidades sem afetar a versão principal do projeto.',
          en: 'To isolate changes and work on features without affecting the main version of the project.'
        },
        is_correct: true
      },
      {
        id: 4,
        alternative_translated: {
          pt: 'Para duplicar repositórios e enviar para outros usuários.',
          en: 'To duplicate repositories and send them to other users.'
        },
        is_correct: false
      }
    ],
    domain: 'Domain 1: Introduction to Git and GitHub',
    topic: 'Git and GitHub Basics',
    answer_explanation: {
      pt: 'Branches permitem trabalhar em novas funcionalidades ou correções de bugs de forma isolada, sem impactar o código principal. Depois, essas mudanças podem ser integradas de volta ao projeto principal.',
      en: 'Branches allow developers to work on new features or bug fixes in isolation without affecting the main code. These changes can later be merged back into the main project.'
    },
    reference_link: 'https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches'
  },
  {
    id: 10,
    question_translated: {
      pt: 'O que é um repositório remoto?',
      en: 'What is a remote repository?'
    },
    alternatives: [
      {
        id: 1,
        alternative_translated: {
          pt: 'É um repositório localizado no computador de outro desenvolvedor, acessado diretamente via rede local.',
          en: 'It is a repository located on another developer’s computer, accessed directly via a local network.'
        },
        is_correct: false
      },
      {
        id: 2,
        alternative_translated: {
          pt: 'É um repositório armazenado em um servidor externo, como GitHub, que pode ser sincronizado com repositórios locais.',
          en: 'It is a repository stored on an external server, like GitHub, which can be synchronized with local repositories.'
        },
        is_correct: true
      },
      {
        id: 3,
        alternative_translated: {
          pt: 'É um repositório exclusivo para armazenar versões antigas do código-fonte.',
          en: 'It is a repository exclusively for storing old versions of the source code.'
        },
        is_correct: false
      },
      {
        id: 4,
        alternative_translated: {
          pt: 'É um repositório que não pode ser acessado por outros desenvolvedores.',
          en: 'It is a repository that cannot be accessed by other developers.'
        },
        is_correct: false
      }
    ],
    domain: 'Domain 1: Introduction to Git and GitHub',
    topic: 'Git and GitHub Basics',
    answer_explanation: {
      pt: 'Um repositório remoto é armazenado em um servidor externo, como o GitHub, GitLab ou Bitbucket, permitindo que você e outros colaboradores sincronizem as alterações entre repositórios locais e remotos.',
      en: 'A remote repository is stored on an external server like GitHub, GitLab, or Bitbucket, allowing you and other collaborators to sync changes between local and remote repositories.'
    },
    reference_link: 'https://docs.github.com/en/get-started/git-basics/about-remote-repositories'
  },
  {
    id: 11,
    question_translated: {
      pt: 'O que é o fluxo de trabalho do GitHub (GitHub flow)?',
      en: 'What is the GitHub flow?'
    },
    alternatives: [
      {
        id: 1,
        alternative_translated: {
          pt: 'É o processo de usar a interface gráfica do GitHub para fazer commits e pushs diretamente para o branch principal.',
          en: 'It is the process of using GitHub’s graphical interface to make commits and push directly to the main branch.'
        },
        is_correct: false
      },
      {
        id: 2,
        alternative_translated: {
          pt: 'É um fluxo de trabalho ágil que envolve criar branches, fazer commits, abrir pull requests, revisar e mesclar os PRs.',
          en: 'It is an agile workflow that involves creating branches, making commits, opening pull requests, reviewing, and merging PRs.'
        },
        is_correct: true
      },
      {
        id: 3,
        alternative_translated: {
          pt: 'É o processo de criar uma versão estável do código a cada commit feito, sem a necessidade de branches.',
          en: 'It is the process of creating a stable version of the code with each commit, without the need for branches.'
        },
        is_correct: false
      },
      {
        id: 4,
        alternative_translated: {
          pt: 'É o fluxo que só permite o uso do branch principal para todas as alterações feitas no código.',
          en: 'It is the flow that only allows the use of the main branch for all code changes.'
        },
        is_correct: false
      }
    ],
    domain: 'Domain 1: Introduction to Git and GitHub',
    topic: 'Git and GitHub Basics',
    answer_explanation: {
      pt: 'O GitHub flow é um fluxo de trabalho simples e ágil, onde os desenvolvedores criam branches para novas funcionalidades, fazem commits e abrem pull requests. O código é revisado e mesclado no branch principal após a aprovação.',
      en: 'The GitHub flow is a simple and agile workflow where developers create branches for new features, make commits, and open pull requests. The code is reviewed and merged into the main branch after approval.'
    },
    reference_link: 'https://docs.github.com/en/get-started/using-github/github-flow'
  },
  {
    id: 12,
    question_translated: {
      pt: 'Quais são as diferenças entre as contas Personal, Organization e Enterprise no GitHub?',
      en: 'What are the differences between Personal, Organization, and Enterprise accounts on GitHub?'
    },
    alternatives: [
      {
        id: 1,
        alternative_translated: {
          pt: 'As contas Personal são para uso individual, enquanto as contas Organization são destinadas a grupos e as contas Enterprise são para grandes empresas com suporte dedicado e recursos avançados.',
          en: 'Personal accounts are for individual use, Organization accounts are for groups, and Enterprise accounts are for large companies with dedicated support and advanced features.'
        },
        is_correct: true
      },
      {
        id: 2,
        alternative_translated: {
          pt: 'As contas Personal e Organization têm as mesmas funcionalidades, mas as contas Enterprise permitem mais commits simultâneos.',
          en: 'Personal and Organization accounts have the same features, but Enterprise accounts allow more simultaneous commits.'
        },
        is_correct: false
      },
      {
        id: 3,
        alternative_translated: {
          pt: 'As contas Personal são usadas apenas para armazenamento privado, as contas Organization são para repositórios públicos, e as contas Enterprise não têm limitações de uso.',
          en: 'Personal accounts are used only for private storage, Organization accounts are for public repositories, and Enterprise accounts have no usage limitations.'
        },
        is_correct: false
      },
      {
        id: 4,
        alternative_translated: {
          pt: 'As contas Personal permitem criar repositórios privados, enquanto as contas Organization e Enterprise têm acesso exclusivo a repositórios públicos.',
          en: 'Personal accounts allow creating private repositories, while Organization and Enterprise accounts have exclusive access to public repositories.'
        },
        is_correct: false
      }
    ],
    domain: 'Domain 1: Introduction to Git and GitHub',
    topic: 'GitHub Entities',
    answer_explanation: {
      pt: 'As contas Personal são destinadas a usuários individuais, enquanto as contas Organization são usadas para gerenciar repositórios e permissões em equipe. As contas Enterprise oferecem recursos adicionais, como segurança aprimorada, gerenciamento de usuários em larga escala e suporte dedicado.',
      en: 'Personal accounts are for individual users, while Organization accounts are used to manage repositories and team permissions. Enterprise accounts provide additional features such as enhanced security, large-scale user management, and dedicated support.'
    },
    reference_link: 'https://docs.github.com/en/get-started/learning-about-github/types-of-github-accounts'
  },
  {
    id: 13,
    question_translated: {
      pt: 'Quais são as principais diferenças entre o GitHub Free e o GitHub Pro para contas Personal?',
      en: 'What are the main differences between GitHub Free and GitHub Pro for personal accounts?'
    },
    alternatives: [
      {
        id: 1,
        alternative_translated: {
          pt: 'O GitHub Free oferece repositórios privados com funcionalidades limitadas e suporte da comunidade, enquanto o GitHub Pro inclui repositórios privados com funcionalidades avançadas e suporte via e-mail.',
          en: 'GitHub Free offers private repositories with limited features and community support, while GitHub Pro includes private repositories with advanced features and email support.'
        },
        is_correct: true
      },
      {
        id: 2,
        alternative_translated: {
          pt: 'Ambos o GitHub Free e Pro oferecem as mesmas funcionalidades de repositórios privados e não há diferenças significativas entre os dois.',
          en: 'Both GitHub Free and Pro offer the same private repository features, with no significant differences between the two.'
        },
        is_correct: false
      },
      {
        id: 3,
        alternative_translated: {
          pt: 'O GitHub Pro não inclui repositórios privados e tem suporte apenas da comunidade, enquanto o GitHub Free oferece suporte via e-mail.',
          en: 'GitHub Pro does not include private repositories and only has community support, while GitHub Free offers email support.'
        },
        is_correct: false
      },
      {
        id: 4,
        alternative_translated: {
          pt: 'O GitHub Free permite 500 MB de armazenamento no GitHub Packages, enquanto o GitHub Pro oferece 2 GB de armazenamento.',
          en: 'GitHub Free provides 500 MB of storage on GitHub Packages, while GitHub Pro offers 2 GB of storage.'
        },
        is_correct: false
      }
    ],
    domain: 'Domain 1: Introduction to Git and GitHub',
    topic: 'GitHub Entities',
    answer_explanation: {
      pt: 'O GitHub Free oferece repositórios privados com um conjunto limitado de funcionalidades e suporte da comunidade. O GitHub Pro, por outro lado, inclui repositórios privados com funcionalidades avançadas, suporte por e-mail, mais minutos no GitHub Actions, mais horas de GitHub Codespaces e mais armazenamento no GitHub Packages.',
      en: 'GitHub Free offers private repositories with a limited set of features and community support. GitHub Pro, on the other hand, includes private repositories with advanced features, email support, more GitHub Actions minutes, more GitHub Codespaces hours, and more GitHub Packages storage.'
    },
    reference_link: 'https://docs.github.com/en/get-started/learning-about-github/githubs-plans'
  },
  {
    id: 14,
    question_translated: {
      pt: 'Quais são as principais diferenças entre o GitHub Free for Organizations e o GitHub Team?',
      en: 'What are the main differences between GitHub Free for Organizations and GitHub Team?'
    },
    alternatives: [
      {
        id: 1,
        alternative_translated: {
          pt: 'O GitHub Free for Organizations oferece controle de acesso para equipes, 2.000 minutos mensais no GitHub Actions e suporte da comunidade, enquanto o GitHub Team inclui mais minutos no GitHub Actions, suporte via e-mail e funcionalidades avançadas de segurança.',
          en: 'GitHub Free for Organizations offers team access controls, 2,000 GitHub Actions minutes per month, and community support, while GitHub Team includes more GitHub Actions minutes, email support, and advanced security features.'
        },
        is_correct: true
      },
      {
        id: 2,
        alternative_translated: {
          pt: 'Ambos oferecem as mesmas funcionalidades, sem nenhuma diferença significativa entre eles.',
          en: 'Both offer the same features, with no significant differences between them.'
        },
        is_correct: false
      },
      {
        id: 3,
        alternative_translated: {
          pt: 'O GitHub Team oferece repositórios privados ilimitados com recursos limitados, enquanto o GitHub Free for Organizations oferece apenas repositórios públicos ilimitados.',
          en: 'GitHub Team offers unlimited private repositories with limited features, while GitHub Free for Organizations only offers unlimited public repositories.'
        },
        is_correct: false
      },
      {
        id: 4,
        alternative_translated: {
          pt: 'O GitHub Free for Organizations oferece suporte via e-mail e mais minutos no GitHub Actions, enquanto o GitHub Team oferece apenas suporte da comunidade.',
          en: 'GitHub Free for Organizations offers email support and more GitHub Actions minutes, while GitHub Team only offers community support.'
        },
        is_correct: false
      }
    ],
    domain: 'Domain 1: Introduction to Git and GitHub',
    topic: 'GitHub Entities',
    answer_explanation: {
      pt: 'O GitHub Free for Organizations oferece controle de acesso para equipes, 2.000 minutos no GitHub Actions e suporte da comunidade. O GitHub Team inclui mais minutos no GitHub Actions, suporte via e-mail, opções de segurança avançadas, como proteção de segredo e ferramentas avançadas de gerenciamento de pull requests e branches.',
      en: 'GitHub Free for Organizations offers team access controls, 2,000 GitHub Actions minutes, and community support. GitHub Team includes more GitHub Actions minutes, email support, advanced security options such as secret protection, and advanced tools for managing pull requests and branches.'
    },
    reference_link: 'https://docs.github.com/en/get-started/learning-about-github/githubs-plans'
  },
  {
    id: 15,
    question_translated: {
      pt: 'Quais são as principais diferenças entre as opções de implantação do GitHub Enterprise: GitHub Enterprise Cloud e GitHub Enterprise Server?',
      en: 'What are the main differences between the GitHub Enterprise deployment options: GitHub Enterprise Cloud and GitHub Enterprise Server?'
    },
    alternatives: [
      {
        id: 1,
        alternative_translated: {
          pt: 'O GitHub Enterprise Cloud é hospedado na nuvem do GitHub, enquanto o GitHub Enterprise Server é auto-hospedado, permitindo maior controle sobre a infraestrutura e segurança.',
          en: 'GitHub Enterprise Cloud is hosted on GitHub’s cloud, while GitHub Enterprise Server is self-hosted, giving more control over infrastructure and security.'
        },
        is_correct: true
      },
      {
        id: 2,
        alternative_translated: {
          pt: 'Ambos são hospedados na nuvem, mas o GitHub Enterprise Server oferece mais funcionalidades e integrações com outras ferramentas.',
          en: 'Both are cloud-hosted, but GitHub Enterprise Server offers more features and integrations with other tools.'
        },
        is_correct: false
      },
      {
        id: 3,
        alternative_translated: {
          pt: 'O GitHub Enterprise Server oferece 50 GB de armazenamento no GitHub Packages, enquanto o GitHub Enterprise Cloud oferece 50.000 minutos de GitHub Actions por mês.',
          en: 'GitHub Enterprise Server offers 50 GB of GitHub Packages storage, while GitHub Enterprise Cloud provides 50,000 GitHub Actions minutes per month.'
        },
        is_correct: false
      },
      {
        id: 4,
        alternative_translated: {
          pt: 'O GitHub Enterprise Cloud oferece uma SLA de 99,9% de tempo de atividade mensal, enquanto o GitHub Enterprise Server não oferece garantia de uptime.',
          en: 'GitHub Enterprise Cloud provides a 99.9% monthly uptime SLA, while GitHub Enterprise Server does not provide an uptime guarantee.'
        },
        is_correct: false
      }
    ],
    domain: 'Domain 1: Introduction to Git and GitHub',
    topic: 'Entities',
    answer_explanation: {
      pt: 'O GitHub Enterprise Cloud é hospedado na nuvem do GitHub, enquanto o GitHub Enterprise Server é auto-hospedado, oferecendo mais controle sobre a infraestrutura e segurança. O GitHub Enterprise Cloud oferece recursos como 50.000 minutos de GitHub Actions por mês, SLA de 99,9% de tempo de atividade e a opção de gerenciar várias organizações GitHub. O GitHub Enterprise Server oferece controle total sobre a infraestrutura e permite a personalização do ambiente.',
      en: 'GitHub Enterprise Cloud is hosted on GitHub’s cloud, while GitHub Enterprise Server is self-hosted, providing more control over infrastructure and security. GitHub Enterprise Cloud includes features like 50,000 GitHub Actions minutes per month, a 99.9% uptime SLA, and the option to manage multiple GitHub organizations. GitHub Enterprise Server offers complete control over infrastructure and allows for environment customization.'
    },
    reference_link: 'https://docs.github.com/en/get-started/learning-about-github/githubs-plans'
  }
];
