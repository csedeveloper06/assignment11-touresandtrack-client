import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../ServiceCard/ServiceCard";


const AllServices = () => {

  const [ selectedValue, setSelectedValue ] = useState('');

  const touristServices = useLoaderData();
  const [ displayServices, setDisplayServices ] = useState(touristServices);
  const [ dataLength, setDataLength ] = useState(10);

  console.log(touristServices);


  const handleTravelsTripSelected = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
  };

  const handleTravelsTripSearch = (item) => {
    console.log(item);
    if(item === 'Paris Trip'){
        const parisTripServices = touristServices.filter(touristService => touristService.serviceName === item);
        setDisplayServices('');
        setDisplayServices(parisTripServices);
    }
    else if(item === 'India Trip'){
        const indiaTripServices = touristServices.filter(touristService => touristService.serviceName === item);
        setDisplayServices('');
        setDisplayServices(indiaTripServices);
    }
    else if(item === 'Bangladesh Trip'){
        const bangladeshTripServices = touristServices.filter(touristService => touristService.serviceName === item);
        setDisplayServices('');
        setDisplayServices(bangladeshTripServices);
    }
    else if(item === 'Switzerland Trip'){
        const switzerlandTripServices = touristServices.filter(touristService => touristService.serviceName === item);
        setDisplayServices('');
        setDisplayServices(switzerlandTripServices);
    }
    else if(item === 'England Trip'){
        const englandTripServices = touristServices.filter(touristService => touristService.serviceName === item);
        setDisplayServices('');
        setDisplayServices(englandTripServices);
    }
    else if(item === 'Greece Trip'){
        const greeceTripServices = touristServices.filter(touristService => touristService.serviceName === item);
        setDisplayServices('');
        setDisplayServices(greeceTripServices);
    }
  };

  return (
    <div>
      <div className="form-control mb-10 ml-5">
        <div className="input-group">
          <select className="select select-bordered mt-10 w-1/2 ml-8 md:ml-10 lg:w-1/3 lg:ml-60"
             onChange={handleTravelsTripSelected}>
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
          <h1 className="text-5xl text-red-500 font-bold py-5 text-center">All Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                {
                    displayServices.slice(0, dataLength).map(touristService => <ServiceCard
                    key={touristService._id}
                    touristService={touristService}
                    ></ServiceCard>)
                }
          </div>
      </div>
      <div className={dataLength === displayServices.length ? 'hidden' : ''}>
                <button
                    onClick={() => setDataLength(displayServices.length)}
                    className="btn btn-primary ml-[45%] mb-10">More</button>
       </div>
    </div>
  );
};

export default AllServices;
