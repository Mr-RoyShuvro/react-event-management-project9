import { ToastContainer, toast } from "react-toastify";
import Navbar from "../Shared/Navbar";
import 'react-toastify/dist/ReactToastify.css';


const OnlineRequest = () => {

    const notify = () => toast.success("You have requested online successfully! We will contact with you soon.");

    return (
        <div>
            <div className="bg-slate-500">
                <Navbar></Navbar>
            </div>
            <div className="hero min-h-screen md:max-w-xl mx-auto my-10">
                <div className="card shrink-0 w-full shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="flex flex-col md:flex-row gap-20">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white text-base font-medium">Your Name</span>
                                </label>
                                <input name="name" type="name" placeholder="Your Name" className="input input-bordered input-warning" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white text-base font-medium">Phone</span>
                                </label>
                                <input name="phone" type="phone" placeholder="Phone" className="input input-bordered input-warning" required />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-28">
                            <div>
                                <label className="label">
                                    <span className="label-text text-white text-base font-medium">Event Category</span>
                                </label>
                                <select name="gender" className="select select-warning w-full" required>
                                    <option disabled selected>Event Category</option>
                                    <option>Weddings</option>
                                    <option>Birthday Parties</option>
                                    <option>Anniversaries</option>
                                    <option>Engagement Parties</option>
                                    <option>Retirement Parties</option>
                                    <option>Baby Showers</option>
                                    <option>Holiday Parties</option>
                                    <option>Graduation Parties</option>
                                    <option>Reunions</option>
                                    <option>Baby s First Birthday</option>
                                    <option>Christenings</option>
                                    <option>Bar and Bat Mitzvahs</option>
                                    <option>Others</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white text-base font-medium">Event Date</span>
                                </label>
                                <input name="date" type="date" placeholder="Date of Birth" className="input input-bordered input-warning" required />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white text-base font-medium">Your Address</span>
                            </label>
                            <input name="address" type="address" placeholder="Your Address" className="input input-bordered input-warning" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white text-base font-medium">Message</span>
                            </label>
                            <textarea className="textarea textarea-warning h-40" placeholder="Message"></textarea>
                        </div>


                        <div className="form-control mt-6">
                            <button onClick={notify} className="btn text-white text-base font-semibold bg-gradient-to-r from-red-600 to-yellow-500 hover:from-yellow-500 hover:to-red-600">Confirm Request</button>
                        </div>
                    </form>
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="colored"
                        transition:Bounce/>
                </div>
            </div>
        </div>
    );
};

export default OnlineRequest;