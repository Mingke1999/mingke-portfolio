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
                    Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quasi impedit repellendus
                    consequatur maxime enim laudantium? 
                    Ex sint unde animi quae illo? Distinctio 
                    adipisci quam quasi iusto quisquam voluptas 
                    atque cumque.
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
