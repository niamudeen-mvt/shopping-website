import { Route, Routes } from 'react-router-dom';
import AboutUsPage from '../view/pages/about-us';
import ContactPage from '../view/pages/contact';
import Homepage from '../view/pages/homepage';
import CollectionPage from '../view/pages/collection';
import ShopPage from '../view/pages/shop';
import PublicRoutes from './PublicRoutes';
import ProductPage from '../view/pages/product';

export const routes = [
  {
    id: 'home',
    title: 'Home',
    url: '/',
    element: <Homepage />,
  },
  {
    id: 'about',
    title: 'About',
    url: '/about-us',
    element: <AboutUsPage />,
  },
  {
    id: 'collection',
    title: 'Collection',
    url: '/collection-page',
    element: <CollectionPage />,
  },
  {
    id: 'shop',
    title: 'Shop',
    url: '/shop',
    element: <ShopPage />,
  },
  {
    id: 'contact',
    title: 'Contact',
    url: '/contact-us',
    element: <ContactPage />,
  },
];


export const renderRoutes = (routes = []) => {
  return <Routes>
    <Route path="/" element={<PublicRoutes />}>
      {routes?.length
        ? routes?.map((e) => {
          return (
            <Route
              key={e?.id}
              path={e?.url}
              element={e?.element}
            />
          );
        })
        : null}
      <Route path={'/product-page'} element={<ProductPage />} />
    </Route>
  </Routes>
}

