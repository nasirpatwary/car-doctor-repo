import { useEffect, useState } from "react";
import Browse from "./Browse";
import Marquee from "react-fast-marquee";


const Browses = () => {
    const [browses, setBrowses] = useState([])
    useEffect(() => {
        fetch('browses.json')
            .then(res => res.json())
            .then(data => setBrowses(data))
    }, [])
    return (
        <div>
                <Marquee pauseOnClick={true} speed={100}>
            <div className="text-center space-y-2 border rounded-xl p-2 bg-sky-200">
                <p className="text-[#FF3811] font-bold text-xl">Popular Products</p>
                <h2 className="text-5xl font-bold">Browse Our Products</h2>
                <p className="text-[#737373] ">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
                </Marquee>
            <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    browses.map(browse =><Browse key={browse._id} browse={browse} ></Browse>)
                }
            </div>
            <div className="text-center my-6">
                <button className="border py-4 px-6 rounded-lg text-[#FF3811] border-outline font-semibold text-lg">More Products</button>
            </div>
        </div>
    );
};

export default Browses;