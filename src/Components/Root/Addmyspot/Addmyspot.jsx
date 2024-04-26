import { useLoaderData } from "react-router-dom";
import Addmycardhome from "../Addmycardhome/Addmycardhome";
import { useState } from "react";

const Addmyspot = () => {

    const cardsload = useLoaderData()

    const [cardes , setcades] = useState(cardsload);


    return (
        <div className="  grid grid-cols-1 lg:grid-cols-3  mt-10">
      
      {
        cardes.length > 0 &&
        
        cardes?.map( card => <Addmycardhome 
            
            
            key={card._id}
        
        card={card}

        cardes={cardes}
        setcades={setcades}
         
        >


           



        </Addmycardhome>   )
      }

    </div>
     
    );
};

export default Addmyspot;