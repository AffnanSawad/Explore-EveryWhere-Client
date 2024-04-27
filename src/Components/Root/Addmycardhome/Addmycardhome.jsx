import { Link } from "react-router-dom";


const Addmycardhome = ({card}) => {

    const {_id,name,country_name,city,population,Area,season,cost,time,visitors,email,username,details,photourl} = card; 




    const handledeleted = _id => {

        console.log('deleted', _id)

        fetch(`http://localhost:5000/user/${_id}`,{
            method: 'DELETE'

        })
        .then(res => res.json())
        .then(data => {
         
         console.log(data)

         if(data.deletedCount>0){
 
        alert('Are you Want to Delete?')
 
        }


    })
        



     
    }
    
    
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
         


          


          <div className="card-actions flex gap-5 ">
            <button className="btn btn-primary">View Details</button>
            <Link to={`/updateform/${_id}`}>

<button className="btn join-item btn-error     ">EDIT</button>


</Link>              <button className="btn btn-error"
             

            onClick={() => handledeleted(_id) }
            
            
            
            >Delete</button>
          </div>
        </div>
      </div>
    );
};

export default Addmycardhome;