import { BsFillHouseAddFill } from "react-icons/bs";

import { Link } from "react-router-dom";

const Card = ({card}) => {

    const {id,estate_title,country,details,area,season,Visitors,image} = card  ;

    return (
        <div className="card w-96 bg-base-100 shadow-xl mt-10 mb-20  ">
        <figure> <img src= {image} alt="" />  </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold "> {estate_title} 
       </h2> 
         
         <p className="font-bold"> Country : {country}   </p>
          <p> {details } </p>
      
         <div className="flex">
         <p className="font-extrabold">Visitors: {Visitors} </p>
         
         
          <div className="flex mr-6 ">
         
       <p className="font-extrabold ml-2">B. Season:{season} </p>
          </div>
          
      <div className="flex ml-4">
      <BsFillHouseAddFill />
      <p className="font-extrabold ml-2 ">{area} </p>
      </div>
          
         </div>
     
      
          <div className="card-actions mt-4 ">
        
      
        <Link to={`/card/${id}`} >
        
        <button className="btn btn-accent">VIEW DETAILS</button>
      
         
        </Link>
      
      
          </div>
        </div>
      </div>
    );
};

export default Card;