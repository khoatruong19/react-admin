import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/home/Homepage";
import {Routes, Route} from "react-router-dom"
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";

function App() {
  return (
    <div className="App">
       <Topbar/>
       <div style={{display:"flex", marginTop:"10px"}}>
          <Sidebar/>
          <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/users" element={<UserList/>}/>
            <Route path="/user/:userId" element={<User/>}/>
            <Route path="/newUser" element={<NewUser/>}/>
            <Route path="/products" element={<ProductList/>}/>
            <Route path="/product/:productId" element={<Product/>}/>
            <Route path="/newProduct" element={<NewProduct/>}/>
          </Routes>
       </div>
    </div>
  );
}

export default App;
