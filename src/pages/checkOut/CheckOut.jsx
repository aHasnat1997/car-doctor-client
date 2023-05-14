import { useLoaderData, useNavigate } from "react-router-dom";
import Banner from "../../components/Banner";
import { useTitle } from "../../hooks/useTitle";
import { useContext } from "react";
import { AuthContext } from "../../AuthSystem/AuthProvider";
import Swal from "sweetalert2";


const CheckOut = () => {
  useTitle('Check Out');
  const { user } = useContext(AuthContext);
  const { price, title } = useLoaderData();
  const navigate = useNavigate();


  const handelAppointment = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const service = form.service.value;
    const price = form.price.value;
    const date = form.date.value;
    const carName = form.carName.value;
    const appointment = { name, email, service, price, date, carName };

    console.log(appointment);


    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(appointment)
    };

    fetch('http://localhost:3000/appointments', options)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        if (response.insertedId) {
          Swal.fire({
            icon: 'success',
            title: '🎉 Appointment fixed Successfully',
          })
          navigate('/appointments');
        }
      })
      .catch(err => {
        Swal.fire({
          icon: 'error',
          title: '⛔ Oops...',
          text: err.message
        });
        console.error(err.message);
      });

  }

  return (
    <div className="max-w">
      <Banner>Check Out</Banner>
      <form onSubmit={handelAppointment} className="mb-16 w-full">
        <div className="flex items-center gap-4 my-4">
          <div className="flex items-center flex-1">
            <label htmlFor="name" className="border-2 p-3 rounded-s-xl bg-secondary">User</label>
            <input type="text" name="name" id="name" value={user.displayName} className="input input-bordered rounded-s-none w-full" readOnly />
          </div>
          <div className="flex items-center flex-1">
            <label htmlFor="email" className="border-2 p-3 rounded-s-xl bg-secondary">Email</label>
            <input type="email" name="email" id="email" value={user.email} className="input input-bordered rounded-s-none w-full" readOnly />
          </div>
        </div>
        <div className="flex items-center gap-4 my-4">
          <div className="flex items-center flex-1">
            <label htmlFor="service" className="border-2 p-3 rounded-s-xl bg-secondary">Service</label>
            <input type="text" name="service" id="service" value={title} className="input input-bordered rounded-s-none w-full" readOnly />
          </div>
          <div className="flex items-center flex-1">
            <label htmlFor="price" className="border-2 p-3 rounded-s-xl bg-secondary">Price</label>
            <input type="text" name="price" id="price" value={price} className="input input-bordered rounded-s-none w-full" readOnly />
          </div>
        </div>
        <div className="flex items-center gap-4 my-4">
          <div className="flex items-center flex-1">
            <label htmlFor="date" className="border-2 p-3 rounded-s-xl bg-secondary">Date</label>
            <input type="date" name="date" id="date" className="input input-bordered rounded-s-none w-full" required />
          </div>

          <div className="flex items-center flex-1">
            <label htmlFor="carName" className="border-2 p-3 rounded-s-xl bg-secondary">Car</label>
            <input type="text" name="carName" id="carName" placeholder="Car Model" className="input input-bordered rounded-s-none w-full"  required/>
          </div>
        </div>
        <input type="submit" className="w-full btn btn-primary" value="Order Appointment" />
      </form>
    </div>
  );
};

export default CheckOut;
