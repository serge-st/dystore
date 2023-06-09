import { useState } from 'react';
import './ProductPage.css'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addProduct } from '../../store/cartSlice';
import useRecContext from '../../hooks/useRecContext';

const ProductPage = () => {
    useRecContext('PRODUCT')
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setQuantity(e.target.value)
    }

    const { id } = useParams()
    const data  = useSelector(state => state.products)
    const {isLoading} = data
    const [currentProduct] = data.products.filter(product => product.id === Number(id))

    const handleClick = () => {
        dispatch(addProduct({currentProduct, quantity}))
    }

    if (currentProduct && !isLoading) {
        const { title, body } = currentProduct;
        const price = Number(id) * 9.99;

        return (
            <div className="product-wrapper">
                <img className="product-image" src={`https://picsum.photos/id/${id}/640/640`} alt={'asdf'}/>
                <div className="product-description">
                    <h2 className="product-title">{title}</h2>
                    <div className="product-price">{`$${price}`}</div>
                    <p className="product-description">{body}</p>

                    <label>Quantity:</label>
                    <input min={1} value={quantity} onChange={handleChange} className='product-quantity' type='number' />
                    <button className='button' type="button" onClick={handleClick}>Add To Cart</button>
                </div>
            </div>
        );
    } else {
        return null;
    }
};

export default ProductPage;