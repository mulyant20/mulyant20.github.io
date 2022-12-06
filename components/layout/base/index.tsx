import React from 'react'
import { Navbar } from '@components/index'
import { SEOpage } from '@components/layout'
import { Meta } from '@interfaces/Meta'

type Props = {
  metaProps: Meta
  children: React.ReactNode
}

const BaseLayout = ({ children, metaProps }: Props) => {
  return (
    <>
      <Navbar />
      <SEOpage title={metaProps.title} description={metaProps.description} />
      <div className='px-4 md:px-0 max-w-[1126px] mx-auto'>{children}</div>
    </>
  )
}

export default BaseLayout
