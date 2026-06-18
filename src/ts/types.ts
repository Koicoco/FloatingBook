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

export type Rarity = 'R' | 'SR' | 'SSR' | 'UR'

export interface Fact {
  id: string
  title: string
  body: string
  emoji?: string
  rarity: Rarity
  pullCost: number
}

export interface GameState {
  coins: number
  unlockedFactIds: string[]
  highScore: number
}
