import './App.css';
import Navbar from './navbar';
import Connection from './pages/connection';
import Propos from './pages/propos';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Connection" element={<Connection />} />
          <Route path="/Propos" element={<Propos />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
