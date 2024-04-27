import { Helmet } from "react-helmet-async";

const AddMyCard = () => {



    const handleaddcard = event => {
        event.preventDefault()
    
        const form = event.target 
    
        const name = form.name.value
        const country_name = form.countryname.value
        const city = form.city.value
        const population = form.population.value
        const Area = form.Area.value
        const season = form.season.value
        const cost = form.cost.value
        const time = form.time.value
        const visitors = form.visitors.value
        const email = form.email.value
        const username = form.username.value
        const details = form.details.value
        const photourl = form.photourl.value
    
        const newcard = {name,country_name,city,population,Area,season,cost,time,visitors,email,username,details,photourl}
    
        console.log(newcard);



        fetch('http://localhost:5000/user ',{
      
      
    method: 'POST',

    headers:{
      'content-type': 'application/json'
    },
    body: JSON.stringify(newcard)

  })
  .then(res => res.json())
 .then(data => { console.log(data)  

  if(data.insertedId > 0)
  {
     

     alert('added');
    
    
 }

}   )

    

 
form.reset();
    }


    





    return (
      

        
        <div className="card shrink-0 w-full max-w-7xl mx-auto shadow-2xl bg-red-100 ">
        
        <Helmet>
      <title>Explore-EveryWhere | Add-My-Spot</title>
    </Helmet>
        <h1 className="text-center text-2xl font-extrabold"> ADD Tourist Spot </h1>

  <form className="card-body"  onSubmit={handleaddcard}>
    <div className="form-control  ">
      <label className="label">
        <span className="label-text">Spot NAME</span>
      </label>
      <input type="text" placeholder="Spot NAME" name="name" className="input input-bordered" required />
    </div>


    
  


    <div className="form-control  ">
      <label className="label">
        <span className="label-text">Country NAME</span>
      </label>
      <input type="text" placeholder="COUNTRY NAME" name="countryname" className="input input-bordered" required />
    </div>


    <div className="form-control ">
      <label className="label">
        <span className="label-text">Capital City</span>
      </label>
      <input type="text" name="city" placeholder="capital city" className="input input-bordered" required />
      
    </div>


    <div className="form-control ">
      <label className="label">
        <span className="label-text">Population</span>
      </label>
      <input type="text" name="population" placeholder="population" className="input input-bordered" required />
      
    </div>


    <div className="form-control ">
      <label className="label">
        <span className="label-text">Area</span>
      </label>
      <input type="text" name="Area" placeholder="Area" className="input input-bordered" required />
      
    </div>

    <div className="form-control ">
      <label className="label">
        <span className="label-text">DETAILS</span>
      </label>
      <input type="text" name="details" placeholder="DETAILS" className="input input-bordered" required />
      
    </div>




    <div className="form-control ">
      <label className="label">
        <span className="label-text">Best Season</span>
      </label>
      <input type="text" name="season" placeholder="season" className="input input-bordered" required />
      
    </div>


    <div className="form-control ">
      <label className="label">
        <span className="label-text">Cost</span>
      </label>
      <input type="text" name="cost" placeholder="cost" className="input input-bordered" required />
      
    </div>



    <div className="form-control ">
      <label className="label">
        <span className="label-text">Travel Time </span>
      </label>
      <input type="text" name="time" placeholder="time" className="input input-bordered" required />
      
    </div>


    <div className="form-control ">
      <label className="label">
        <span className="label-text">Visitors Per Year</span>
      </label>
      <input type="text" name="visitors" placeholder="visitors" className="input input-bordered" required />
      
    </div>



    <div className="form-control ">
      <label className="label">
        <span className="label-text">User Email</span>
      </label>
      <input type="text" name="email" placeholder="email" className="input input-bordered" required />
      
    </div>


    <div className="form-control ">
      <label className="label">
        <span className="label-text">User Name</span>
      </label>
      <input type="text" name="username" placeholder="user name" className="input input-bordered" required />
      
    </div>
   



    <div className="form-control ">
      <label className="label">
        <span className="label-text">PHOTO URL</span>
      </label>
      <input type="text" name="photourl" placeholder="PHOTO URL" className="input input-bordered"  />
      
    </div>


    <div className="form-control mt-6">
      <button className="btn btn-primary">ADD Tourists Spot</button>
    </div>
  </form>
</div>



    );
};

export default AddMyCard;