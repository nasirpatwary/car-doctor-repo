import { useEffect, useState } from "react";
import Meet from "./Meet";
import Marquee from "react-fast-marquee";


const Meets = () => {
    const [meets,setmeets] = useState([])

     useEffect(()=>{
      fetch('meets.json')
      .then(res =>res.json())
      .then(data =>setmeets(data))
    },[])
    return (
        <div>
            <Marquee pauseOnClick={true} speed={100} >
            <div className="text-center my-24 space-y-3 border rounded-xl p-4">
                <p className="text-[#FF3811] font-bold">Team</p>
                <h2 className="text-5xl font-bold">Meet Our Team</h2>
                <p className="text-[#737373] ">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            </Marquee>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    meets.map(meet =><Meet key={meet.id} meet={meet}></Meet>)
                }
            </div>
        </div>
    );
};

export default Meets;