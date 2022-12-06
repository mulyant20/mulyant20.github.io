import React from 'react'

type Props = {
    text: string
    classname?: string
}

export default function index({text, classname}: Props) {
  return (
    <div className={`inline-block text-[14px] px-[1rem] py-[8px] rounded-full bg-[#131221] border border-[#222133] text-[#DFDFDF] ${classname}`}>
        {text}
    </div>
  )
}