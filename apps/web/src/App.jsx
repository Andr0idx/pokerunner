import { useState } from 'react'
import './App.css'

const sections = [
  { id: 'inicio', label: 'Início' },
  { id: 'pokedex', label: 'Pokédex' },
  { id: 'time', label: 'Meu time' },
  { id: 'batalha', label: 'Batalha manual' },
]

const pages = {
  pokedex: {
    title: 'Pokédex',
    description:
      'Aqui vamos consultar Pokémon, formas, variantes, tipos e outras informações.',
  },
  time: {
    title: 'Meu time',
    description:
      'Aqui vamos montar equipes e escolher os golpes de cada Pokémon.',
  },
  batalha: {
    title: 'Batalha manual',
    description:
      'Aqui vamos escolher um oponente e analisar as opções do seu time.',
  },
}

function App() {
  const [activeSection, setActiveSection] = useState('inicio')
  const currentPage = pages[activeSection]

  return (
    <>
      <header>
        <strong>PokéRunner</strong>
        <span>Web em desenvolvimento</span>
      </header>

      <nav aria-label="Navegação principal">
        {sections.map((section) => (
          <button
            key={section.id}
            type="button"
            aria-pressed={activeSection === section.id}
            onClick={() => setActiveSection(section.id)}
          >
            {section.label}
          </button>
        ))}
      </nav>

      <main>
        {activeSection === 'inicio' ? (
          <section>
            <p>GUIA E ASSISTENTE DE BATALHA</p>
            <h1>Monte seu time. Entenda cada escolha.</h1>
            <p>
              Consulte a Pokédex, escolha golpes para seu time e prepare-se
              para as batalhas.
            </p>
            <button
              type="button"
              onClick={() => setActiveSection('pokedex')}
            >
              Explorar a Pokédex
            </button>
          </section>
        ) : (
          <section>
            <p>EM CONSTRUÇÃO</p>
            <h1>{currentPage.title}</h1>
            <p>{currentPage.description}</p>
            <button
              type="button"
              onClick={() => setActiveSection('inicio')}
            >
              Voltar ao início
            </button>
          </section>
        )}
      </main>
    </>
  )
}

export default App