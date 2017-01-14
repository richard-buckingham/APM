import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from '../product-list/product';

@Component({
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Detail';
  product: IProduct;

  constructor(private _route: ActivatedRoute, private _router: Router) { 

  }

  ngOnInit() {
    let id = +this._route.snapshot.params['id'];
    console.log('id = ' + id);
    this.pageTitle += ': ' + id;
  }

  onBack(): void {
    this._router.navigate(['/products'])
  }

}
