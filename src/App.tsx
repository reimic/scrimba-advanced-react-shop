import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Photos />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
