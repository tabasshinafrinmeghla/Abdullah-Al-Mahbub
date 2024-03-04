import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';
// import { FaFacebook } from 'react-icons/fa';

const Projects = () => {

  
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT site AND KEEP YOUR FEEDBACK"
          des="Our Service"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Network24"
          des=" Network24, established in November 2023, is a pioneering Internet Service Provider (ISP) company dedicated to providing high-speed connectivity solutions. With a focus on innovation and customer-centric services, Network24 aims to revolutionize the digital landscape, empowering individuals and businesses with seamless internet access and unparalleled reliability."
          src={projectOne}
          
        />
        <ProjectsCard
          title="Web Connection"
          des=" Web Connection, founded in 2019, is a prominent Internet Service Provider (ISP) company committed to delivering cutting-edge connectivity solutions. With a solid foundation in technology and a customer-first approach, Web Connection has rapidly become a trusted name in the industry, providing reliable internet services to meet the evolving needs of individuals and businesses alike."
          src={projectTwo}
        />
       
        <ProjectsCard
          title="Food Bank Cafe Bhairab
          "
          des="Food Bank Cafe, established in 2019, is not just a restaurant but a culinary haven where flavors meet compassion. Rooted in the mission to alleviate hunger, this unique establishment serves up delicious meals while also giving back to the community. With every bite, patrons support a noble cause, making dining at Food Bank Cafe an experience that nourishes both the body and soul."
          src={projectThree}
        />
       
        {/* <ProjectsCard
         
          title="IT Solution"
        
          des=
          "IT Solution, poised to launch in the coming year, is a forward-thinking security-based company dedicated to safeguarding digital assets and protecting businesses from cyber threats. With a focus on cutting-edge technology and innovative strategies, IT Solution is poised to redefine cybersecurity standards, offering comprehensive solutions to address the evolving landscape of digital security challenges."
          src={projectTwo}
          

        /> */}
         {/* <div>
          <a href='https://www.facebook.com/'><FaFacebook></FaFacebook></a>
        </div> */}
       
      </div>
    </section>
  );
}

export default Projects