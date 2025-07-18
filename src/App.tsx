import React from "react";
import "./App.css";
import { RegisterPage } from "./components/RegisterPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./components/LoginPage";
import { ProductsPage } from "./components/ProductsPage";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { CardDetails } from "./components/CardDetails";
import type { ProductI } from "./interfaces/ProductsI";

function App() {
  const mock: ProductI[] = [
    {
      id: 1,
      name: "Zapatillas Urbanas",
      price: 19999,
      category: "Calzado",
      image:
        "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw706bfcc0/products/TO26277/TO26277-1.JPG",
      labels: ["Nuevo", "Popular"],
    },
    {
      id: 2,
      name: "Remera Oversize",
      price: 8999,
      category: "Ropa",
      image:
        "https://con-actitud.com.ar/wp-content/uploads/2024/03/1-remera-negra-atras.jpg",
      labels: ["Oferta", "Destacado"],
    },
    {
      id: 3,
      name: "Gorra Snapback",
      price: 4999,
      category: "Accesorios",
      image:
        "https://www.newera.com.ar/cdn/shop/files/70557027_9FIFTY_9FIFTY2TONE_CHIBUL_BLK_3QL.jpg?v=1746047092",
    },
    {
      id: 4,
      name: "Campera Impermeable",
      price: 24999,
      category: "Ropa",
      image:
        "https://universoventura.vtexassets.com/arquivos/ids/214140/Campera-Columbia-Watertight-2-Impermeable-Omni-tech-Hombre-Dark-Mountain-1533891-478-1.jpg?v=638630665808100000",
      labels: ["Destacado", "Invierno"],
    },
    {
      id: 5,
      name: "Zapatillas Urbanas",
      price: 19999,
      category: "Calzado",
      image:
        "https://rossettiar.vtexassets.com/arquivos/ids/1800234-800-auto?v=638598502184670000&width=800&height=auto&aspect=true",
      labels: ["Destacado"],
    },
    {
      id: 6,
      name: "Zapatillas Urbanas",
      price: 19999,
      category: "Calzado",
      image:
        "https://production.cdn.vaypol.com/variants/u606i4wryktv5zbbjsin91vht7yx/e82c8d6171dd25bb538f2e7263b5bc7dfc6a79352d85923074be76df53fbc6f4",
      labels: ["Popular"],
    },
  ];

  return (
    <div className="w-full">
      <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
        <header>
          <Navbar />
        </header>
        <main>
          <BrowserRouter>
            <Routes>
              <Route path="/Register" element={<RegisterPage />} />
              <Route path="/Login" element={<LoginPage />} />
              <Route path="/Products" element={<ProductsPage data={mock} />} />
              <Route
                path="/"
                element={
                  <ProductsPage
                    data={mock.filter(
                      (element) =>
                        element.labels?.includes("Popular") ||
                        element.labels?.includes("Destacado")
                    )}
                  />
                }
              />
            </Routes>
          </BrowserRouter>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
