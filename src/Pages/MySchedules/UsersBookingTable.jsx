const UsersBookingTable = ({ othersBooking }) => {
  const {
    _id,
    ServiceName,
    serviceImage,
    servicePrice,
    date,
    serviceProviderEmail,
    email,
  } = othersBooking;
  console.log(_id, ServiceName, serviceProviderEmail);
  console.log(servicePrice, date);

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
            <div className="mask mask-squircle w-12 h-12">
              <img src={serviceImage} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{ServiceName}</div>
            <div className="text-sm opacity-50">{email}</div>
          </div>
        </div>
      </td>
      <td>
        <br />
        <span className="badge badge-ghost badge-sm">{date}</span>
      </td>
      <td>{servicePrice}</td>
      <th>
        <details className="dropdown">
          <summary className="m-1 btn">pending</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
                <a>In Progress</a>
            </li>
            <li>
              <a>Completed</a>
            </li>
          </ul>
        </details>
      </th>
    </tr>
  );
};

export default UsersBookingTable;
