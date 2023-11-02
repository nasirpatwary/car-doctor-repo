import {FaFacebook}from "react-icons/fa"
import {AiFillTwitterCircle}from "react-icons/ai"
import {LiaLinkedinIn}from "react-icons/lia"
import {GrInstagram}from "react-icons/gr"
const Meet = ({meet}) => {
    const {img,title,Engine} = meet
    return (
        <div className="card w-96 h-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body space-y-2 items-center text-center">
    <h2 className="card-title font-bold text-2xl">{title} </h2>
    <p className="text-[#737373] text-semibold text-xl">Engine {Engine} </p>
    <div className="card-actions">
      <FaFacebook className="w-8 h-8 text-sky-400"></FaFacebook>
      <AiFillTwitterCircle className="w-8 h-8 text-sky-400"></AiFillTwitterCircle>
      <LiaLinkedinIn className="w-8 h-8 border rounded-full bg-sky-500 text-white"></LiaLinkedinIn>
       <GrInstagram className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white"></GrInstagram>
    </div>
  </div>
</div>
    );
};

export default Meet;