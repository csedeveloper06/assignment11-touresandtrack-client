
const PopularCard = ({popular}) => {
    
    const {id,name,image,description,providerimage,providername,area,price}  = popular;

    return (
        <div>
            <div className="card w-96 h-[500px] bg-base-100 shadow-xl">
                <figure><img src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Description:{description}</p>
                    <div className="card-actions justify-end">
                        <div>
                            <img src="" alt="" />
                            <p>{providername}</p>
                        </div>
                        <p> Area:{area}</p>
                        <p>Price:{price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularCard;