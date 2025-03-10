import * as React from "react";
import SegwayLayout from "../components/segway-layout";
import SiteNavbar from "../components/site-navbar/site-navbar";

const Home = () => {
  return (
    <>
      <SiteNavbar section="repair" />
      <SegwayLayout>
        <div>
          <h1>Segway</h1>
          <p>Welcome to the McCormick page.</p>
        </div>
      </SegwayLayout>
    </>
  );
};

export default Home;
