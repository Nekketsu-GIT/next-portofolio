import { render, screen } from '@testing-library/react'
import Presentation from '../presentation'

// Mock the environment variables
const mockProps = {
  image: '/test-image.jpg',
  title: 'Hello, I am José',
  description: 'I am a software engineer.',
  socialMediaLinks: {
    github: 'https://github.com/test',
    linkedin: 'https://linkedin.com/in/test',
    twitter: 'https://twitter.com/test',
  },
}

describe('Presentation Component', () => {
  it('renders the title correctly', () => {
    render(<Presentation {...mockProps} />)
    
    expect(screen.getByText('Hello, I am José')).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<Presentation {...mockProps} />)
    
    expect(screen.getByText('I am a software engineer.')).toBeInTheDocument()
  })

  it('renders the contact button', () => {
    render(<Presentation {...mockProps} />)
    
    expect(screen.getByText('Contact me')).toBeInTheDocument()
  })

  it('renders the view work button', () => {
    render(<Presentation {...mockProps} />)
    
    expect(screen.getByText('View My Work')).toBeInTheDocument()
  })

  it('renders social media icons when provided', () => {
    render(<Presentation {...mockProps} />)
    
    const socialIcons = screen.getAllByTestId('social-icon')
    expect(socialIcons).toHaveLength(3)
  })

  it('renders with default title when none provided', () => {
    const propsWithoutTitle = { ...mockProps, title: undefined }
    render(<Presentation {...propsWithoutTitle} />)
    
    expect(screen.getByText('Welcome!')).toBeInTheDocument()
  })

  it('renders with default description when none provided', () => {
    const propsWithoutDescription = { ...mockProps, description: undefined }
    render(<Presentation {...propsWithoutDescription} />)
    
    expect(screen.getByText('I am a software engineer.')).toBeInTheDocument()
  })
})
