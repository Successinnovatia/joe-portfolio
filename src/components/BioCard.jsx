import React from 'react'

function BioCard({title, description}) {
  return (
    <div className='flex flex-col gap-4 w-full bg-[#2A2A2A] rounded-lg shadow-md py-4 px-5 text-white mx-auto md:mx-0' data-aos="zoom-in">
        <h2 className="text-xs uppercase text-center">{title}</h2>
        <div className=''>{description}</div>
    </div>
  )
}

export default BioCard