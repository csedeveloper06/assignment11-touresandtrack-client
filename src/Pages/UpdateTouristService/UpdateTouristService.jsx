import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";




const UpdateTouristService = () => {

    const { user } = useContext(AuthContext);

    const updateService = useLoaderData();

   const {serviceImage,serviceName, serviceProviderName, serviceProviderEmail, serviceProviderImage, servicePrice,
    
     serviceDescription, serviceArea } = updateService;

    console.log(updateService);

    return (
        <div>
            <h2 className="text-3xl">Service Name:{user.email}</h2>
            <h2 className="text-2xl">Service Area : {serviceArea}</h2>
        </div>
    );
};

export default UpdateTouristService;