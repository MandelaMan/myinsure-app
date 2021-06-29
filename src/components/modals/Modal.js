import React from "react";
import ComparisonModal from "./comparison/ComparisonModal";

const Modal = ({ selected, setselected }) => {
  return (
    <>
      {selected === "compare" && <ComparisonModal setselected={setselected} />}
    </>
  );
};

export default Modal;
