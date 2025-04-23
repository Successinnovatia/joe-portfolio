import React from 'react'
import ContactCard from './ContactCard'
import { MdOutlineMail } from "react-icons/md";


function ContactMe() {
  return (
    <div className="flex flex-col gap-4">
      <ContactCard icon={<MdOutlineMail className='w-full h-full'/>} text={"Send a mail instead"} url={"mailto:josephugochukwu240@gmail.com"}/>

      <ContactCard icon= {<img src="/images/main-image.jpg" className='w-12 mx-auto h-full rounded-md'/>} text={"Schedule a free call with me"} url={"#"}/>
    </div>
  )
}

export default ContactMe