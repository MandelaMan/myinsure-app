import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { useHistory } from "react-router-dom";
import { addCommas } from "../../helpers/Functions";

const QuoteCard = ({ plan, car_info, setselected }) => {
  const { addToComparisonList, to_compare, excess, pvt, aa_rescue, phcf } =
    useContext(GlobalContext);

  const history = useHistory();

  const basic_premium = () => {
    const value =
      0.04 * car_info.value +
      (excess ? plan.excess * car_info.value : 0) +
      (pvt ? plan.pvt * car_info.value : 0) +
      (phcf ? plan.phcf * car_info.value : 0) +
      (aa_rescue ? 5000 : 0) +
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
              addToComparisonList(
                plan.code,
                plan.name,
                basic_premium(),
                plan.company
              );
            }}
            disabled={to_compare.length > 3 ? true : false}
          >
            ADD TO COMPARE
          </button>
        </div>
        <div className="buy">
          <button onClick={() => history.push("/quote/details/plan")}>
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
            ksh {basic_premium()} /<span>yr.</span>
          </h3>
        </div>
        <div className="best-value"></div>
      </div>
      <ul className="benefits">
        <li>
          Excess protector
          <span className={!excess ? "strike" : ""}>
            Ksh {calculate_excess(plan.excess)}
          </span>
        </li>
        <li>
          Political violence
          <span className={!pvt ? "strike" : ""}>
            Ksh {calculate_pvt(plan.pvt)}
          </span>
        </li>
        <li>
          PHCF
          <span className={!phcf ? "strike" : ""}>
            Ksh {calculate_phcf(plan.phcf)}
          </span>
        </li>
        {aa_rescue && (
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
