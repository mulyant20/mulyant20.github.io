import React from 'react'
import Head from 'next/head'

type Props = {
  title: string
  description: string
}

export default function SEOpage(meta: Props) {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name='description' content={meta.description} />
      </Head>
    </>
  )
}
