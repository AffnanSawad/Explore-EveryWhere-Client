import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="text-center  justify-center lg: mt-28">

            <h1 className="text-4xl font-extrabold"> 404 ! NOT FOUND ! PLEASE GO TO THE RIGHT SITE.   </h1>

            <h1 className="text-4xl font-extrabold">PLEASE FIRST FO  <Link to={'/'}> <button className="btn btn-primary">HOME</button> </Link> </h1>
             
             <img className="w-1/3 ml-20 lg:ml-96 mt-2" src="https://i.ibb.co/Jd7VQP0/3804918.jpg" alt="" />
             



        </div>
    );
};

export default Error;