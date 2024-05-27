import { Route, Routes } from 'react-router-dom';
import LoginRegisterPanel from './components/LoginRegisterPanel/LoginRegisterPanel';
import MyShoppingCart from '@components/MyShoppingCart/MyShoppingCart';
import FAQS from '@components/FAQS/FAQS';
import ContactUs from '@components/ContactUs/ContactUs';
import HomePage from './Home/HomePage';
import './index.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login-register' element={<LoginRegisterPanel />} />
        <Route path='/myshoppingcart' element={<MyShoppingCart />} />
        <Route path='/FAQS' element={<FAQS />} />
        <Route path='/CONTACTUS' element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
