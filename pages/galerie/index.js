
import React, { useState } from "react";
import Image from "next/image";


const CatPage = ({data}) => {
    const [query, setQuery] = useState('');

    //Our search filter function
  const searchFilter = (array) => {
    return array.filter(
      (el) => el.title.toLowerCase().includes(query)
    )
    }
  
  //Applying our search filter function to our array of countries recieved from the API
    const filtered = searchFilter(data)
  
  //Handling the input on our search bar
  const handleChange = (e) => {
    setQuery(e.target.value);
  }

    return (
        <div className="container-fluid p-5">
            <div className="row text-center"><h1><strong>Nos collections</strong></h1></div>
            
            <div className="row">
                <div className='col-md-10 m-auto mt-4 justify-between'>
                   
                </div>
                
                <div className='col-md-1 m-auto mt-4 justify-between'>
                    <select
                        name="title"
                        onChange={handleChange}                       
                        className="form-control"                        
                    >
                       <option value="">Filter</option>
                       <option value="mariage">Mariage</option>
                       <option value="grossesse">Grossesse</option>
                       <option value="bébé">Bébé</option>
                       <option value="famille">Famille</option>
                    </select>
                   
                </div>
                
            </div>
            <div className="row p-3">
                { filtered.map((ev) =>                 
                    <>     
                        <div className="col-md-4 col-md-3 p-2 ">
                            <Image width={400} height={250} alt={ev.title} src={ev.image} />                           
                        </div>                       
                    </>
                )}
            </div>
        </div>
    )
}


export default CatPage;

export async function getServerSideProps() {

    const {categories} = await import('/data/data.json');
    return {
        props: {
          data: categories
        }
    }
}