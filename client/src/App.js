
import './App.css';
import Home from './components/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {



  return (
    <div className="container">

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
        
    </Routes>
  </BrowserRouter>
      
    </div>
  );
}

export default App;
