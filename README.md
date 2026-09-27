# Password Power

Gerador de senhas seguras e validador de entropia em tempo real.

## Objetivos

Desenvolvido como uma iniciativa para consolidar e aprofundar conhecimentos na área de Desenvolvimento Web. O projeto vai além dos fundamentos básicos ao aplicar conceitos estruturais de engenharia de software no front-end, utilizando uma arquitetura baseada em MVC (Model-View-Controller) com JavaScript puro (Vanilla JS). A aplicação integra princípios de Cibersegurança e Teoria da Informação para oferecer avaliações matemáticas reais sobre a resiliência das credenciais, unindo teoria acadêmica e desenvolvimento prático.

## Demonstração

<!-- Substitua o caminho da imagem abaixo pelo link ou diretório do seu print geral -->
![Interface do Password Power](/images/interface.png)

## Funcionalidades

### 1. Gerador de Senhas Seguras

Gera credenciais aleatórias com base no comprimento e nos conjuntos de caracteres (maiúsculas, minúsculas, números e símbolos) definidos pelo usuário.

* **Garantia Estatística:** O algoritmo assegura a inclusão obrigatória de pelo menos um caractere de cada tipologia selecionada antes do preenchimento final.
* **Imprevisibilidade:** Implementa o algoritmo de embaralhamento Fisher-Yates para misturar o vetor de caracteres, impedindo a geração de padrões estruturais previsíveis.
* **Usabilidade:** Uso da Clipboard API nativa para cópia rápida da credencial gerada.

<!-- Espaço para o print do gerador em ação -->
> ![Demonstração do Gerador](/images/geradorSenhas.png)

### 2. Analisador de Entropia (Medidor de Força)

Um testador dinâmico que avalia a força de senhas geradas ou inseridas manualmente pelo usuário.

* **Base Matemática:** A força da senha não utiliza avaliações arbitrárias, mas sim a fórmula clássica de entropia: `E = L × log2(R)`, onde `L` é o comprimento da string e `R` é o espaço de busca (pool de caracteres utilizados).
* **Escaneamento via Regex:** Utiliza Expressões Regulares para inspecionar e identificar de forma autônoma quais tipos de caracteres compõem a senha digitada.
* **Feedback Visual em Tempo Real:** Atualização reativa de interface (cores e barra de preenchimento) através da manipulação direta de propriedades CSS via eventos de escuta na DOM.

#### Senha Fraca

![Senha Fraca](/images/senhaFraca.png)

#### Senha Forte

![Senha Forte](/images/senhaForte.png)

## Tecnologias e Arquitetura

* **HTML5 e CSS3:** Estruturação semântica e interface fluida com animações de transição baseadas em estados.
* **JavaScript (ES6+):**
  * Estruturação modular utilizando módulos (`import/export`).
  * Separação de responsabilidades, isolando a lógica de negócio (Model) da manipulação de interface (View/Controller).
  * Aplicação de Expressões Regulares (RegEx) e funções matemáticas nativas (`Math.log2`, `Math.random`).
