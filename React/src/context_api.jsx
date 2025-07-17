/*
Desafio: Implemente um sistema de tema(dark / light) usando Context API:
    • Contexto global para tema
    • Hook customizado para usar o tema
    • Componentes que consomem o contexto
    • Persistência no localStorage
Conceitos avaliados:
    • Context API
    • Custom hooks
    • Global state management
*/

// Importa as funções e hooks necessários do React
import React, { createContext, useContext, useEffect, useState } from 'react';

// Cria o contexto do tema, que será usado para compartilhar o estado globalmente
const ThemeContext = createContext(null);

// Componente provedor do contexto de tema
export function ThemeProvider({ children }) {
    // Recupera o valor do tema salvo no localStorage, se existir
    const themeValue = localStorage.getItem("theme");
    // Cria o estado 'theme' e inicializa com o valor do localStorage ou 'dark' por padrão
    const [theme, setTheme] = useState(themeValue || "dark");

    // Função para alternar entre os temas 'dark' e 'light'
    const toggleTheme = () => {
        setTheme(theme => theme === "dark" ? "light" : "dark");
    };

    // Efeito colateral: sempre que o tema mudar, salva o novo valor no localStorage
    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    // Fornece o valor do tema e a função de alternância para todos os componentes filhos
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

// Hook customizado para acessar facilmente o contexto do tema
export function useTheme() {
    return useContext(ThemeContext); // Retorna o valor do contexto (theme e toggleTheme)
}

// Exemplo visual de uso do contexto
function ThemeExample() {
    const { theme, toggleTheme } = useTheme();
    return (
        <div style={{
            background: theme === 'dark' ? '#23272e' : '#e0f7fa',
            color: theme === 'dark' ? '#fff' : '#015958',
            border: '1.5px solid #008f8c',
            borderRadius: 8,
            padding: '2em',
            textAlign: 'center',
            transition: 'all 0.3s',
            minHeight: 120,
            margin: '0 auto',
            maxWidth: 500
        }}>
            <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>
                Tema atual: <span style={{ textTransform: 'capitalize' }}>{theme}</span>
            </div>
            <button
                onClick={toggleTheme}
                style={{
                    background: theme === 'dark' ? '#008f8c' : '#015958',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 6,
                    padding: '10px 24px',
                    fontSize: 16,
                    cursor: 'pointer',
                    fontWeight: 600,
                    boxShadow: '0 2px 8px #008f8c22',
                    transition: 'background 0.2s, color 0.2s'
                }}
            >
                Alternar tema
            </button>
        </div>
    );
}

// Exporta o exemplo visual apenas consumindo o contexto global
export default function ContextApiDemo() {
    return <ThemeExample />;
}