import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">خانه</Link></li>
            <li><Link to="/products">محصولات</Link></li>
            <li><Link to="/stores">فروشگاه ها</Link></li>
            <li><Link to="/login">ورود</Link></li>
            <li><Link to="/signup">ثبت نام</Link></li>
            <li><Link to="/profile">پروفایل</Link></li>
            <li><Link to="/dashboard">داشبورد فروشنده</Link></li>
          </ul>
        </nav>

        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/products" element={<Products />} />
          <Route path="/stores" element={<Stores />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/stores/:storeId" element={<StoreDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<SellerDashboard />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
