import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Shops from './pages/Shops/Shops';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Profile from './pages/Profile/Profile';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">خانه</Link></li>
            <li><Link to="/products">محصولات</Link></li>
            <li><Link to="/shops">فروشگاه ها</Link></li>
            <li><Link to="/login">ورود</Link></li>
            <li><Link to="/signup">ثبت نام</Link></li>
            <li><Link to="/profile">پروفایل</Link></li>
            <li><Link to="/dashboard">داشبورد فروشنده</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/products" element={<Products />} />
          <Route path="/shops" element={<Shops />} />
          {/* <Route path="/products/:productId" element={<ProductDetails />} /> */}
          {/* <Route path="/shops/:shopId" element={<shopDetails />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
