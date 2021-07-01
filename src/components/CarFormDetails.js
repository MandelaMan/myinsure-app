import React, { useContext } from "react";
import car from "../images/car.png";
import { GlobalContext } from "../context/GlobalState";
import { car_make } from "../data";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import _ from "lodash";

const CarFormDetails = () => {
  const { updateCarInfo, car_info, clearComparisonList } =
    useContext(GlobalContext);

  const history = useHistory();

  const { register, handleSubmit } = useForm();
  // const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    clearComparisonList();

    console.log(data);

    updateCarInfo(data);

    history.push("/insurance-quotes");
  };

  return (
    <>
      <div className="car-details">
        <div className="details-intro">
          <div className="intro-img">
            <img src={car} alt="" />
          </div>
          <p>
            <b>Fill in the information about your vehicle</b>
          </p>
        </div>
        <form className="car-input-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4 col-12">
                <select
                  name="make"
                  ref={register({
                    required: "Please enter password",
                  })}
                >
                  {car_info.make ? (
                    <option value={car_info.make}>{car_info.make}</option>
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
                <select
                  name="model"
                  ref={register({
                    required: "Please enter password",
                  })}
                >
                  {car_info.model ? (
                    <option value={car_info.model}>{car_info.model}</option>
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
            </div>
            <div className="row">
              <div className="col-md-4 col-12">
                <select
                  name="year"
                  ref={register({
                    required: "Please enter password",
                  })}
                >
                  {car_info.year ? (
                    <option value={car_info.year}>{car_info.year}</option>
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
              <div className="col-md-4 col-12">
                <select
                  name="fuel"
                  ref={register({
                    required: "Please enter password",
                  })}
                >
                  {car_info.fuel ? (
                    <option value={car_info.fuel}>{car_info.fuel}</option>
                  ) : (
                    <option value="">Fuel Type</option>
                  )}
                  <option value="Petrol">Petrol</option>
                  <option value="Diesel">Diesel</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8 col-12">
                <input
                  type="text"
                  name="value"
                  ref={register({
                    required: "Please enter password",
                  })}
                  placeholder="Car estimated value"
                  defaultValue={car_info.value || ""}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-8 col-12">
                <input
                  type="text"
                  name="mobile"
                  ref={register({
                    required: "Please enter password",
                  })}
                  placeholder="Enter mobile number"
                  defaultValue={car_info.mobile}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-8 col-12">
                <button type="submit">SHOW ME QUOTES</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CarFormDetails;
