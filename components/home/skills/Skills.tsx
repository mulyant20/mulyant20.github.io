import React from 'react'

type Props = {
  skills: skills[]
}

interface skills {
  name: string
}

export default function Skills({ skills }: Props) {
  return (
    <ul className='flex gap-[1rem] mb-[48px] flex-wrap'>
      {skills.map((skill, index) => (
        <li
          key={index}
          className='px-[20px] py-[5px] rounded-full border border-white/40 text-white'
        >
          {skill.name}
        </li>
      ))}
    </ul>
  )
}
