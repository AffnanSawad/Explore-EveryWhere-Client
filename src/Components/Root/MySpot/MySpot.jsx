import { useLoaderData } from "react-router-dom";
import Showcardhome from "../showcardHome.jsx/Showcardhome";

const MySpot = () => {

    const cardsload = useLoaderData()

    return (
        <div className="  grid grid-cols-1 lg:grid-cols-3  mt-10">
      
      {
        cardsload.map( card => <Showcardhome key={card._id}
        
        card={card}
         
        >



        </Showcardhome>   )
      }

    </div>
     
    );
};

export default MySpot;