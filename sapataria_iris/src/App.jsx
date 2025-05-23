import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

import Container from './components/layout/Container'

import Home from './components/pages/Home'

import ListShoes from './components/pages/ListShoes'
import CreateShoes from './components/pages/CreateShoes'
import NavBar from './components/layout/NavBar'

function App() {

  return (
    <>
    
      <div>

        <BrowserRouter>

          <Container>

            <Routes>

              <Route path='/' element={<NavBar />}>

                <Route path='/' element={<Home />} />
                <Route path='/newShoes' element={<CreateShoes />} />
                <Route path='/listShoes' element={<ListShoes />} />

              </Route>

            </Routes>

          </Container>

        </BrowserRouter>

      </div>
    </>
  )
}

export default App
