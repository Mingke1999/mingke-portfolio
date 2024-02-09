"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import {motion} from 'framer-motion'
const HeroSection = () => {
  return (
    <section className='lg:py-16'>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
          <motion.div 
            initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.5}}
            className='col-span-7 place-self-center text-center sm:text-left'>
            <h1 className="text-white mb-4 text-2xl sm:text-3xl lg:text-5xl font-extrabold">
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600'>
                    Hello, I&apos;m {" "}
                </span>
                <br></br>
                <TypeAnimation
                    sequence={[
                        'React Developer',
                        1000,
                        'Ethical Hacker',
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '1.2em', display: 'inline-block' }}
                    repeat={Infinity}
                    />
            </h1>
            <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
            I&apos;m Mingke, a dedicated developer with a passion for both web development and web security. 
            I&apos;m driven by a desire to create robust, secure web solutions.
            </p>
            <div>
                <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white'>
                    Hire Me
                </button>
                <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3'>
                   <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'> Download CV</span>
                </button>
            </div>
          </motion.div>
          <motion.div 
            initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.5}} 
            className='col-span-5 place-self-center mt-4 lg:mt-0'>
            <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative'>
                <Image
                    src="/images/duck.png"
                    alt='duck'
                    className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                    width={500}
                    height={500}
                />
            </div>
          </motion.div>
        </div>
    </section>
  )
}

export default HeroSection