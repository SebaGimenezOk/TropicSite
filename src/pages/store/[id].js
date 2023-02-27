import Product from 'components/product'
import Layout from 'components/layout'
import React from 'react'
import { getItemData, getPathsFromId } from 'lib/utils'

export default function ProductPage({ productInfo }) {
    return <Layout>
        <Product item={productInfo}showAs="Page" />
    </Layout>
}
export async function getStaticPaths() {
    const paths = await getPathsFromId();

    return {
        paths: paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const id = params.id;
    const product = await getItemData(id);

    return {
        props: {
            productInfo: product,
        }
    }
}