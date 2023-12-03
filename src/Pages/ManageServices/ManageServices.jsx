import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import ManageTable from "./ManageTable";
import Swal from "sweetalert2";


const ManageServices = () => {

  const { user } = useContext(AuthContext);

  const [manageServices, setManageServices] = useState([]);


  const url = `https://assignment11-touresandguides-server.vercel.app/manageServices?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            setManageServices(data);
        });
    }, [url]);

  console.log(manageServices)
  
  const handleDelete = id => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`https://assignment11-touresandguides-server.vercel.app/manageServices/${id}`, {
            method: "DELETE"
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0) {
                Swal.fire(
                    'Deleted!',
                    'Your product has been deleted.',
                    'success'
                )
                const remaining = manageServices.filter(manageService => manageService._id !== id);
                setManageServices(remaining);
              }
            });
        }
     }); 
    }

  return (
    <div>
        <h1 className="text-3xl text-center text-orange-500 font-bold my-8">My Manage Services:{manageServices.length}</h1>
        <div className="flex justify-center items-center gap-8">
            <div className="grid grid-cols-1 gap-3">
                {
                    manageServices.map(manageService =><ManageTable
                        key={manageService._id}
                        manageService={manageService}
                        handleDelete={handleDelete}
                    ></ManageTable>)
                   
                }
            </div>
        </div>
    </div>
  );
};

export default ManageServices;
