import { Outlet } from "react-router-dom";
import Container from '@mui/material/Container';
import Loading from "./Components/Loading";
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from "react-redux";
import { calculateBasket, deleteFromBasket, setDrawer } from "./store/basketSlice";
import { useEffect } from "react";

function App() {
  const { products, drawer, totalAmount } = useSelector(state => state.basket);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(calculateBasket())
  }, [products]);

  const deleteBasket = (id) => {
    dispatch(deleteFromBasket({ id, count: 1 }))
    dispatch(calculateBasket());
  }

  return (
    <>
      <Container>
        <Outlet />
        <Loading />
        <Drawer anchor="right" open={drawer} onClose={() => dispatch(setDrawer())} >
          <div className="drawer" >
            <h3>Products</h3>
            {products && products.map((product) => {
              return (
                <div className="flex-row drawer" key={product.id} >
                  <img src={product.image} alt={product.title} className="images" />
                  <p className="title">
                    {product.title}({product.count})
                  </p>
                  <p className="price">
                    {product.price}$
                  </p>
                  <button onClick={() => deleteBasket(product.id)}>delete</button>
                </div>
              )
            })}
            <div>
              {products.length > 0 ? (
                <p className="amount">
                  Total Amount: {totalAmount.toFixed(2)}$
                </p>
              ) : (
                <p>You don't have any product in your basket!</p>
              )}
            </div>
          </div>

        </Drawer>

      </Container>
    </>
  )
}

export default App;
