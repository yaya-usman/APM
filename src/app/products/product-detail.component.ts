import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{
  pageTitle = 'Product Detail';
  product!: IProduct;
  constructor(private route: ActivatedRoute){}

  ngOnInit(): void{
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
  }

}
