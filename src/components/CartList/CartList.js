import { useSelector } from "react-redux";
import CartItem  from '../CartItem/CartItem';

const CartList = () => {
    const {items}  = useSelector(state => state.cart)

    const renderedItems = items.map(item => {
        return (
            <CartItem key={item.id} data={item} />
        )
    })

  return (
    <div>
        {renderedItems}
    </div>
  )
}

export default CartList;