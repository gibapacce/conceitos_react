import React, { useState } from "react";
import PerformanceMemo from "./performance_memo.jsx";
import ContextApi from "./context_api.jsx";
import ApiUseEffect from "./api_useEffect.jsx";
import CounterUseState from "./counter_useState.jsx";
import "./App.css";
import { useTheme } from "./context_api.jsx";

// Comentários dos desafios
const performanceMemoComment = `Desafio: Otimize uma lista de 1000 itens:
    • Implemente virtualização
    • Use React.memo
    • Implemente debounce na busca
    • Evite re-renders desnecessários
Conceitos avaliados:
    • React.memo
    • useMemo
    • useCallback
    • Performance optimization`;

const contextApiComment = `Desafio: Implemente um sistema de tema (dark / light) usando Context API:
    • Contexto global para tema
    • Hook customizado para usar o tema
    • Componentes que consomem o contexto
    • Persistência no localStorage
Conceitos avaliados:
    • Context API
    • Custom hooks
    • Global state management`;

const apiUseEffectComment = `Desafio: Crie um componente que:
    • Faça uma chamada API quando montar
    • Tenha loading state
    • Limpe timers / subscriptions ao desmontar
    • Atualize dados a cada 5 segundos
Conceitos avaliados:
    • useEffect
    • Cleanup functions
    • Loading states
    • API calls`;

const counterUseStateComment = `Desafio: Crie um componente de contador que:
    • Tenha botões para incrementar e decrementar
    • Exiba o valor atual
    • Tenha um botão para resetar
    • Use apenas hooks funcionais
Conceitos avaliados:
    • useState
    • Componentes funcionais
    • Event handlers`;

const studies = [
    {
        key: "performance_memo",
        label: "Otimização de Listas",
        component: <PerformanceMemo />,
        comment: performanceMemoComment,
        description: "Otimização de listas com virtualização, memoização e debounce."
    },
    {
        key: "context_api",
        label: "Tema Global (Context API)",
        component: <ContextApi />,
        comment: contextApiComment,
        description: "Exemplo de uso do Context API para gerenciamento de estado global."
    },
    {
        key: "api_useEffect",
        label: "Chamada de API com useEffect",
        component: <ApiUseEffect />,
        comment: apiUseEffectComment,
        description: "Busca de dados em API usando useEffect."
    },
    {
        key: "counter_useState",
        label: "Contador com useState",
        component: <CounterUseState />,
        comment: counterUseStateComment,
        description: "Contador simples utilizando useState."
    }
];

export default function App() {
    const [selected, setSelected] = useState(studies[0].key);
    const selectedStudy = studies.find(s => s.key === selected);
    const { theme } = useTheme();
    return (
        <div className={`app-container theme-${theme}`}>
            <header className="app-header">
                <h2>Conceitos React</h2>
                <nav className="app-header-nav">
                    <ul className="app-list-horizontal">
                        {studies.map(study => (
                            <li key={study.key} className="app-list-item-horizontal">
                                <button
                                    onClick={() => setSelected(study.key)}
                                    className={
                                        selected === study.key
                                            ? "app-button app-button-selected"
                                            : "app-button"
                                    }
                                >
                                    {study.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
            <main className="app-content">
                <h1 className="app-title">{selectedStudy.label}</h1>
                <div className="app-desc" style={{ marginBottom: 24 }}>{selectedStudy.description}</div>
                <div className="challenge-block">{selectedStudy.comment.split('\n').map((line, i) => <div key={i}>{line}</div>)}</div>
                <div className="app-card">
                    {selectedStudy.component}
                </div>
            </main>
        </div>
    );
} 