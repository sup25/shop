import {
  Route,
  Routes,
  Outlet
} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";

import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import './App.scss'
const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />

    </div>
  )
}

function App() {
  return (
    /* Routes nest inside one another. Nested route paths build upon
             parent route paths, and nested route elements render inside
             parent route elements. See the note about <Outlet> below. */
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/Product/:id' element={<Product />} />
        <Route path='/Products/:id' element={<Products />} />



      </Route>
    </Routes>

  );
}

export default App;
