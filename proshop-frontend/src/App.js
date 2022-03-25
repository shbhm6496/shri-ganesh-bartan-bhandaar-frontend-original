import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import HomePage from "./pages/HomePage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import NotFound from "./pages/NotFound";
import ShippingPage from "./pages/ShippingPage";
import PaymentPage from "./pages/PaymentPage";
import OrderPage from "./pages/OrderPage";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} exact />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart">
              <Route path="" element={<CartPage />} />
              <Route path=":id" element={<CartPage />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register">
              <Route path="" element={<RegisterPage />} />
              <Route path=":redirect" element={<RegisterPage />} />
            </Route>
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/shipping" element={<ShippingPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/placeOrder" element={<OrderPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
