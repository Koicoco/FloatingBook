interface PageSpreadProps {
  onClose: () => void
}

export default function PageSpread({ onClose }: PageSpreadProps) {
  return (
    <div className="page-spread-wrap">
      <button onClick={onClose}>← Back</button>
      <p style={{ color: 'white' }}>Spreads coming next</p>
    </div>
  )
}