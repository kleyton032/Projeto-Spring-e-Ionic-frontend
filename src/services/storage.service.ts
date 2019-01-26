import { STORAGE_KEYS } from './../config/storage_keys.config';
import { Injectable } from "@angular/core";
import { localUser } from "../models/local_user";
import { jsonpCallbackContext } from '@angular/common/http/src/module';

@Injectable()
export class StorageService{

getLocalUser(): localUser{

    let user = localStorage.getItem(STORAGE_KEYS.localUser);
    if(user == null){
        return null;
    }else{
        return JSON.parse(user);
    }

}

setLocalUser(obj:localUser) {
    if(obj == null){
        localStorage.removeItem(STORAGE_KEYS.localUser)
    }else{
        localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj))
    }

}

}