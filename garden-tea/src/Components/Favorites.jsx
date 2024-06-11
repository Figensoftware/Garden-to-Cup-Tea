import React from 'react'
import { useSelector } from 'react-redux';
import '../Styles/Favori.css';

function Favorites() {
    const { products, favorites } = useSelector(state => state.product);
    const favoriteProducts = products.filter(product => favorites.includes(product.id));


    return (
        <div className='background'>
            {favoriteProducts.map((product) => (
                <div className="favorites" key={product.id}>
                    <div className="favorite">
                        <img src={product.image} alt={product.title} />
                        <p className="favorititle">{product.title}</p>
                        <p className="favoriprice">{product.price}$</p>
                        <div className="buttons">
                            <button className="favoribtn">Go details</button>
                            <button className="favoribtn">Add to basket</button>
                        </div>
                    </div>
                    <div>
                        <p className="description">
                            {product.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Favorites;
