import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginPage = () => {
    const {setUser} = useContext(UserContext)
    const user = {
        id       : 1234,
        username : 'lrene97',
        mail     : 'luchorene97@gmail.com',
        password : 'lrpb'    
    }
    return (
        <div>
            <h1>Login</h1>
            <hr/>
            <button onClick={()=>setUser(user)} className="btn btn-primary">Login</button>
        </div>
    )
}
