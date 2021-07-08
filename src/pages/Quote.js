import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import {
  Check,
  ChevronDown,
  X,
  Star,
  HelpCircle,
  CornerUpLeft,
} from "react-feather";
import Navigation from "../components/layout/Navigation";
import Modal from "../components/modals/Modal";
import star from "../images/icons/star.png";
// import hit from "../images/icons/hit.png";
// import crash from "../images/icons/crash.png";
import { plans } from "../data";
import { addCommas } from "../helpers/Functions";
import _ from "lodash";

const Quote = (props) => {
  const [activeAccordion, setactiveAccordion] = useState(1);

  const { getCarInfo, car_info, inc_benefits } = useContext(GlobalContext);

  const [plan_info, setplan_info] = useState({});

  const getPlanDetails = (code) => {
    let element = { name: code };
    const exists = plans.some((item) => item.code === element.name);

    if (
      car_info.make !== null &&
      car_info.model !== null &&
      car_info.year !== null &&
      car_info.fuel !== null &&
      car_info.value !== null &&
      car_info.mobile !== null &&
      exists
    ) {
      let plan = {};

      plan = plans.filter((product) => product.code === code);

      plan = plan[0];

      setplan_info(plan);
    }
  };

  const getPremium = () => {
    const value =
      0.04 * car_info.value +
      (inc_benefits.excess ? plan_info.excess * car_info.value : 0) +
      (inc_benefits.pvt ? plan_info.pvt * car_info.value : 0) +
      (inc_benefits.phcf ? plan_info.phcf * car_info.value : 0) +
      (inc_benefits.aa_rescue ? 5000 : 0) +
      100 +
      40;

    return <>{addCommas(value.toFixed())}</>;
  };

  useEffect(() => {
    getCarInfo();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setTimeout(function () {
      getPlanDetails(props.match.params.details);
    }, 100);

    // eslint-disable-next-line
  }, [car_info]);

  console.log(plan_info.covered);

  const accordion = [
    { text: "Summary" },
    { text: "Details" },
    { text: "Discounts" },
  ];

  return (
    <>
      <div className="parent">
        <div className="main">
          <Navigation />
          <section className="quote-display">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 col-12 mt-10">
                  <br />
                  <Link to="/car-insurance">
                    <CornerUpLeft size={15} />
                    &nbsp;Change Insurer
                  </Link>
                </div>
              </div>
              <div className="row specific-quote">
                <div className="col-md-8 col-12">
                  <div className="quote-content py-2">
                    <div className="quote-intro p-3 mb-1">
                      <div className="intro-section logo">
                        <img src={plan_info.logo} alt="" />
                      </div>
                      <div className="intro-section review">
                        <h6>{plan_info.name}</h6>
                        <ul>
                          {_.range(0, 0 + plan_info.review, 1).map((_n, i) => (
                            <li>
                              <img src={star} alt="" />
                            </li>
                          ))}
                          {_.range(0, 5 - plan_info.review, 1).map((_n, i) => (
                            <li>
                              <Star size={18} style={{ color: "#ffdf00" }} />
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="intro-section buy">
                        {/* <p>
                          KSH&nbsp;{getPremium()}
                          <span>/yr</span>.
                        </p> */}
                        <button>
                          BUY NOW
                          <br />
                          <b>
                            <span className="year">ksh.</span>
                            <span className="price">&nbsp;{getPremium()}</span>
                            <span className="year">/yr</span>
                          </b>
                        </button>
                      </div>
                    </div>
                    <div className="quote-summary">
                      <ul className="intro-ul">
                        {accordion.map((a, i) => (
                          <li>
                            <button
                              className={activeAccordion === i + 1 && `active`}
                              onClick={() => setactiveAccordion(i + 1)}
                            >
                              {a.text}
                            </button>
                          </li>
                        ))}
                      </ul>
                      {activeAccordion === 1 && (
                        <div className="details">
                          <h6>COVER DURATION</h6>
                          <ul>
                            <li>Valid from 05/07/2021 through to 05/07/2022</li>
                          </ul>
                          <h6>COVER DETAILS</h6>
                          <ul>
                            <li className={!inc_benefits.excess && "excluded"}>
                              {inc_benefits.excess ? (
                                <Check
                                  size={17}
                                  strokeWidth={"3px"}
                                  style={{ color: "green" }}
                                />
                              ) : (
                                <X
                                  size={17}
                                  strokeWidth={"3px"}
                                  style={{ color: "red" }}
                                />
                              )}
                              &nbsp;&nbsp;Added Excess protector&nbsp;
                              <span>
                                <HelpCircle
                                  size={12}
                                  style={{ color: "#5e6a74" }}
                                />
                              </span>
                            </li>
                            <li className={!inc_benefits.pvt && "excluded"}>
                              {inc_benefits.pvt ? (
                                <Check
                                  size={17}
                                  strokeWidth={"3px"}
                                  style={{ color: "green" }}
                                />
                              ) : (
                                <X
                                  size={17}
                                  strokeWidth={"3px"}
                                  style={{ color: "red" }}
                                />
                              )}
                              &nbsp;&nbsp;Added political violence&nbsp;
                              <span>
                                <HelpCircle
                                  size={12}
                                  style={{ color: "#5e6a74" }}
                                />
                              </span>
                            </li>
                            <li className={!inc_benefits.phcf && "excluded"}>
                              {inc_benefits.phcf ? (
                                <Check
                                  size={17}
                                  strokeWidth={"3px"}
                                  style={{ color: "green" }}
                                />
                              ) : (
                                <X
                                  size={17}
                                  strokeWidth={"3px"}
                                  style={{ color: "red" }}
                                />
                              )}
                              &nbsp;&nbsp;Added PHCF&nbsp;
                              <span>
                                <HelpCircle
                                  size={12}
                                  style={{ color: "#5e6a74" }}
                                />
                              </span>
                            </li>
                            <li
                              className={!inc_benefits.aa_rescue && "excluded"}
                            >
                              {inc_benefits.aa_rescue ? (
                                <Check
                                  size={17}
                                  strokeWidth={"3px"}
                                  style={{ color: "green" }}
                                />
                              ) : (
                                <X
                                  size={17}
                                  strokeWidth={"3px"}
                                  style={{ color: "red" }}
                                />
                              )}
                              &nbsp;&nbsp;Added AA Rescue&nbsp;
                              <span>
                                <HelpCircle
                                  size={12}
                                  style={{ color: "#5e6a74" }}
                                />
                              </span>
                            </li>
                          </ul>
                        </div>
                      )}
                      {activeAccordion === 2 && (
                        <div className="details">
                          <div className="container-fluid">
                            <div className="row">
                              <div className="col-md-6 col-12">
                                <h6>
                                  <u>What is coverd?</u>
                                </h6>
                                <ul>
                                  {plan_info.covered.map((c, i) => (
                                    <li key={i}>
                                      <Check
                                        size={17}
                                        strokeWidth={"3px"}
                                        style={{ color: "green" }}
                                      />
                                      &nbsp;{c}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="col-md-6 col-12">
                                <h6>
                                  <u>What is NOT coverd?</u>
                                </h6>
                                <ul>
                                  {plan_info.not_covered.map((c, i) => (
                                    <li key={i} className="excluded">
                                      <X
                                        size={17}
                                        strokeWidth={"3px"}
                                        style={{ color: "red" }}
                                      />
                                      &nbsp;{c}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    {/* <div className="claims-support">
                      <div className="intro-imgs">
                        <img src={hit} alt="" />
                        <span></span>
                        <img src={crash} alt="" />
                      </div>
                      <div className="claims-text">We offer claim support</div>
                      <button>Reach out to us</button>
                    </div> */}
                  </div>
                </div>
                <div className="col-md-4 col-12">
                  <div className="quote-content p-3">
                    <h6>
                      <span>Vehicle information</span>
                      {/* <span>Information</span> */}
                      <button>
                        <ChevronDown size={15} />
                      </button>
                    </h6>
                    {car_info.make}
                  </div>
                  <div className="quote-content p-3">
                    <h6>
                      <span>About the company</span>
                      {/* <span>Information</span> */}
                      <button>
                        <ChevronDown size={15} />
                      </button>
                    </h6>
                    {/* <p>{plan_info.company.description}</p> */}
                  </div>
                  <div className="quote-content">
                    <h6 className="p-3">
                      <span>Customer reviews</span>
                      {/* <span>Information</span> */}
                    </h6>
                    <ul className="client-review">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Modal />
      </div>
    </>
  );
};

export default Quote;
