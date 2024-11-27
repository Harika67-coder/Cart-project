import React from 'react'
import { FaChevronDown, FaChevronUp} from 'react-icons/fa';
import { useGlobalContext } from './context';
const CartItem = ({id,title,price,img,amount}) => {
  const {increase,decrease,remove}=useGlobalContext();
  return <article className='cartItem-container'>
    
      <img src={img} alt={title}/>
      <div className='middle-column'>
      <h5>{title}</h5>
      <h4>${price}</h4>
      <button onClick={()=>{
        remove(id)
      }}>remove</button>
      </div>
      <div className='right-column'>
        <button onClick={()=>{
          increase(id)}}>
          <FaChevronUp/>
        </button>
        <span>{amount}</span>
        <button onClick={()=>{
          decrease(id);
        }}>
          <FaChevronDown/>
        </button>
      </div>
  </article>
}

export default CartItem;