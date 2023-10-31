import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from "./view/pages/homepage";
import PublicRoutes from './routes/PublicRoutes';
import AboutUsPage from './view/pages/about-us';
import ContactPage from './view/pages/contact';
import ReviewPage from './view/pages/review';
import ShopPage from './view/pages/shop';
import NewArrivalPage from './view/pages/new-arrival';
import BestSellerPage from './view/pages/best-seller';
import FaqPage from './view/pages/faq';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicRoutes />}>
          <Route path="" element={<Homepage />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="review" element={<ReviewPage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="new-arrivals" element={<NewArrivalPage />} />
          <Route path="best-seller" element={<BestSellerPage />} />
          <Route path="faq" element={<FaqPage />} />
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
