import Marquee from "react-fast-marquee";


const Update = () => {
    return (
        <div className="flex mb-5">

            <button className="btn  btn-error">UPDATE</button>
            <Marquee speed={150} pauseOnClick={true} pauseOnHover={true} >
            Here You Can See The All Tourists Spot In <span className=" bg-red-400">  SouthEast Asia   </span>  . You Can know Details About The Tourists Spot In Details.. In his Site You Can Add Your Favourite Destinations of  <span className=" bg-red-400">  SouthEast Asia   </span>
     
     </Marquee>
            
        </div>
    );
};

export default Update;