export class LocalStorage{
    setStorageUser(key:string,value:any):void{
        sessionStorage.setItem(key,value)
    }
    setStorageToken(key:string,value:any):void{
        sessionStorage.setItem(key,value)
    }
    getStorageToken(key:string):any{
        return sessionStorage.getItem(key)
    }
    getStorageUser(key:string):any{
        return sessionStorage.getItem(key)
    }
}