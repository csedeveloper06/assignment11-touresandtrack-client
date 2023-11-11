

const ServiceCard = ({touristService}) => {

    const { serviceImage, serviceName, serviceDescription, serviceProviderImage, serviceProviderName, 
        serviceArea,servicePrice } = touristService;

    return (
        <div>
            <div className="card card-compact w-[250px] h-[350px] bg-base-100 shadow-xl">
                <figure className="h-[40%]"><img className="w-[100%] h-[100%]"  src={serviceImage}/></figure>
                <div className="card-body h-[68%]">
                    <h2 className="card-title text-sm text-orange-500">{serviceName}</h2>
                    <p className="text-xs h-[60px] text-gray-500">{serviceDescription}</p>
                    <div className="flex justify-start gap-5">
                        <span className="text-sm text-orange-500">{serviceArea}</span>
                        <span className="text-sm text-orange-500">{servicePrice}</span>
                    </div>
                    <div className="card-actions flex-grow">
                        <div className="flex justify-start gap-2">
                            <img className="w-10 h-10 rounded-full" src="https://i.ibb.co/61fkXjD/Ema-Watt.jpg" alt="" />
                            <p className="text-sm text-orange-500">{serviceProviderName}</p>
                        </div>
                        <button className="btn btn-sm btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;