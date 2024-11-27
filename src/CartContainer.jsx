import { useGlobalContext } from "./context"
import CartItem from "./CartItem"
const CartContainer = () => {
  const {cart,clearCart,totalCost}=useGlobalContext();
  const cartItems=Array.from(cart.entries());
 if(cartItems.length===0)
    {
        return <section className="empty">
          <h2>YOUR BAG</h2>
          <p>is currently empty</p>
        </section>
    }
  return <section className="cartItems-container">
    <header>
    <h2>YOUR BAG</h2>
    </header>
    <div className="cartItems"> 
    {cartItems.map((item)=>{
      const [id,items]=item;
      return <CartItem key={id} {...items} />
    })}
    </div>
    <footer>
    <hr/>
    <div className="price-container">
      <p>Total</p>
      <p className="price">${totalCost}</p>
    </div>
     <button className="clear-button" onClick={clearCart}>Clear Cart</button>
    </footer>
  </section>
}

export default CartContainer