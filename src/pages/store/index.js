import { getItems } from '@/services/itemService';
import React from 'react';
import Layout from '../../../components/layout';
import Product from 'components/product';
import styleItems from '../../styles/product.module.css'
import style from '../../styles/product.module.css'

export default function index({ items }) {
    return (
        <Layout title='Store'>
            <div className={style.bloqueTienda}>
                <div className={style.fondoBloqueTienda}>
                    <h1 className={style.tituloPrincipal}>TropicStore</h1>
                    <h2 className={style.tituloSecundario}>Todos los clasicos tiene su remera!  busca la tuya</h2>
                </div>
                <div className={styleItems.items}>
                    {items && items.map((item) => (
                        <Product key={item.id} item={item} showAs='Default' />
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const res = await getItems();

    return {
        props: {
            items: res,
        }
    }
}