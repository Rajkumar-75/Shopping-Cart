import React, { useEffect, useState, useContext } from 'react';
import './cart.css';
import { cartContext } from '../main.jsx';

function AddCart() {
  const { cart } = useContext(cartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (cart.length > 0) {
      const totalPrice = cart.reduce((acc, curr) => acc + parseInt(curr.price, 10), 0);
      setTotal(totalPrice);
    } else {
      setTotal(0);
    }
  }, [cart]);

  return (
    <>
      <h1 className='ps-3'>Cart Products</h1>
      <div className='cart'>
        {cart.map((product) => (
          <div className='cart-product' key={product._id}>
            <div className='cart-img'>
              <img src={product.image} width={150} height={150} alt="img" />
            </div>
            <div className='product-detail'>
              <h3>{product.name}</h3>
              <h6>Price Rs:{product.price}</h6>
              <h6>{product.description}</h6>
            </div>
          </div>
        ))}
      </div>
      <h3 className='ps-3'>Total Amount Rs :{total}</h3>
    </>
  );
}

export default AddCart;
