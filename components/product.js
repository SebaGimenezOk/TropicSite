import React from "react";
import Link from "next/link";
import Image from "next/image";
import style from '../src/styles/product.module.css'
import { AudioPlayer2 } from "./AudioPlayer2";


export default function Product({ item, showAs }) {

    if (showAs == "Page") {
        return (<div>
            <h2>{item.data.title}</h2>
            <AudioPlayer2/>
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
                        width={200}
                        height={200}
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
