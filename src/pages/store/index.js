import { getItems } from '@/services/itemService';
import React from 'react';
import Layout from '../../../components/layout';
import Image from 'next/image';
import Product from 'components/product';

export default function index({ items }) {
    return (
        <Layout title='store'>
            <h1>TropicStore </h1>
            {items && items.map((item) =>(
                <Product  key={item.id} item={item} showAs='Default' />
            ) )}
        </Layout>
    )
}

export async function getStaticProps() {
    const res = await getItems();

    return {
        props:{
            items: res,
        }
    }
}