import { BaseLayout } from '@components/layout'
import { Meta } from '@interfaces/Meta'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { Label, Contacts, Skills } from '@components/home'

export default function Home() {
  return (
    <BaseLayout metaProps={metadata}>
      <div className='mt-[208px] h-fit relative mb-16'>
        <Label text='work in progress' classname='mb-[8px]'/>
        <h1 className='max-w-[740px] text-[48px] text-[#BAB8B8] font-medium leading-[72px] mb-[24px]'>
          <span className='text-white'>Hi, i&apos;m Mulyana. </span>Frontend dev and Student at{' '}
          <a href='https://uad.ac.id/en/' target='_blank' className='hover:text-white' rel="noreferrer">UAD</a>
        </h1>
        <p className='text-[#DFDFDF] mb-[18px]'>Here are a few technologies I&apos;ve been working with recently</p>
        <Skills skills={skills}/>

        <Contacts contacts={contacts}/>        
        <div className='w-[600px] h-32 bg-[#9F24FF]/30 absolute -top-80 right-32 rounded-[80%] blur-3xl'></div>
        <div className='w-[600px] h-32 bg-[#246FFF]/30 absolute -top-80 -left-16 rounded-[80%] blur-3xl'></div>
      </div>

       
    </BaseLayout>
  )
}

const metadata: Meta = {
  title: 'Mulyana | Frontend dev',
  description: 'description',
}

const skills = [
  { name: 'React.js' },
  { name: 'Next.js' },
  { name: 'typescript' },
  { name: 'redux' },
  { name: 'git' },
  { name: 'figma' }
]

const contacts = [
  { name: 'github', url: 'https://github.com/mulyant20', img: <AiFillGithub/> },
  { name: 'linkedin', url: 'https://linkedin.com/in/mmulyana', img: <AiFillLinkedin/> },
]