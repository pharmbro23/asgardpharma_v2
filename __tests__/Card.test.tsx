import { render, screen } from '@testing-library/react'
import { Card } from '@/components/ui/Card'

describe('Card', () => {
  it('renders children', () => {
    render(<Card>Card content</Card>)
    expect(screen.getByText('Card content')).toBeInTheDocument()
  })

  it('has base card styles', () => {
    const { container } = render(<Card>Content</Card>)
    const card = container.firstChild as HTMLElement
    expect(card).toHaveClass('bg-white')
    expect(card).toHaveClass('rounded-2xl')
  })

  it('applies custom className', () => {
    const { container } = render(<Card className="test-custom">Content</Card>)
    const card = container.firstChild as HTMLElement
    expect(card).toHaveClass('test-custom')
  })
})
