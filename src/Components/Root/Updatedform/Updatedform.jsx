
import { useLoaderData } from "react-router-dom";

const Updatedform = () => {

  const form = useLoaderData();

  const {_id,name,country_name,city,population,Area,season,cost,time,visitors,email,username,details,photourl} = form ;


   
  const handleupdateform = event => {
    event.preventDefault()

    const form = event.target 

    const name = form.name.value
  //  const country_name = form.country_name.value
    const city = form.city.value
    const population = form.population.value
    const Area = form.Area.value
    const season = form.name.value
   // const email = form.email.value
    //const username = form.username.value
    const photourl = form.photourl.value
    

    const updatedform = {name,country_name,city,population,Area, season,email,username,details,photourl}

    console.log(updatedform);


    // CLIENT STITE THEKE DATA => SERVER SITE E PATHANO....

fetch(`http://localhost:5000/user/${_id} `,{
  
  
method: 'PUT',

headers:{
  'content-type': 'application/json'
},
body: JSON.stringify(updatedform)

})
.then(res => res.json())
.then(data => {console.log(data) 

if(data.modifiedCount > 0){
  
    alert('Do You Want To Update ?')

}

  form.reset();

});




}


    return (
        <div>
<div >
        
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-red-100 ">

        <h1 className="text-center text-2xl font-extrabold"> UPDATE FORM </h1>

  <form className="card-body"  onSubmit={handleupdateform}>
    <div className="form-control  ">
      <label className="label">
        <span className="label-text">Spot NAME  </span>
      </label>
      <input type="text" defaultValue={name} placeholder="COFFEE NAME" name="name" className="input input-bordered" required />
    </div>
    <div className="form-control ">
      <label className="label">
        <span className="label-text">Country Name</span>
      </label>
      <input type="text" name="country name" defaultValue={country_name} placeholder="Country Name" className="input input-bordered" required />
      
    </div>


    <div className="form-control ">
      <label className="label">
        <span className="label-text">City</span>
      </label>
      <input type="text" name="city" defaultValue={city} placeholder="city" className="input input-bordered" required />
      
    </div>



    <div className="form-control ">
      <label className="label">
        <span className="label-text">Population</span>
      </label>
      <input type="text" name="population" defaultValue={population} placeholder="Population" className="input input-bordered" required />
      
    </div>




    <div className="form-control ">
      <label className="label">
        <span className="label-text">Area</span>
      </label>
      <input type="text" name="Area" defaultValue={Area} placeholder="Area" className="input input-bordered" required />
      
    </div>






    <div className="form-control ">
      <label className="label">
        <span className="label-text">Season</span>
      </label>
      <input type="text" name="season" defaultValue={season} placeholder="season" className="input input-bordered" required />
      
    </div>









    <div className="form-control ">
      <label className="label">
        <span className="label-text">DETAILS</span>
      </label>
      <input type="text" name="details" defaultValue={details} placeholder="DETAILS" className="input input-bordered" required />
      
    </div>



    <div className="form-control ">
      <label className="label">
        <span className="label-text">PHOTO URL</span>
      </label>
      <input type="text" name="photourl" defaultValue={photourl} placeholder="PHOTO URL" className="input input-bordered"  />
      
    </div>



    <div className="form-control mt-6">
      <button  className="btn btn-secondary">UPDATE </button>
    </div>
  </form>
</div>

    </div>        </div>
    );
};

export default Updatedform;