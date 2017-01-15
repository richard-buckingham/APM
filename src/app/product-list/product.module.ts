import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

import { ProductGuardService } from './product-guard.service';
import { ProductService } from './product.service';

import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        ProductListComponent,
        ProductFilterPipe,
        ProductDetailComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: 'products', component: ProductListComponent },
            { path: 'product/:id',
                canActivate : [ProductGuardService],
                component: ProductDetailComponent },
     ])
    ],
    providers: [ProductService, ProductGuardService],
})
export class ProductModule {

}