import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpErrorResponse } from "@angular/common/http";
@Component({
    selector:"interceptor",
    templateUrl:"./interceptor.component.html"
})
export class InterceptorComponent{
    private result:any;
    constructor(private _http:HttpClient){
    }
    ngOnInit(){
        this._http.get("https://restcountries.eu/rest/v2/all")
            .subscribe(res=>{
                this.result = res;
        },(err:HttpErrorResponse)=>{
            if(err.error instanceof Error){
                console.log("Client Side Error !");
            }else{
                console.log("Server Side Error !");
            }
        });
    }
}