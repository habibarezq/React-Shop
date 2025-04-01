// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import NavBar from "./components/NavBar";
// import FetchProds from "./components/FetchProds";
// import CartPage from "./components/CartPage";
// import AddProduct from "./components/AddProduct";

// function App() {
//     return (
//         <Router>
//             <NavBar />
//             <Routes>
//                 {/* Set FetchProds as the homepage */}
//                 <Route path="/" element={<FetchProds />} />
//                 <Route path="/cart" element={<CartPage />} />
//                 <Route path="/add-product" element={<AddProduct />} />
//             </Routes>
//         </Router>
//     );
// }

// export default App;

import { ImportExport } from '@mui/icons-material';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AuthPage from './components/AuthPage';
import SignInPage from './components/SignInPage';
import React from "react";
import NavBar from "./components/NavBar";
import FetchProds from "./components/FetchProds";
import CartPage from "./components/CartPage";
import AddProduct from "./components/AddProduct";

function App() {
  return (
    <div>

      <Router>
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="/SignIn" element={<SignInPage />} />
          <Route path="/home" element={<FetchProds />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/add-product" element={<AddProduct />} />
        </Routes>

      </Router>
    </div>


  );
}

export default App;