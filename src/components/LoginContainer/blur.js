import React from 'react'
import { useLogin } from '../../pages/LoginPage/useLogin'
import { Button } from '../Button/Button2'

export const LoginBox = () => {
    const {setMail,setPassw,isUserLoggedIn,loginSystem,note} = useLogin()
  return (
    <div className="blur">
            <div className="login-box">
                <h1>Sign In</h1>
                <div className="wrapper">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" onChange={(val)=>setMail(val.target.value)}/>
                </div>
                <div className="wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" onChange={(val)=>setPassw(val.target.value)}/>
                </div>
                <p>{note}</p>
                <Button  onclick={loginSystem}/>
            </div>
        </div>
  )
}
