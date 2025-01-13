export class LoginResponse{
    externalId:string
    name:string
    email:string
    accessToken:string
    refreshToken:string

    constructor(externalId:string, name:string, email:string, accessToken:string, refreshToken:string){
        this.externalId = externalId
        this.name = name
        this.email = email
        this.accessToken = accessToken
        this.refreshToken = refreshToken
    }
}