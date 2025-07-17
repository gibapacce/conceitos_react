# Estudos React

Este projeto é um painel de estudos práticos em React, com exemplos de:

- Otimização de listas (memoização, virtualização, debounce)
- Gerenciamento de tema global com Context API
- Chamada de API com useEffect
- Contador simples com useState

## Demonstração

- Interface moderna, responsiva e com tema claro/escuro
- Navegação por abas no topo
- Cada exemplo mostra o desafio, conceitos avaliados e o código funcionando

## Funcionalidades

- **Otimização de Listas:**
  - Lista virtualizada de 1000 itens
  - Busca com debounce
  - Uso de React.memo e useMemo

- **Tema Global (Context API):**
  - Alternância entre tema claro e escuro
  - Persistência do tema no localStorage
  - Exemplo de consumo do contexto

- **Chamada de API com useEffect:**
  - Busca dados de uma API fake
  - Atualiza a cada 5 segundos
  - Mostra loading

- **Contador com useState:**
  - Incrementa, decrementa e reseta
  - Exemplo didático de hooks

## Como rodar o projeto

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Rode o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

3. Acesse [http://localhost:5173](http://localhost:5173) no navegador.

## Estrutura dos arquivos principais

- `src/App.jsx` — Layout principal, navegação e seleção dos exemplos
- `src/performance_memo.jsx` — Exemplo de otimização de listas
- `src/context_api.jsx` — Exemplo de Context API e tema global
- `src/api_useEffect.jsx` — Exemplo de chamada de API com useEffect
- `src/counter_useState.jsx` — Exemplo de contador com useState
- `src/App.css` — Estilos globais, temas e responsividade

## Temas

- O tema pode ser alternado na aba "Tema Global (Context API)"
- O tema afeta toda a aplicação

## Contribuição

- Sinta-se à vontade para clonar, estudar e modificar!
- Sugestões e melhorias são bem-vindas.

---

Feito com 💙 por Gilberto Filho
