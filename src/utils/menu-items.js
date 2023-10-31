import AboutUsPage from "../view/pages/about-us";
import BestSellerPage from "../view/pages/best-seller";
import ContactPage from "../view/pages/contact";
import FaqPage from "../view/pages/faq";
import Homepage from "../view/pages/homepage";
import NewArrivalPage from "../components/new-arrival";
import ReviewPage from "../view/pages/review";
import ShopPage from "../view/pages/shop";

export const menuItems = [
  {
    id: 'home',
    title: 'Home',
    url: '/home',
    element: <Homepage />
  },
  {
    id: 'about',
    title: 'About',
    url: '/about',
    element: <AboutUsPage />
  },
  {
    id: 'shop',
    title: 'Shop',
    url: '/shop',
    element: <ShopPage />
  },
  {
    id: 'new-arrivals',
    title: 'New Arrivals',
    url: '/new-arrivals',
    element: <NewArrivalPage />
  },
  {
    id: 'best-seller',
    title: 'Best Seller',
    url: '/best-seller',
    element: <BestSellerPage />
  },
  {
    id: 'faqs',
    title: "Faq's",
    url: '/faqs',
    element: <FaqPage />
  },
  {
    id: 'reviews',
    title: 'Reviews',
    url: '/reviews',
    element: <ReviewPage />
  },
  {
    id: 'contact',
    title: 'Contact',
    url: '/contact',
    element: <ContactPage />
  },

]