import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Marketplace from './pages/marketplace/Marketplace';
import Signup from './pages/Signup/Signup';
function App() {
  return (
    <div className="App">

  <BrowserRouter>
  <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path="/marketplace" element={<Marketplace/>}/>
        </Routes>
  </BrowserRouter>
  
    </div>
  );
}

export default App;
