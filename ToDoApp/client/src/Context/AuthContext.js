import  React,{createContext,useState, useEffect} from 'react';
import AuthService from '../Services/AuthService';

export const AuthContext =  createContext();

export default ({children}) => {
    const [user,setUser] = useState(null);
    const [isAuthenticated,setIsAuthenticated] = useState(null);
    const [isLoaded,setIsLoaded] = useState(null);

    useEffect(() => {
        AuthService.isAuthenticated().then(data=> {
            setUser(data.user);
            setIsAuthenticated(data.isAuthenticated);
            setIsLoaded(true);
        })
    }, [])

    return(
        <div>
            {!isLoaded ? <h1>Loading</h1> :
            <AuthContext.Provider value= {{user,setUser,isAuthenticated,setIsAuthenticated}}>
                {children}
            </AuthContext.Provider> }
        </div>
    )

}