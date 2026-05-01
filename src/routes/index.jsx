import { createBrowserRouter } from 'react-router-dom';

import Footer from '../components/Footer';
import { Header } from '../components/Header';

import { Cart, Home, Login, Menu, Register } from '../containers';

import Admin from '../containers/Admin';
import Categories from '../containers/admin/Categories';
import CreateCategories from '../containers/admin/CreateCategories';
import CreateProduct from '../containers/admin/CreateProduct';
import Dashboard from '../containers/admin/Dashboard';
import EditCategories from '../containers/admin/EditCategories';
import EditProduct from '../containers/admin/EditProduct';
import Products from '../containers/admin/Products';

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
    element: <Cart />,
  },

  {
    path: '/admin',
    element: <Admin />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },

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
    ],
  },
]);
