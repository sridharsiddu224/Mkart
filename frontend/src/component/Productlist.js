import React from 'react'
import { Link } from 'react-router-dom';
import Rating from './Rating';



function Productlist(props) {
    const { products } = props

    return <div className="col-lg-3 col-md-6 d-flex justify-content-center main-card" key={products._id} >
        <Link to={`/product/${products._id}`}>
            <div className="card h-100 shadow-sm text-center mx-auto" >
                <img src={products.Image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">
                        {products.name}
                    </h5>
                    <Rating rating={products.rating} numReviews={products.numReviews} />
                    <div>₹<span className='fs-3'>{products.price}</span></div>

                    <div className="d-grid gap-2 my-4">
                        <Link className="btn Offer-btn" to={`/product/${products._id}`}>Check offer</Link>
                    </div>
                </div>
            </div>
        </Link>
    </div>
}

export default Productlist