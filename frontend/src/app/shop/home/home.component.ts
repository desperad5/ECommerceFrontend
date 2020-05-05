import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/classes/product';
import { ProductsService } from '../../shared/services/products.service';
import { ProductList } from 'src/app/shared/classes/productList';
import { ProductListService } from 'src/app/shared/services/productList.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public products: Product[] = [];
  public productList: ProductList;
  constructor(private productsService: ProductsService, private productListService:ProductListService) { }

  ngOnInit() {
    debugger;
    this.productList=this.productListService.getProducLists();
    this.products=this.productList.products;
    // this.productList.products = this.productListService.getProducLists();
    // this.productsService.getProducts().subscribe(product => this.products = product);
  }

}
