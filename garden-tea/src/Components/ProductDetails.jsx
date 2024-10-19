import { useParams } from 'react-router-dom';
import '../Styles/ProductDetails.css';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedProduct } from '../store/productSlice';
import { useEffect, useState } from 'react';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { addToBasket } from '../store/basketSlice';


function ProductDetails() {
    const { id } = useParams();
    const { products, selectedProducts } = useSelector(state => state.product);
    const { image, title, price, description } = selectedProducts;
    const dispatch = useDispatch();
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    useEffect(() => {
        getProductById();
    }, [])



    const getProductById = () => {
        products && products.map((product) => {
            if (product.id == id) {
                dispatch(setSelectedProduct(product));
            }
        })
    }

    const addBasket = () => {
        const payload = {
            id,
            price,
            title,
            image,
            description,
            count
        }
        dispatch(addToBasket(payload));
    }

    return (
        <div className='product-details'>
            <div>
                <img src={image} alt={title} />
            </div>
            <div>
                <h2 className='details'>{title}</h2>
                <p className='details'>{description}</p>
                <h1 className='details'>{price}$</h1>
                <div className="counter">
                    <CiCirclePlus className='icont' onClick={increment} />
                    <span>{count}</span>
                    <CiCircleMinus className='iconf' onClick={decrement} />
                </div>
                <div className="btn" onClick={addBasket}>
                    Add to basket
                </div>
            </div>

        </div>
    )
}

export default ProductDetails;
