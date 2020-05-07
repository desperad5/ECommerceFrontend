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

  public menuItems: ProductCategory[] = [];
  constructor(private productCategoryService: ProductCategoryService) { }

  ngOnInit() {
    this.menuItems = this.productCategoryService.getProductCategories();
    // this.menuItems = MENUITEMS.filter(menuItem => menuItem);

    this.menuItems.forEach(category => {
      this.setMenuItems(category);
    
    
  })
  
  }
  private setMenuItems(category: ProductCategory){
    category.path = "/home/category/" + category.id;
    category.megaMenu = false;
    if(!category.childCategories ||category.childCategories.length==0){
      category.type = 'link';
      
    }
    else{
      category.type = 'sub';
      category.megaMenu = false;
      category.childCategories.forEach(x=>this.setMenuItems(x));
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
