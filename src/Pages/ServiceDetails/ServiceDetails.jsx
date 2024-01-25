import { Link, useLoaderData, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import OtherServiceCard from "../OtherServiceCard/OtherServiceCard";
// import { useContext, useState } from "react";
// import BookingModal from "../Modal/BookingModal";
// import { AuthContext } from "../../providers/AuthProvider";
// import BookNowForm from "../BookNowForm/BookNowForm";


const ServiceDetails = () => {

    // const { user } = useContext( AuthContext );
    const touristServices = useLoaderData();
    console.log(touristServices);
   

    const {_id} = useParams();
    const touristService = touristServices.find(touristService => touristService._id === _id);
    
    const { serviceName, serviceImage, serviceDescription, serviceProviderImage,serviceProviderName, 
        serviceArea, servicePrice } = touristService;
    
    const otherServices = touristServices.filter(otherService => 
        otherService.serviceProviderEmail === touristService.serviceProviderEmail)
    console.log(otherServices);
    
    console.log(touristService);
    return (
        <div className="my-12">
            <Helmet>
                <title>ToursNTracks | Service Details</title>
            </Helmet>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={serviceImage} /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-orange-500 text-4xl">{serviceName}</h2>
                    <p className="text-sm text-orange-300">{serviceDescription}</p>
                    <p className="text-5xl text-orange-500 font-extrabold">{servicePrice}</p>
                    <p className="text-orange-600 font-bold text-2xl">{serviceArea}</p>
                    <div className="flex justify-start gap-1">
                        <img className="w-24 h-24 rounded-full" src={serviceProviderImage} />
                        <span className="text-orange-600 text-2xl font-bold">{serviceProviderName}</span>
                    </div>
                    <div className="card-actions justify-start">
                        <Link to={`/booknowform/${_id}`}>
                            <button className="btn btn-warning w-full">Book Now</button>  
                        </Link>  
                    </div>
                </div>
            </div>
            <div className="mb-28">
                <h1 className="text-5xl text-red-500 font-bold py-5 text-center">
                    {/* other service cards headline */}
                    Other Services
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
                    {
                        otherServices.map(otherService => <OtherServiceCard
                            key={otherService._id}
                            otherService={otherService}>
                            </OtherServiceCard>
                        )   
                    }
                </div>
            </div>
            {/* <BookingModal closeModal={closeModal} isOpen={isOpen} /> */}
        </div>
    );
};

export default ServiceDetails;