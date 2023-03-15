import React, { useEffect } from 'react';
import Productlist from './Productlist';
import Loadingmsg from './Loadingmsg';
import Errormsg from './Errormsg';
import { useDispatch, useSelector, } from 'react-redux'
import { listProducts } from '../actions/productActions';
import Filterbox from './Filterbox';

function Home(props) {
  // const [product, setProduct] = useState([])
  // const [loading, setLoading] = useState(false)
  // const [error, setError] = useState(false)

  const dispatch = useDispatch();
  const productList = useSelector(state => state.productlist);
  const { product } = productList;


  useEffect(() => {
    // fetchData()
    dispatch(listProducts())
  }, [dispatch])


  return <>
    <div id="carouselExampleControlsNoTouching" className="carousel slide " data-bs-touch="false" data-bs-interval="false">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="carosule-01.jpg" className="d-block w-100 h-50" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="carosule-01.jpg" className="d-block w-100 h-50" alt="..." />
        </div>
        <div className="carousel-item">

          <img src="carosule-01.jpg" className="d-block w-100 h-50" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    <div className="row home-page mb-5">
      <div className="col-lg-3 col-md-3 d-none d-lg-block d-md-block">
        <Filterbox />
      </div>
      <div className="col-sm-9 col-12 ">

        <div className="row justify-content-center">
          {
            (props.filteredList) ?
              props.filteredList?.map((products, _id) => {
                return <Productlist key={products._id} products={products}></Productlist>
              })
              : product?.map((products, _id) => {
                return <Productlist key={products._id} products={products}></Productlist>
              })

          }

        </div>

      </div>
    </div>
    <nav className="navbar fixed-bottom navbar-expand-sm navbar-light bg-light d-block d-lg-none d-md-none">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Filters </a>
        <button className="navbar-toggler input-group-text" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Filterbox />

        </div>
      </div>
    </nav>
  </>
}

export default Home