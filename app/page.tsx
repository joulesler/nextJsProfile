import Image from 'next/image'
import Link from 'next/link'
import Buttons from './components/linkButton'
import './globals.css'

export default function Home() {
  return (
    <div>
      <h1>
        Welcome!
      </h1>
      <div>
          <Buttons displayText={'Blog'} link={'/blog'}/>
          <Buttons displayText={"Julian's Products"} link={'/products'}/>
      </div>
    </div>
  )
}
