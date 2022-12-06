import { BaseLayout } from '@components/layout'
import { Meta } from '@interfaces/Meta'
import { Label } from '@components/index'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

export default function Home() {
  return (
    <BaseLayout metaProps={metadata}>
      <div className='mt-[208px] h-fit relative mb-32'>
        <Label text='work in progress' classname='mb-[8px]'/>
        <h1 className='max-w-[740px] text-[48px] text-[#BAB8B8] font-medium leading-[72px] mb-[24px]'>
          <span className='text-white'>Hi, i&apos;m Mulyana. </span>A Novice Frontend dev and Student at{' '}
          <a href='https://uad.ac.id/en/' target='_blank' className='hover:text-white' rel="noreferrer">UAD</a>
        </h1>
        <p className='text-[#DFDFDF] mb-[18px]'>
          Here are a few technologies I&apos;ve been working with recently
        </p>

        <ul className='flex gap-[1rem] mb-[48px]'>
          {skills.map((skill, index) =>
            <li key={index} className="px-[20px] py-[5px] rounded-full border border-white/40 text-white">{skill.name}</li>
          )}
        </ul>
        
        <div className='flex gap-[1.4rem] items-center'>
          <p className='text-[#DFDFDF]'>Reach me at</p>
          <ul className='flex gap-4'>
            {contacts.map((contact, index) =>
              <li key={index} className='text-white/40 hover:text-white cursor-pointer text-xl'>
                <a href={contact.url} target="_blank" rel="noreferrer">{contact.img}</a>
              </li>
            )}
          </ul>
        </div>
        
        <div className='w-80 h-32 bg-[#9F24FF]/30 absolute top-0 right-0 rounded-[80%] blur-3xl'></div>
        <div className='w-80 h-32 bg-[#246FFF]/30 absolute top-80 md:top-20 left-0 rounded-[80%] blur-3xl'></div>
      </div>
    </BaseLayout>
  )
}

const metadata: Meta = {
  title: 'Mulyana | Frontend dev',
  description: 'description',
}

const skills = [
  { name: 'react' },
  { name: 'redux' }
]

const contacts = [
  { name: 'github', url: 'https://github.com/mulyant20', img: <AiFillGithub/> },
  { name: 'linkedin', url: 'https://linkedin.com/in/mmulyana', img: <AiFillLinkedin/> },
]
