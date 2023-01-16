import {useAuth} from "./AuthDetails.js";
import { useRouter } from "next/router";
import { useEffect } from "react";



export function ProtectedRoute(Component) {
    const [isAuthenticated] = useAuth();
    const router = useRouter();

    useEffect(() => {
        if(!isAuthenticated) 
          {router.push('/login')}
    }, [isAuthenticated]);

    return <Component {...arguments} />
}

