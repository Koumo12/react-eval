import Image from 'next/image';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import useAuth from '../auth/AuthDetails.js';


export  const Header = () => {
        const {userSignOut, authUser, isAuthenticated} = useAuth();

    return(
       
        <div className="navbar navbar-expand-lg bg-primary">
            <div className='container-fluid' >
                <div className='row w-100'>
                    <div className='col-lg-4'>
                            <div className="navbar-brand" >
                                <Image alt="logo" src={'/images/logo.png'} width={80} height={50} />
                            </div>
                    </div>
                    <div className='col-lg-3'></div>
                    <div className='col-lg-5'>
                        <div className="navbar-toggle" aria-controls="basic-navbar-nav" />
                        <div className="collapse navbar-collapse Bar" id="basic-navbar-nav">
                            <div className="navbar-nav me-auto mb-lg-0">
                                <div className="nav-item m-3" >
                                    <Link href="/" className='Color'  passHref>Accueil</Link>
                                </div>
                                <div className="nav-item m-3">
                                    <Link href="/galerie" className='Color' passHref>Galerie</Link>
                                </div>                                               
                                <div className="nav-item m-3">
                                    <Link href="/tarifs&prestations" className='Color' passHref>Tarifs</Link>
                                </div>
                                <div className="nav-item m-3">
                                    <Link href="/contact" className='Color' passHref>Contact</Link>
                                </div>
                                {isAuthenticated && (                                   
                                        <div className="nav-item m-3">
                                                <Link href="/dashboard" className='Color' passHref>Dashboard</Link>
                                        </div> 
                                    )    
                                   
                               } 
                                {isAuthenticated 
                                   
                                    ?<div className="nav-item m-3">
                                        <>                                            
                                            <button onClick={userSignOut}  >Déconnexion</button> 
                                        </>
                                    </div>     
                                    :<div className="nav-item m-3">
                                        
                                    </div>  
                                }                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

