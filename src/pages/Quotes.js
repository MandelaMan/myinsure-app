import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import QuoteCard from "../components/reusables/QuoteCard";
import Navigation from "../components/layout/Navigation";
import Modal from "../components/modals/Modal";
import { car_make, plans } from "../data";
import _ from "lodash";

const Quotes = () => {
  const {
    car_info,
    getCarInfo,
    to_compare,
    updateCarInfo,
    clearComparisonList,
  } = useContext(GlobalContext);

  const history = useHistory();

  const { register, handleSubmit } = useForm();

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

  const onSubmit = (data) => {
    clearComparisonList();

    data["phone"] = car_info.phone;

    updateCarInfo(data);

    history.push("/insurance-quotes");
  };

  return (
    <>
      <div className="parent">
        <div className="main">
          <Navigation />
          <section className="quote-display">
            <div className="container-fluid">
              <div className="quote-details">
                <div className="row">
                  <div className="col-md-8 col-12">
                    <form className="sm-card" onSubmit={handleSubmit(onSubmit)}>
                      <div className="row">
                        <div className="col-md-4 col-12">
                          <label>Make</label>
                          <br />
                          <select
                            name="make"
                            ref={register({
                              required: "Please enter password",
                            })}
                          >
                            {car_info.make ? (
                              <option value={car_info.make}>
                                {car_info.make}
                              </option>
                            ) : (
                              <option value="">Select car make</option>
                            )}
                            {car_make.map((m, i) => (
                              <option key={i} value={m.name}>
                                {m.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="col-md-4 col-12">
                          <label>Model</label>
                          <br />
                          <select
                            name="model"
                            ref={register({
                              required: "Please enter password",
                            })}
                          >
                            {car_info.model ? (
                              <option value={car_info.model}>
                                {car_info.model}
                              </option>
                            ) : (
                              <option value="">Select car model</option>
                            )}
                            <option value="Legacy">Legacy</option>
                            <option value="Corolla">Corolla</option>
                            <option value="Forester">Forester</option>
                            <option value="C200">C200</option>
                            <option value="E350">E350</option>
                          </select>
                        </div>
                        <div className="col-md-4 col-12">
                          <label>Fuel</label>
                          <br />
                          <select
                            name="fuel"
                            ref={register({
                              required: "Please enter password",
                            })}
                          >
                            {car_info.fuel ? (
                              <option value={car_info.fuel}>
                                {car_info.fuel}
                              </option>
                            ) : (
                              <option value="">Fuel Type</option>
                            )}
                            <option value="Petrol">Petrol</option>
                            <option value="Diesel">Diesel</option>
                          </select>
                        </div>
                        <div className="col-md-4 col-12">
                          <label>Year</label>
                          <br />
                          <select
                            name="year"
                            ref={register({
                              required: "Please enter password",
                            })}
                          >
                            {car_info.year ? (
                              <option value={car_info.year}>
                                {car_info.year}
                              </option>
                            ) : (
                              <option value="">Year of manufacture</option>
                            )}
                            {_.range(1999, 2021, 1).map((_n, i) => (
                              <option value={_n} key={i}>
                                {car_info.year === _n ? "" : _n}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="col-md-6 col-12">
                          <label>Estimated Value</label>
                          <br />
                          <input
                            type="text"
                            name="value"
                            ref={register({
                              required: "Please enter estimated value",
                            })}
                            placeholder="Car estimated value"
                            defaultValue={car_info.value || ""}
                          />
                        </div>
                        <div className="col-md-2 col-12">
                          <button type="submit">SEARCH</button>
                        </div>
                      </div>
                    </form>
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
