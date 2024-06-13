import '../Styles/Products.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../store/productSlice';
import { useNavigate } from 'react-router-dom';

function Products({ product }) {
    const { id, image, title, price } = product;
    const { favorites } = useSelector(state => state.product);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleToggleFavorite = (productId) => {
        dispatch(toggleFavorite(productId))
    }

    return (
        <div className='card'>
            <img src={image} alt={title} />
            <button className='favori' onClick={() => handleToggleFavorite(id)}>
                {favorites.includes(id) ? (<FavoriteIcon style={{ color: 'red' }} />) : (<FavoriteBorderIcon />)}
            </button>
            <div>
                <p>{title}</p>
                <h3>{price}$</h3>
            </div>
            <div className="flex-row">
                <button className='detailbtn' onClick={() => navigate('/product-details/' + id)}>Go details</button>
            </div>
        </div>
    )
}

export default Products;
