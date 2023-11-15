import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";


const AddAService = () => {

    const { user } = useContext(AuthContext);

    const handleAddService = event => {
        event.preventDefault();

        const form = event.target;
        const serviceImage = form.serviceImage.value;
        const serviceName = form.serviceName.value;
        const serviceProviderName = form.serviceProviderName.value;
        const serviceProviderEmail = form.serviceProviderEmail.value;
        const serviceProviderImage = form.serviceProviderImage.value ;
        const servicePrice = form.servicePrice.value;
        const serviceDescription = form.serviceDescription.value;
        const serviceArea = form.serviceArea.value;

        const newService = { serviceImage,serviceName,serviceProviderName,serviceProviderEmail,serviceProviderImage,servicePrice,serviceDescription,serviceArea }

        const manageServices = { serviceImage,serviceName,serviceProviderName,serviceProviderEmail,serviceProviderImage,servicePrice,serviceDescription,serviceArea }

        console.log(newService);

        console.log("manageServices:", manageServices);
        form.reset();

              // send data to the server

              fetch('http://localhost:5000/touristServices', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newService)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.insertedId){
                        Swal.fire({
                            title: 'Success!',
                            text: 'service added successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                          })
                    }
                })
              fetch('http://localhost:5000/manageServices', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(manageServices)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.insertedId){
                        Swal.fire({
                            title: 'Success!',
                            text: 'service added successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                          })
                        console.log('data inserted')
                     }
                })
    }

    return (
        <div className="bg-[#fffff4] mb-16 p-3">
             <h2 className="text-3xl font-extrabold text-center">Add A Service Form</h2>
             <form onSubmit={handleAddService} >
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Service Image</span>
                        </label>

                        <label className="input-group">
                            <input 
                                type="text"
                                name="serviceImage"
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
                                placeholder="Service Name"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>

                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/3">
                        <label className="label">
                            <span className="label-text">Service Provider Name</span>
                        </label>

                        <label className="input-group">
                            <input 
                                type="text"
                                id="readOnlyInput"
                                value={user ? user.displayName : ''}
                                readOnly
                                name="serviceProviderName"
                                placeholder="Service Provider Name"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                    <div className="form-control md:w-1/3 md:ml-4">
                        <label className="label">
                            <span className="label-text">Service Provider Email</span>
                        </label>

                        <label className="input-group">
                            <input 
                                type="text"
                                name="serviceProviderEmail"
                                id="readOnlyInput"
                                value={user ? user.email : ''}
                                readOnly
                                placeholder="Service Provider Email"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>

                    <div className="form-control md:w-1/3 md:ml-4">
                        <label className="label">
                            <span className="label-text">Service Provider Image</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="serviceProviderImage"
                                id="readOnlyInput"
                                value={user ? user.photoURL : ''}
                                readOnly
                                placeholder="Service Provider Image"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>

                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Service Price</span>
                        </label>
                        <label className="input-group">
                            <input 
                                type="text"
                                name="servicePrice"
                                placeholder="Service Price"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Service Description</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="serviceDescription"
                                placeholder="Service Description"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Service Area</span>
                    </label>
                    <label className="input-group">
                        <input
                            type="text"
                            name="serviceArea"
                            placeholder="Service Area"
                            className="input input-bordered w-full"
                        />
                    </label>
                </div>
           
                <input type="submit" value="Add Service" className="btn btn-warning 
                    w-1/2 ml-28 my-10 lg:ml-[450px]  md:w-1/5 "/>
             </form>
        </div>
    );
};

export default AddAService;