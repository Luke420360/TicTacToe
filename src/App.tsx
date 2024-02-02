import { Container } from '@mui/material'
import TTTGrid from './components/TTTGrid'
import "./styles.css"

function App() {

  return (
    <Container maxWidth="xl">
      <div className='text-center p-8'>
        <h1 className='fire-animation text-7xl text-pretty text-amber-600'>Tic Tac Toe</h1>
      </div>
      <div>
        <main>
            <TTTGrid />
        </main>
      </div>
    </Container>
  )
}

export default App

