import React, { useState } from "react";
import Image from "next/image";

function Categories ({data}) {
    
  

    return (
        <div className="container-fluid p-5">
            <div className="row text-center"><h1><strong>Nos collections</strong></h1></div>           
          
            <div className="row p-3">
                {data.map((ev) =>                 
                    <>    
                        <div key={ev.id}>
                            {ev.id} <br /> <br />

                            {ev.image.map((dat => 
                              <>
                                  <div className="col-md-4 col-md-3 p-2 ">
                                      <Image width={400} height={250}  src={dat.name} />
                                  </div> 
                              </>
                            ))

                            }
                        </div> 
                                              
                    </>
                )}
            </div>
        </div>
    )
}

export default Categories;

export async function getServerSideProps() {

  const {photos} = await import('/data/data.json');
  return {
      props: {
        data: photos
      }
  }
}
