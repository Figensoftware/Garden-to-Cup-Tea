import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import '../Styles/Favori.css';
import { useNavigate } from 'react-router-dom';
import { addToBasket, calculateBasket } from '../store/basketSlice';
import { removeFavorite } from '../store/productSlice';

function Favorites() {
    const { products, favorites } = useSelector(state => state.product);
    const favoriteProducts = products.filter(product => favorites.includes(product.id));
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const addBasket = (product) => {
        const payload = {
            ...product,
            count: 1
        }
        dispatch(addToBasket(payload));
        dispatch(calculateBasket());
    }

    const deletefavorite = (id) => {
        dispatch(removeFavorite(id));
    }

    return (
        <div className='background'>
            {favoriteProducts.length > 0 ? (
                favoriteProducts.map((product) => (
                    <div className="favorites" key={product.id}>
                        <div className="favorite">
                            <img src={product.image} alt={product.title} />
                            <p className="favorititle">{product.title}</p>
                            <p className="favoriprice">{product.price}$</p>
                            <div className="buttons">
                                <button className="favoribtn" onClick={() => deletefavorite(product.id)}>remove favorite</button>
                                <button className="favoribtn" onClick={() => addBasket(product)}>Add to basket</button>
                            </div>
                        </div>
                        <div>
                            <p className="description">
                                {product.description}
                            </p>
                            <a className='det' onClick={() => navigate('/product-details/' + product.id)}>Go details</a>
                        </div>
                    </div>
                ))
            ) : (
                <p className='emptyfavori'>You don't have any favorite products!</p>
            )}

        </div>
    )
}

export default Favorites;
