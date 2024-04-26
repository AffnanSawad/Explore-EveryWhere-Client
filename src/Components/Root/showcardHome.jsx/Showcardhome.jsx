
const Showcardhome = ({card}) => {

    const {name,country_name,city,population,Area,season,cost,time,visitors,email,username,details,photourl} = card; 
    
    
    
    return (
        <div className="card w-96 bg-base-100 shadow-xl my-10">
        <figure><img src={ photourl } alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-2xl">{name}</h2>
           
           <div className="flex gap-4">
         
         <p className="font-bold">Country : {country_name} </p>
         <p className="font-bold"> Capital : {city} </p>
         

         
           </div>


           <div className="flex gap-4">
           <p className="font-bold"> Population: {population} </p>
         <p className="font-bold"> Area : {Area} </p>
         
           </div>




           <p className="text-xl font-semibold">  {details} </p>
         


          


          <div className="card-actions ">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    );
};

export default Showcardhome;