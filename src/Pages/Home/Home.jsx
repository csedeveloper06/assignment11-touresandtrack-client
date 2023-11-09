import { useEffect, useState } from "react";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Team from "./Team/Team";
import Testimonial from "./Testimonial/Testimonial";
import PopularServiceCard from "./PopularService/PopularServiceCard";


const Home = () => {

    const [popularService, setPopularServices] = useState([]);
    useEffect( ()=> {
        fetch('/public/popularServices.json')
            .then(res => res.json())
            .then(data => setPopularServices(data))
    },[])

  return (
    <div>
        <Banner></Banner>
        <div className="my-10">
            <h1 className="p-5 text-5xl text-center text-red-500 font-bold">Popular Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 ml-20 gap-5">
                
                {
                    popularService.map(popular => <PopularServiceCard
                        key={popular.id}
                        popular={popular}
                    ></PopularServiceCard>)
                }  
            </div>
            <div className="flex justify-center items-center">
                <button className="btn btn-warning my-8">Show More</button>
            </div> 
        </div>
        <Team></Team>
        <Testimonial></Testimonial>
        <Contact></Contact>
    </div>
  );
};

export default Home;
