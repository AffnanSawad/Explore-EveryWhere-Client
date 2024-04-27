import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Nav = () => {

   const [theme ,settheme] = useState('light')

   
   const handletoggle = (e) => {
   
  if(e.target.value){
    
    settheme('synthwave')
 

  }
  else{
    settheme('light')
  }


   }



 

    
  const { user , logout1 } = useContext(AuthContext) 
    
  const handlelogout = () => {
    logout1()
    .then()
    .catch()
  }

    
    const links = <>
     
    <li> <NavLink to='/' >    Home  </NavLink>  </li>
   
    <li> <NavLink to='/all' > All Tourists Spot   </NavLink>  </li>
    

    <li> <NavLink to='/login'  > Log In   </NavLink>  </li>
    <li> <NavLink to='/signup'  > Sign Up  </NavLink>  </li>


   {
    user &&
    <li> <NavLink to='/contact' > Contact Us   </NavLink>  </li>


   }
   {
    user &&
    <li> <NavLink to='/stat' > Statistics  </NavLink>  </li>


   }
   {
    user &&
    <li> <NavLink to='/addmyspot' > Add Tourists Spot   </NavLink>  </li>


   }
   {
    user &&
    <li> <NavLink to='/my'  > MY Tourists Spot </NavLink>  </li>


   }
    
       

 
        
    
</>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        
           {links} 

    </ul>

    </div>
      
      <div className="flex">
      <img className="w-2/12" src="https://i.ibb.co/sCrgVHb/4135126.jpg" alt="" />
      <h1 className="text-2xl font-bold">Explore - EveryWhere </h1>  

      </div>
</div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      
     {links}



          </ul>
     
   
  </div>


  <div className="flex  navbar-end">
    <button className="btn btn-ghost btn-circle">
      
    


    <label className="cursor-pointer grid place-items-center mr-2 lg:mr-10">
  <input
  
  onChange={handletoggle}
  
  
  type="checkbox" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>
  <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>
   
    
    </button>

   
   
    {
      user ?
     
<div className="flex gap-4">

  
<div className="tooltip  tooltip-bottom" data-tip={user.displayName}>







<div tabIndex={0} className="avatar btn btn-circle btn-ghost">
  <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={user?.photoURL ||"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />

    <br />

    
  </div>
</div>
</div>

<Link to='/'>

<button onClick={handlelogout} className="btn btn-error">Sign Out</button>


</Link>
  
</div>


     :

     <Link to='/login' > 
    
     <button className="btn btn-primary">LOG IN</button>
     </Link>

  
    
    
    
    }


  </div>












  </div>




   
   
   
    

    );
};

export default Nav;