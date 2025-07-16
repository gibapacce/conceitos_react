/*
Desafio: Crie um componente de contador que:
  • Tenha botões para incrementar e decrementar
  • Exiba o valor atual
  • Tenha um botão para resetar
  • Use apenas hooks funcionais
Conceitos avaliados:
  • useState
  • Componentes funcionais
Event handlers
*/

import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div>
      <p>Valor atualizado: {count}</p>
      <button onClick={increment}>Increment Button</button>
      <button onClick={decrement}>Decrement Button</button>
      <button onClick={reset}>Reset Button</button>
    </div>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Increment/Decrement Counter</h1>
      <Counter />
    </div>
  );
}
