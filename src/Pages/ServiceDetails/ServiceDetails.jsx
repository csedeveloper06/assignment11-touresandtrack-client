import { Link, useLoaderData, useParams } from "react-router-dom";
import BookNowForm from "../BookNowForm/BookNowForm";





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
                    <h2 className="card-title font-bold text-orange-500 text-4xl">{serviceName}</h2>
                    <p className="text-sm text-orange-300">{serviceDescription}</p>
                    <p className="text-5xl text-orange-500 font-extrabold">{servicePrice}</p>
                    <p className="text-orange-600 font-bold text-2xl">{serviceArea}</p>
                    <div className="flex justify-start gap-1">
                        <img className="w-24 h-24 rounded-full" src={serviceProviderImage} />
                        <span className="text-orange-600 text-2xl font-bold">{serviceProviderName}</span>
                    </div>
                    <div className="card-actions justify-start">
                            <button className="btn btn-warning w-full" 
                                    onClick={()=>document.getElementById('my_modal_4').showModal()}>Book Now</button> 
                            <dialog id="my_modal_4" className="modal">
                                <div className="modal-action">
                                    <div method="dialog">
                                        <Link to={`/booknowform/${_id}`}>
                                            <button className="btn btn-primary">Click Me!</button>  
                                        </Link> 
                                       
                                    </div>
                                </div>
                            </dialog>    
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServiceDetails;