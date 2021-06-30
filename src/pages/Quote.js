import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import Navigation from "../components/layout/Navigation";
import Modal from "../components/modals/Modal";

const Quote = () => {
  const { getCarInfo } = useContext(GlobalContext);

  useEffect(() => {
    getCarInfo(); // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="parent">
        <div className="main">
          <Navigation />
          <section className="quote-display">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-8 col-12">Quote details</div>
                <div className="col-md-4 col-12">About the company</div>
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
