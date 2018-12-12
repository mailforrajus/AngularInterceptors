import { Injectable } from "@angular/core";
import { HttpInterceptor,
         HttpRequest,
         HttpHandler,
         HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable"; 
@Injectable()
export class MyInterceptor implements HttpInterceptor{
    intercept(req:HttpRequest<any>,handler:HttpHandler):Observable<HttpEvent<any>>{
        console.log("In Interceptor");
                
        var req1= req.clone({
            setHeaders:{
                "Authorization":"asdkhalkdhalsdhsaldhasld"
            }
        });
        
        
        
        return handler.handle(req1);
    }
}        