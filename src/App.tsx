import { Container } from '@mui/material'
import TTTGrid from './components/TTTGrid'
import "./styles.css"

function App() {

  return (
    <Container maxWidth="md">
      <div className='text-center p-8'>
        <h1 className='fire-animation text-7xl text-pretty text-amber-600'>Tic Tac Toe</h1>
      </div>
      <main>
          <TTTGrid />
      </main>
    </Container>
  )
}

export default App

