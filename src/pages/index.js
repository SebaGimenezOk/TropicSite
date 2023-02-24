import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from 'components/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout title='stream'>
      <div>
        <h3>esto es el home</h3>
      </div>
    </Layout>
  )
}
