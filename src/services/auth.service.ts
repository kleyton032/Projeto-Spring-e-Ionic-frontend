import { StorageService } from './storage.service';
import { API_CONFIG } from './../config/api.config';
import { CredenciaisDTO } from './../models/credenciais.dto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { localUser } from '../models/local_user';


@Injectable()
export class AuthService{

  constructor(private http: HttpClient,
    private storage: StorageService){

  }  

  //autenticar usuário a partir dos dados do campos email e senha 
authenticate(creds: CredenciaisDTO){
    return this.http.post(`${API_CONFIG.baseUrl}/login`, 
    creds,
    {
        observe: 'response',
        responseType: 'text'

    })
}

//login com sucesso pegando o token do user
successfulLogin(authorizationValue: string){
    //pegando o token sem o nome reservado baerer para apenas pegar o token
    let tok = authorizationValue.substring(7)
    let user: localUser = {
        token: tok
    };
    this.storage.setLocalUser(user);
}

//remover usuário do localstorage com isso realizando o logout
logout(){
    this.storage.setLocalUser(null)
}

}