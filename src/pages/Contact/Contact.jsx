import { ToastContainer, toast } from "react-toastify";
import Navbar from "../Shared/Navbar";
import { GrLocation } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { LuPhone } from "react-icons/lu";
import { MdOutlineWatchLater } from "react-icons/md";


const Contact = () => {

    const notify = () => toast.success("Message sent successfully!");

    return (
        <div>
            <div className="flex flex-col md:flex-row my-40 gap-10 max-w-6xl mx-auto">
                <div>
                    <h3 className="text-xl font-medium pb-3">Contact Us</h3>
                    <h2 className="text-4xl font-extrabold text-rose-500 pb-5">Get In Touch</h2>
                    <p className="text-base pb-5">Reach out to us through phone or email. We are committed to providing prompt support and answering all your inquiries.</p>
                    <div className="grid grid-cols-2 gap-5">
                        <div className="card glass">
                            <figure><GrLocation className="w-16 h-16 mt-5 text-orange-500"></GrLocation></figure>
                            <div className="card-body">
                                <h2 className="card-title">Location</h2>
                                <p>123, New Lenox Chicago, IL 60606</p>
                            </div>
                        </div>
                        <div className="card glass">
                            <figure><HiOutlineMail className="w-16 h-16 mt-5 text-orange-500"></HiOutlineMail></figure>
                            <div className="card-body">
                                <h2 className="card-title">Email</h2>
                                <p>partymaker@gmail.com</p>
                            </div>
                        </div>
                        <div className="card glass">
                            <figure><LuPhone className="w-16 h-16 mt-5 text-orange-500"></LuPhone></figure>
                            <div className="card-body">
                                <h2 className="card-title">Phone</h2>
                                <p>444-333-2211</p>
                            </div>
                        </div>
                        <div className="card glass">
                            <figure> <MdOutlineWatchLater className="w-16 h-16 mt-5 text-orange-500"></MdOutlineWatchLater></figure>
                            <div className="card-body">
                                <h2 className="card-title">Opening Hours</h2>
                                <p>Mon - Fri : 09.00 AM - 18.00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="pl-10 text-3xl font-extrabold text-rose-500 pb-5">Leave A Message</h3>
                    <p className="text-base pb-14 pl-10">Have a question or need assistance? We are here to help! Send us a message, and our team will get back to you as soon as possible.</p>
                    <div className="hero  md:max-w-lg mx-auto ">
                        <div className="card shrink-0 w-full shadow-2xl bg-base-100">
                            <form className="card-body">
                                <div className="flex flex-col md:flex-row gap-20">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-base font-medium">Name</span>
                                        </label>
                                        <input name="name" type="name" placeholder="Your Name" className="input input-bordered input-warning" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-base font-medium">Email</span>
                                        </label>
                                        <input name="email" type="email" placeholder="Your Email" className="input input-bordered input-warning" required />
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-base font-medium">Message</span>
                                    </label>
                                    <textarea className="textarea textarea-warning h-40" placeholder="Message"></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <button onClick={notify} className="btn text-white text-base font-semibold bg-gradient-to-r from-red-600 to-yellow-500 hover:from-yellow-500 hover:to-red-600">Message</button>
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
                                transition:Bounce />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;