import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicRoutes from './routes/PublicRoutes';
import { menuItems } from './utils/menu-items';
import ProductPage from './view/pages/product';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PublicRoutes />}>
                    {menuItems?.length
                        ? menuItems?.map((e) => {
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
        </BrowserRouter>
    );
}

export default App;
