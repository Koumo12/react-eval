import '../styles/globals.css';
import MainLayout from './src/components/layouts/main-layout'
import 'bootstrap/dist/css/bootstrap.css';
import { AuthProvider } from './src/components/auth/AuthDetails.js';
import React from 'react';


export default function App({ Component, pageProps }) 
{ 

  return (
    <>
      <AuthProvider>
        <MainLayout>
          <Component  {...pageProps} />         
        </MainLayout>  
      </AuthProvider>
    </>
  );
}
