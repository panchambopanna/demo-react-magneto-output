import React from "react";
import ButtonComponent from "../Components/FormComponent/Button/Button";

const Coverages = (props) => {
  return (
    <>
      <h3>Coverages View</h3>
      <p> This is the Coverages view of SPA</p>
      <ButtonComponent label={"Continue"} path={"/quote"} />
    </>
  );
};

export default Coverages;
