import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import {
  ChevronLeft,
  Check,
  ChevronDown,
  X,
  Star,
  HelpCircle,
} from "react-feather";
import Navigation from "../components/layout/Navigation";
import Modal from "../components/modals/Modal";
import apa from "../images/logos/apa.png";

const Quote = () => {
  const [activeAccordion, setactiveAccordion] = useState(1);

  const { getCarInfo, excess, pvt, aa_rescue, phcf } =
    useContext(GlobalContext);

  useEffect(() => {
    getCarInfo(); // eslint-disable-next-line
  }, []);

  const accordion = [
    { text: "Summary" },
    { text: "Benefits" },
    { text: "Details" },
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
                  <Link to="/insurance-quotes">
                    <ChevronLeft size={15} />
                    Back to quotes
                  </Link>
                </div>
              </div>
              <div className="row specific-quote">
                <div className="col-md-8 col-12">
                  <div className="quote-content">
                    <div className="quote-intro p-3 mb-1">
                      <div className="intro-section logo">
                        <img src={apa} alt="" />
                      </div>
                      <div className="intro-section review">
                        <h6>Comprehensive Best Plan</h6>
                        <ul>
                          <li>
                            <Star
                              size={18}
                              style={{
                                color: "#ffdf00",
                              }}
                            />
                          </li>
                          <li>
                            <Star size={18} style={{ color: "#ffdf00" }} />
                          </li>
                          <li>
                            <Star size={18} style={{ color: "#ffdf00" }} />
                          </li>
                          <li>
                            <Star size={18} style={{ color: "#ffdf00" }} />
                          </li>
                          <li>
                            <Star size={18} style={{ color: "#ffdf00" }} />
                          </li>
                          <li>
                            <span>4 of 5 based on user reviews</span>
                          </li>
                        </ul>
                      </div>
                      <div className="intro-section buy">
                        <p>
                          KSH&nbsp;1,734,000<span>/yr</span>.
                        </p>
                        <button>PURCHASE</button>
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
                            <li>From 05/07/2021 valid through to 05/07/2022</li>
                          </ul>
                          <h6>COVER DETAILS</h6>
                          <ul>
                            <li>
                              {excess ? (
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
                            <li>
                              {pvt ? (
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
                            <li>
                              {phcf ? (
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
                            <li>
                              {aa_rescue ? (
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
                        <div className="details">I will show details</div>
                      )}
                    </div>
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
                  </div>
                  <div className="quote-content p-3">
                    <h6>
                      <span>About the company</span>
                      {/* <span>Information</span> */}
                      <button>
                        <ChevronDown size={15} />
                      </button>
                    </h6>
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
