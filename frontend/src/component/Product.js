import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Rating from './Rating';
import Loadingmsg from './Loadingmsg';
import Errormsg from './Errormsg';
import { detailsProduct } from '../actions/productActions';

function Product(props) {

  const { id } = useParams();
  const productId = id;

  // const product = data.products.find((x) => x._id == id);
  const [qty, setQty] = useState(1)
  const dispatch = useDispatch();

  const sProduct = useSelector((state) => state.productDetails);
  const { loading, error, product } = sProduct;

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  const navigate = useNavigate();
  const addHandler = (e) => {
    e.preventDefault()
    navigate(`/cart/${productId}?qty=${qty}`);
    // props.history.push(`/cart/${productId}?qty=${qty}`) NOT WORKING
    // console.log(qty)
  }

  return <>
    <div className="row d-flex mx-auto product bg-white">
      <div className="col-12 col-md-5"><img src={product?.image} className="product-img" alt="product-img" /></div>
      {
        loading ? (
          <Loadingmsg></Loadingmsg>
        ) : error ? (
          <Errormsg>{error.massage}</Errormsg>
        ) : (
          <div className="col-12 col-md-4 px-lg-5">
            <div className="card-body">
              <div className="clearfix mt-3 ">
                <h4 className="card-title test-start ms-lg-5">
                  {product?.description}
                </h4>
                <span className=" ms-lg-1 mt-5">
                  <span className='text-dark fs-4 ms-lg-5'>₹</span>&nbsp;<span className='fs-2'>{product?.price}</span></span>
                <div className='ms-lg-5'>
                  <Rating rating={product?.rating} numReviews={product?.numReviews} />
                </div>
              </div>
            </div>
          </div>
        )
      }
      <div className="col-12 col-lg-3 add-to-card mx-auto">
        <div className="d-flex justify-content-between">
          <div className="text-dark fs-4"><span>price</span></div>
          <div className="fs-5"><span>₹{product?.price}</span></div>
        </div>
        <div className="d-flex justify-content-between">
          <div className="name"><span className='text-dark fs-4'>status</span>&nbsp;</div>
          <div className="name"><span className='fs-5 text-success'>{
            product?.countInStock > 0 ? <span>In Stock</span> : <span>Out Stock</span>
          }</span></div>
        </div>
        <div>
          {
            product?.countInStock > 0 && (
              <>
                <div className="d-flex justify-content-between shadow-sm">
                  <div className="name"><span className='text-dark fs-4'>Quantity</span>&nbsp;</div>
                  <div className="name">
                    <span className='fs-5 text-success'>
                      <select value={qty} onChange={e => setQty(e.target.value)}>
                        {
                          [...Array(product.countInStock).keys()].map(x => {
                            return <option value={x + 1} key={x + 1}>{x + 1}</option>
                          })
                        }
                      </select>
                    </span>
                  </div>
                </div>
                <Link className="btn cart-btn form-control" onClick={addHandler}>add cart</Link>
              </>
            )
          }

        </div>
      </div>
    </div>
  </>
}

export default Product