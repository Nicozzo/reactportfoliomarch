import React from 'react'

const About = () => {
    return (
      <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
          <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                About
              </p>
            </div>
            <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
              <div className='sm:text-right text-4xl font-bold'>
                <p>Hi. I'm Nico Cozzo, nice to meet you. Please take a look around.</p>
              </div>
              <div>
                <p>As a software engineer, I take great pride in my problem-solving skills. I enjoy tackling complex challenges and finding innovative solutions that not only meet the needs of my clients, 
                    but also exceed their expectation
                    I have worked on a variety of projects that have required me to think outside the box and come up with creative solutions to technical problems. Whether it's designing a new feature or fixing a critical bug, 
                    I am always up for the challenge.</p>  
              </div>
            </div>
        </div>
      </div>
    );
  };

export default About