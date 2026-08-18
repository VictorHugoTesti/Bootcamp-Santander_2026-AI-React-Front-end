
# 🚀 Planej.ai - Educador Financeiro Inteligente

O **Planej.ai** é uma aplicação web de planejamento financeiro pessoal focada em transformar dados inseridos pelo usuário em respostas úteis, claras e personalizadas utilizando Inteligência Artificial Generativa. 

Nesta aplicação, o usuário preenche um formulário em etapas com informações como renda, gastos fixos, dívidas e um objetivo financeiro. Em seguida, a aplicação processa esses dados e consome a API do Google Gemini para gerar um diagnóstico financeiro completo. Este diagnóstico inclui a viabilidade da meta, sugestões de economia, ideias para renda extra e dicas de investimentos.

Todo o fluxo funciona diretamente no navegador (Client-side), sem a necessidade de um back-end próprio, utilizando o `localStorage` para a persistência dos dados.

## 🛠️ Tecnologias Utilizadas

O projeto foi construído com as seguintes tecnologias e bibliotecas:

*   **[React 19](https://react.dev/) & [TypeScript](https://www.typescriptlang.org/):** Para a construção de uma interface de usuário tipada, modular e componentizada.
*   **[Vite](https://vitejs.dev/):** Ferramenta de build extremamente rápida para o ambiente de desenvolvimento.
*   **[Tailwind CSS v4](https://tailwindcss.com/):** Framework CSS utilitário para estilização ágil e implementação de design system (Temas Claro/Escuro).
*   **[React Router DOM](https://reactrouter.com/):** Gerenciamento de rotas no lado do cliente (SPA).
*   **[Google Gemini API](https://aistudio.google.com/):** Integração com IA Generativa para processamento e geração dos insights financeiros estruturados via JSON.
*   **[Lucide React](https://lucide.dev/):** Biblioteca de ícones SVG.
*   **[React Loading Skeleton](https://www.npmjs.com/package/react-loading-skeleton):** Feedback visual de carregamento (Skeletons) durante as requisições à API.

## ⚙️ Como Executar a Aplicação

Siga os passos abaixo para rodar o projeto localmente na sua máquina.

1. **Clone o repositório:**
```bash
   git clone [https://github.com/VictorHugoTesti/Bootcamp-Santander_2026-AI-React-Front-end.git](https://github.com/VictorHugoTesti/Bootcamp-Santander_2026-AI-React-Front-end.git)
   cd Desafio Projeto
   cd planejai
   ```
 
2.   **Instale as dependências:** Você pode usar `npm`, `yarn` ou `pnpm` (recomendado no projeto original).
```bash
	Bash
	pnpm install
   ```

3. **Configure a Chave da API:** Crie um arquivo `.env.local` na raiz do projeto e adicione a sua chave de API do Google Gemini:
```bash
	Snippet de código
	VITE_GEMINI_API_KEY=sua_chave_de_api_aqui
   ```

4. **Inicie o servidor de desenvolvimento:**
```bash
	Bash
	pnpm run dev
   ```
Acesse a aplicação em `http://localhost:5173`.

## 🧪 Como Testar o Fluxo Principal

1.  Na tela inicial, clique em **"Nova Simulação"**.
    
2.  Preencha os campos de **Renda mensal bruta**, **Custos fixos de vida** e **Dívidas / parcelas** com valores numéricos (a máscara de moeda é aplicada automaticamente).
    
3.  Defina um **Nome da meta** (ex: _Comprar um notebook_), o **Custo da meta** e o **Prazo desejado** em meses.
    
4.  Clique em **"Gerar simulação ✨"**.
    
5.  Aguarde o estado de carregamento (_skeleton_) enquanto a aplicação envia o prompt estruturado para o Google Gemini.
    
6.  Analise os cards de resumo e o painel gerado pela IA com o diagnóstico, viabilidade e dicas.

7. (Opcional) Logo abaixo do diagnóstico gerado tem uma caixa de dialogo para você tirar suas duvidas. 
    
8.  (Opcional) Alterne entre os temas Claro e Escuro clicando no ícone no cabeçalho.

## 🌟 Melhoria Implementada

Como forma de evoluir o projeto base, decidi focar na expansão da integração com APIs e implementei o desafio: **Conversando com o Educador Financeiro**.

**O que foi feito:**

-   Adição de um campo de input iterativo dentro do `AIInsightCard` após a geração do primeiro diagnóstico.
    
-   Construção de uma lógica de histórico de mensagens para enviar o contexto das interações anteriores à API do Gemini, permitindo uma conversa fluida e coerente.
    
-   Criação de feedback visual (loading) específico para as respostas do chat, isolado do loading principal.
    
-   Persistência de todo o histórico de perguntas e respostas no `localStorage` vinculado ao ID único da simulação.

## 🧠 O que aprendi durante o desafio

Desenvolver o Planej.ai foi uma excelente oportunidade para consolidar boas práticas de Front-End, especialmente:

-   **Integração e Engajamento de APIs:** Aprofundei meus conhecimentos na estruturação de prompts e na manipulação de respostas em formato JSON vindas da API do Gemini, garantindo que o Front-End recebesse dados limpos e prontos para renderização.
    
-   **Gerenciamento de Estado e Ciclo de Vida:** Utilizei `useRef` para evitar chamadas duplicadas à API causadas pelo React Strict Mode e gerenciei adequadamente os estados de _loading_, _error_ e _success_ na interface.
    
-   **Design Tokens e Tailwind v4:** Aprendi a implementar um sistema de temas dinâmico (Light/Dark mode) combinando variáveis nativas de CSS com a nova sintaxe do Tailwind v4 (`@theme`).
    
-   **Persistência Local:** Explorei o uso avançado do `localStorage` criando hooks customizados (`useSimulationStorage`) para salvar e recuperar históricos através de IDs únicos gerados pela Web Crypto API (`crypto.randomUUID()`).


## 🎓 Sobre este Projeto

Este projeto foi desenvolvido como resolução do desafio prático do **[Bootcamp] Santander 2026 - AI React Front-end**, promovido pela plataforma DIO e Santander. 

A arquitetura base e a instrução do projeto foram elaboradas pela instrutora **[Michele Ambrosio](https://github.com/micheleambrosio)**. Todo o desenvolvimento, refatoração e implementação de melhorias tomaram como ponto de partida os materiais oficiais fornecidos no curso.

**Referências e links úteis:**
* **Repositório Base Oficial:** [digitalinnovationone/planejai](https://github.com/digitalinnovationone/planejai/)

---
*Feito com dedicação durante o Bootcamp Santander 2026! 🚀*
