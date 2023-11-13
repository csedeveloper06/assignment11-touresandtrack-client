import { Link, useLoaderData, useParams } from "react-router-dom";



const ServiceDetails = () => {

    const touristServices = useLoaderData();
   

    const {_id} = useParams();
    const touristService = touristServices.find(touristService => touristService._id === _id);
    
    const { serviceName, serviceImage, serviceDescription, serviceProviderImage,serviceProviderName, 
        serviceArea, servicePrice } = touristService;

    return (
        <div className="my-12">
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={serviceImage} /></figure>
                <div className="card-body">
                    <h2 className="card-title"></h2>
                    <p>{serviceDescription}</p>
                    <p>{servicePrice}</p>
                    <p>{serviceArea}</p>
                    <div>
                        <img src={serviceProviderImage} />
                        <span>{serviceProviderName}</span>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Book Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServiceDetails;