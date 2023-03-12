import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useParams } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';
import Errormsg from './Errormsg';


export default function Cart() {
  const params = useParams();
  const productId = params.id;
  const { search } = useLocation();
  const qtyInUrl = new URLSearchParams(search).get('qty');
  const qty = qtyInUrl ? Number(qtyInUrl) : 1;

  const cart = useSelector(state => state.cart)
  const { cartItems } = cart;
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (product) => {
    dispatch(removeFromCart(product))
  }

  return (
    <>
      <div className="row mx-auto cart-info">
        <div className="col-md-8 p-md-5 mt-3 ">
          {
            cart.cartItems.length === 0 ? <Errormsg>Cart is Empty <Link to="/">Go Shopping</Link></Errormsg> :
              <ul className='mx-auto'>{cart.cartItems.map((item, ind) => {
                return <li key={ind} className="border border-top-1 p-1 my-1 bg-light rounded">
                  <span className='cart-product cart-product-1'><img src={item.image} className="cart-product-img" alt="product-img  bg-light" /></span>
                  <span className='cart-product cart-product-2 '><Link to={`/product/${item.product}`} className="text-dark product-name-2">{item.name}</Link></span>
                  <span className='cart-product cart-product-3'>
                  <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
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
                  <span className='cart-product cart-product-4'>₹{item.price * item.qty}</span>
                  <span className='cart-product cart-product-5'>
                    <button
                      type="button" className='btn delete-btn p-2'
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
        <div className="col-md-4 p-md-5">
          <div className="row text-center bg-white">

            <div className='py-2'>
              Subtotal({cartItems.reduce((a, c) => a + c.qty, 0)} items)
              : <span className='fs-5'>₹</span><span className='fs-3'>{cartItems.reduce((a, c,) => a + (c.qty) * (c.price), 0)}
              </span>
            </div>
            <div className='py-2'>
              <button className="btn cart-pay form-control" disabled={cart.cartItems.length === 0}
              >Proceed to buy</button>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}