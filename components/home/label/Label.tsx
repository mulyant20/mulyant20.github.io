import React from 'react'

type Props = {
  text: string
  classname?: string
}

export default function Label({ text, classname }: Props) {
  return (
    <div
      className={`inline-block text-[14px] px-[1rem] py-[8px] rounded-full bg-[#0f0e1a] border border-[#050408] text-[#DFDFDF] ${classname}`}
    >
      {text}
    </div>
  )
}
