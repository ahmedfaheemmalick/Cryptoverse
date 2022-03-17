import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SideBar from "./Components/SideBar/SideBar"
import Footer from './Components/Footer/Footer'
import Home from "./Pages/Home/Home"
import Coins from "./Pages/Coins/Coins"
import CoinDetail from './Pages/CoinDetail/CoinDetail'
import News from "./Pages/News/News"

const App = () => {
  return (
    <Router>
      <div className='flex'>
        <div className='w-64'>
          <SideBar />
        </div>
        <div className='w-full'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coins" element={<Coins />} />
            <Route path="/coin/:uuid" element={<CoinDetail />} />
            <Route path="/news" element={<News />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App