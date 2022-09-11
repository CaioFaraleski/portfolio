import Head from 'next/head'
import { Initial } from '../components/Initial'

export default function Home() {
  return (
    <div className='fixed'>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <title>Caio Faraleski</title>
        <meta name="description" content="Caio Faraleski's portifolio."></meta>
        <meta name="description" content="A Front End Developer passionate about programming, who will do the best job possible to make your website flawless."></meta>
      </Head>
      <Initial />
    </div>
  )
}
