import $api from "../http";

export class AuthService{
    static async login(email, password){
        return $api.post('/signin', {email, password})

    }

    static async reg(email, password){
        return $api.post('/signup', {email, password})

    }

    static async logout(){
        return $api.post('/logout')

    }
}