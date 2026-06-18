import type { ComponentType } from 'react'

export interface BookPage {
  id: string
  left: ComponentType
  right: ComponentType | null
}

export interface AudioTrack {
  id: string
  label: string
  src: string
  isDefault: boolean
}

export interface Fact {
  id: string
  coinCost: number
  title: string
  body: string
  emoji?: string
}

export interface GameState {
  coins: number
  unlockedFactIds: string[]
  highScore: number
}
