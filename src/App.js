import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
