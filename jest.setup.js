import '@testing-library/jest-dom'

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
    section: ({ children, ...props }) => <section {...props}>{children}</section>,
    h1: ({ children, ...props }) => <h1 {...props}>{children}</h1>,
    h2: ({ children, ...props }) => <h2 {...props}>{children}</h2>,
    h3: ({ children, ...props }) => <h3 {...props}>{children}</h3>,
    p: ({ children, ...props }) => <p {...props}>{children}</p>,
    button: ({ children, ...props }) => <button {...props}>{children}</button>,
    a: ({ children, ...props }) => <a {...props}>{children}</a>,
    span: ({ children, ...props }) => <span {...props}>{children}</span>,
    article: ({ children, ...props }) => <article {...props}>{children}</article>,
    form: ({ children, ...props }) => <form {...props}>{children}</form>,
    input: ({ children, ...props }) => <input {...props}>{children}</input>,
    textarea: ({ children, ...props }) => <textarea {...props}>{children}</textarea>,
    nav: ({ children, ...props }) => <nav {...props}>{children}</nav>,
  },
  AnimatePresence: ({ children }) => children,
  useScroll: () => ({ scrollYProgress: { get: () => 0 } }),
  useSpring: (value) => value,
}))

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt} />
  },
}))

// Mock next/legacy/image
jest.mock('next/legacy/image', () => ({
  __esModule: true,
  default: (props) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt} />
  },
}))

// Mock lucide-react icons
jest.mock('lucide-react', () => ({
  Search: () => <div data-testid="search-icon">Search</div>,
  X: () => <div data-testid="x-icon">X</div>,
  Menu: () => <div data-testid="menu-icon">Menu</div>,
  ChevronDown: () => <div data-testid="chevron-down-icon">ChevronDown</div>,
  Calendar: () => <div data-testid="calendar-icon">Calendar</div>,
  Clock: () => <div data-testid="clock-icon">Clock</div>,
  ArrowRight: () => <div data-testid="arrow-right-icon">ArrowRight</div>,
  ExternalLink: () => <div data-testid="external-link-icon">ExternalLink</div>,
  BookOpen: () => <div data-testid="book-open-icon">BookOpen</div>,
  Send: () => <div data-testid="send-icon">Send</div>,
  Mail: () => <div data-testid="mail-icon">Mail</div>,
  User: () => <div data-testid="user-icon">User</div>,
  MessageSquare: () => <div data-testid="message-square-icon">MessageSquare</div>,
  Sun: () => <div data-testid="sun-icon">Sun</div>,
  Moon: () => <div data-testid="moon-icon">Moon</div>,
  Filter: () => <div data-testid="filter-icon">Filter</div>,
  Star: () => <div data-testid="star-icon">Star</div>,
  Quote: () => <div data-testid="quote-icon">Quote</div>,
  ChevronLeft: () => <div data-testid="chevron-left-icon">ChevronLeft</div>,
  ChevronRight: () => <div data-testid="chevron-right-icon">ChevronRight</div>,
  MapPin: () => <div data-testid="map-pin-icon">MapPin</div>,
}))

// Mock react-social-icons
jest.mock('react-social-icons', () => ({
  SocialIcon: ({ url, ...props }) => (
    <div data-testid="social-icon" data-url={url} {...props}>
      Social Icon
    </div>
  ),
}))

// Mock environment variables
process.env.NEXT_PUBLIC_EMAIL = 'test@example.com'
process.env.NEXT_PUBLIC_SITE_URL = 'https://test.com'
process.env.NEXT_PUBLIC_YEARS_OF_EXPERIENCE = '5'
process.env.NEXT_PUBLIC_PROJECTS_COMPLETED = '50'
process.env.NEXT_PUBLIC_CLIENTS = '25'
process.env.NEXT_PUBLIC_REVIEWS = '100'
