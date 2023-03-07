import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from 'components/layout'
import initAOS from '../../lib/utils';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useEffect(() => {
    initAOS();
  }, []);
  return (
    <Layout title='Home'>
      <div className={styles.hero}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }} data-aos="zoom-in" data-aos-duration='1500' data-aos-delay="30" data-aos-mirror="true" >
          <Image className={styles.logo}
            src='http://localhost:3000/img/logo1500.png'
            width={600}
            height={600}
          />
        </div>
        <div className={styles.bloquetitular}>
          <h1>Tropibox  </h1>
          <h5> sitio oficial de la cumbia retro</h5>
        </div>
      </div>
    </Layout>
  )
}
