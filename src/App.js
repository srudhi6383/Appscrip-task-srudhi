import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './component/footer/footer'
import Header from './component/header/header'
import Navbar from './component/navbar/navbar'


function App() {

  return (
    <>
      <Header/>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
