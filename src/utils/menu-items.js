import AboutUsPage from '../view/pages/about-us';
import ContactPage from '../view/pages/contact';
import Homepage from '../view/pages/homepage';
import CollectionPage from '../view/pages/collection';
import ShopPage from '../view/pages/shop';

export const menuItems = [
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
