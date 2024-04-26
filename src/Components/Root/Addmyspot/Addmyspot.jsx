import { useLoaderData } from "react-router-dom";
import Addmycardhome from "../Addmycardhome/Addmycardhome";

const Addmyspot = () => {

    const cardsload = useLoaderData()

    return (
        <div className="  grid grid-cols-1 lg:grid-cols-3  mt-10">
      
      {
        cardsload.map( card => <Addmycardhome key={card._id}
        
        card={card}
         
        >



        </Addmycardhome>   )
      }

    </div>
     
    );
};

export default Addmyspot;