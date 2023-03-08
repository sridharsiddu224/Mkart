import React, { useEffect } from 'react';
import Productlist from './Productlist';
import Loadingmsg from './Loadingmsg';
import Errormsg from './Errormsg';
import {useDispatch, useSelector,} from 'react-redux'
import { listProducts } from '../actions/productActions';

function Home() {
  // const [product, setProduct] = useState([])
  // const [loading, setLoading] = useState(false)
  // const [error, setError] = useState(false)

  const dispatch = useDispatch();
  const productList = useSelector(state => state.productList);
  const { loading, error, product } = productList;
  

    
  // const fetchData = async () => {
  //   try {
  //     setLoading(true)
  //     const { data } = await axios.get('/app/products ');
  //     setProduct(data);
  //     setLoading(false)
  //   } catch (err) {
  //     setError(err.massage)
  //     setLoading(true)
  //   }
  // }

  useEffect(() => {
    // fetchData()
    dispatch(listProducts())
  }, [dispatch])

  
  return <>

    <div className="container-fluid bg-trasparent my-4 p-3" style={{ position: 'relative' }}>
      <div className="row mx-auto justify-content-center">
        {
          loading?(
          <Loadingmsg></Loadingmsg>
          ): error?(
            <Errormsg>{error.massage}</Errormsg>
          ):(
            product?.map((products, _id) => {
              return <Productlist key={products._id} products={products}></Productlist>
            })
          )
        }
        
      </div>
    </div>
  </>
}

export default Home