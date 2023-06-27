import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Orders from "./pages/Orders";
import Slides from "./pages/Slides";
import Admin from "./pages/Admin";
import AddCampaign from "./pages/AddCampaign";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/categorias" element={<Categories/>}/>
        <Route path="/produtos" element={<Products/>}/>
        <Route path="/produtos/:id" element={<ProductDetails/>}/>
        <Route path="/meus-pedidos" element={<Orders/>}/>
        <Route path="/slides" element={<Slides/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/admin/campanhas/nova" element={<AddCampaign/>}/>
      </Routes>
    </BrowserRouter>
  )
}