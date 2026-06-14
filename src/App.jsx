import axios  from 'axios';
import {useState,useEffect} from 'react';
import { Routes, Route} from 'react-router';
import { HomePage } from './pages/home/HomePage.jsx';
import { CheckoutPage } from './pages/checkout/CheckoutPage.jsx'
import { OrdersPage } from './pages/orders/OrdersPage.jsx'
import { NotFoundPage } from './pages/NotFoundPage.jsx'
import './App.css';
import { TrackingPage } from './pages/TrackingPage';


function App() {

  const [cart, setCart] = useState([]);

  useEffect(()=>{
    axios.get('/api/cart-items?expand=product').then((responce) => {
    setCart(responce.data)
  });
  },[]);
 

  return (
    <Routes>
      <Route index element={<HomePage  cart={cart} />} />
      <Route path='checkout' element={<CheckoutPage cart={cart}/>}></Route>
      <Route path='orders' element={<OrdersPage cart={cart} />}></Route>
      <Route path='tracking' element={<TrackingPage />}></Route>
      <Route path='*' element={<NotFoundPage />}></Route>
    </Routes>
  );
}

export default App
