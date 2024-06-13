import React from 'react'
import { useSelector } from 'react-redux';
import Products from './Products';

function ProductsList() {
    const { products, filteredProducts } = useSelector(state => state.product);

    const productsToDisplay = filteredProducts.length > 0 ? filteredProducts : products;

    return (
        <div className='flex-row products'>
            {productsToDisplay.map((product) => (
                <Products key={product.id} product={product} />
            ))}
        </div>
    )
}

export default ProductsList;
