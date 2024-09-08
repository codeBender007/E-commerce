// import './App.css';
// import Navigation from "./customers/components/Navigation/Navigation"
// import Footer from './customers/components/Footer/Footer';
// import HomePage from './customers/Pages/HomePage/HomePage';
// import Product from './customers/components/Product/Product';
// import ProductDetails  from './customers/components/ProductDetails/ProductDetails';
// import Cart from "./customers/components/Cart/Cart";
// import Checkout from "./customers/components/Checkout/Checkout";
// import Order from "./customers/components/Order/Order";
// import OrderDetails from "./customers/components/Order/OrderDetails";
import AdminRouters from "./Routers/AdminRouters";
import CustomerRouters from "./Routers/CustomerRouters";
import { Routes , Route } from "react-router-dom"


function App() {
  return (
    <div className="App">
      

      <Routes>
        <Route path="/*" element={<CustomerRouters/>}></Route>
        <Route path="/admin/*" element={<AdminRouters/>} ></Route>
      </Routes>

    </div>
  );
}

export default App;


