import React, { useContext } from "react";
import car from "../images/car.png";
import { GlobalContext } from "../context/GlobalState";
import { ArrowRight, ChevronDown, HelpCircle } from "react-feather";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const CarDetails = ({ carInfo, setstep }) => {
  const { updateCarInfo } = useContext(GlobalContext);

  const history = useHistory();

  const { handleSubmit } = useForm();
  // const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
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
            Details for <b>{carInfo.no_plate}</b>
          </p>
        </div>
        <div className="details">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 col-12">
                <h4>
                  <span>
                    Car Details&nbsp;
                    <ChevronDown size={13} />
                  </span>
                  <br />
                  {carInfo.make}&nbsp;{carInfo.model},&nbsp;{carInfo.fuel}
                </h4>
              </div>
              <div className="col-md-2 col-12">
                <h4>
                  <span>
                    Year&nbsp;
                    <ChevronDown size={13} />
                  </span>
                  <br />
                  {carInfo.year}
                </h4>
              </div>
              <div className="col-md-4 col-12">
                <h4>
                  <span>
                    Estimated value&nbsp;
                    <ChevronDown size={13} />
                  </span>
                  <br />
                  Ksh&nbsp;{carInfo.value}
                </h4>
              </div>
            </div>
          </div>
        </div>
        <form className="car-details-form" onSubmit={handleSubmit(onSubmit)}>
          <input type="text" name="mobile" placeholder="Enter mobile number" />
          <button>
            SHOW ME QUOTES&nbsp;
            <ArrowRight size={18} />
          </button>
        </form>
        <button className="not-my-car" onClick={() => setstep(3)}>
          Did we get it wrong&nbsp;
          <HelpCircle size={12} />
        </button>
      </div>
    </>
  );
};

export default CarDetails;
