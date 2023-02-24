import Link from 'next/link'
import React from 'react'
import style from '../src/styles/menu.module.css'
import { AudioPlayer } from 'components/AudioPlayer'

export default function menu() {
    return (
        <nav className={style.menu}>
            <div>
                <Link className={style.link} href='/'> Home</Link>
                <Link className={style.link} href='/faq'> Faq</Link>
                <Link className={style.link} href='/store'> Store</Link>
            </div>
            <AudioPlayer />
            <div className={style.link}>
                <a href='#'> Cart(0)</a>
            </div>
        </nav>
    )
}
