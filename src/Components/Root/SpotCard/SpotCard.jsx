import { useLoaderData } from "react-router-dom";
import Cards from "../Cards/Cards";

const SpotCard = () => {

    const loadedspot = useLoaderData(loadedspot);

    






    return (
        <div className='m-20'>
      
        <h1 className=' text-2xl text-center my-20 font-extrabold'>COFFEE - HUB - CLIENT - SITE : {loadedspot.length} </h1>



        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-10'>

     {

      
        loadedspot.map( touristspot => <Cards 
          
          
          key={touristspot._id} 
          
          touristspot={touristspot}
        

           
        
        
        
        
        > 
        
         
  
          </Cards>  )
      }

     </div>

  
      </div>
    );
};

export default SpotCard;