

const PopularCard = ({popular}) => {
    
    const {_id,name,image,description,providerimage,providername,area,price}  = popular;

    return (
        <div>
            <div className="card w-[320px] bg-base-100 shadow-xl">
                <figure><img className="w-[100%] h-60" src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-orange-500 font-bold">{name}</h2>
                    <p className="text-sm text-gray-400">{description}</p>
                    <div className="flex justify-start gap-3">
                            <img className="w-12 h-12 rounded-full" src={providerimage} alt="" />
                            <p className="font-bold text-lg text-orange-400">{providername}</p>
                        </div>
                       <div className="font-bold text-orange-500 text-lg text-center flex justify-start gap-2">
                            <p>{area}</p>
                            <p>{price}</p>
                       </div> 
                    <div className="card-actions justify-end">
                        {/* <Link to={`/ServiceDetails/${_id}`}>
                             <button className="btn btn-primary font-bold">View Details</button> 
                        </Link> */}
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularCard;