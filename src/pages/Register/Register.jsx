import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const Register = () => {

    const {createUser, user} = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        const gender = form.get('gender');
        const date = form.get('date');
        const name = form.get('first_name');
        console.log(email, password, gender, date, name);

        createUser(email, password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.error(error);
        })
    }

    return (
        <div>
            <div className="bg-slate-500">
                <Navbar></Navbar>
            </div>
            <div className="hero min-h-screen md:max-w-xl mx-auto my-10">
                <div className="card shrink-0 w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="flex flex-col md:flex-row gap-20">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white text-base font-medium">First Name</span>
                                </label>
                                <input name="first_name" type="first_name" placeholder="First Name" className="input input-bordered input-warning" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white text-base font-medium">Last Name</span>
                                </label>
                                <input name="last_name" type="last_name" placeholder="Last Name" className="input input-bordered input-warning" required />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-48">
                            <div>
                                <label className="label">
                                    <span className="label-text text-white text-base font-medium">Gender</span>
                                </label>
                                <select name="gender" className="select select-warning w-full" required>
                                    <option disabled selected>Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white text-base font-medium">Date of Birth</span>
                                </label>
                                <input name="date" type="date" placeholder="Date of Birth" className="input input-bordered input-warning" required />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white text-base font-medium">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="Email" className="input input-bordered input-warning" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white text-base font-medium">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="Password" className="input input-bordered input-warning" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white text-base font-medium">Phone</span>
                            </label>
                            <input name="phone" type="phone" placeholder="Phone" className="input input-bordered input-warning" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white text-base font-medium">Address</span>
                            </label>
                            <input name="address" type="address" placeholder="Address" className="input input-bordered input-warning" required />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn text-white text-base font-semibold bg-gradient-to-r from-red-600 to-yellow-500 hover:from-yellow-500 hover:to-red-600">Register</button>
                        </div>
                    </form>
                    <p className="text-center pb-5">Already have an account? Please <Link className="text-blue-600 font-bold" to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;