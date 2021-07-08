import React from "react";
import { XCircle } from "react-feather";
import apa from "../../../images/logos/apa.png";
import icea from "../../../images/logos/icea.png";
import madison from "../../../images/logos/madison.png";
import aar from "../../../images/logos/aar.png";
import cic from "../../../images/logos/cic.png";
import { plans } from "../../../data";
import { addCommas } from "../../../helpers/Functions";

const ComparisonItem = ({
  setselected,
  item,
  items,
  benefits,
  car_info,
  removeFromComparisonList,
}) => {
  const insuranceLogo = (name) => {
    if (name === "apa") return apa;
    if (name === "madison") return madison;
    if (name === "aar") return aar;
    if (name === "icea") return icea;
    if (name === "cic") return cic;
  };

  const getPlanPremium = () => {
    let plan = {};

    plan = plans.filter((product) => product.code === item.code);

    plan = plan[0];

    const value =
      0.04 * car_info.value +
      (benefits.excess ? plan.excess * car_info.value : 0) +
      (benefits.pvt ? plan.pvt * car_info.value : 0) +
      (benefits.phcf ? plan.phcf * car_info.value : 0) +
      (benefits.aa_rescue ? 5000 : 0) +
      100 +
      40;

    return <>{addCommas(value.toFixed())}</>;
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
            <span>KSH&nbsp;{getPlanPremium()}&nbsp;/yr</span>
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
