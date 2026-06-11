import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage';
import {CheckoutPage} from './pages/checkout/Checkoutpage'
import {OrdersPage} from './pages/OrdersPage'
import {NotFoundPage} from './pages/NotFoundPage.jsx' 
import './App.css';
import { TrackingPage } from './pages/TrackingPage';

function App() {
  return (
      <Routes>
       <Route index element={<HomePage />} />
       <Route path='checkout' element={<CheckoutPage />}></Route>
       <Route path='orders' element={<OrdersPage />}></Route>
       <Route path='tracking' element={<TrackingPage/>}></Route>
       <Route path='*' element={<NotFoundPage/>}></Route>
      </Routes>
  );
}

export default App
