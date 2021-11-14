import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Order = () => {
  const { key } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    fetch(`https://whispering-basin-37190.herokuapp.com/products/${key}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, [key]);

  return (
    <div className="mt-5 pt-5">
      <h1 className="gum pb-5 text-primary">
        This is OrderDetails ID : {details.id}
      </h1>
      <h3 className="mt-3 text-dark">
        <b className=" text-danger">NAME</b> : {details.name}{" "}
      </h3>
      <small className=" p-5 text-primary">
        <b>Description</b> := {details.description}
      </small>
      <p className="mt-3 text-danger fw-bolder">{details.price}</p>
      <img className="box w-50" src={details.img} alt="" /> <br /> <br />
      <Link to="/home">
        <button className="btn btn-warning mt-3 mb-5 text-dark fw-bold">
          GO HOME
        </button>
      </Link>
    </div>
  );
};

export default Order;
