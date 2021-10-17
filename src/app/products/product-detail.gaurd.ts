import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
@Injectable({
    providedIn: 'root'
})
export class ProductDetailGaurd implements CanActivate{
    
    canActivate(): boolean{
        return false
    }
}