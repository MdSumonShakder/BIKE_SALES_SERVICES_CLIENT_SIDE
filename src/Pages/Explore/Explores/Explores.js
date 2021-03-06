import React, { useEffect, useState } from "react";
import Explore from "./../Explore/Explore";

const Explores = () => {
  const [explores, setExplores] = useState([]);
  useEffect(() => {
    fetch('https://protected-temple-26182.herokuapp.com/products')
      .then((res) => res.json())
      .then((data) => setExplores(data.products));
  }, [explores]);

  return (
    <div className="container mb-5 mt-5">
      <div className="container">
        <div className="row">
          <h1 className="gum mt-5 mb-5 fw-bolder pb-5 text-center">Our Top 12 Latest Bike</h1>
          {explores.map((explore) => (
            <Explore key={explore._id} explore={explore}></Explore>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explores;
