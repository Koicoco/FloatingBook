interface BookProps {
  onClose: () => void
}

export default function Book({ onClose }: BookProps) {
  return (
    <div className="book">
      <button onClick={onClose}>← Back</button>
    </div>
  )
}