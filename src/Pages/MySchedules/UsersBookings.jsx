import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import UsersBookingTable from "./UsersBookingTable";

const UsersBookings = () => {
  const { user } = useContext(AuthContext);

  const [bookings, setBookings] = useState([]);

  const url = "http://localhost:5000/bookings";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      });
  }, [url]);
  console.log(bookings);

  const othersBookings = bookings.filter(
    (othersBooking) => user.email === othersBooking.serviceProviderEmail
  );
  console.log(othersBookings);

  return (
    <div>
      <h2 className="text-center text-3xl text-red-600">Others Users Bookings:{othersBookings.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Date</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {othersBookings.map((othersBooking) => (
              <UsersBookingTable key={othersBooking._id} othersBooking={othersBooking}></UsersBookingTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersBookings;
