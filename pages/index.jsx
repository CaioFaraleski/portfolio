import Head from 'next/head'
import { Initial } from '../components/Initial'

export default function Home() {
  return (
    <div className='fixed'>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </Head>
      <Initial />
    </div>
  )
}
