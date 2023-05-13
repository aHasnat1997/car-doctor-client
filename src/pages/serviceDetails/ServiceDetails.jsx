import { Link, useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner";
import { useTitle } from "../../hooks/useTitle";


const ServiceDetails = () => {
  useTitle('Service Details');
  const { _id, description, price, title, facility } = useLoaderData();
  return (
    <div className="max-w">
      <Banner>Service Details</Banner>
      <div className="mb-16">
        <div className="flex items-center justify-between">
          <h1 className="text-6xl font-bold">{title}</h1>
          <div className="text-right">
            <p className="text-4xl font-bold">Price: ${price}</p>
            <Link to={`/check_out/${_id}`} className="btn btn-primary btn-lg text-2xl">
              Proceed Appointment
            </Link>
          </div>
        </div>
        <p className="my-4">{description}</p>
        <h3 className="text-4xl font-bold">Facilities</h3>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {
            facility.map((fac, index) => <div key={index} className="p-8 rounded-xl border-2 border-secondary">
              <h3 className="text-2xl font-semibold">{fac.name}</h3>
              <p>{fac.details}</p>
            </div>)
          }
        </div>
      </div>
    </div>
  );
};
export default ServiceDetails;
