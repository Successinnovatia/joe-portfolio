import React from 'react'
import ContactCard from './ContactCard'
import { FileText } from 'lucide-react'

function Portfolio() {
  return (
   <div className="flex flex-col gap-4">
    <ContactCard icon={<FileText className='h-full w-full'/>} text={"Resume"} url={"#"}/>
    <ContactCard icon={<FileText className='h-full w-full'/>} text={"Bio"} url={"#"}/>
   </div>
  )
}

export default Portfolio