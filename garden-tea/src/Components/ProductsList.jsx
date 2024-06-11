import React from 'react'
import { useSelector } from 'react-redux';
import Products from './Products';

function ProductsList() {
    const { products } = useSelector(state => state.product);

    return (
        <div className='flex-row products'>
            {products.map((product) => (
                <Products key={product.id} product={product} />
            ))}
        </div>
    )
}

export default ProductsList;
