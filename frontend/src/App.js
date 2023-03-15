import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BsSearch, BsFillPersonFill, BsCart3 } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Home from './component/Home';
import Product from './component/Product';
import Cart from './component/Cart';
import Pagenotfound from './component/Pagenotfound';
import Footer from './component/Footer';
import { useDispatch, useSelector } from 'react-redux';
import Signin from './Signin';
import Signup from './Signup';
import Shipping from './Shipping';
import { signout } from './actions/userAction';
import { useEffect, useState } from 'react';
import { listProducts } from './actions/productActions';
function App() {

  const dispatch = useDispatch();
  const productList = useSelector(state => state.productlist);
  const {product} = productList;

  const [filteredList, setFilteredList] = useState(product);

  const filterBySearch = (event) => {
      // Access input value
      const query = event.target.value;
      // Create copy of item list
      var updatedList = [...product];
      // Include all elements which includes the search query
      updatedList = updatedList.filter((item) => {
          return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
      });
      // Trigger render with updated values
      setFilteredList(updatedList);
  };


  
  useEffect(() => {
    // fetchData()
    dispatch(listProducts())
  }, [dispatch])

  
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const userName = useSelector((state) => state.userSignin);
  const { userInfo } = userName;

  const signoutHandle = () => {
    dispatch(signout())
  }

  return (
    <div className="App">
      <BrowserRouter>
        <header className="header-upper shadow-sm py-2  sticky-top navbar-expand">
          <div className="row mx-auto">
            <div className="col-md-3 col-4 my-auto">
              <div className="text-white text-center ms-2 text-white"><Link to="/"><h1 className='text-logo fw-bold'><i>Mkart</i></h1></Link></div>
            </div>
            <div className="col-md-6 col-8 my-auto">
              <div className="input-group text-center">
                <input type="text" id="search-box" onChange={filterBySearch} className="form-control" placeholder="Search brand" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <span className="input-group-text" id="basic-addon2">
                  <BsSearch className='fs-5' />
                </span>
              </div>
            </div>
            <div className="col-md-3  my-auto">
              <div className="header-upper-links d-flex justify-content-around px-2 py-2">
                <div className=' text-center'>
                  <BsFillPersonFill className='compare' />
                  {
                    userInfo ? (
                      <div className="dropdown">
                        <Link className="btn dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" to="#">{userInfo.name}</Link>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                          <li><Link className="dropdown-item" onClick={signoutHandle}>signOut</Link></li>
                        </ul>
                      </div>
                    ) :
                      (
                        <div>
                          <Link to="/signin" className='m-0 compare-text'>MyAcount</Link>
                        </div>
                      )
                  }

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
          <Route index element={<Home filteredList={filteredList} />} />
          <Route path='*' element={<Pagenotfound />} />
          <Route path="/Product/:id" element={<Product />} />
          <Route path="/cart/:id?" element={<Cart />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/shipping" element={<Shipping />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
