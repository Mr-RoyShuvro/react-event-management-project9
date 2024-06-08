import { useEffect, useState } from "react";
import Service from "./Service";


const Services = () => {


    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("services.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="max-w-6xl mx-auto">
            <h3 className="text-center">All Services are here</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;