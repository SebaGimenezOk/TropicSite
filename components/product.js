import React from "react";
import Link from "next/link";
import Image from "next/image";
import style from '../src/styles/product.module.css'



export default function Product({ item, showAs }) {

    if (showAs == "Page") {
        return (<div className={style.page}>
            <div className={style.image}>
                <Image
                    src={item.data.image}
                    alt={item.data.description}
                    width={600}
                    height={600}
                />
            </div>
            <div>
                <div className={style.info}>
                    <h2>{item.data.title} </h2>
                </div>
            <div className={style.pPrice}>${item.data.price}</div>
            <div className={style.pDescription}>{item.data.description}</div>
            <div><button  className={style.pButt}>Add to Cart</button></div>
            </div>
        </div>);
    }
    if (showAs == "ListItem") { 
        return <div>List Item</div>;
    }
    return (
        <div className={style.item}>
            <div>
                <Link href={`/store/${item.title}`}>
                    <Image
                        src={item.image}
                        alt={item.description}
                        width={300}
                        height={300}
                    />
                </Link>
            </div>

            <div>
                <h3>
                    <Link href={`/store/store`}>
                        {item.title}
                    </Link>
                </h3>
            </div>
            <div>
                ${item.price}
            </div>
            <div>
                <button>Add to Cart  </button>
            </div>
        </div>



    );
}
