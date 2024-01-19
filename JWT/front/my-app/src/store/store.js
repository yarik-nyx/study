import { makeAutoObservable } from "mobx"
import { AuthService } from "../services/AuthService"
import axios from "axios"
import { API_URL } from "../http"

export default class Store{
    user = {}
    isAuth = false


    constructor(){
        makeAutoObservable(this)
    }

    setAuth(bool){
        this.isAuth = bool
    }

    setUser(user){
        this.user = user
    }

    async login(email, password){
        try{
            const response = await AuthService.login(email, password)
            console.log(response)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch(e) {
            console.log(e.response?.data?.message)
        }

    }

    async reg(email, password){
        try{
            const response = await AuthService.reg(email, password)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch(e) {
            console.log(e.response?.data?.message)
        }

    }

    async logout(){
        try{
            const response = await AuthService.logout()
            localStorage.removeItem('token')
            this.setAuth(false)
            this.setUser({})
        } catch(e) {
            console.log(e.response?.data?.message)
        }

    }

    async checkAuth(){
        try{
            const response = await axios.get(`${API_URL}/refresh`, {withCredentials:true})
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (e){
            console.log(e.response?.data?.message)
        }
    }
}