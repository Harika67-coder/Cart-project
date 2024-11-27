import { FaCartPlus } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Navbar = () => {
  const {totalAmount}=useGlobalContext();
  return <nav>
    <div className='nav-center'>
      <h4>UseReducer</h4>
      <div className='nav-container'>
      <FaCartPlus className='cart-icon'/>
      <div className='cart-size'>
      <p>{totalAmount}</p>
      </div>
      </div>
    </div>
  </nav>
}

export default Navbar