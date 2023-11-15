const BookingTable = ({ booking }) => {
  const { serviceName, serviceImage, servicePrice, serviceArea, date, serviceProviderName } = booking;

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
              <img src={serviceImage} alt="Avatar Tailwind CSS Component"/>
            </div>
          </div>
          <div>
            <div className="font-bold">{serviceName}</div>
            <div className="text-sm opacity-50">{serviceArea}</div>
          </div>
        </div>
      </td>
      <td>
        
         {serviceProviderName}
        <br />
        <span className="badge badge-ghost badge-sm">
          {date}
        </span>
      </td>
      <td>{servicePrice}</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default BookingTable;
