import { USER_LOGIN, USER_LOGOUT, USER_REGISTER } from "@actions/index";
import { User } from "@models/types";
import { apiService } from "@services/apiService";
import { makeAutoObservable, runInAction } from "mobx";

export class AuthStore {

    user: User | undefined = undefined;
    
    constructor(){
        makeAutoObservable(this); 
    }

    authFunc = (action: string, user: User) => {
        switch(action) {
            case USER_LOGIN:
                apiService.userLogin(user).then(data => {
                    runInAction(() => {
                        this.user = {...data} as User; 
                    });
                });
                break;
            case USER_REGISTER:
                apiService.userRegister(user).then(data => {
                    runInAction(() => {
                        this.user = {...data} as User; 
                    });
                });
                break;
            case USER_LOGOUT:
                this.user = undefined; 
                localStorage.removeItem("token")
                break;
        }
    }
}