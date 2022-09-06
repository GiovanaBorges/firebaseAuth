export class LocalStorage{
    setStorageUser(key:string,value:any):void{
        sessionStorage.setItem(key,value)
    }
    setStorageToken(key:string,value:any):void{
        sessionStorage.setItem(key,value)
    }
    getStorageToken(key:string):any{
        sessionStorage.getItem(key)
    }
    getStorageUser(key:string):any{
        sessionStorage.getItem(key)
    }
}