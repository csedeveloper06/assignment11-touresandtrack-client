import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import ManageTable from "./ManageTable";


const ManageServices = () => {

  const { user } = useContext(AuthContext);
  const [touristServices, setTouristServices] = useState([]);

  const url = `http://localhost:5000/manageServices?email=${user?.email}`

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setTouristServices(data);
      });
  }, []);

  

  return (
    <div>
        <h1 className="text-5xl">My Manage Services: {touristServices.length}</h1>
        <div className="grid grid-cols-1">
        {
            touristServices.map(touristService => <ManageTable
                key={touristService._id}
                touristService={touristService}
            ></ManageTable>)
       }
        </div>
     
    </div>
  );
};

export default ManageServices;
