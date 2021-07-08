import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../../context/GlobalState";
import ComparisonItem from "./ComparisonItem";
// import { useHistory } from "react-router-dom";
import { ChevronDown } from "react-feather";

const ComparisonModal = ({ setselected }) => {
  const {
    getComparisonList,
    to_compare,
    removeFromComparisonList,
    inc_benefits,
    car_info,
  } = useContext(GlobalContext);

  // const history = useHistory();

  useEffect(() => {
    getComparisonList(); // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="overlay compare">
        <div className="comparison-list">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-2 title-btn">
                <h4>To Compare</h4>
              </div>
              <div className="col-md-8">
                <div className="comparison-item">
                  {to_compare.map((c, i) => (
                    <ComparisonItem
                      key={i}
                      setselected={setselected}
                      item={c}
                      benefits={inc_benefits}
                      car_info={car_info}
                      items={to_compare.length}
                      removeFromComparisonList={removeFromComparisonList}
                    />
                  ))}
                </div>
              </div>
              <div className="col-md-2 title-btn">
                {/* <button onClick={() => history.push("/compare")}> */}
                <button>
                  Compare <ChevronDown size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComparisonModal;
