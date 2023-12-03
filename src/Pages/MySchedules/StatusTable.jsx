import StatusService from "./StatusService";

const StatusTable = ({ manageService, handleDelete, handleStatus, handleBookingConfirm,status }) => {

  const {
    _id,
    ServiceName,
    serviceImage,
    servicePrice,
    date,
    serviceProviderEmail,
  } = manageService;

 

  return (
      <tr>
        <th>
          <label>
                <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-16 h-16">
                <img src={serviceImage} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
                <div className="font-bold">{ServiceName}</div>
                <div className="text-sm opacity-50">{serviceProviderEmail}</div>
            </div>
          </div>
        </td>
        <td>
          <br />
          <span className="badge badge-ghost badge-sm">
            {date}
         </span>
        </td>
        <td>
          <br />
          <span className="badge badge-ghost badge-sm">
            {ServiceName}
         </span>
        </td>
        <td>{servicePrice}</td>
        <th>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1">
              {/* Pending */}
            
                {status === 'In Progress' ? 'In Progress' : 'Pending'} 
             
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li onClick={()=>{ handleStatus('In Progress'); ()=>handleBookingConfirm(_id);}}>
                <a>In Progress</a>
              </li>
              <li onClick={()=> { handleStatus('Completed'); handleBookingConfirm(_id);}}>
                <a>Completed</a>
              </li>
            </ul>
          </div>
        </th>
      </tr>
  );
};

export default StatusTable;
