import { useContext, useEffect, useState } from "react";
import Banner from "../../components/Banner";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthSystem/AuthProvider";


const Appointment = () => {
  const { user } = useContext(AuthContext);
  const [appointments, setAppointments] = useState([]);
  console.log(appointments);


  useEffect(() => {
    fetch(`http://localhost:3000/appointments?email=${user?.email}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (!data.error) {
          setAppointments(data);
        }
      })
  }, [user])

  const handelRemoveAppointment = id => {
    console.log(id);

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        const options = { method: 'DELETE' };
        fetch(`http://localhost:3000/appointments/${id}`, options)
          .then(response => response.json())
          .then(response => {
            console.log(response);
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            const remaining = appointments.filter(appointment => appointment._id !== id);
            setAppointments(remaining);
          })
          .catch(err => console.error(err));
      }
    })
  }

  return (
    <div className="max-w">
      <Banner>My Appointments</Banner>
      <div className="overflow-x-auto mb-16">
        <table className="table w-full">
          {
            appointments.length === 0 ? <h1 className="text-4xl overflow-hidden font-bold">
              😒 No Appointment Found
            </h1>
              : appointments.map(appointment => <tbody key={appointment._id} className="text-2xl">
                <tr className="hover">
                  <td>
                    <button onClick={() => handelRemoveAppointment(appointment._id)} className="btn btn-circle btn-outline">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                  </td>
                  <td>{appointment.service}</td>
                  <td>{appointment.carName}</td>
                  <td>{appointment.price}</td>
                  <td>{appointment.date}</td>
                  <td>Status</td>
                </tr>
              </tbody>)
          }
        </table>
      </div>
    </div>
  );
};

export default Appointment;
