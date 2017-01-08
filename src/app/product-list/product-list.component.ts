import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 5;
    showImage: boolean = false;
    listFilter: string = '';
    errorMessage: string;

    products: IProduct[];

    toggleImage(): void {
        this.showImage = !this.showImage;
        console.log('this.showImage = ' + this.showImage);
    }

    ngOnInit(): void {
        console.log('in ngOnInit');
        this._productService.getProductsUsingHTTP()
                .subscribe(products => this.products = products,
                           error => this.errorMessage = <any>error);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List ' + message;
    }

    constructor(private _productService: ProductService) {

    }
}
