import { useEffect } from "react";
import { useState } from "react";
import Service from "./Service";
import Marquee from "react-fast-marquee";

const Services = () => {
    const [services,setServices] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (

        <div className="mt-8 "> 
            <Marquee pauseOnClick={true} speed={100}>
            <div className="text-center my-8 space-y-3 p-4 border rounded-xl bg-sky-500">
                <h2 className="text-[#FF3811] text-xl font-bold">Service</h2>
                <h2 className="text-5xl font-bold text-white">Our Service Area</h2>
                <p className="text-base text-[#737373] text-white leading-8 font-normal">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>  
            </div>
            </Marquee>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                  services.map(service =><Service key={service._id} service={service} ></Service>)
                }     
            </div>
            <div>
               <div className="my-8 text-center">
               <button className="border py-4 px-6 rounded-lg text-[#FF3811] text-lg font-semibold border-outline">More Services</button>
               </div>
            </div>
        </div>
    );
};

export default Services;