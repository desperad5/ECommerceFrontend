import { Component, OnInit } from '@angular/core';
import { MENUITEMS, Menu } from './left-menu-items';
import { ProductCategoryService } from '../../../services/productCategory.service'
import { ProductCategory } from 'src/app/shared/classes/productCategory';
import { zip } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {

  public menuItems: any[] = [];
  constructor(private productCategoryService: ProductCategoryService) { }

  ngOnInit() {
     this.productCategoryService.getProductCategories().subscribe(data=>{
       
      this.menuItems=data;
      this.menuItems.forEach(category => {
        this.setMenuItems(category);
       
      
    });
    debugger;
    this.menuItems[0].type='sub';
    this.menuItems[1].type='sub'; 
    var items=this.menuItems;
    });
    // this.menuItems = MENUITEMS.filter(menuItem => menuItem);

    
  
  }
  private setMenuItems(category: ProductCategory){
    category.path = "/home/category/" + category.id;
    category.megaMenu = false;
    if(category.childCategories &&category.childCategories.length>0){
      category.type = 'sub';
      category.childCategories.forEach(x=>this.setMenuItems(x));
      
    }
    else{
      category.type = 'link';
      category.megaMenu = false;
      
    }
  }

  private setChildPathAndMenuType(category: ProductCategory,isLink:boolean) {
    category.path = "/home/category/" + category.id;
    category.type = isLink?'link':'sub';
    category.megaMenu = false;
    if (category.childCategories && category.childCategories.length > 0) {      
      category.childCategories.forEach(x => this.setChildPathAndMenuType(x,true));
    }
  }
}
