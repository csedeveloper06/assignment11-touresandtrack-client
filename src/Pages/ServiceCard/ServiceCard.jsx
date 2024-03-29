import { Link } from "react-router-dom";


const ServiceCard = ({touristService}) => {

    const { _id, serviceImage, serviceName, serviceDescription, serviceProviderImage, serviceProviderName, 
        serviceArea,servicePrice } = touristService;
   

    return (
        <div>
            <div className="card card-compact w-[280px] h-[420px] bg-base-100 shadow-xl">
                <figure className="h-[40%]"><img className="w-[100%] h-[100%]"  src={serviceImage}/></figure>
                <div className="card-body h-[68%]">
                    <h2 className="card-title text-sm text-orange-500">{serviceName}</h2>
                    <p className="text-xs  text-gray-500">{serviceDescription}</p>
                    <div className="flex justify-start gap-2">
                        <p className="text-sm text-orange-500">{serviceArea}</p>
                        <p className="text-sm text-orange-500">{servicePrice}</p>
                    </div>
                    <div className="flex justify-start gap-2">
                        <img className="w-10 h-10 rounded-full" src={serviceProviderImage} alt="" />
                        <p className="text-sm text-orange-500">{serviceProviderName}</p>
                    </div>
                    <div className="card-actions">
                      
                        <Link to={`/ServiceDetails/${_id}`}>
                                <button className="btn btn-primary justify-center">View Details</button>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;