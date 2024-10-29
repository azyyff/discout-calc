import React, { useState } from 'react';


import './App.css'

function App() {

  
    const [originalPrice, setOriginalPrice] = useState('');
    const [discountPercentage, setDiscountPercentage] = useState('');
    const [discountedPrice, setDiscountedPrice] = useState(null);
  
    const calculateDiscount = () => {
      const discount = (originalPrice * discountPercentage) / 100;
      const finalPrice = originalPrice - discount;
      setDiscountedPrice(finalPrice.toFixed(2));
    };
  

  return (
    <>

<div className="calculator-container bg-warning">
      <h2>Discount Calculator</h2>
      <div className="input-group">
        <label>Original Price:</label>
        <input
          type="number"
          value={originalPrice}
          onChange={(e) => setOriginalPrice(e.target.value)} //onchange update state variable correctly
          placeholder="Enter original price"
        />
      </div>

      
      <div className="input-group">
        <label>Discount Percentage:</label>
        <input
          type="number"
          value={discountPercentage}
          onChange={(e) => setDiscountPercentage(e.target.value)}
          placeholder="Enter discount %"
        />
      </div>
      <button className="calculate-button" onClick={calculateDiscount}>
        Calculate
      </button>
      {discountedPrice !== null && (
        <h3>Discounted Price: ${discountedPrice}</h3>
      )}
    </div>
    </>
  )
}

export default App
