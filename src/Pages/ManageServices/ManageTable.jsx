import { Link } from "react-router-dom";

const ManageTable = ({ manageService, handleDelete }) => {
  
  const {
    _id,
    serviceName,
    serviceImage,
    serviceProviderName,
    serviceProviderEmail,
    serviceProviderImage,
    servicePrice,
    serviceArea,
    status,
  } = manageService;

  return (
    <div className="flex justify-between items-start gap-48">
      <div className="card card-compact w-36 h-48 bg-base-100 shadow-xl">
        <figure>
          <img src={serviceImage} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-orange-500 text-sm">{serviceName}</h2>
          <p className="text-orange-300 text-xs">{serviceArea}</p>
          <p className="text-sm text-orange-500">{servicePrice}</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>

      <div className="flex justify-between gap-5">
        <button onClick={() => handleDelete(_id)} className="btn btn-sm avatar">
          <img
            className="w-10 h-10 rounded"
            src="https://i.ibb.co/8NhjyJ1/delete.png"
          />
        </button>

        <Link to={`/updatetouristservice/${_id}`}>
            <button className="btn btn-sm avatar">
              <img
                className="w-10 h-10 rounded"
                src="https://i.ibb.co/4ZkHydZ/update-icon.png"
                alt=""
              />
            </button>
        </Link>
      </div>
    </div>
  );
};

export default ManageTable;
