import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import StatusTable from "./StatusTable";


const StatusService = () => {

    const { user } = useContext(AuthContext);
    const [manageServices, setManageServices] = useState([]);
    const [statusServices, setStatusServices] = useState(['']);

    const url = `https://assignment11-touresandguides-server.vercel.app/manageServices?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setManageServices(data);
            });
        }, [url]);

    const handleDelete = id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) =>{
            if (result.isConfirmed) {
                fetch(`https://assignment11-touresandguides-server.vercel.app/manageServices/${id}`, {
                  method: "DELETE"
                })
              .then(res => res.json())
              .then((data) =>{
                console.log(data);
                if (data.deletedCount > 0){
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

    const handleStatus = item =>{
        if(item === 'In Progress'){
          setStatusServices(item);  
        }
        else if(item === 'Completed'){
          setStatusServices(item);  
        }
    }

    const handleBookingConfirm = id =>{
        fetch(`https://assignment11-touresandguides-server.vercel.app/manageServices/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: {statusServices}})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                // update state
                const remaining = manageServices.filter(manageService => manageService._id !== id);
                const updated = manageServices.find(manageService => manageService._id === id);
                updated.status = {statusServices}
                console.log(statusServices)
                const newBookings = [updated, ...remaining];
                setManageServices(newBookings);
            }
        })
    }

    return (
            // <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                        <thead>
                            <tr>
                                <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                                </th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th></th>
                            </tr>
                        </thead>
                    <tbody>
                        {
                                manageServices.map(manageService =><StatusTable
                                    key={manageService._id}
                                    manageService={manageService}
                                    handleDelete={handleDelete}
                                    handleStatus={handleStatus}
                                    handleBookingConfirm={handleBookingConfirm}
                                ></StatusTable>)
                        }
                    </tbody>   
                </table>
            // </div>
    );
};

export default StatusService;