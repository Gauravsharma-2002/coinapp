import {BrowserRouter as Router, Routes,Route} from "react-router-dom"

// routes import form component file
import Header from "./components/Header"
import Home from  "./components/Home"
import Exchanges from "./components/Exchanges"
import CoinsDetail from "./components/Coinsdetails"
import Coins from "./components/Coins"
import Footer from "./components/Footer"



function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/exchanges" element={<Exchanges/>} />
        <Route path="/coins" element={<Coins/>} />
        <Route path="/coins/:id" element={<CoinsDetail/>} />
      </Routes>

      <Footer/>

    </Router>
  );
}

export default App;
