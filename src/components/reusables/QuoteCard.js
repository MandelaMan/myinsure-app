import React from "react";
import { useHistory } from "react-router-dom";
import apa from "../../images/logos/apa.png";
import { addCommas } from "../../helpers/Functions";

const QuoteCard = ({ plan, car_info, setselected }) => {
  const history = useHistory();

  const basic_premium = () => {
    const value = 0.04 * car_info.value;

    return addCommas(value.toFixed());
  };

  const calculate_excess = (excess) => {
    const value = plan.excess * car_info.value;

    return addCommas(value.toFixed());
  };

  const calculate_pvt = (pvt) => {
    const value = plan.pvt * car_info.value;

    return addCommas(value.toFixed());
  };

  const calculate_phcf = (phcf) => {
    const value = plan.phcf * car_info.value;

    return addCommas(value.toFixed());
  };

  return (
    <div className="single-quote">
      <div className="company-text">
        <div className="logo">
          <img src={apa} alt="" />
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
          Excess protector<span>Ksh {calculate_excess(plan.excess)}</span>
        </li>
        <li>
          Political violence<span>Ksh {calculate_pvt(plan.pvt)}</span>
        </li>
        <li>
          PHCF<span>Ksh {calculate_phcf(plan.phcf)}</span>
        </li>
        <li>
          Excise Duty<span>Ksh 100</span>
        </li>
        <li>
          Levy<span>Ksh {plan.levy}</span>
        </li>
      </ul>
      <div className="compare-buy">
        <div className="compare-btn">
          <button onClick={() => setselected("compare")}>ADD TO COMPARE</button>
        </div>
        <div className="buy">
          <button onClick={() => history.push("/quote/details/plan")}>
            BUY NOW
          </button>
        </div>
      </div>
      {/* <ul>
        <li>
          <div className="cmpny">
            <div className="logo">
              <img src={apa} alt="" />
            </div>
            <div className="text">
              <span>Motor Best Insurance</span>
            </div>
          </div>
        </li>
        <li>
          <h3>Ksh 35,000 /yr.</h3>
        </li>
        <li>
          <ul>
            <li>
              Excess protector<span></span>
            </li>
            <li>
              Political violence<span></span>
            </li>
            <li>
              PHCF<span></span>
            </li>
            <li>
              Levy<span></span>
            </li>
          </ul>
        </li>
        <li>Actions</li>
        <li>Compare</li>
      </ul> */}
    </div>
  );
};

export default QuoteCard;
