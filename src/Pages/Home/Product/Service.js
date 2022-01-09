import { Link } from 'react-router-dom';
import './Service.css';
import { useNavigate } from 'react-router';




const Service = ({ service }) => {
  const { _id, name, img, description, price } = service;
  const navigate = useNavigate();
  const clickedDetails =_id => {
    const uri = `/order/${_id}`;
    navigate(uri);

  };

  return (
    <div className=" col-lg-4 col-md-6 col-12">
      <div className="service text-center">
        <img className="mb-3 img-fluid" src={img} alt="images" />
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

