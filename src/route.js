import React from "react";
import Home from "./views/Home";
import Coverages from "./views/Coverages";
import CustomerInfo from "./views/CustomerInfo";
import DriverInfo from "./views/DriverInfo";
import Quote from "./views/Quote";
import ResidenceInfo from "./views/ResidenceInfo";
import VehicleInfo from "./views/VehicleInfo";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter as Routes, Route } from "react-router-dom";

const PageNav = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/customerInfo">
          <CustomerInfo />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/residenceInfo">
          <ResidenceInfo />
        </Route>
        <Route exact path="/vehicleInfo">
          <VehicleInfo />
        </Route>
        <Route exact path="/driverInfo">
          <DriverInfo />
        </Route>
        <Route exact path="/coverages">
          <Coverages />
        </Route>
        <Route exact path="/quote">
          <Quote />
        </Route>
      </Routes>
    </>
  );
};

export default PageNav;
