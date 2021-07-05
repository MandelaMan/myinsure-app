import React from "react";
import { XCircle } from "react-feather";
import apa from "../../../images/logos/apa.png";
import icea from "../../../images/logos/icea.png";
import madison from "../../../images/logos/madison.png";
import aar from "../../../images/logos/aar.png";
import cic from "../../../images/logos/cic.png";

const ComparisonItem = ({
  setselected,
  item,
  items,
  removeFromComparisonList,
  excess,
  pvt,
  aa_rescue,
  phcf,
}) => {
  const insuranceLogo = (name) => {
    if (name === "apa") return apa;
    if (name === "madison") return madison;
    if (name === "aar") return aar;
    if (name === "icea") return icea;
    if (name === "cic") return cic;
  };
  return (
    <>
      <div className="item">
        <div className="desc">
          <div className="logo">
            <img src={insuranceLogo(item.company)} alt="" />
          </div>
          <div className="name">
            <span>{item.name}</span>
          </div>
          <div className="price">
            <span>KSH&nbsp;{item.price}&nbsp;/yr</span>
          </div>
        </div>
        <button
          onClick={() => {
            items < 2 && setselected("");
            removeFromComparisonList(item.code);
          }}
        >
          <XCircle size={15} />
        </button>
      </div>
    </>
  );
};

export default ComparisonItem;
