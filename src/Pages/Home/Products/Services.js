import React, { useEffect, useState } from 'react';
import Service from '../Product/Service';
import './Services.css';



const Services = () => {
  const [services, setServices] = useState([]);
  const [page,setPage]=useState(0);
  const size=6;
  useEffect(() => {
    fetch(`https://protected-temple-26182.herokuapp.com/products?page=${page}&&size=${size}`)
      .then(res => res.json())
      .then(data =>{
        setServices(data.products);
        const count=data.count;
        const pageNumber=Math.ceil(count/size);
        setPage(pageNumber);
      });
     
  }, [page]);


  
  return (
    <div id="services" className="container mb-5 mt-5">
      <div className="container">
        <div className="row">
          <h1 className="gum mb-5 fw-bolder pb-5 text-center">Our Latest Products</h1>
          {
            services.map(service => <Service

              key={service._id}
              service={service}

            ></Service>)
          }

        </div>

      </div>
    </div>
  );
};

export default Services;