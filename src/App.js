
import './Style.css';
import Header from "./components/Header"
import {Routes, Route} from "react-router-dom"
import Photos from "./pages/Photos"
import Cart from "./pages/Cart"

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route  path="/" element={<Photos />} />

        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
