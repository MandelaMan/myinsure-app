import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "react-feather";
import bg from "../images/bg2.jpg";
import { ntsa_car_data } from "../data";
import { useForm } from "react-hook-form";
import CarDetails from "../components/CarDetails";
import CarFormDetails from "../components/CarFormDetails";
import Loader from "../components/reusables/Loader";
import Navigation from "../components/layout/Navigation";

const Home = () => {
  const [loading, setloading] = useState(false);
  const [carInfo, setcarInfo] = useState({});

  const [step, setstep] = useState(1);

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    setloading(true);

    const result = ntsa_car_data.filter(
      (car) => car.no_plate === data["number_plate"]
    );

    setTimeout(() => {
      if (result.length > 0) {
        setcarInfo(result[0]);
        setstep(2);
      } else {
        errors["number_plate"] = "Number plate does not exist";
      }

      setloading(false);
    }, 2000);
  };

  return (
    <>
      <div className="parent">
        <div className="main">
          <Navigation />
          <div
            className="intro-banner"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${bg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <section className="quote-section">
              <h3 className="title">
                <span>Save upto 30% on Car Insurance.</span>
              </h3>
              <div className="quote-form">
                <h6>
                  I am looking for Car Insurance <Link to="">Need help?</Link>
                </h6>
                {step === 1 && (
                  <>
                    <form
                      className="number-plate-box"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <input
                        type="text"
                        name="number_plate"
                        placeholder="Enter Number Plate (KXX XXX)"
                        disabled={loading ? true : false}
                        ref={register({
                          required: "Please enter number plate",
                          // pattern: {
                          //   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          //   message: "invalid number plate",
                          // },
                        })}
                      />
                      <button type="submit" disabled={loading ? true : false}>
                        {loading ? <Loader /> : "Get Quotes"}
                      </button>
                    </form>
                    <span className="err_msg">
                      {errors.number_plate && errors.number_plate.message}
                    </span>
                    <hr />
                    <div className="no-number-plate-box">
                      <span>OR</span>
                      <button onClick={() => setstep(3)}>
                        Proceed without Number Plate&nbsp;
                        <ArrowRight size={15} />
                      </button>
                    </div>
                  </>
                )}
                {step === 2 && (
                  <CarDetails carInfo={carInfo} setstep={setstep} />
                )}
                {step === 3 && <CarFormDetails setstep={setstep} />}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
