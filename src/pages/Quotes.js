import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import QuoteCard from "../components/reusables/QuoteCard";
import Navigation from "../components/layout/Navigation";
import Modal from "../components/modals/Modal";
import { plans } from "../data";

const Quotes = () => {
  const { car_info, getCarInfo, to_compare } = useContext(GlobalContext);

  const [selected, setselected] = useState(null);

  useEffect(() => {
    console.log(to_compare.length);
    if (to_compare.length > 1) {
      setselected("compare");
    } else {
      setselected(null);
    }
    getCarInfo(); // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="parent">
        <div className="main">
          <Navigation />
          <section className="quote-display">
            <div className="container-fluid">
              <div className="quote-details">
                {/* <div className="row">
                  <div className="col-md-6 col-12">
                    <h4>Motor Insurance Quotes</h4>
                  </div>
                </div> */}
                <div className="row">
                  <div className="col-md-8 col-12">
                    <div className="sm-card">
                      <div className="row">
                        <div className="col-md-4 col-12">
                          <label>MAKE</label>
                          <br />
                          <select>
                            <option>Toyota</option>
                          </select>
                        </div>
                        <div className="col-md-4 col-12">
                          <label>MODEL</label>
                          <br />
                          <select>
                            <option>Toyota</option>
                          </select>
                        </div>
                        <div className="col-md-4 col-12">
                          <label>Fuel</label>
                          <br />
                          <select>
                            <option>Toyota</option>
                          </select>
                        </div>
                        <div className="col-md-4 col-12">
                          <label>Year</label>
                          <br />
                          <select>
                            <option>Toyota</option>
                          </select>
                        </div>
                        <div className="col-md-6 col-12">
                          <label>ESTIMATED VALUE</label>
                          <br />
                          <input type="text" />
                        </div>
                        <div className="col-md-2 col-12">
                          <button>SEARCH</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="offset-md-1 col-md-3 col-12">
                    <div className="enhance">
                      <h6>Enhance my cover</h6>
                      <ul>
                        <li>
                          <label>
                            <input type="checkbox" />
                            &nbsp;&nbsp;<span>Add excess protector</span>
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="checkbox" />
                            &nbsp;&nbsp;<span>Add political violence</span>
                          </label>
                        </li>
                        <li>
                          <label>
                            <input type="checkbox" />
                            &nbsp;&nbsp;<span>Add AA rescue services</span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mb-10">
                {plans.map((p, i) => (
                  <div className="col-md-4 col-12" key={i}>
                    <QuoteCard
                      car_info={car_info}
                      plan={p}
                      setselected={setselected}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
        <Modal selected={selected} setselected={setselected} />
      </div>
    </>
  );
};

export default Quotes;
