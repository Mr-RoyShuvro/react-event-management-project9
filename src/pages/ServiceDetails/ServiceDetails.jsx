import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Shared/Navbar";

const ServiceDetails = () => {

    const { id } = useParams();

    const services = useLoaderData();

    const service = services.find(service => service.id == id)
    console.log(service);

    return (
        <div>
            <div className="bg-slate-500">
                <Navbar></Navbar>
            </div>
            <div>
                <img className="w-full" src={service.image} alt="" />
                <div className="max-w-5xl mx-auto mt-10 mb-20">
                    <h3 className="text-3xl font-bold text-yellow-400 mb-5">{service.name}</h3>
                    <div className="flex gap-5">
                        <div className="max-w-3xl">
                            <h3>{service.large_description}</h3>
                            <Link to="/"><button className="btn border-none flex-grow font-medium hover:bg-orange-600 bg-orange-500 text-white mt-10">Go Back To Home</button></Link>
                        </div>
                        <div className=" bg-orange-200 w-full px-4 rounded-2xl py-10 ">
                            <h3 className="text-gray-800 mb-5">{service.short_description}</h3>
                            <h3 className="bg-slate-50 py-2 text-center rounded-lg text-base font-medium text-orange-400">Price: {service.price}</h3>
                            <button className="btn text-white text-base font-medium bg-gradient-to-r from-red-600 to-yellow-500 hover:from-yellow-500 hover:to-red-600 w-full border-none mt-5">Online Request</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;