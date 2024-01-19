import React, { useContext, useState } from "react";
import { Context } from "..";
import {observer} from 'mobx-react-lite'

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {store} = useContext(Context)
    return (
        <div>
            <input 
                onChange={e => setEmail(e.target.value)}
                type="text"
                placeholder="Email"
                value={email}>
            </input>
            <input 
                onChange={e => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                value={password}>
            </input>
            <button onClick={() => store.login(email, password)}>Логин</button>
            <button onClick={() => store.reg(email, password)}>Регистрация</button>
        </div>
    )
}

export default observer(LoginForm)