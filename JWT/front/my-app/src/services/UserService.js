import $api from "../http";

export class UserService{
    static fetchUser(){
        return $api.get('/users')
    }
}