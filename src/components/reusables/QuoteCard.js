import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { useHistory } from "react-router-dom";
import { addCommas } from "../../helpers/Functions";

const QuoteCard = ({ plan, car_info, setselected, benefits }) => {
  const { addToComparisonList, to_compare } = useContext(GlobalContext);

  const history = useHistory();

  const replaceSpacewithDash = (name) => {
    return name.replace(/\s/g, "-").toLowerCase();
  };

  const basic_premium = () => {
    const value =
      0.04 * car_info.value +
      (benefits.excess ? plan.excess * car_info.value : 0) +
      (benefits.pvt ? plan.pvt * car_info.value : 0) +
      (benefits.phcf ? plan.phcf * car_info.value : 0) +
      (benefits.aa_rescue ? 5000 : 0) +
      100 +
      40;

    return addCommas(value.toFixed());
  };

  const calculate_excess = (inpt_excess) => {
    const value = inpt_excess * car_info.value;

    return addCommas(value.toFixed());
  };

  const calculate_pvt = (inpt_pvt) => {
    const value = inpt_pvt * car_info.value;

    return addCommas(value.toFixed());
  };

  const calculate_phcf = (inpt_phcf) => {
    const value = inpt_phcf * car_info.value;

    return addCommas(value.toFixed());
  };

  return (
    <div className="single-quote">
      <div className="compare-buy">
        <div className="compare-btn">
          <button
            onClick={() => {
              setselected("compare");
              addToComparisonList(plan.code, plan.name, plan.company.alias);
            }}
            disabled={to_compare.length > 3 ? true : false}
          >
            ADD TO COMPARE
          </button>
        </div>
        <div className="buy">
          <button
            onClick={() =>
              history.push(
                `/insurance-quote/${replaceSpacewithDash(plan.name)}/${
                  plan.code
                }`
              )
            }
          >
            BUY NOW
          </button>
        </div>
      </div>
      <div className="company-text">
        <div className="logo">
          <img src={plan.logo} alt="" />
        </div>
        <div className="text">
          <span>{plan.name}</span>
        </div>
      </div>
      <div className="price-settings">
        <div className="price">
          <h3>
            ksh. {basic_premium()}
            <span>&nbsp;/yr</span>
          </h3>
        </div>
        <div className="best-value"></div>
      </div>
      <ul className="benefits">
        <li>
          Excess protector
          <span className={!benefits.excess ? "strike" : ""}>
            Ksh {calculate_excess(plan.excess)}
          </span>
        </li>
        <li>
          Political violence
          <span className={!benefits.pvt ? "strike" : ""}>
            Ksh {calculate_pvt(plan.pvt)}
          </span>
        </li>
        <li>
          PHCF
          <span className={!benefits.phcf ? "strike" : ""}>
            Ksh {calculate_phcf(plan.phcf)}
          </span>
        </li>
        {benefits.aa_rescue && (
          <li>
            AA Rescue<span>Ksh 5000</span>
          </li>
        )}

        <li>
          Excise Duty<span>Ksh 100</span>
        </li>
        <li>
          Levy<span>Ksh {plan.levy}</span>
        </li>
      </ul>
    </div>
  );
};

export default QuoteCard;
