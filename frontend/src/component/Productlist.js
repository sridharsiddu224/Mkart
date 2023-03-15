import React from 'react'
import { Link } from 'react-router-dom';
import Rating from './Rating';

export default function Productlist(props) {
  const { products } = props
    
    return <div className=" col-6 col-lg-3 d-flex justify-content-center main-card p-1" key={products._id} >
        {/* <Link to={`/product/${products._id}`}> */}
            <div className="card h-100 shadow-sm text-center mx-auto" >
                <img src={products.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">
                        {products.name}
                    </h5>
                    <div className="row">
                        <div className="col m-auto"><Rating rating={products.rating} numReviews={products.numReviews} /></div>
                        <div className="col m-auto">₹<span className='fs-3'>{products.price}</span></div>
                    </div>
                    <div className="d-grid gap-2 my-2">
                        <Link className="btn Offer-btn" to={`/product/${products._id}`}>Buy Now</Link>
                    </div>
                </div>
            </div>
        {/* </Link> */}
    </div>
}