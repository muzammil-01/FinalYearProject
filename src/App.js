import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Marketplace from './pages/marketplace/Marketplace';
import PropertyDetails from './pages/propertyDetails/PropertyDetails';
import Signup from './pages/Signup/Signup';
import Highlights from './pages/highlights/Highlights';
import Details from './pages/details/Details';
import Bid from './pages/bid/Bid';
import TokensForSale from './pages/tokenforsale/TokensForSale';
import Financials from './pages/financials/Financials';
import Profile from './pages/profile/Profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path="marketplace" element={<Marketplace />} />
          <Route path="propertydetails" element={<PropertyDetails />}>
          <Route path='highlights' element={<Highlights />} />
          <Route path='financials' element={<Financials />} />
          <Route path='details' element={<Details />} />
          <Route path="bid" element={<Bid />} />
          <Route path="tokensforsale" element={<TokensForSale />} />
          </Route>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
