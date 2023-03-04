import React, { useEffect } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';
import { addToCard } from '../actions/cardAction';
import { useDispatch, useSelector } from 'react-redux'
import Errormsg from './Errormsg';

export default function Cart() {
  const { id } = useParams()
  const { search } = useLocation()
  const productId = id;
  const qtyInUrl = new URLSearchParams(search).get('qty');

  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart)
  const { cartitems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCard(productId, qtyInUrl))
    }
  }, [dispatch, productId, qtyInUrl])
  const removeFromCartHandler = () =>{

  }
  return (
    <>
      <div className="row mx-auto cart-info">
        <div className="col-md-8 bg-info">
          {
            cart.cartItems.length === 0 ? <Errormsg>Cart is Empty <Link to="/">Go Shopping</Link></Errormsg> :
              <ul className='row'>{cart.cartItems.map((item) => {
                return <li key={item.Image}>
                  <span className='cart-product cart-product-1'><img src={item.Image} className="cart-product-img" alt="product-img" /></span>
                  <span className='cart-product cart-product-2'><Link to={`/product/₹{item.product}`}>{item.name}</Link></span>
                  <span className='cart-product cart-product-3'>
                    <select className='selectpicker'
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCard(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </span>
                  <span className='cart-product cart-product-4'>₹{item.price}</span>
                  <span className='cart-product cart-product-5'>
                    <button
                      type="button" className='btn btn-light p-2'
                    onClick={() => removeFromCartHandler(item.product)}
                    >
                      Delete
                    </button>
                  </span>

                </li>

              })}
              </ul>
          }
        </div>
        <div className="col-md-4 bg-warning">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eveniet adipisci laborum voluptas corporis? Accusantium perspiciatis exercitationem dolorem pariatur quasi error voluptates rerum, temporibus, culpa itaque, at aspernatur! Consequatur, eaque!
        </div>
      </div>
    </>
  )
}