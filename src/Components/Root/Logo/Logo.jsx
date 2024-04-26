import Marquee from "react-fast-marquee";


const Logo = () => {
    return (
        <div className="flex mb-5 ml-5">
          <Marquee speed={150} pauseOnClick={true} pauseOnHover={true} >
        
<div className="flex  gap-10 mt-10 mb-10 mr-10">      


    <div className="card w-96 bg-gray-300 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://i.ibb.co/3mKpyGF/flag-bangladesh.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Bangladesh</h2>
    <p> Bangladesh is famous for Sundarbans Mangrove Forest, Coxs Bazar, Srimangal, Rangamati, Lalbagh Fort, Paharpur Buddhist Monastery, Saint Martins Island, Kuakata.</p>
   
  </div>
</div>

<div className="card w-96  bg-gray-300 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://i.ibb.co/j5gXR0S/flag-malaysia.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Malaysia</h2>
    <p>Malaysia is famous for Petronas Twin Towers, Batu Caves, Langkawi, Penang, Malacca, Cameron Highlands, Genting Highlands, Taman Negara.</p>
   
  </div>
</div>  


<div className="card w-96  bg-gray-300 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://i.ibb.co/JQ8jktF/flag-thailand.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Thailand</h2>
    <p>Here are some popular tourist spots in Thailand 
Bangkok, Chiang Mai, Phuket, Ayutthaya, Pattaya, Krabi, Koh Samui, Phi Phi Islands.</p>
   
  </div>
</div>


<div className="card w-96  bg-gray-300 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://i.ibb.co/KmvTX1F/flag-monaco.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Indonesia</h2>
    <p>Indonesia is famous for its stunning beaches, rich cultural heritage, vibrant cities, diverse wildlife, ancient temples, and lush tropical landscapes.</p>
   
  </div>
</div>


<div className="card w-96  bg-gray-300 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://i.ibb.co/gVRSpkH/flag-vietnam.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Vietnam</h2>
    <p>Vietnam is renowned for its captivating blend of natural beauty, rich history, and vibrant culture.</p>
   
  </div>
</div>

</div>
     
     </Marquee>
            
        </div>
    );
};

export default Logo;