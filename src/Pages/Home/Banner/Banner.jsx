import counter from '../../../counter.json'
import Lottie from 'lottie-react';


const Banner = () => {
  return (
    <div className='shadow-2xl my-8'>
      {/* images */}
      <div className="max-w-screen-xl p-5 mx-auto bg-gray-100 text-gray-800">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 sm:grid-cols-2">
          <div
            className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 bg-gray-500"
            style={{
              backgroundImage: `url("https://i.ibb.co/5YxR8GW/s3.jpg")`,
            }}
          >
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent
                 from-gray-900 to-gray-900"></div>
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-3 py-2 text-xs font-semibold tracki uppercase text-gray-100 bgundefined"
              >
                Zarmatti,Switzerland
              </a>
              <div className="flex flex-col justify-start text-center text-gray-100">
                <span className="text-3xl font-semibold leadi tracki">04</span>
                <span className="leadi uppercase">Dec</span>
              </div>
            </div>
            <h2 className="z-10 p-5">
              <a
                rel="noopener noreferrer"
                href="#"
                className="font-medium text-md hover:underline text-gray-100"
              >
                {" "}
                a charming mountain landscape town located in the Swiss Alps
              </a>
            </h2>
          </div>
          <div
            className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 bg-gray-500"
            style={{
              backgroundImage: `url("https://i.ibb.co/jzNb1y9/Taj-Mahal.webp")`,
            }}
          >
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900"></div>
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-3 py-2 text-xs font-semibold tracki uppercase text-gray-100 bgundefined"
              >
                TajMahal,India
              </a>
              <div className="flex flex-col justify-start text-center text-gray-100">
                <span className="text-3xl font-semibold leadi tracki">19</span>
                <span className="leadi uppercase">Dec</span>
              </div>
            </div>
            <h2 className="z-10 p-5">
              <a
                rel="noopener noreferrer"
                href="#"
                className="font-medium text-md hover:underline text-gray-100"
              >
                A Timeless Symbol of Love
              </a>
            </h2>
          </div>
          <div
            className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 bg-gray-500"
            style={{
              backgroundImage: `url("https://i.ibb.co/yhx376j/england.jpg")`,
            }}
          >
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900"></div>
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-3 py-2 text-xs font-semibold tracki uppercase text-gray-100 bgundefined"
              >
                Tower Breeze, England
              </a>
              <div className="flex flex-col justify-start text-center text-gray-100">
                <span className="text-3xl font-semibold leadi tracki">08</span>
                <span className="leadi uppercase">Jan</span>
              </div>
            </div>
            <h2 className="z-10 p-5">
              <a
                rel="noopener noreferrer"
                href="#"
                className="font-medium text-md hover:underline text-gray-100"
              >
                A Historic Icon Over the Thames
              </a>
            </h2>
          </div>
          <div
            className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 bg-gray-500"
            style={{
              backgroundImage: `url("https://i.ibb.co/QHpGVkG/s4.jpg")`,
            }}
          >
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900"></div>
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-3 py-2 text-xs font-semibold tracki uppercase text-gray-100 bgundefined"
              >
                Santorini,Greece
              </a>
              <div className="flex flex-col justify-start text-center text-gray-100">
                <span className="text-3xl font-semibold leadi tracki">23</span>
                <span className="leadi uppercase">Jan</span>
              </div>
            </div>
            <h2 className="z-10 p-5">
              <a
                rel="noopener noreferrer"
                href="#"
                className="font-medium text-md hover:underline text-gray-100"
              >
                A Breathtaking Paradise in the Aegean
              </a>
            </h2>
          </div>
        </div>
      </div>
      {/* counter */}

      <div className='flex items-center justify-center'>
        <Lottie className='w-40 h-32' animationData={counter} />
        <button className="btn btn-warning w-1/3">Book Now</button>
      </div>
    </div>
  );
};

export default Banner;
