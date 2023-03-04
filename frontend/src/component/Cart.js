import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { addToCard } from '../actions/cardAction';
import { useDispatch, useSelector } from 'react-redux'

export default function Cart() {
  const { id } = useParams()
  const { search } = useLocation()
  const productId = id;
  const qtyInUrl = new URLSearchParams(search).get('qty');

  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart)
  const { cartitems } = cart;

  console.log(cart.cartItems);

  useEffect(() => {
    if (productId) {
      dispatch(addToCard(productId, qtyInUrl))
    }
  }, [dispatch, productId, qtyInUrl])
  return (
    <>
      <div className="row mx-auto">
        <div className="col-md-8 bg-info">
          {cart.cartItems.name}
        </div>
        <div className="col-md-4 bg-warning">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eveniet adipisci laborum voluptas corporis? Accusantium perspiciatis exercitationem dolorem pariatur quasi error voluptates rerum, temporibus, culpa itaque, at aspernatur! Consequatur, eaque!
        </div>
      </div>
    </>
  )
}
