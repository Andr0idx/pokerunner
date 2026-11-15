import { useMemo, useState } from 'react'
import { pokemon } from './data/pokemon'
import './App.css'

const sections = [
  { id: 'inicio', label: 'Início' },
  { id: 'pokedex', label: 'Pokédex' },
  { id: 'time', label: 'Meu time' },
  { id: 'batalha', label: 'Batalha manual' },
]

const pages = {
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
  const [search, setSearch] = useState('')

  const filteredPokemon = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase()

    if (!normalizedSearch) {
      return pokemon
    }

    return pokemon.filter((entry) =>
      entry.name.toLowerCase().includes(normalizedSearch),
    )
  }, [search])

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
            className={activeSection === section.id ? 'active' : ''}
            aria-pressed={activeSection === section.id}
            onClick={() => setActiveSection(section.id)}
          >
            {section.label}
          </button>
        ))}
      </nav>

      <main>
        {activeSection === 'inicio' && (
          <section className="hero">
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
        )}

        {activeSection === 'pokedex' && (
          <section className="pokedex-page">
            <p>PRÉVIA DA POKÉDEX</p>
            <h1>Conheça os Pokémon</h1>
            <p>
              Esta é uma amostra local para construirmos a experiência de
              consulta antes da conexão com a PokéAPI.
            </p>

            <label className="search-field">
              Buscar Pokémon
              <input
                type="search"
                value={search}
                placeholder="Ex.: Pikachu"
                onChange={(event) => setSearch(event.target.value)}
              />
            </label>

            <div className="pokemon-grid">
              {filteredPokemon.map((entry) => (
                <article className="pokemon-card" key={entry.id}>
                  <img src={entry.image} alt={entry.name} />
                  <div>
                    <span>#{String(entry.id).padStart(3, '0')}</span>
                    <h2>{entry.name}</h2>
                    <ul aria-label={`Tipos de ${entry.name}`}>
                      {entry.types.map((type) => (
                        <li key={type}>{type}</li>
                      ))}
                    </ul>
                    <p>{entry.description}</p>
                  </div>
                </article>
              ))}
            </div>

            {filteredPokemon.length === 0 && (
              <p className="empty-message">
                Nenhum Pokémon encontrado para esta busca.
              </p>
            )}
          </section>
        )}

        {currentPage && (
          <section className="hero">
            <p>EM CONSTRUÇÃO</p>
            <h1>{currentPage.title}</h1>
            <p>{currentPage.description}</p>
            <button type="button" onClick={() => setActiveSection('inicio')}>
              Voltar ao início
            </button>
          </section>
        )}
      </main>
    </>
  )
}

export default App