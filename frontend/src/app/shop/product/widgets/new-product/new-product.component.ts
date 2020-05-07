import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../../shared/classes/product';
import { ProductsService } from '../../../../shared/services/products.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {
  @Input()  newProducts : any[] = [];
  public products : Product[] = [];	

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    debugger;
    this.products=this.newProducts;
  	/* this.productsService.getProducts().subscribe(product => this.products = product); */
  }

}
