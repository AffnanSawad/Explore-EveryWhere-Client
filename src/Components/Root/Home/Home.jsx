import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Cards from "../Cards1/Cards";
import Logo from "../Logo/Logo";
import New1 from "../New1/New1";
import New2 from "../New2/New2";
import Review from "../Review/Review";
import Update from "../Update/Update";

const Home = () => {

    //const cardsload = useLoaderData()
    return (
        <div>
           
    <div className="max-w-7xl  mx-auto mb-4">


    <Helmet>
          <title> Explore-EveryWhere | Home  </title>
        </Helmet>

        <Update></Update>

     <Banner> </Banner>

     <New1></New1>
    
    <Cards> </Cards>

     
     

    <div className="mb-10">
    <Logo> </Logo>

    </div>

    


    <New2></New2>

     <Review></Review>



     






    </div>


        </div>
    );
};

export default Home;