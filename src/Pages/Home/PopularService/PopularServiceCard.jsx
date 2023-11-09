

const PopularServiceCard = () => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="" alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Service:</h2>
                    <p>Description:</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">View Details</button>
                        <div>
                            <img src="" alt="" />
                            <p></p>
                        </div>
                        <p>Service Area:</p>
                        <p>Price:</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularServiceCard;