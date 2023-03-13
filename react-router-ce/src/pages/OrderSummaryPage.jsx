import React from 'react';
import { useNavigate } from 'react-router-dom';
function OrderSummary() {
  const navigate = useNavigate();

  function handleClick() {
    return navigate(-1);
  }

  return (
    <div>
      <h1>Order Summary</h1>
      <button onClick={handleClick}>Back</button>
    </div>
  );
}

export default OrderSummary;
