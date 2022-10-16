import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Datatable from './pages/Datatable';
import { useSelector } from 'react-redux';

function App() {
  const token = useSelector((state) => state.user.token);
  return (
    <BrowserRouter>
      <Routes>{token ? <Route path="/" element={<Datatable />} /> : <Route path="/" element={<Login />} />}</Routes>
    </BrowserRouter>
  );
}

export default App;
