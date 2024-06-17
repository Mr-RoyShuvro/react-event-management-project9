import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Service = ({ service }) => {
    const { id, name, image, price, short_description, button_text } = service;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className="h-60" src={image} alt="Services" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{short_description}</p>
                <div className="card-actions flex gap-5">
                    <button className="border-2 border-yellow-400 px-3 py-2 font-medium rounded-lg text-yellow-400 ">{price}</button>
                    <Link to={`/services/${id}`}><button className="btn border-none flex-grow font-medium hover:bg-yellow-500 bg-orange-500 text-white">{button_text}</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;

Service.propTypes = {
    service: PropTypes.object
}