import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const UsersBookings = () => {

    const { user } = useContext(AuthContext);

    const [bookings, setBookings] = useState([]);
  
    const url = `http://localhost:5000/bookings?serviceProviderEmail=${user?.email}`;
  
    useEffect(() => {
      fetch(url)
        .then(res => res.json())
        .then(data => {
          setBookings(data);
        });
    }, [url]);
    console.log(bookings);

    return (
        <div>
            <h2>{bookings.length}</h2>
        </div>
    );
};

export default UsersBookings;