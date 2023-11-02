import moment from "moment/moment";

const Border = () => {
    return (
        <div className="my-8">
         <div className="flex justify-evenly gap-5 py-16 bg-[#151515] from-purple-500 to-pink-500">
           <div className="text-white">
            <p>We are open monday-friday</p>
            <p className="text-2xl">{moment().format('h:mm:ss a')}</p>
           </div>
           <div className="text-white ">
            <p>Have a question?</p>
            <p>+2546 251 2658</p>
         </div>
         <div className="text-white">
            <p>Need a repair? our address</p>
            <h2>Liza Street, New York</h2>
         </div>
         </div>
        </div>
    );
};

export default Border;