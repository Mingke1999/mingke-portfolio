"use client"
import React, {useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'
import { SKILL_TABS } from '../constants/Tabs'

const AboutSection = () => {
    const [tab,setTab] = useState("Skills")
    const [isPending,startTransition ] = useTransition()
    const handleTabChange = (id) =>{
        startTransition(()=>{
            setTab(id)
        })
    }
  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src={"/images/Starry-Night.png"} width={500} height={500} alt='Skills'/>
            <div className='mt-4 mdLmt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base md:text-lg'>
                I hold a degree from UTAS with a major in cybersecurity, which has equipped me with a deep understanding of operating systems and core principles of cybersecurity. 
                I have hands-on experience in various cybersecurity tools and labs, including Kali Linux, Metasploit, and FTK for digital forensics.
                As for web development, I specialize in the ReactJS framework and have completed projects with a strong focus on integrating the Tailwind CSS framework.
                </p>
            </div>
            <div className='flex flex-row mt-8'>
                <TabButton 
                    selectTab={() => handleTabChange("Skills")} 
                    active={tab === "Skills"}
                >
                    {""}
                    Skills{""}
                </TabButton>
                <TabButton 
                    selectTab={() => handleTabChange("Education")} 
                    active={tab === "Education"}
                >
                    {""}
                    Education{""}
                </TabButton>
                <TabButton 
                    selectTab={() => handleTabChange("Certification")} 
                    active={tab === "Certification"}
                >
                    {""}
                    Certification{""}
                </TabButton>
            </div>
            <div className='mt-8'>
                {SKILL_TABS.find((t)=> t.id === tab).content}
            </div>
        </div>

    </section>
  )
}
export default AboutSection
