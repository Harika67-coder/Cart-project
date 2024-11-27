import React from 'react'

const getTotals = (cart) => {
  let totalAmount=0,totalCost=0;
   for(let {amount,price} of cart.values())
   {
    totalAmount+=amount;
    totalCost+=amount*price;
   }
   
   return {totalAmount,totalCost};
}

export default getTotals;