import '@/styles/globals.css'
import { AudioPlayer } from 'components/AudioPlayer'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import initAOS from '../../lib/utils';
import { useEffect } from 'react';



export default function App({ Component, pageProps }) {
  useEffect(() => {
    initAOS();
  }, []);

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
