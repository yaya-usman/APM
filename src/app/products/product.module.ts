import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-space.pipe';
import { RouterModule } from '@angular/router';
import { ProductDetailGaurd } from './product-detail.gaurd';
import { ProductDetailComponent } from './product-detail.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ProductListComponent, ConvertToSpacesPipe],
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      {
        path: 'products/:id',
        canActivate: [ProductDetailGaurd],
        component: ProductDetailComponent,
      },
    ]),
    SharedModule,
  ],
})
export class ProductModule {}
