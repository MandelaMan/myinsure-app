import React from "react";
import { XCircle } from "react-feather";
import apa from "../../../images/logos/apa.png";

const ComparisonItem = ({ setselected, items }) => {
  return (
    <>
      <div className="item">
        <div className="desc">
          <div className="logo">
            <img src={apa} alt="" />
          </div>
          <div className="name">
            <span>Motor Best Insurance</span>
          </div>
          <div className="price">
            <span>KSH 35,000 /yr</span>
          </div>
        </div>
        <button onClick={() => items < 2 && setselected("")}>
          <XCircle size={15} />
        </button>
      </div>
    </>
  );
};

export default ComparisonItem;
