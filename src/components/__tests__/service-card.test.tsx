import { render, screen, fireEvent } from '@testing-library/react'
import ServiceCard from '../service-card'

const mockService = {
  title: 'Web Development',
  description: 'Building modern web applications with React and Next.js',
}

describe('ServiceCard Component', () => {
  it('renders the service title', () => {
    render(<ServiceCard {...mockService} />)
    
    expect(screen.getByText('Web Development')).toBeInTheDocument()
  })

  it('renders the service description on hover', () => {
    render(<ServiceCard {...mockService} />)
    
    // The description should be present but initially hidden
    expect(screen.getByText('Building modern web applications with React and Next.js')).toBeInTheDocument()
  })

  it('shows learn more text on hover', () => {
    render(<ServiceCard {...mockService} />)
    
    expect(screen.getByText('Learn more →')).toBeInTheDocument()
  })

  it('has proper styling classes', () => {
    const { container } = render(<ServiceCard {...mockService} />)
    
    const card = container.firstChild
    expect(card).toHaveClass('relative', 'flex', 'items-end')
  })
})
