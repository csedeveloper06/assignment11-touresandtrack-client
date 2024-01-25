import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const BookNowForm = () => {

    const touristService = useLoaderData();
    const { serviceName, serviceImage, serviceProviderEmail, servicePrice } = touristService;
    console.log(touristService);
    const {user} = useContext(AuthContext);

    const handleBookService = event => {
        event.preventDefault();
        const form = event.target;
        const serviceName = form.serviceName.value;
        const serviceImage = form.serviceImage.value;
        const serviceProviderEmail = form.serviceProviderEmail.value;
        const email = user?.email;
        const date = form.date.value;
        const servicePrice = form.servicePrice.value;
        const serviceInstruction = form.serviceInstruction.value;
        console.log(serviceName, servicePrice);

        const bookings = {
            ServiceName: serviceName,
            serviceImage,
            serviceProviderEmail,
            email,
            date,
            servicePrice,
            serviceInstruction,
          };

          console.log(bookings);

          fetch("https://assignment11-touresandguides-server.vercel.app/bookings", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(bookings),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.insertedId) {
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "You Purchased successfully!",
                    showConfirmButton: false,
                    timer: 1500
                  });
              }
            });
    }

    return (
        <div className="bg-[#fffff4] mb-16 p-3">
            <Helmet>
                <title>ToursNTracks | BookNowForm</title>
            </Helmet>
            <h1 className="text-4xl font-bold text-red-500 text-center">About {serviceName}</h1>
            <form onSubmit={handleBookService}>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Service Image</span>
                        </label>

                        <label className="input-group">
                            <input
                                type="text"
                                name="serviceImage"
                                value={serviceImage}
                                readOnly
                                onChange={handleBookService}
                                placeholder="PhotoURL"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Service Name</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="serviceName"
                                value={serviceName}
                                readOnly
                                placeholder="Service Name"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>


                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                        <span className="label-text">Service Provider Email</span>
                        </label>

                        <label className="input-group">
                        <input
                            type="text"
                            name="serviceProviderEmail"
                            id="readOnlyInput"
                            value={serviceProviderEmail}
                            readOnly
                            placeholder="Service Provider Email"
                            className="input input-bordered w-full"
                        />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">User Email</span>
                        </label>
                        <input
                        type="text"
                        name="email"
                        defaultValue={user?.email}
                        readOnly
                        placeholder="email"
                        className="input input-bordered"
                        />
                    </div>
                </div>

                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                        <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" />
                    </div>

                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Service Price</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="servicePrice"
                                value={servicePrice}
                                readOnly
                                placeholder="Service Price"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>

                <div className="form-control w-full">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service Instruction</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="serviceInstruction"
                                placeholder="Service Instruction "
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>

                <input type="submit" value="Purchase" className="btn btn-warning  w-full my-10" />

            </form>
        </div>
    );
};

export default BookNowForm;