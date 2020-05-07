import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'product-details-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  newProducts : any[] = [];
  constructor(private productService: ProductsService) { 
    this.productService.getNewProduct().subscribe((productList:any[])=>{
      this.newProducts = productList;
    })
  }

  ngOnInit() {
  }

}
