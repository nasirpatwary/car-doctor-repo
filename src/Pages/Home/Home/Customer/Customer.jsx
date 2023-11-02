import logo1 from "../../../../assets/assets/images/about_us/member1.png"
import logo2 from "../../../../assets/assets/images/about_us/member3.png"
import logo3 from "../../../../assets/assets/icons/quote.svg"
import logo4 from "../../../../assets/assets/icons/quote.svg"
import {FiArrowRight} from "react-icons/fi"
import {BiArrowBack} from "react-icons/bi"
const Customer = () => {
    return (
        <div>
            <div className="text-center space-y-4">
                <p className="font-bold text-[#FF3811] ">Testimonial</p>
                <h2 className="text-5xl font-bold">What Customer Says</h2>
                <p className="text-[#737373] ">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="flex justify-center gap-12 my-24">
                <div className="card w-[615px] h-80 bg-base-100 shadow-xl border-4">
                    <div className="card-body">
                        <div className="flex gap-6">
                            <img className="w-14 h-14" src={logo1} alt="" />
                            <div>
                                <h1 className="card-title text-2xl font-bold">Awlad Hossain</h1>
                                <h2 className="text-[#737373] font-semibold">Businessman</h2>
                            </div>
                            <div>
                                <img className="w-14 h-14" src={logo3} alt="" />
                            </div>
                        </div>
                        <div className="card-actions">
                           <div className="hero-content flex-col lg:flex-row-reverse">
                           <p className="text-[#737373] mt-12">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</p>
                            <a href="#slide4" className="btn btn-circle "><BiArrowBack></BiArrowBack></a>
                           </div>
                        </div>
                    </div>
                </div>
                <div className="card w-[615px] h-80 bg-base-100 shadow-xl border-4">
                    <div className="card-body">
                        <div className="flex gap-6">
                            <img className="w-14 h-14" src={logo2} alt="" />
                            <div>
                                <h1 className="card-title text-2xl font-bold">Awlad Hossain</h1>
                                <h2 className="text-[#737373] font-semibold ">Businessman</h2>
                            </div>
                            <div>
                                <img className="w-14 h-14" src={logo4} alt="" />
                            </div>
                        </div>
                        <div className="card-actions ">
                            <div className="hero-content">
                            <p className="text-[#737373] mt-12">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</p>
                            <a href="#slide2" className="btn btn-circle"><FiArrowRight></FiArrowRight></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Customer;