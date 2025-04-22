import { QuestionDTO } from "../dto/quiz.dto";

export const MOCK_QUESTIONS: QuestionDTO[] = [
  {
    id: 1,
    question_translated: {
      pt_br: 'O que é um Pull Request no GitHub?',
      en: 'What is a Pull Request in GitHub?'
    },
    alternatives: [
      {
        id: 1, alternative_translated: {
          pt_br: 'Uma forma de excluir um branch', en: 'A way to delete a branch'
        }, is_correct: false
      },
      {
        id: 2, alternative_translated: {
          pt_br: 'Um pedido para mesclar código em outro branch', en: 'A request to merge code into another branch'
        }, is_correct: true
      },
      {
        id: 3, alternative_translated: {
          pt_br: 'Um método para criar um novo repositório', en: 'A method for creating a new repository'
        }, is_correct: false
      },
      {
        id: 4, alternative_translated: {
          pt_br: 'Uma ferramenta para monitorar pipelines', en: 'A tool to monitor pipelines'
        }, is_correct: false
      },
    ],
    domain: 'Domínio 1: GitHub',
    topic: 'Pull Requests',
    answer_explanation: {
      pt_br: 'Um Pull Request permite propor mudanças e discutir antes de mesclar no código principal.',
      en: 'A Pull Request allows proposing changes and discussing before merging into the main codebase.'
    },
    reference_link: 'https://docs.github.com/en/pull-requests',
  },
  {
    id: 2,
    question_translated: {
      pt_br: 'O que é um branch no Git?',
      en: 'What is a branch in Git?'
    },
    alternatives: [
      {
        id: 1, alternative_translated: {
          pt_br: 'Uma versão de backup do repositório', en: 'A backup version of the repository'
        }, is_correct: false
      },
      {
        id: 2, alternative_translated: {
          pt_br: 'Uma linha paralela de desenvolvimento', en: 'A parallel line of development'
        }, is_correct: true
      },
      {
        id: 3, alternative_translated: {
          pt_br: 'Uma maneira de monitorar mudanças em arquivos', en: 'A way to track changes in files'
        }, is_correct: false
      },
      {
        id: 4, alternative_translated: {
          pt_br: 'Uma ferramenta de depuração de código', en: 'A tool for debugging code'
        }, is_correct: false
      },
    ],
    domain: 'Domínio 1: Git',
    topic: 'Branches',
    answer_explanation: {
      pt_br: 'Um branch é uma linha paralela de desenvolvimento no Git que permite trabalhar em novas funcionalidades sem afetar o código principal.',
      en: 'A branch is a parallel line of development in Git that allows working on new features without affecting the main code.'
    },
    reference_link: 'https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell',
  },
  {
    id: 3,
    question_translated: {
      pt_br: 'O que significa "commit" no Git?',
      en: 'What does "commit" mean in Git?'
    },
    alternatives: [
      {
        id: 1, alternative_translated: {
          pt_br: 'Alterar o conteúdo de um arquivo', en: 'Changing the content of a file'
        }, is_correct: false
      },
      {
        id: 2, alternative_translated: {
          pt_br: 'Salvar alterações no repositório', en: 'Saving changes to the repository'
        }, is_correct: true
      },
      {
        id: 3, alternative_translated: {
          pt_br: 'Criar um novo branch', en: 'Creating a new branch'
        }, is_correct: false
      },
      {
        id: 4, alternative_translated: {
          pt_br: 'Clonar um repositório', en: 'Cloning a repository'
        }, is_correct: false
      },
    ],
    domain: 'Domínio 1: Git',
    topic: 'Commits',
    answer_explanation: {
      pt_br: 'No Git, um commit é uma forma de salvar e registrar alterações feitas no repositório.',
      en: 'In Git, a commit is a way of saving and recording changes made to the repository.'
    },
    reference_link: 'https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository',
  },
  {
    id: 4,
    question_translated: {
      pt_br: 'O que é um "merge" no Git?',
      en: 'What is a "merge" in Git?'
    },
    alternatives: [
      {
        id: 1, alternative_translated: {
          pt_br: 'Combinar mudanças de diferentes branches', en: 'Combining changes from different branches'
        }, is_correct: true
      },
      {
        id: 2, alternative_translated: {
          pt_br: 'Excluir um branch', en: 'Deleting a branch'
        }, is_correct: false
      },
      {
        id: 3, alternative_translated: {
          pt_br: 'Alterar o histórico do repositório', en: 'Changing the repository history'
        }, is_correct: false
      },
      {
        id: 4, alternative_translated: {
          pt_br: 'Criar um novo repositório', en: 'Creating a new repository'
        }, is_correct: false
      },
    ],
    domain: 'Domínio 1: Git',
    topic: 'Merges',
    answer_explanation: {
      pt_br: 'O "merge" é o processo de combinar as alterações feitas em diferentes branches de um repositório.',
      en: 'The "merge" is the process of combining changes made in different branches of a repository.'
    },
    reference_link: 'https://git-scm.com/docs/git-merge',
  },
  {
    id: 5,
    question_translated: {
      pt_br: 'O que é um "clone" no Git?',
      en: 'What is a "clone" in Git?'
    },
    alternatives: [
      {
        id: 1, alternative_translated: {
          pt_br: 'Copiar um repositório remoto para a máquina local', en: 'Copying a remote repository to the local machine'
        }, is_correct: true
      },
      {
        id: 2, alternative_translated: {
          pt_br: 'Criar um novo branch', en: 'Creating a new branch'
        }, is_correct: false
      },
      {
        id: 3, alternative_translated: {
          pt_br: 'Fazer um backup do repositório', en: 'Backing up the repository'
        }, is_correct: false
      },
      {
        id: 4, alternative_translated: {
          pt_br: 'Alterar a configuração do repositório', en: 'Changing the repository configuration'
        }, is_correct: false
      },
    ],
    domain: 'Domínio 1: Git',
    topic: 'Clone',
    answer_explanation: {
      pt_br: 'No Git, clonar um repositório significa copiar o repositório remoto para sua máquina local para poder trabalhar nele.',
      en: 'In Git, cloning a repository means copying the remote repository to your local machine to work on it.'
    },
    reference_link: 'https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository',
  },
  {
    id: 6,
    question_translated: {
      pt_br: 'O que é o GitHub?',
      en: 'What is GitHub?'
    },
    alternatives: [
      {
        id: 1, alternative_translated: {
          pt_br: 'Uma plataforma de hospedagem de código-fonte e colaboração', en: 'A source code hosting and collaboration platform'
        }, is_correct: true
      },
      {
        id: 2, alternative_translated: {
          pt_br: 'Uma ferramenta de gerenciamento de projetos', en: 'A project management tool'
        }, is_correct: false
      },
      {
        id: 3, alternative_translated: {
          pt_br: 'Uma linguagem de programação', en: 'A programming language'
        }, is_correct: false
      },
      {
        id: 4, alternative_translated: {
          pt_br: 'Uma ferramenta de análise de dados', en: 'A data analysis tool'
        }, is_correct: false
      },
    ],
    domain: 'Domínio 1: GitHub',
    topic: 'GitHub Overview',
    answer_explanation: {
      pt_br: 'GitHub é uma plataforma de hospedagem de código-fonte que permite colaboração entre desenvolvedores, oferecendo ferramentas para versionamento e controle de código.',
      en: 'GitHub is a source code hosting platform that allows collaboration among developers, providing tools for versioning and code control.'
    },
    reference_link: 'https://github.com/about',
  },
  {
    id: 7,
    question_translated: {
      pt_br: 'O que é o Git Flow?',
      en: 'What is Git Flow?'
    },
    alternatives: [
      {
        id: 1, alternative_translated: {
          pt_br: 'Uma ferramenta para automatizar commits', en: 'A tool to automate commits'
        }, is_correct: false
      },
      {
        id: 2, alternative_translated: {
          pt_br: 'Uma estratégia de ramificação para gerenciar o ciclo de vida do software', en: 'A branching strategy to manage the software lifecycle'
        }, is_correct: true
      },
      {
        id: 3, alternative_translated: {
          pt_br: 'Uma maneira de configurar repositórios Git', en: 'A way to set up Git repositories'
        }, is_correct: false
      },
      {
        id: 4, alternative_translated: {
          pt_br: 'Uma ferramenta para combinar branches', en: 'A tool for merging branches'
        }, is_correct: false
      },
    ],
    domain: 'Domínio 1: Git Flow',
    topic: 'Git Flow Overview',
    answer_explanation: {
      pt_br: 'Git Flow é uma estratégia de ramificação no Git que organiza o desenvolvimento de novas funcionalidades e a manutenção de versões estáveis do software.',
      en: 'Git Flow is a branching strategy in Git that organizes the development of new features and the maintenance of stable software versions.'
    },
    reference_link: 'https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow',
  },
  {
    id: 8,
    question_translated: {
      pt_br: 'O que é uma tag no Git?',
      en: 'What is a tag in Git?'
    },
    alternatives: [
      {
        id: 1, alternative_translated: {
          pt_br: 'Uma versão estável do repositório', en: 'A stable version of the repository'
        }, is_correct: true
      },
      {
        id: 2, alternative_translated: {
          pt_br: 'Um tipo de branch', en: 'A type of branch'
        }, is_correct: false
      },
      {
        id: 3, alternative_translated: {
          pt_br: 'Uma ferramenta de análise de código', en: 'A code analysis tool'
        }, is_correct: false
      },
      {
        id: 4, alternative_translated: {
          pt_br: 'Um tipo de commit', en: 'A type of commit'
        }, is_correct: false
      },
    ],
    domain: 'Domínio 1: Git',
    topic: 'Tags',
    answer_explanation: {
      pt_br: 'Uma tag é usada para marcar versões específicas no Git, geralmente para identificar lançamentos ou versões estáveis do código.',
      en: 'A tag is used to mark specific versions in Git, often to identify releases or stable versions of code.'
    },
    reference_link: 'https://git-scm.com/book/en/v2/Git-Basics-Tagging',
  },
  {
    id: 9,
    question_translated: {
      pt_br: 'O que significa "push" no Git?',
      en: 'What does "push" mean in Git?'
    },
    alternatives: [
      {
        id: 1, alternative_translated: {
          pt_br: 'Enviar alterações locais para o repositório remoto', en: 'Sending local changes to the remote repository'
        }, is_correct: true
      },
      {
        id: 2, alternative_translated: {
          pt_br: 'Baixar alterações do repositório remoto', en: 'Downloading changes from the remote repository'
        }, is_correct: false
      },
      {
        id: 3, alternative_translated: {
          pt_br: 'Fazer merge de dois branches', en: 'Merging two branches'
        }, is_correct: false
      },
      {
        id: 4, alternative_translated: {
          pt_br: 'Criar um novo branch remoto', en: 'Creating a new remote branch'
        }, is_correct: false
      },
    ],
    domain: 'Domínio 1: Git',
    topic: 'Push',
    answer_explanation: {
      pt_br: 'No Git, "push" significa enviar as alterações feitas no repositório local para o repositório remoto.',
      en: 'In Git, "push" means sending changes made in the local repository to the remote repository.'
    },
    reference_link: 'https://git-scm.com/docs/git-push',
  },
  {
    id: 10,
    question_translated: {
      pt_br: 'O que é um fork no GitHub?',
      en: 'What is a fork on GitHub?'
    },
    alternatives: [
      {
        id: 1, alternative_translated: {
          pt_br: 'Uma cópia de um repositório para modificar sem afetar o original', en: 'A copy of a repository to modify without affecting the original'
        }, is_correct: true
      },
      {
        id: 2, alternative_translated: {
          pt_br: 'Uma ferramenta para depurar o código', en: 'A tool for debugging code'
        }, is_correct: false
      },
      {
        id: 3, alternative_translated: {
          pt_br: 'Uma nova versão de um repositório', en: 'A new version of a repository'
        }, is_correct: false
      },
      {
        id: 4, alternative_translated: {
          pt_br: 'Uma técnica para excluir um repositório', en: 'A technique for deleting a repository'
        }, is_correct: false
      },
    ],
    domain: 'Domínio 1: GitHub',
    topic: 'Fork',
    answer_explanation: {
      pt_br: 'No GitHub, um fork é uma cópia de um repositório que permite fazer modificações sem afetar o repositório original.',
      en: 'On GitHub, a fork is a copy of a repository that allows you to make modifications without affecting the original repository.'
    },
    reference_link: 'https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/fork-a-repo',
  },
];
