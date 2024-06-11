import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import store from './store/index.jsx'
import App from './App.jsx'
import './index.css'

import Home from './pages/Home.jsx';
import RootLayout from './routes/RootLayout.jsx';
import ProductsList from './Components/ProductsList.jsx';
import Favorites from './Components/Favorites.jsx';
import Signin from './Components/Signin.jsx';
import Signup from './Components/Signup.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <App />,
        children: [
          {
            path: '',
            element: <Home />
          },
          {
            path: '/product-list',
            element: <ProductsList />
          },
          {
            path: '/favorites',
            element: <Favorites />
          },
          {
            path: '/signin',
            element: <Signin />
          },
          {
            path: '/signup',
            element: <Signup />
          }
        ]
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
