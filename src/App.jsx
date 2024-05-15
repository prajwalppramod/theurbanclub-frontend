

import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Login from './Components/Login'
import AccountPage from './Components/AccountPage'


function App() {
  

  return (
    <>
      <div className='hero h-full'>
        <Header />
        <Hero/>
        <AccountPage/>
      </div>
      <Login/>
     
      
    </>
  )
}

export default App
