import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/services')
      .then(response => response.json())
      .then(response => setServices(response))
      .catch(err => console.error(err));
  }, [])

  // console.log(services);

  return (
    <div id="services" className="max-w my-8">
      <div className="text-center">
        <h3 className='text-primary font-extrabold text-2xl'>Services</h3>
        <h1 className="text-5xl font-bold">Our Service Area</h1>
        <p className="py-6 w-1/2 mx-auto">The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</p>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {
          services.map(service => <div key={service._id}>
            <div className="card h-full bg-base-100 shadow-xl overflow-hidden">
              <img src={service.img} alt="Shoes" className="h-60" />
              <div className="card-body">
                <h2 className="card-title text-4xl">{service.title}</h2>
                <div className="card-actions justify-end items-center">
                  <p className="text-2xl">Price: {service.price}$</p>
                  <Link to={`/service_details/${service._id}`} className="btn border-0 text-primary hover:bg-transparent hover:text-secondary text-2xl">
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>)
        }
      </div>
    </div>
  );
};

export default Services;
