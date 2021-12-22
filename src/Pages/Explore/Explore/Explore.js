import { Link } from 'react-router-dom';
import './Explore.css';
import { useNavigate } from 'react-router';



const Explore = ({ explore }) => {
  const { _id, name, img, description, price } = explore;
  const navigate = useNavigate();
  const clickedDetails = id => {
    const uri = `/order/${id}`;
    navigate.push(uri);
    
   
  }

  return (
    <div className=" col-lg-4 col-md-6 col-12">
      <div className="explore">
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

export default Explore;