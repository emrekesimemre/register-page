import Login from './pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CopyRight from './components/CopyRight';
import Register from './pages/Register';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <CopyRight />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
