import { Link } from "react-router-dom";


const OtherServiceCard = ( {otherService} ) => {

    const { _id, serviceImage, serviceName, serviceDescription, serviceProviderImage, serviceProviderName, 
        serviceArea,servicePrice } = otherService;
    
    console.log(otherService)

    return (
        <div className="card card-compact w-48 bg-base-100 shadow-xl">
            <figure><img src={serviceImage}  /></figure>
            <div className="card-body">
                <h2 className="card-title text-xs text-yellow-600">{serviceArea}</h2>
                <div className="flex justify-between">
                    <img className="avatar w-8 h-8 rounded-full" src={serviceProviderImage} alt="" />
                    <span>{serviceProviderName}</span>
                </div>
                <div className="card-actions justify-center text-xs">
                    {/* <button className="btn btn-warning btn-xs">View Details</button> */}
                    <Link to={`/otherServiceCardDetails/${_id}`}>
                                <button className="btn btn-warning btn-xs justify-center">View Details</button>
                    </Link>
                </div>
            </div>
      </div>
    );
};

export default OtherServiceCard;
