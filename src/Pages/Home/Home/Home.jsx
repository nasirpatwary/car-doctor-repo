import About from "../About/About";
import Banner from "../Banner/Banner";
import Border from "../Border/Border";
import Browses from "../Browses/Browses";

import Services from "../Services/Services";
import Customer from "./Customer/Customer";
import Features from "./Features/Features";
import Meets from "./Meets/Meets";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Border></Border>
            <Browses></Browses>
            <Meets></Meets>
            <Features></Features>
            <Customer></Customer>
        </div>
    );
};

export default Home;