import AboutUsPage from "../view/pages/about-us";
import ContactPage from "../view/pages/contact";
import Homepage from "../view/pages/homepage";
import CollectionPage from "../view/pages/collection";
import ProductPage from "../view/pages/product";
import ShopPage from "../view/pages/shop";
// import NewArrivalPage from "../components/new-arrival";
// import ReviewPage from "../view/pages/review";
// import ShopPage from "../view/pages/shop";
// import FaqPage from "../view/pages/faq";
// import BestSellerPage from "../view/pages/best-seller";

export const menuItems = [
  {
    id: 'home',
    title: 'Home',
    url: '/',
    element: <Homepage />
  },
  {
    id: 'about',
    title: 'About',
    url: '/about-us',
    element: <AboutUsPage />
  },
  {
    id: 'collection',
    title: 'Collection',
    url: '/collection-page',
    element: <CollectionPage />
  },
  {
    id: 'shop',
    title: 'Shop',
    url: '/shop',
    element: <ShopPage />
  },
  // {
  //   id: 'product',
  //   title: 'Product',
  //   url: '/product-page',
  //   element: <ProductPage />
  // },
  {
    id: 'contact',
    title: 'Contact',
    url: '/contact-us',
    element: <ContactPage />
  },
  // {
  //   id: 'shop',
  //   title: 'Shop',
  //   url: '/shop',
  //   element: <ShopPage />
  // },
  // {
  //   id: 'new-arrivals',
  //   title: 'New Arrivals',
  //   url: '/new-arrivals',
  //   element: <NewArrivalPage />
  // },
  // {
  //   id: 'best-seller',
  //   title: 'Best Seller',
  //   url: '/best-seller',
  //   element: <BestSellerPage />
  // },
  // {
  //   id: 'faqs',
  //   title: "Faq's",
  //   url: '/faqs',
  //   element: <FaqPage />
  // },
  // {
  //   id: 'reviews',
  //   title: 'Reviews',
  //   url: '/reviews',
  //   element: <ReviewPage />
  // },


]



// const navLinkList = [
//   {
//     id: "home",
//     title: 'Home',
//     url: "/"
//   },
//   {
//     id: "about",
//     title: 'About',
//     url: "/about"
//   },
//   {
//     id: "shop",
//     title: 'Shop',
//     url: "/shop"
//   }, {
//     id: "new-arrivals",
//     title: 'New Arrivals',
//     url: "/new-arrivals"
//   }, {
//     id: "best-seller",
//     title: 'Best Seller',
//     url: "/best-seller"
//   }, {
//     id: "faq's",
//     title: 'Faq',
//     url: "/faq"
//   }, {
//     id: "review",
//     title: 'Review',
//     url: "/review"
//   },
//   {
//     id: "contact",
//     title: 'Contact',
//     url: "/contact"
//   },
// ]
