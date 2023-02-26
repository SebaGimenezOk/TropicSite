import '@/styles/globals.css'
import { AudioPlayer } from 'components/AudioPlayer'


export default function App({ Component, pageProps }) {
  return (
    <div>
      <div className='bannerRepro'>
        <h3>Tu musica las 24 Hs</h3>
        <AudioPlayer />
        </div>
      <Component {...pageProps} />
    </div>
  )
}
