import React from 'react'

type Props = {
  contacts: contact[]
}

interface contact {
  name: string
  url: string
  img: React.ReactNode
}

export default function Contacts({ contacts }: Props) {
  return (
    <ul className='flex gap-4'>
      {contacts.map((contact, index) => (
        <li
          key={index}
          className='text-white/40 hover:text-white cursor-pointer text-xl'
        >
          <a href={contact.url} target='_blank' rel='noreferrer'>
            {contact.img}
          </a>
        </li>
      ))}
    </ul>
  )
}
