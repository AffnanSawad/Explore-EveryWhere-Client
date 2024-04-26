import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Nav = () => {


    
  const { user , logout1 } = useContext(AuthContext) 
    
  const handlelogout = () => {
    logout1()
    .then()
    .catch()
  }

    
    const links = <>
     
    <li> <NavLink to='/' >    Home  </NavLink>  </li>
    <li> <NavLink to='/contact' > Contact Us   </NavLink>  </li>


    <li> <NavLink to='/all' > All Tourists Spot   </NavLink>  </li>
    <li> <NavLink to='/add' > Add Tourists Spot   </NavLink>  </li>
    <li> <NavLink to='/my'  > MY Tourists Spot </NavLink>  </li>
    
    
    <li> <NavLink to='/login'  > Log In   </NavLink>  </li>
    <li> <NavLink to='/signup'  > Sign Up  </NavLink>  </li>


   
    
       

 
        
    
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


  <div className="navbar-end">
    <button className="btn btn-ghost btn-circle">
      
    
   
    
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