import React from "react";
import "./style.css";
import ItemResult from "../ItemResult/ItemResult";
import Spinner from "../../Spinner/Spinner";

function ContainerResults({ results, isLoading, filteredList, isClicked }) {  
  
  // we check if the results are loading or not
  if (!isLoading) {
    return <Spinner />; 
  } else if (isClicked && filteredList.length === 0) {
    return (
      <div>
        {" "}
        <i>Couldn't be found any results.</i>{" "}
      </div> 
    );
  }
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th className="col-3 ps-5">ID</th>
            <th className="col-2">PRICE</th>
            <th className="col-2">QTY</th>
            <th className="col-3">QUOTEQTY</th>
            <th className="col-2 ms-5">TIME</th>
          </tr>
        </thead>
        {isClicked
          ? filteredList
              .slice(0, 8)
              .map((result, index) => (
                <ItemResult result={result} key={index} />
              ))
          : results
              .slice(0, 8)
              .map((result, index) => (
                <ItemResult result={result} key={index} isLoading={isLoading} />
              ))}
      </table>
    </div>
  );
}

export default ContainerResults;
