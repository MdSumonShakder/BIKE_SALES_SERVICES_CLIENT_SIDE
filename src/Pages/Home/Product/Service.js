import { Link } from 'react-router-dom';
import './Service.css';
import { useHistory } from 'react-router';




const Service = ({ service }) => {
  const { _id, name, img, description, price } = service;
  const history = useHistory();
  const clickedDetails = id => {
    const uri = `/order/${id}`;
    history.push(uri);

  };

  return (
    <div className=" col-lg-4 col-md-6 col-12">
      <div className="service">
        <img className="mb-3" src={img} alt="" />
        <h5 className="text-primary fw-bolder ">{name}</h5>
        <h6>{price}</h6>
        <p>{description}</p>

        <Link to={`/order/${_id}`}>
          <button onClick={() => clickedDetails(_id)} className="btn btn-warning fw-bolder mb-2">Order Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Service;

