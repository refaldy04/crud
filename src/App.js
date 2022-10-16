import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Datatable from './pages/Datatable';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/datatable" element={<Datatable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
