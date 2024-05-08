import React, { useState } from 'react';
import Jdata from '../assets/product.json';
import Product from './product.jsx';
import { Container } from 'react-bootstrap';
import './home.css';

function Home() {
  const [products] = useState(Jdata);

  return (
    <Container fluid className='px-1'>
      <div className='product-contain'>
        {Array.isArray(products) && products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>   
    </Container>
  );
}

export default Home;
