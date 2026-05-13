import {BacktrackingPreview, BinarySearchPreview, DivideAndConquerPreview, DynamicProgrammingPreview, SortingAlgorithmPreview} from "./previews";
import {LinearSearchPreview} from "./previews";
import {HashTablePreview} from "./previews";
import {GraphSearchPreview} from "./previews"; 


import {ProjectProps} from "../components/ProjectCard";

export const projectDataL1: ProjectProps[] = [
    {
        Preview: <BinarySearchPreview />,
        Info: {
            class: {name: "Algoritmo de Busca", textColor: "text-blue-500"},
            title: "Busca Binária",
            description: ["Implementação do algoritmo de busca binária em JavaScript, demonstrando sua eficiência em comparação com a busca linear."],
            link: "#"
        }
    },

    {
        Preview: <LinearSearchPreview />,
        Info: {
            class: {name: "Algoritmo de Busca", textColor: "text-blue-500"},
            title: "Busca Linear",
            description: ["Implementação do algoritmo de busca linear em JavaScript, demonstrando sua simplicidade e uso em cenários específicos."],
            link: "#"
        }
    },    

    {
        Preview: <HashTablePreview />,
        Info: { 
            class: {name: "Estrutura de Dados", textColor: "text-green-500"},
            title: "Tabela Hash",
            description: ["Implementação de uma tabela hash em JavaScript, demonstrando seu funcionamento e benefícios em comparação com outras estruturas de dados."],
            link: "#"
        }
    }, 

    {
        Preview: <GraphSearchPreview />,
        Info: {
            class: {name: "Algoritmo de Busca", textColor: "text-blue-500"},
            title: "Busca em Grafos",
            description: ["Implementação do algoritmo de busca em grafos em JavaScript, demonstrando sua aplicação em problemas de roteamento e navegação."],
            link: "#"
        }
    }
];

export const projectDataL2: ProjectProps[] = [
    {
        Preview: <SortingAlgorithmPreview />,
        Info: {
            class: {name: "Algoritmo de Busca", textColor: "text-blue-500"},
            title: "Algoritmo de Ordenação",
            description: ["Implementação de algoritmos de ordenação em JavaScript, demonstrando suas diferenças e aplicações    ."],
            link: "#"
        }
    },

    {
        Preview: <BacktrackingPreview />,
        Info: {
            class: {name: "Algoritmo de Busca", textColor: "text-blue-500"},
            title: "Backtracking",
            description: ["Implementação do algoritmo de backtracking em JavaScript, demonstrando sua aplicação em problemas de busca e resolução de quebra-cabeças."],
            link: "#"
        }
    },    

    {
        Preview: <DivideAndConquerPreview />,
        Info: { 
            class: {name: "Estrutura de Dados", textColor: "text-green-500"},
            title: "Divide and Conquer",
            description: ["Implementação do algoritmo de divide and conquer em JavaScript, demonstrando sua aplicação em problemas de busca e resolução de quebra-cabeças."],
            link: "#"
        }
    }, 

    {
        Preview: <DynamicProgrammingPreview />,
        Info: {
            class: {name: "Algoritmo de Busca", textColor: "text-blue-500"},
            title: "Programação Dinâmica",
            description: ["Implementação do algoritmo de programação dinâmica em JavaScript, demonstrando sua aplicação em problemas de otimização."],
            link: "#"
        }
    }
];
