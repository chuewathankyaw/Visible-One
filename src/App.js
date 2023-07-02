import { useEffect } from 'react';
import './App.css';
import { Footer } from './components/home/footer/footer';
import { HomePage } from './pages/homePage';
import {Routes, Route} from "react-router-dom"

function App() {
 
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={< HomePage />} />
      </Routes>
     
     
    </div>
  );
}

export default App;
