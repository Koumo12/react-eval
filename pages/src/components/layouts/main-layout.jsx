import React, {children} from "react";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";

function MainLayout ({children, data}) {
    return (
        <>
            <Header data={data}/>
                <main>{children}</main>
            <Footer />
        </>
    );
}

export default MainLayout;

export async function getServerSideProps() {

    const {categories_photos} = await import('/data/data.json');
    
    return {
        props: {
          data: categories_photos
        }
    }
}