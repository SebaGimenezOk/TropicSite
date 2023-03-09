import React from "react";
import Link from "next/link";
import Image from "next/image";
import style from '../src/styles/product.module.css'
import { convertToPath } from "lib/utils";


export default function Product({ item, showAs }) {

    if (showAs == "Page") {
        return (
            <div className={style.page}>
                <div className={style.image}>
                    <Image className={style.image} src={item.data.image} alt={item.data.description} width={600} height={600} />
                </div>
                <div className={style.cajaProducto} >
                    <div className={style.infoCardTituloGrande}>{item.data.title}</div>
                    <div className={style.infoCardSubtituloGrande}>{item.data.artist}</div>
                    <div className={style.PriceCardGrande}>${item.data.price}</div>
                    <div className={style.DescriptionCardGrande}>{item.data.description}</div>
                    <div><button className={style.pButt}>Agregar al Carrito</button></div>
                </div>
            </div>);
    }


    if (showAs == "ListItem") {
        return <div>List Item</div>;
    }



    return (
        <div className={style.cardProduct}>
            <div>
                <Link href={`/store/${convertToPath(item.title)}`}>
                    <Image className={style.image}
                        src={item.image}
                        alt={item.description}
                        width={200}
                        height={200}
                    />
                </Link>
            </div>

            <div className={style.tituloCardPrincipal}>
                {item.artist}
            </div>


            <div>
                <Link  className={style.tituloTemaCard} href={`/store/${item.title}`}>
                    {item.title}
                </Link>
            </div>


            <div className={style.PriceCardGrande}>
                ${item.price}
            </div>

        </div>
    );
}
