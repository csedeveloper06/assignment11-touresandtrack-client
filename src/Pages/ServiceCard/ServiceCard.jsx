

const ServiceCard = ({touristService}) => {

    const { serviceImage, serviceName, serviceDescription, serviceProviderImage, serviceProviderName, 
        serviceArea,servicePrice } = touristService;

    return (
        <div>
            <div className="card card-compact w-72  bg-base-100 shadow-xl">
                <figure><img className="h-40 w-[100%]"  src={serviceImage}/></figure>
                <div className="card-body">
                    <h2 className="card-title text-sm">{serviceName}</h2>
                    <p className="text-xs">{serviceDescription}</p>
                    <div className="flex justify-start">
                        <span className="text-xs">{serviceArea}</span>
                        <span className="text-xs">{servicePrice}</span>
                    </div>
                    <div className="card-actions flex-grow">
                        <div className="flex justify-start gap-2">
                            <img className="w-10 h-10 rounded-full" src="https://i.ibb.co/61fkXjD/Ema-Watt.jpg" alt="" />
                            <p>{serviceProviderName}</p>
                        </div>
                        <button className="btn btn-sm btn-warning">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;