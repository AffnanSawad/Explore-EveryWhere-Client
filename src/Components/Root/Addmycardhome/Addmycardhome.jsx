import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const Addmycardhome = ({card,cardes,setcades}) => {

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
 
          {
     

            Swal.fire({
              title: 'Delete!',
              text: 'User Deleted Successfully ! ',
              icon: 'success',
              confirmButtonText: 'Okay ! '
            })

          }
        const remaining = cardes.filter(cof => cof._id !== _id );
        setcades(remaining);
 
        }


    })
        



     
    }
    
    
    return (
        <div className="card w-96 bg-base-100 shadow-xl my-10">

<Helmet>
      <title>Explore-EveryWhere | My-Spot</title>
    </Helmet>
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