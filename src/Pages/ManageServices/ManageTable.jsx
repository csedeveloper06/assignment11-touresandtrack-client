
const ManageTable = ({touristServices}) => {

    const { serviceName, serviceImage, serviceProviderName, serviceProviderEmail, serviceProviderImage,
    servicePrice, serviceArea } = touristServices;

    console.log(serviceArea,servicePrice)
    console.log(servicePrice);

  return (
   
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={serviceImage}  /></figure>
                <div className="card-body">
                    <h2 className="card-title">{serviceName}</h2>
                    <p>{serviceArea}</p>
                    <p>{servicePrice}</p>
                    <div className="card-actions justify-end">
                        <button>Details</button>
                    </div>
                </div>
            </div>
  );
};

export default ManageTable;
