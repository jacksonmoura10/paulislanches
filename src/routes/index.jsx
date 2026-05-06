import { createBrowserRouter } from 'react-router-dom';

import Footer from '../components/Footer';
import { Header } from '../components/Header';
import { PrivateRoute } from '../components/PrivateRoute';

import { Cart, Home, Login, Menu, Register } from '../containers';

import Admin from '../containers/Admin';

import Dashboard from '../containers/Admin/Dashboard';

import CreateProduct from '../containers/Admin/CreateProduct';
import EditProduct from '../containers/Admin/EditProduct';
import Products from '../containers/Admin/Products';

import Categories from '../containers/Admin/Categories';
import CreateCategories from '../containers/Admin/CreateCategories';
import EditCategories from '../containers/Admin/EditCategories';

import Orders from '../containers/Admin/Orders';
import MyOrders from '../containers/MyOrders';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    ),
  },

  {
    path: '/login',
    element: <Login />,
  },

  {
    path: '/cadastro',
    element: <Register />,
  },

  {
    path: '/cardapio',
    element: (
      <>
        <Header />
        <Menu />
      </>
    ),
  },

  {
    path: '/carrinho',
    element: (
      <PrivateRoute>
        <Cart />
      </PrivateRoute>
    ),
  },

  {
    path: '/meus-pedidos',
    element: (
      <PrivateRoute>
        <MyOrders />
      </PrivateRoute>
    ),
  },

  {
    path: '/admin',
    element: (
      <PrivateRoute adminOnly>
        <Admin />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },

      // PRODUTOS
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'products/new',
        element: <CreateProduct />,
      },
      {
        path: 'products/edit/:id',
        element: <EditProduct />,
      },

      // CATEGORIAS
      {
        path: 'categories',
        element: <Categories />,
      },
      {
        path: 'categories/new',
        element: <CreateCategories />,
      },
      {
        path: 'categories/edit/:id',
        element: <EditCategories />,
      },

      // PEDIDOS
      {
        path: 'orders',
        element: <Orders />,
      },
    ],
  },
]);
