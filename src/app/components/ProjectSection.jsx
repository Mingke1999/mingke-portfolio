"use client"
import React,{useState} from 'react'
import ProjectCard from './ProjectCard'
import PorjectTag from './PorjectTag'

const PORTFOLIOS = [
    {
        id:1,
        title:"Event Booking System",
        description: "React classes with antd",
        image:"/images/projects/EventBooking.png",
        tag:["All","Web"],
        gitUrl:"https://github.com/YahanW/frontend-dashboard",
        previewUrl:"https://www.www.destinationtas.com.au/"
    },
    {
        id:2,
        title:"Todo List",
        description: "React component value passing",
        image:"/images/projects/ToDo.png",
        tag:["All","Web"],
        gitUrl:"https://github.com/Mingke1999/todo-list",
        previewUrl:"https://mingke1999.github.io/todo-list/",
    }
]
const ProjectSection = () => {
  const [tag, setTag] = useState("All")
  const handleTagChange = (newTag) =>{
    setTag(newTag)
  }
  const filteredProjects = PORTFOLIOS.filter((project)=>(
    project.tag.includes(tag)
  ))
  return (
    <>
        <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
            My Projects
        </h2>
        <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
          <PorjectTag 
            onClick={handleTagChange} 
            name="All" 
            isSelected={tag==="All"}/>
         <PorjectTag 
            onClick={handleTagChange} 
            name="Web" 
            isSelected={tag==="Web"}/>
        <PorjectTag 
            onClick={handleTagChange} 
            name="Mobile" 
            isSelected={tag==="Mobile"}/>
        </div>
        <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {
              filteredProjects.map((project) => (
                <ProjectCard 
                    key={project.id} 
                    title={project.title} 
                    description={project.description}
                    imgUrl={project.image}
                    tags={project}
                    gitUrl={project.gitUrl}
                    previewUrl={project.previewUrl}
                />))
            }
        </div>
    </>
  )
}

export default ProjectSection