
import { ThemeProvider } from 'react-bootstrap'
import './App.css'
import { Header } from './components/Header/Header'
import { Container } from './components/Container/Container'

function App() {


  return (
    <ThemeProvider
    breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    minBreakpoint="xxs"
    >
      <Header/>
      <Container/>
    </ThemeProvider>  
  )
}

export default App
