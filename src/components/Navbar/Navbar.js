import "./Navbar.css";
import { CartIcon } from './Cart-icon';

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>

      </div>
      <div className='links'>
        <div to='/'>Main</div>
        <div to='/about'>About</div>
        <CartIcon/>
      </div>
    </div>
  )
}