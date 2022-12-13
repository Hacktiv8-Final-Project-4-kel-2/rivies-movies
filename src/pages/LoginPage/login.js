import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../../components/Button/Button2.js'
// import { fetchUser } from '../redux/user'
// import '../styles/style.css'
import './style.css'
import { useLogin } from './useLogin.js'

export const Login = () => {
    const { setMail, setPassw, isUserLoggedIn, loginSystem, note,name,setName,changeUser,logoutSystem } = useLogin()
    // const [name, setName] = useState('sign')
    // const {user} = useSelector((state)=>state.user)
    const dispatch = useDispatch()
    return (
        <div className="containerLogin">

            <div className="blur">
                {
                    isUserLoggedIn
                        ?
                        <div className="login-box">
                            <h1>Change Username</h1>
                            <div className="wrapper">
                                <label htmlFor="username">Username</label>
                                <input type="username" value={name} name="username" id="" onChange={(val) => setName(val.target.value)} />
                            </div>
                            <p>{note}</p>
                            <Button onclick={changeUser} Name={'Save'} className={'button'} />
                            <Button onclick={logoutSystem} Name={'Logout'} className={'outlinebutton'} />
                        </div>
                        :
                        <div className="login-box">
                            <h1>Sign In</h1>
                            <div className="wrapper">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="" onChange={(val) => setMail(val.target.value)} />
                            </div>
                            <div className="wrapper">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" id="" onChange={(val) => setPassw(val.target.value)} />
                            </div>
                            <p>{note}</p>
                            <Button onclick={loginSystem} className={'button'} Name={'sign In'}></Button>
                        </div>
                }

            </div>
        </div>
    )
}
