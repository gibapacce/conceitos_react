/*
Desafio: Crie um componente que:
    • Faça uma chamada API quando montar
    • Tenha loading state
    • Limpe timers / subscriptions ao desmontar
    • Atualize dados a cada 5 segundos
Conceitos avaliados:
    • useEffect
    • Cleanup functions
    • Loading states
    • API calls
*/

import { useState, useEffect } from 'react';

function MyComponent() {
    // 1. Estado para armazenar os dados vindos da API
    const [data, setData] = useState(null);
    // 2. Estado para controlar se está carregando (loading)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // 3. Função para buscar dados da API
        //    Aqui você pode definir uma função async para fazer a chamada fetch/axios
        async function fetchData() {
            setLoading(true);
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            const result = await response.json();
            setData(result); // Salva os dados no estado
            setLoading(false); // Fim do carregamento
        }
        fetchData();
        // 4. Criar um intervalo para atualizar os dados a cada 5 segundos
        const delay = setInterval(fetchData, 5000);
        // 5. Função de cleanup para limpar o intervalo ao desmontar o componente
        //    Isso evita que o intervalo continue rodando após o componente sair da tela
        return () => {
            clearInterval(delay);
        };
    }, []); // O array vazio faz o efeito rodar só uma vez ao montar

    // 6. Renderização condicional:
    //    Se estiver carregando, mostrar uma mensagem de loading
    //    Se não, mostrar os dados da API
    if (loading) {
        return (
            <div style={{ textAlign: 'center' }}>
                <h1>Loading Data...</h1>
            </div>
        )
    }
    return (
        <div style={{ textAlign: 'center' }}>Data: {JSON.stringify(data)}</div>
    )
}

export default function MyApp() {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>API Return</h1>
            <MyComponent />
        </div>
    );
}
