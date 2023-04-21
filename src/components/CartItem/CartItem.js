import React from 'react'

const CartItem = ({data}) => {
  return (
    <div className='cartItem'>
        <img src={`https://picsum.photos/id/${data.id}/400/400`} alt={data.title}/>
        <div className='cartItemDesc'>
            <div className='cartItemName'>
            {data.title}
            </div>
            <div className='cartItemPrice'>
            ${data.id * 9.99}
            </div>
        </div>
    </div>
  )
}

export default CartItem;