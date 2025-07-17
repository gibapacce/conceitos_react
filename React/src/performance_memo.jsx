/*
Desafio: Otimize uma lista de 1000 itens:
    • Implemente virtualização
    • Use React.memo
    • Implemente debounce na busca
    • Evite re-renders desnecessários
Conceitos avaliados:
    • React.memo
    • useMemo
    • useCallback
    • Performance optimization
*/

// Importa React e hooks necessários
import React, { useState, useEffect, useMemo } from "react";
// Importa o componente de lista virtualizada do react-window
import { FixedSizeList as List } from "react-window";

// Cria um array de 1000 itens para simular uma lista grande
const items = Array.from({ length: 1000 }, (_, i) => ({
    id: i,
    name: `Item ${i + 1}`,
}));

// Componente de item memorizado para evitar re-renderizações desnecessárias
// Recebe o índice do item e o estilo (necessário para virtualização)
const Row = React.memo(({ index, style }) => (
    <div style={style}>
        {items[index].name}
    </div>
));

// Componente principal da aplicação
export default function App() {
    // Estado para o valor do input de busca
    const [search, setSearch] = useState(""); // valor do input
    // Estado para o valor da busca com debounce aplicado
    const [debouncedSearch, setDebouncedSearch] = useState(""); // valor com debounce

    // useEffect para implementar o debounce:
    // Só atualiza debouncedSearch 300ms após o usuário parar de digitar
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearch(search);
        }, 300); // 300ms de atraso
        // Limpa o timeout se o usuário digitar novamente antes dos 300ms
        return () => clearTimeout(handler);
    }, [search]); // Executa sempre que search mudar

    // useMemo para filtrar a lista apenas quando debouncedSearch mudar
    // Isso evita recalcular o filtro em cada renderização
    const filteredItems = useMemo(() => {
        if (!debouncedSearch) return items; // Se não houver busca, retorna todos os itens
        // Filtra os itens pelo nome, ignorando maiúsculas/minúsculas
        return items.filter((item) =>
            item.name.toLowerCase().includes(debouncedSearch.toLowerCase())
        );
    }, [debouncedSearch]);

    // Componente de item memorizado para a lista filtrada
    // Recebe o índice do item filtrado e o estilo para virtualização
    const RowFiltered = React.memo(({ index, style }) => (
        <div style={style}>
            {filteredItems[index].name}
        </div>
    ));

    // Renderização do componente
    return (
        <div className="study-box" style={{ textAlign: 'center' }}>
            <input
                type="text"
                className="search-input"
                placeholder="Buscar..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{ margin: '0 auto 12px auto', display: 'block', maxWidth: 300 }}
            />
            <div className="virtual-list-wrapper" style={{ margin: '0 auto' }}>
                <List
                    height={400}
                    itemCount={filteredItems.length}
                    itemSize={35}
                    width={300}
                >
                    {RowFiltered}
                </List>
            </div>
        </div>
    );
}
