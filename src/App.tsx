import { Route, Routes } from 'react-router-dom';
import LoginRegisterPanel from './components/LoginRegisterPanel/LoginRegisterPanel';
import MyShoppingCart from '@components/MyShoppingCart/MyShoppingCart';
import FAQS from '@components/FAQS/FAQS';
import ContactUs from '@components/ContactUs/ContactUs';
import HomePage from './Home/HomePage';
import { CartProvider } from '@components/CartContext/CartContext';
import BillingDetails from '@components/BillingDetails';
import './index.css';

function App() {
  return (
    <>
      <CartProvider>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login-register' element={<LoginRegisterPanel />} />
          <Route path='/myshoppingcart' element={<MyShoppingCart />} />
          <Route path='/FAQS' element={<FAQS />} />
          <Route path='/CONTACTUS' element={<ContactUs />} />
          <Route path='/billingDetails' element={<BillingDetails />} />
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;
