import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import WithLogging from './WithLogging'

class MockApp extends React.Component {
  render () {
    return (
      <h1>
        Hello from Mock App Component
      </h1>
    )
  }
}

let consoleSpy

beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation()
})

afterEach(() => {
    consoleSpy.mockRestore()
    cleanup()
})

test('check that the WithLogging HOC renders a heading element with the text Hello from Mock App Component', () => {
    const TestWithLogging = WithLogging(MockApp)
    render(<TestWithLogging />)

    expect(screen.getByRole('heading', {level: 1, name: /hello from mock app component/i})).toBeInTheDocument()
})

test('check that console.log is called with "Component MockApp is mounted" when mounting a named component', () => {
    const TestWithLogging = WithLogging(MockApp)
    render(<TestWithLogging />)

    expect(consoleSpy).toHaveBeenCalledWith('Component MockApp is mounted')
})

test('check that console.log is called with "Component MockApp is going to unmount" when unmounting a named component', () => {
    const TestWithLogging = WithLogging(MockApp)
    const { unmount } = render(<TestWithLogging />)
    
    unmount()
    
    expect(consoleSpy).toHaveBeenCalledWith('Component MockApp is going to unmount')
})

test('check that console.log is called with "Component Component is mounted" when mounting a nameless component', () => {
    const TestWithLogging = WithLogging(() => <div>Nameless</div>)
    render(<TestWithLogging />)

    expect(consoleSpy).toHaveBeenCalledWith('Component Component is mounted')
})

test('check that console.log is called with "Component Component is going to unmount" when unmounting a nameless component', () => {
    const TestWithLogging = WithLogging(() => <div>Nameless</div>)
    const { unmount } = render(<TestWithLogging />)
    
    unmount()
    
    expect(consoleSpy).toHaveBeenCalledWith('Component Component is going to unmount')
})

test('check that sets the component name to "Component" when component is nameless', () => {
    const TestWithLogging = WithLogging(() => <div>Nameless</div>)

    expect(TestWithLogging.displayName).toBe('WithLogging(Component)')    
})