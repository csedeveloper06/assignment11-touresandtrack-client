const Testimonial = () => {
  return (
    <section className="my-8">
      <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
        <h1 className="text-4xl font-semibold leadi text-center">
          What our customers are saying about us
        </h1>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
        <div className="flex flex-col items-center mx-12 lg:mx-0">
          <div className="relative text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
              className="absolute top-0 left-0 w-8 h-8 text-gray-300"
            >
              <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
              <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
            </svg>
            <p className="px-6 py-1 text-lg italic">
                What an incredible tour experience! From start to finish, this company delivered excellence. The itinerary was well-crafted, the guides were knowledgeable and passionate, and the level of customer service was exceptional. Accommodations were top-tier, and the small group setting made it feel like a personalized adventure. Highly recommend for an unforgettable journey!
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
              className="absolute bottom-0 right-0 w-8 h-8 text-gray-300"
            >
              <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
              <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
            </svg>
          </div>
          <span className="w-12 h-1 my-2 rounded-lg bg-violet-600"></span>
          <p>Leroy Jenkins</p>
        </div>
        <div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
          <div className="relative text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="absolute top-0 left-0 w-8 h-8 text-gray-300"
            >
              <path
                fill="currentColor"
                d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"
              ></path>
              <path
                fill="currentColor"
                d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"
              ></path>
            </svg>
            <p className="px-6 py-1 text-lg italic">
                This tour company exceeded all my expectations! From meticulous planning to passionate guides, every detail was perfect. The accommodations were top-notch, and the customer service was outstanding. The small group size created a friendly atmosphere, making it feel like a trip with friends. I can not recommend them enough for an unforgettable travel experience!
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="absolute bottom-0 right-0 w-8 h-8 text-gray-300"
            >
              <path
                fill="currentColor"
                d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"
              ></path>
              <path
                fill="currentColor"
                d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"
              ></path>
            </svg>
          </div>
          <span className="w-12 h-1 my-2 rounded-lg bg-violet-600"></span>
          <p>Hilton Paris</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
