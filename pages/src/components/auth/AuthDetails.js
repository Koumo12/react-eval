import { onAuthStateChanged, signOut } from 'firebase/auth';
import Router, { useRouter } from 'next/router';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from './firebase';

const AuthContext = createContext({})

export const AuthProvider = ({children}) => {
    const [authUser, setAuthUser] = useState(null);
    
    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if(user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }

        });

        return () => {
            listen();
        }
    }, []);

    const userSignOut = () => {
        signOut(auth).then(() => {
             Router.push('/')
        }).catch(error=>
             console.log(error)
        );
    }

  return (
    <AuthContext.Provider
            value={{isAuthenticated: !!authUser, authUser, userSignOut}}
    >
        {children}
    </AuthContext.Provider>
    
  );
};


export default function useAuth()
{
    return useContext(AuthContext);
}