import { getItems } from '@/services/itemService';
import React from 'react';
import Layout from '../../../components/layout';
import Product from 'components/product';
import styleItems from '../../styles/product.module.css'


export default function index({ items }) {
    return (
        <Layout title='Store'>
            <h1>TropicStore </h1>
            <div className={styleItems.items}>
                {items && items.map((item) => (
                    <Product key={item.id} item={item} showAs='Default' />
                ))}
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