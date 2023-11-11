import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../ServiceCard/ServiceCard";


const AllServices = () => {

  const [ selectedValue, setSelectedValue ] = useState('');
  const touristServices = useLoaderData();
  console.log(touristServices);


  const handleTravelsTripSelected = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
  };

  const handleTravelsTripSearch = (item) => {
    console.log(item);

  };

  return (
    <div>
      <div className="form-control mb-10 ml-5">
        <div className="input-group">
          <select className="select select-bordered mt-10 w-1/2 ml-8 md:ml-10 lg:w-1/3 lg:ml-60"
            value={selectedValue} onChange={handleTravelsTripSelected}>
            <option disabled selected>
              Choose Your Travel Destination
            </option>
            <option value="Paris Trip">Paris Trip</option>
            <option value="India Trip">India Trip</option>
            <option value="Bangladesh Trip">Bangladesh Trip</option>
            <option value="Switzerland Trip">Switzerland Trip</option>
            <option value="England Trip">England Trip</option>
            <option value="Greece Trip">Greece Trip</option>
          </select>
          <button
            onClick={() => { handleTravelsTripSearch(selectedValue) }} className="btn btn-primary mt-10" > Search
          </button>
        </div>
      </div>
      <div>
          <h1></h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    touristServices.map(touristService => <ServiceCard
                    key={touristService._id}
                    touristService={touristService}
                    ></ServiceCard>)
                }
          </div>
      </div>
    </div>
  );
};

export default AllServices;
