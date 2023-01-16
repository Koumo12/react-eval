import React from "react";

function Tarifs ({data}) {
    return (
        <div className="">           
            <div className="container p-5">
                <div className="row">
                    <div className="col-md-12 text-center mb-3"><h2><strong>Nos offres</strong></h2></div>
                </div>
                
                {data.map((ev) =>                 
                    <>  
                        <div className="row p-4 border bordure">
                            <div className="col-md-2 mb-4 "></div>
                            <div className="col-md-3 mb-4 "><strong>{ev.id}</strong></div>
                            <div className="col-md-2 mb-4 "><strong>{ev.prix}</strong></div>
                            <div className="col-md-5 mb-4 ">{ev.description}</div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Tarifs;
