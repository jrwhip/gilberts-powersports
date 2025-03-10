import React from "react";
import Header from "../components/Example";
import Footer from "../components/Footer";

import "../styles/segway-layout.css";

const SegwayLayout = ({ children }) => {
  return (
    <div className="segway-layout">
      <Header />
      <main className="segway-main">{children}</main>
      <Footer />
    </div>
  );
};

export default SegwayLayout;
