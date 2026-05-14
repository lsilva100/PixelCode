import {BacktrackingPreview, BinarySearchPreview, DivideAndConquerPreview, DynamicProgrammingPreview, SortingAlgorithmPreview} from "./previews";
import {LinearSearchPreview} from "./previews";
import {HashTablePreview} from "./previews";
import {GraphSearchPreview} from "./previews"; 


import {ProjectProps} from "../components/ProjectCard";

export const projectDataL1: ProjectProps[] = [
  {
    Preview: <BinarySearchPreview />,
    Info: {
      class: {
        name: "Algoritmos & Performance",
        textColor: "text-blue-500",
      },
      title: "Visualizador de Busca Binária",
      description: [
        "Plataforma interativa que demonstra o funcionamento interno da busca binária em tempo real.",
        "Inclui visualização de ponteiros low/high/mid, contagem de comparações, análise de complexidade O(log n) e comparação dinâmica contra busca linear em grandes datasets.",
        "Construído com foco educacional e animações frame-by-frame para explicar algoritmos de divisão e conquista.",
      ],
      link: "#",
    },
  },

  {
    Preview: <LinearSearchPreview />,
    Info: {
      class: {
        name: "Estruturas Fundamentais",
        textColor: "text-yellow-500",
      },
      title: "Engine de Busca Sequencial",
      description: [
        "Implementação detalhada de busca linear aplicada em coleções não ordenadas.",
        "Permite benchmarking em tempo real entre diferentes tamanhos de arrays e análise de custo computacional em cenários reais.",
        "Inclui instrumentação visual para demonstrar acessos à memória e número total de iterações executadas.",
      ],
      link: "#",
    },
  },

  {
    Preview: <HashTablePreview />,
    Info: {
      class: {
        name: "Data Structures",
        textColor: "text-green-500",
      },
      title: "Tabela Hash Customizada",
      description: [
        "Implementação completa de uma hash table com tratamento de colisões usando separate chaining.",
        "Demonstra conceitos internos de hashing, distribuição de buckets, fator de carga e resizing dinâmico.",
        "Inclui métricas de performance comparando acesso O(1) médio contra estruturas lineares tradicionais.",
      ],
      link: "#",
    },
  },

  {
    Preview: <GraphSearchPreview />,
    Info: {
      class: {
        name: "Grafos & Navegação",
        textColor: "text-purple-500",
      },
      title: "Sistema de Busca em Grafos",
      description: [
        "Visualizador avançado de algoritmos de travessia em grafos utilizando BFS e DFS.",
        "Simula problemas reais de roteamento, navegação e pathfinding com animações de exploração de nós.",
        "Inclui representação dinâmica de adjacência, detecção de ciclos e reconstrução visual de caminhos mínimos.",
      ],
      link: "#",
    },
  },
];

export const projectDataL2: ProjectProps[] = [
  {
    Preview: <SortingAlgorithmPreview />,
    Info: {
      class: {
        name: "Algoritmos de Ordenação",
        textColor: "text-cyan-500",
      },
      title: "Laboratório de Sorting",
      description: [
        "Suite visual comparativa entre QuickSort, MergeSort, BubbleSort e HeapSort.",
        "Renderiza swaps, comparações e recursões em tempo real para demonstrar diferenças de eficiência entre algoritmos.",
        "Inclui análise estatística de performance, consumo computacional e comportamento em datasets parcialmente ordenados.",
      ],
      link: "#",
    },
  },

  {
    Preview: <BacktrackingPreview />,
    Info: {
      class: {
        name: "Problemas Combinatórios",
        textColor: "text-red-500",
      },
      title: "Solver de Backtracking",
      description: [
        "Framework visual para resolução de problemas utilizando backtracking recursivo.",
        "Aplica pruning de estados inválidos e visualiza árvore completa de decisões durante a execução.",
        "Demonstra aplicações em Sudoku, labirintos, N-Queens e problemas clássicos de busca exaustiva.",
      ],
      link: "#",
    },
  },

  {
    Preview: <DivideAndConquerPreview />,
    Info: {
      class: {
        name: "Paradigmas Algorítmicos",
        textColor: "text-indigo-500",
      },
      title: "Divide & Conquer Simulator",
      description: [
        "Visualizador interativo do paradigma divide and conquer aplicado em problemas computacionais complexos.",
        "Expõe detalhadamente a divisão recursiva de subproblemas e o processo de merge das soluções.",
        "Inclui tracing completo da stack recursiva e métricas de profundidade de execução.",
      ],
      link: "#",
    },
  },

  {
    Preview: <DynamicProgrammingPreview />,
    Info: {
      class: {
        name: "Otimização Computacional",
        textColor: "text-emerald-500",
      },
      title: "Programação Dinâmica Visual",
      description: [
        "Sistema educacional para visualização de memoization e tabulation em algoritmos de otimização.",
        "Mostra evolução das tabelas DP em tempo real e redução de complexidade comparada à recursão ingênua.",
        "Inclui estudos de caso como Fibonacci otimizado, Knapsack Problem e Longest Common Subsequence.",
      ],
      link: "#",
    },
  },
];
