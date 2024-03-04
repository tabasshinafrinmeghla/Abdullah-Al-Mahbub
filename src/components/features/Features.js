import React from "react";
import Title from "../layouts/Title";
import { FaPhone,  } from "react-icons/fa";
// import Card from "./Card";
// import { featuresData } from "../../data/data";
const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="let's talk" des="Introduction" />
      {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        {featuresData.map((item) => (   
          <Card item={item} key={item.id} />
        ))}
      </div> */}

      <h1 className="text-2xl font-bold text-white">Abdullah Al Mahbub</h1>
<h2>


Mahabub is a dynamic entrepreneur serving as the CEO of Network24, a leading Internet Service Provider (ISP) company, and the visionary mind behind Food Cafe, a vibrant restaurant offering culinary delights. With a passion for innovation and customer satisfaction, Mahabub leads Network24 in delivering high-speed internet solutions to empower individuals and businesses alike. Simultaneously, his dedication to culinary excellence shines through Food Cafe, where he curates a delightful dining experience for patrons, blending flavors and ambiance to create memorable moments. With a relentless drive for success and a commitment to excellence, Mahabub continues to inspire and elevate both industries with his leadership and vision.
</h2>

<br/>

<h1 className="text-1xl font-bold text-white">Email</h1>
<h1 className="text-white">abdullahmahbub45@gmail.com</h1>
<h1 className="text-white">mahbub461@yahoo.com</h1>



<div className="flex ">
  <div className="p-1">
  <FaPhone></FaPhone>
  </div>
  <div>
  
  <h1 className="text-1xl font-bold text-white flex p-1">01740992598</h1>
  </div>
</div>
       
<div className="flex ">
  <div className="p-1">
  <FaPhone></FaPhone>
  </div>
  <div>
  
  <h1 className="text-1xl font-bold text-white flex p-1">01897995040</h1>
  </div>
</div>
       
    </section>
  );
};

export default Features;
