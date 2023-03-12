import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BsSearch, BsFillPersonFill, BsCart3 } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Home from './component/Home';
import Product from './component/Product';
import Cart from './component/Cart';
import Pagenotfound from './component/Pagenotfound';
import Footer from './component/Footer';
import { useSelector } from 'react-redux';

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  return (
    <div className="App">
      <BrowserRouter>
        <header className="header-upper shadow-sm py-2">
          <div className="row mx-auto">
            <div className="col-md-3 col-4 my-auto">
              <div className="text-white text-center ms-2 text-white"><Link to="/"><h1 className='text-logo'><i>Mkart</i></h1></Link></div>
            </div>
            <div className="col-md-6 col-8 my-auto">
              <div className="input-group text-center">
                <input type="text" className="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <span className="input-group-text" id="basic-addon2">
                  <BsSearch className='fs-5' />
                </span>
              </div>
            </div>
            <div className="col-md-3  my-auto">
              <div className="header-upper-links d-flex justify-content-around px-2 py-2">

                <div className=' text-center'>
                  <Link to="/
              ">
                    <BsFillPersonFill className='compare' />
                    <p className='m-0 compare-text'>MyAcount</p>
                  </Link>
                </div>

                <div className=' text-center my-auto'>
                  <Link to="/Cart
              "> 
                    <BsCart3 className='compare'></BsCart3>
                    <span className='cart-qty'>
                    {cartItems.length > 0 && (
                      <span className="cart-qty">{cartItems.length}</span>
                    )}</span>
                    
                    <p className='m-0 compare-text'>Cart</p>
                    </Link>
                </div>

              </div>
            </div>
          </div>
        </header>
        <Routes>
          <Route index element={<Home />} />
          <Route path='*' element={<Pagenotfound />} />
          <Route path="/Product/:id" element={<Product />} />
          <Route path="/cart/:id?" element={<Cart />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
