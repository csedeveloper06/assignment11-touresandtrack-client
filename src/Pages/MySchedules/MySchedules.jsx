import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingTable from "./BookingTable";
import { Helmet } from "react-helmet-async";
import UsersBookings from "./UsersBookings";


const MySchedules = () => {
  const { user } = useContext(AuthContext);

  const [bookings, setBookings] = useState([]);

  const url = `https://assignment11-touresandguides-server.vercel.app/bookings?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setBookings(data);
      });
  }, [url]);

  return (
    <div>
      <Helmet>
        <title>ToursNTracks | My Schedules</title>
      </Helmet>
      <h1 className="text-3xl">My Bookings: {bookings.length}</h1>
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
            {
              bookings.map(booking => <BookingTable
                  key={booking._id}
                  booking={booking}
              ></BookingTable>)
            }
          </tbody>
        </table>
      </div>
      <div className="divider">Pending Works</div>
      <div className="overflow-x-auto">
          <UsersBookings></UsersBookings>
      </div>
     
  </div>
  );
};

export default MySchedules;
