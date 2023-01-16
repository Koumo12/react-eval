import React from "react";
import Link from "next/link";
import Image from "next/image";

function Catego ({data, pageName}) {
    return (
        <div className="cat_event">
            <h1>Event in {pageName}</h1>
            <div className="content">
                {data.map(ev =>
                   
                        <Link key={ev.title}  passHref>                        
                            <Image width={300} height={300} alt={ev.title} src={ev.image}/>
                        </Link>
                   
                )}
            </div>
        </div>
    )
}


export default Catego;