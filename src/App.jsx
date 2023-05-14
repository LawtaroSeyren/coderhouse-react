import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./components/Error404/Error404";
import './App.css'
import { CartProvider } from "./components/context/CartContext";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <div className="container">
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/category/:idCategory" element={<ItemListContainer />} />
              <Route path="/item/:idCategory/:idItem" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart/>} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </div>
        </CartProvider>
      </BrowserRouter>

    </>
  );
}

export default App;