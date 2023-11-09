const Team = () => {
  return (
    <div>
      <section className="py-6 bg-base-100 text-gray-800 my-10">
        <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
          <h1 className="text-4xl font-bold leadi text-center sm:text-5xl">
            Our team
          </h1>
          <div className="flex flex-row flex-wrap-reverse justify-center">
            <div className="flex flex-col justify-center m-8 text-center">
              <img
                className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500"
                src="https://i.ibb.co/W3mrrvn/Tracy-Whitney.jpg"
              />
              <p className="text-xl font-semibold leadi">Tracy Whitney</p>
              <p className="text-gray-600">CEO</p>
            </div>
            <div className="flex flex-col justify-center m-8 text-center">
              <img
                className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500"
                src="https://i.ibb.co/QnhvfN9/david-peter.jpg"
              />
              <p className="text-xl font-semibold leadi">David Peter</p>
              <p className="text-gray-600">Organizer</p>
            </div>
            <div className="flex flex-col justify-center m-8 text-center">
              <img
                className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500"
                src="https://i.ibb.co/4SPhKzX/Rony-Ross.jpg"
              />
              <p className="text-xl font-semibold leadi">Rony Ross</p>
              <p className="text-gray-600">Organizer</p>
            </div>
            <div className="flex flex-col justify-center m-8 text-center">
              <img
                className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500"
                src="https://i.ibb.co/9HW4Dtw/Alex-Hunter.jpg"
              />
              <p className="text-xl font-semibold leadi">Alex Hunter</p>
              <p className="text-gray-600">Organizer</p>
            </div>
            <div className="flex flex-col justify-center m-8 text-center">
              <img
                className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500"
                src="https://i.ibb.co/61fkXjD/Ema-Watt.jpg"
              />
              <p className="text-xl font-semibold leadi">Emma Watt</p>
              <p className="text-gray-600">Organizer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
