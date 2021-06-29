import React from "react";
import ComparisonItem from "./ComparisonItem";
import { useHistory } from "react-router-dom";
import { ChevronDown } from "react-feather";

const ComparisonModal = ({ setselected }) => {
  const history = useHistory();

  const items = [{}, {}, {}, {}];

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
                  {items.map((c, i) => (
                    <ComparisonItem setselected={setselected} items={items} />
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