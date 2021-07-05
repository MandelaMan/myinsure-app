import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import { ChevronLeft } from "react-feather";
import Navigation from "../components/layout/Navigation";
import Modal from "../components/modals/Modal";
import { ChevronDown } from "react-feather";
import apa from "../images/logos/apa.png";

const Quote = () => {
  const [activeAccordion, setactiveAccordion] = useState(1);

  const { getCarInfo } = useContext(GlobalContext);

  useEffect(() => {
    getCarInfo(); // eslint-disable-next-line
  }, []);

  const accordion = [
    { text: "Summary" },
    { text: "Details" },
    { text: "More Features" },
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
                      <div className="intro-section review">Review</div>
                      <div className="intro-section buy">
                        <button>PURCHASE</button>
                      </div>
                    </div>
                    <div className="quote-summary">
                      <ul>
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
                        <div className="details px-4">I will show details</div>
                      )}
                      {activeAccordion === 2 && (
                        <div className="details px-4">I will show details</div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-12">
                  <div className="quote-content p-3">
                    <h6>
                      {/* <span>Vehicle information</span> */}
                      <span>Information</span>
                      <button>
                        <ChevronDown size={15} />
                      </button>
                    </h6>
                  </div>
                  <div className="quote-content p-3">
                    <h6>
                      {/* <span>About the company</span> */}
                      <span>Information</span>
                      <button>
                        <ChevronDown size={15} />
                      </button>
                    </h6>
                  </div>
                  <div className="quote-content">
                    <h6 className="p-3">
                      {/* <span>Customer reviews</span> */}
                      <span>Information</span>
                    </h6>
                    <ul className="client-review">
                      <li></li>
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
