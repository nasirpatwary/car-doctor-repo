import { Link } from "react-router-dom";
import login from "../../assets/assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const SingUp = () => {

    const {createUser} = useContext(AuthContext)

    const handleSingUp = e =>{
        e.preventDefault()
       const form = e.target;
       const name = form.name.value;
       const email = form.email.value;
       const password = form.password.value;
       console.log(name,email,password);

        createUser(email,password)
        .then(result =>{
            const user = result.user
            console.log(user);
        })
        .then(error =>console.log(error))

    }
    return (
        <div className="hero min-h-screen bg-base-200 my-12">
            <div className="hero-content flex-col lg:flex-row">
                <div className="mr-12 w-1/2">
                    <img src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold text-center">Sing Up now!</h1>
                        <form onSubmit={handleSingUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-secondary btn-outline" type="submit" value="Sing Up" />
                            </div>
                        </form>
                        <p className="text-center font-bold my-4">Already Have an Account <Link className="font-bold text-secondary" to="/login">Login</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingUp;