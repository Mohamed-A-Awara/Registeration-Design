import {} from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom' 
import Login from './Pages/Login/Login'
import Home from './Pages/Home/Home'

// Import Styles
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {
  return (
    <>
        <Router>
          <Routes>
            <Route index path='/' element={<Login/>} />
            <Route index path='/home' element={<Login/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Login/>} />
          </Routes>
        </Router>
    </>

  )
}

export default App