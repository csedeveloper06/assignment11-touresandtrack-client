
const PopularCard = ({popular}) => {
    
    const {id,name,image,description,providerimage,providername,area,price}  = popular;

    return (
        <div>
            <div className="card w-[320px] bg-base-100 shadow-xl">
                <figure><img className="w-[100%] h-60" src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-orange-500 font-bold">{name}</h2>
                    <p className="text-sm text-gray-400">{description}</p>
                    <div className="card-actions justify-end">
                        <div className="flex justify-center items-center">
                            <img src="" alt="" />
                            <p className="font-bold text-2xl text-orange-400">{providername}</p>
                        </div>
                       <div className="font-bold text-orange-500 text-2xl text-center">
                            <p>{area}</p>
                            <p>{price}</p>
                       </div> 
                       <button className="btn btn-primary font-bold">View Details</button> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularCard;