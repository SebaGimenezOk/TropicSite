import Link from 'next/link'
import React from 'react'
import style from '../src/styles/menu.module.css';

export default function menu() {
    return (
        <nav className={style.menu}>
            <div>
                <Link className={style.link} href='/'> Home</Link>
                <Link className={style.link} href='/top'> Top Five</Link>
                <Link className={style.link} href='/store'> Store</Link>
                <Link className={style.link} href='/contacto'> Contacto</Link>
                <Link className={style.link} href='/socialmedia'> SocialMedia</Link>
            </div>
            {/* <div className={style.link}>
                <a href='#'> Cart(0)</a>
            </div> */}
        </nav>
    ) 
}
