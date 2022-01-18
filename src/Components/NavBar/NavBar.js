import React from "react";
import ButtonComponent from "../FormComponent/Button/Button";
import "./NavBar.css";

const NavBar = () => {
  const formTabs = [
    "Customer Info",
    "Residence Info",
    "Vehicle Info",
    "Driver Info",
    "Coverages",
    "Quote"
  ];
  const convertFormLink = (str) => {
    return (
      "/" +
      str
        .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
          return index === 0 ? word.toLowerCase() : word.toUpperCase();
        })
        .replace(/\s+/g, "")
    );
  };
  return (
    <>
      <nav className="tabs">
        {formTabs.map((tab, index) => (
          <span className="tabItem" key={index}>
            <ButtonComponent
              className="navButton"
              label={tab}
              path={convertFormLink(tab)}
            />
          </span>
        ))}
      </nav>
    </>
  );
};

export default NavBar;
