import React from 'react'
import ContactCard from './ContactCard'
import { MdOutlineMail } from "react-icons/md";
import { MdCall } from "react-icons/md";


function ContactMe() {
  return (
    <div className="flex flex-col gap-4 bg-black">
      <ContactCard icon={<MdCall className='w-full h-full'/>} text={"Shedule a free call with me "} url={"https://calendly.com/chinedujoseph/get-started-chinedu-joseph"}/>
      <ContactCard icon={<MdOutlineMail className='w-full h-full'/>} text={"Send a mail instead"} url={"mailto:josephugochukwu240@gmail.com"}/>

    </div>
  )
}

export default ContactMe