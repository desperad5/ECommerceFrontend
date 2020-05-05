import { Component, OnInit } from '@angular/core';
import { MENUITEMS, Menu } from './left-menu-items';
import { ProductCategoryService } from '../../../services/productCategory.service'
import { ProductCategory } from 'src/app/shared/classes/productCategory';
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
      category.path = "/left-sidebar/collection/" + category.id; category.type = 'sub'; category.megaMenu = false;
      if (category.childCategories && category.childCategories.length > 0){
        category.childCategories.forEach(child=> this.setChildPathAndMenuType(child));
      }
    });
  }

  private setChildPathAndMenuType(category: ProductCategory) {
    category.path = "/left-sidebar/collection/" + category.id;
    category.type = 'link'
    category.megaMenu = false;
    if (category.childCategories && category.childCategories.length > 0) {      
      category.childCategories.forEach(x => this.setChildPathAndMenuType(x));
    }
  }
}
