import React, { useContext } from 'react';
import { Button, Card, CardBody, CardImg } from 'react-bootstrap';
import './product.css';
import { cartContext } from '../main.jsx';

function Product({ product }) {
  const { cart, setCart } = useContext(cartContext);
  const name = product.name.length > 16 ? product.name.substring(0, 16) + ".." : product.name;

  const addCart = () => {
    setCart([...cart, product]);
  };

  const removeCart = () => {
    setCart(cart.filter(e => e._id !== product._id));
  };

  return (
    <div>
      <Card className='product-card p-2'>
        <CardImg className='img' src={product.image} alt={product.name} title={product.name} />
        <CardBody>
          <h3>{name}</h3>
          <h6>Price Rs: {product.price}</h6>
          <h6>{product.description}</h6>
          {
            cart.includes(product) ?
              <Button onClick={removeCart} className='remove-cart'>Remove from Cart</Button> :
              <Button onClick={addCart} className='btn'>Add To Cart</Button>
          }
        </CardBody>
      </Card>
    </div>
  );
}

export default Product;
