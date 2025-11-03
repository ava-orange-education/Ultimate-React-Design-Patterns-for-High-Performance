import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./views/products/Products";
import AddProduct from "./views/products/AddProduct";
import EditProduct from "./views/products/EditProduct";
import DeleteProduct from "./views/products/DeleteProduct";
import ViewProduct from "./views/products/ViewProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/products">
          <Route index element={<Products />} />
          <Route path="add" element={<AddProduct />} />
          <Route path=":id/edit" element={<EditProduct />} />
          <Route path=":id/delete" element={<DeleteProduct />} />
          <Route path=":id" element={<ViewProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
