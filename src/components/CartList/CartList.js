import { useSelector } from "react-redux";
import CartItem  from '../CartItem/CartItem';

const CartList = () => {
    const {items} = useSelector(state => state.cart)

    console.log('cartlist', items)

    const renderedItems = items.map(item => {
        const {currentProduct, quantity} = item
        return (
          <CartItem key={currentProduct.id} data={currentProduct} quantity={quantity}/>
        )
    })

  return (
    <div>
        {renderedItems}
    </div>
  )
}

export default CartList;