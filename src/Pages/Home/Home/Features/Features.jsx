import Marquee from "react-fast-marquee";
import logo1 from "../../../../assets/assets/icons/check.svg"
import logo2 from "../../../../assets/assets/icons/Wrench.svg"
import logo3 from "../../../../assets/assets/icons/group.svg"
import logo4 from "../../../../assets/assets/icons/person.svg"
import logo5 from "../../../../assets/assets/icons/quote.svg"
import logo6 from "../../../../assets/assets/icons/deliveryt.svg"

const Features = () => {
    return (
        <div>
            <Marquee pauseOnClick={true} speed={100}>
                <div className="text-center space-y-2 my-12 border rounded-xl p-4">
                    <p className="text-[#FF3811] font-semibold ">Core Features</p>
                    <h2 className="text-5xl font-bold">Why Choose Us</h2>
                    <p className="text-[#737373] ">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
                </div>
            </Marquee>
            <div className="flex space-x-4 my-12">
                <div className="card w-52 h-28 space-y-2 bg-base-100 shadow-xl items-center">
                    <img className="w-14 h-14 space-y-2" src={logo1} alt="" />
                    <p className=" font-bold text-xl">Expert Team</p>
                </div>
                <div className="card w-52 h-28 space-y-2 font-bold text-lg  bg-base-100 shadow-xl items-center">
                    <img className="w-14 h-14 space-y-2" src={logo2} alt="" />
                    <p className=" font-bold text-xl">Timely Delivery</p>
                </div>
                <div className="card w-52 h-28 space-y-2  bg-base-100 shadow-xl items-center">
                    <img className="w-14 h-14" src={logo3} alt="" />
                    <p className=" font-bold text-xl">24/7 Support</p>
                </div>
                <div className="card w-52 h-28 space-y-2  bg-base-100 shadow-xl items-center">
                    <img className="w-14 h-14 space-y-2" src={logo4} alt="" />
                    <p className=" font-bold text-xl">Best Equipment</p>
                </div>
                <div className="card w-52 h-28 space-y-2  bg-base-100 shadow-xl items-center">
                    <img className="w-14 h-14 space-y-2" src={logo5} alt="" />
                    <p className=" font-bold text-xl">100% Guranty</p>
                </div>
                <div className="card w-52 h-28 space-y-2  bg-base-100 shadow-xl items-center">
                    <img className="w-14 h-14 space-y-2" src={logo6} alt="" />
                    <p className=" font-bold">Timely Delivery</p>
                </div>
            </div>
        </div>
    );
};

export default Features;