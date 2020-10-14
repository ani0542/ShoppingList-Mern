import React from 'react'
import Navbar from './Components/Navbar'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
function App() {
  return (
    <>
          <BrowserRouter>
                <Navbar/>
                <Switch>
                     <Route exact path='/' component={Home}/>
                     <Route exact path='/about' component={About}/>
                     <Route exact path='/contact' component={Contact}/>
                </Switch>
          </BrowserRouter>
        
    </>
  )
}

export default App
