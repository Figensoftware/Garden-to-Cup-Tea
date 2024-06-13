import { useParams } from 'react-router-dom';
import '../Styles/ProductDetails.css';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedProduct } from '../store/productSlice';
import { useEffect } from 'react';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";


function ProductDetails() {
    const { id } = useParams();
    const { products, selectedProducts } = useSelector(state => state.product);
    const { image, title, price, description } = selectedProducts;
    const dispatch = useDispatch();

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
                    <CiCircleMinus className='iconf' />
                    <span>0</span>
                    <CiCirclePlus className='icont' />
                </div>
                <div className="btn">
                    Add to basket
                </div>
            </div>

        </div>
    )
}

export default ProductDetails;
