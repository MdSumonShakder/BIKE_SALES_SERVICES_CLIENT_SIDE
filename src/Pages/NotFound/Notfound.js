import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/404.png';



const Notfound = () => {
  return (
    <div>
      <img style={{backgroundColor:'red'}} className=" w-100" src={notfound} alt="" /> <br />
      <Link to="/">
      <button className="mt-5 mb-5 btn btn-warning fw-bolder">Go Back Home</button>
      </Link>
    </div>
  );
};

export default Notfound;