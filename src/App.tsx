import { useState } from 'react'
import Scene from './components/Scene/Scene'
import Book from './components/Book/Book'
import Game from './components/Game/Game'
import MusicPlayer from './components/MusicPlayer/MusicPlayer'
import './styles/reset.css'

export type AppView = 'landing' | 'book' | 'game'

export default function App() {
  const [view, setView] = useState<AppView>('landing')

  return (
    <div className="app">
      <Scene />

      {view === 'landing' && (
        <div className="landing">
          <div className="landing-card">
            <h1>Coco's Journey</h1>
            <p>Welcome!</p>
            <button onClick={() => setView('book')}>Open Portfolio</button>
            <button onClick={() => setView('game')}>Start Game</button>
          </div>
        </div>
      )}

      {view === 'book' && (
        <Book onClose={() => setView('landing')} />
      )}

      {view === 'game' && (
        <Game onClose={() => setView('landing')} />
      )}

      <MusicPlayer />
    </div>
  )
}