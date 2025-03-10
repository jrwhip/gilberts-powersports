// src/components/layout-special.js
import React from "react";
import Header from "./Example";
import Footer from "./footer";

const LayoutSpecial = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutSpecial;
