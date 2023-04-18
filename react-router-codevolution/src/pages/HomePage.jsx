import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  function handleClick() {
    return navigate('/order-summary');
  }
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleClick}>Place Order</button>
    </div>
  );
}

export default Home;
