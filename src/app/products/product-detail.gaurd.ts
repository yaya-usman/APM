import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";
@Injectable({
    providedIn: 'root'
})
export class ProductDetailGaurd implements CanActivate{

    constructor(private router: Router){}
    
    canActivate(route: ActivatedRouteSnapshot): boolean{
        const id = Number(route.paramMap.get('id'));

        if(isNaN(id) || id < 1){
            alert('Invalid route');
            this.router.navigate(['/products']);
            return false;
        }

        return true;
    }
}