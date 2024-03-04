import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor of Business Administration"
            subTitle="Darul Ihsan University (2006 - 2010)"
            // result="3.90/4"
            des="University life is a vibrant blend of academic exploration, social connections, and personal growth. It offers opportunities for intellectual curiosity, extracurricular engagement, and lifelong friendships. Through diverse experiences, students develop independence, resilience, and a sense of community, preparing them for future endeavors."
          />
          <ResumeCard
            title="Higher Secondary Certificate"
            subTitle="hazi asmat government college(2001 - 2005)"
            // result="4.75/5"
            des="College life is a dynamic period of academic pursuit, social interaction, and personal development. It offers opportunities for learning, self-discovery, and building lifelong connections. Through diverse experiences, students cultivate independence, resilience, and a sense of belonging."
          />
          <ResumeCard
            title="Secondary School Certificate"
            subTitle="Bhairab Government Kadir Baksa Pilot Model High School(1998 - 2000)"
            // result="5.00/5"
            des="School life is a formative journey of learning, friendship, and growth. It fosters academic curiosity, social interaction, and character development. Through diverse experiences, students lay the foundation for future success and lifelong learning."
          />
        </div>
      </div>
      {/* part Two */}
{/* 
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Software Engineer"
            subTitle="Google Out Tech - (2017 - Present)"
            result="USA"
            des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Apple Developer Team - (2012 - 2016)"
            result="MALAYSIA"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
        </div>
      </div> */}
    </motion.div>
  );
}

export default Education