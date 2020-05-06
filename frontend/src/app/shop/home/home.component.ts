import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/classes/product';
import { ProductsService } from '../../shared/services/products.service';
import { ProductList } from 'src/app/shared/classes/productList';
import { ProductListService } from 'src/app/shared/services/productList.service';
import { ProductRequestByListingModel } from 'src/app/shared/models/product-request.model';
import { CommunicationService } from 'src/app/shared/services/communication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private productsService: ProductsService, private productListService:ProductListService,
    private communicationService:CommunicationService) { }

  ngOnInit() {
    this.productsService.getProductsByListingId(1).subscribe(data=>{
      debugger;
      this.communicationService.vitrinLoaded.emit(data);
    },
    (err) => {console.log(err);});
    
    
    // this.productList.products = this.productListService.getProducLists();
    // this.productsService.getProducts().subscribe(product => this.products = product);
  }

}
