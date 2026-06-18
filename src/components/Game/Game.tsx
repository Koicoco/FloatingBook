interface GameProps {
  onClose: () => void
}

export default function Game({ onClose }: GameProps) {
  return (
    <div className="game">
      <button onClick={onClose}>← Back</button>
    </div>
  )
}