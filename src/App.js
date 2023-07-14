import React from "react";
import Nav from "./Navbar";
import "./style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./header";
import CatégorieList from "./Catégories/CatégorieList";
import CatégorieCreat from "./Catégories/CatégorieCreat";
import CatégorieDetails from "./Catégories/CatégorieDetails";
import CatégorieEdit from "./Catégories/CatégorieEdit";

import CommandCreat from "./Commandes/CommandCreate";
import CommandDétails from "./Commandes/CommandDétails";
import CommandEdite from "./Commandes/CommandEdite";
import CommandList from "./Commandes/CommandList";

import ProductCreate from "./Produits/ProductCreate";
import ProductDetails from "./Produits/ProductDetails";
import ProductEdit from "./Produits/ProductEdit";
import ProductList from "./Produits/ProductList";

function App() {
  return (
    <BrowserRouter>
      <div className="row">
        <div className="col-3">
          <Nav />
        </div>

        <div className="col-9 row">
          <div className="col-12">
            <Header />
          </div>

          <div className="col-12">
            <Routes>
              {/* categorie */}
              <Route path="/" element={<CatégorieList />} />
              <Route path="/CatégorieCreat" element={<CatégorieCreat />} />
              <Route path="/CatégorieDetails/:id" element={<CatégorieDetails />} />
              <Route path="/CatégorieEdit/:id" element={<CatégorieEdit />} />
              {/*commende */}
              <Route path="/CommandCreate" element={<CommandCreat />} />
              <Route path="/CommandDétails" element={<CommandDétails />} />
              <Route path="/CommandEdite" element={<CommandEdite />} />
              <Route path="/CommandList" element={<CommandList />} />
              {/*  Produit */}
              <Route path="/ProductCreate" element={<ProductCreate />} />
              <Route path="/ProductDetails/:id" element={<ProductDetails />} />
              <Route path="/ProductEdit/:id" element={<ProductEdit />} />
              <Route path="/ProductList" element={<ProductList />} />
            </Routes>
            <div />
          </div>

          <div>
            <p className="row mt-5 justify-content-center">
              Copyright DEV FS 2022/202
            </p>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
