import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import ManageTable from "./ManageTable";


const ManageServices = () => {

  const { user } = useContext(AuthContext);

  const [manageServices, setManageServices] = useState([]);


  const url = `http://localhost:5000/manageServices?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            setManageServices(data);
        });
    }, []);

  console.log(manageServices)

  return (
    <div>
        <h1 className="text-3xl text-center text-orange-500 font-bold my-8">My Manage Services:{manageServices.length}</h1>
        <div className="flex justify-center items-center gap-8">
            <div className="grid grid-cols-1 gap-3">
                {
                    manageServices.map(manageService =><ManageTable
                        key={manageService._id}
                        manageService={manageService}
                    ></ManageTable>)
                   
                }
            </div>
          

        </div>
    </div>
  );
};

export default ManageServices;
