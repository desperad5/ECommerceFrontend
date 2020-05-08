import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { trigger, transition, style, animate } from "@angular/animations";
import { Product, ColorFilter, TagFilter } from '../../../../shared/classes/product';
import { ProductsService } from '../../../../shared/services/products.service';
import * as _ from 'lodash'
import * as $ from 'jquery';

@Component({
  selector: 'app-collection-left-sidebar',
  templateUrl: './collection-left-sidebar.component.html',
  styleUrls: ['./collection-left-sidebar.component.scss'],
  animations: [  // angular animation
    trigger('Animation', [
      transition('* => fadeOut', [
        style({ opacity: 0.1 }),
        animate(1000, style({ opacity: 0.1 }))
      ]),
      transition('* => fadeIn', [
        style({ opacity: 0.1 }),
        animate(1000, style({ opacity: 0.1 }))
      ])
    ])
  ]
})
export class CollectionLeftSidebarComponent implements OnInit {

  public products: any[] = [];
  public newProducts: any[] = [];
  public items: Product[] = [];
  public allItems: any[] = [];
  public colorFilters: any[] = [];
  public tagsFilters: any[] = [];
  public sizesFilters: any[] = [];
  public priceFilters: any[] = [];
  public tags: any[] = [];
  public colors: any[] = [];
  public sizes: any[] = [];
  public sortByOrder: string = '';   // sorting
  public animation: any;   // Animation
  public categoryName: string = '';
  public hasProducts: boolean = true;
  public max: number;
  public min: number
  lastKey = ''      // key to offset next query from
  finished = false  // boolean when end of data is reached

  constructor(private route: ActivatedRoute, private router: Router,
    private productsService: ProductsService) {
    this.route.params.subscribe(params => {
      debugger;
      const category = Number(params['category']);
      this.productsService.getProductByCategory(category).subscribe(products => {
        console.log(products);
        this.categoryName = products["categoryName"];
        this.allItems = products["products"];
        this.products = this.allItems.slice(0, 8);
        this.tags = products["brands"];
        debugger;
        this.colors = products["colors"];
        this.sizes = products["sizes"];
        this.hasProducts = true;
        let minMax = this.findMinMax(this.allItems);
        this.max = minMax.max
        this.min = minMax.min;
        //  this.getTags(products)
        //  this.getColors(products)
      }, error => {
        debugger;
        console.log(error);
        if (error.error === 'No Product in the Category') {
          this.hasProducts = false;
        }
      });
      this.productsService.getNewProdutByCategory(category).subscribe(products => {
        debugger;
        console.log(products);
        this.newProducts = products["products"];
      }, error => {
        console.log(error);
      })
    });
  }

  ngOnInit() {
    debugger;
  }
  findMinMax(items) {
    var min = items[0].price;
    var max = 0;
    for (var i = 0; i < items.length; i++) {
      if (items[i].price > max) {
        max = items[i].price;
      }
      if (items[i].price < min) {
        min = items[i].price;
      }
    }
    return { min: min, max: max };
  }

  // Get current product tags
  /* public getTags(products) {
     var uniqueBrands = []
     var itemBrand = Array();
     products.map((product, index) => { 
        if(product.tags) {
           product.tags.map((tag) => {
           const index = uniqueBrands.indexOf(tag);
           if(index === -1)  uniqueBrands.push(tag);
        })
       }
     });
     for (var i = 0; i < uniqueBrands.length; i++) {
          itemBrand.push({brand:uniqueBrands[i]})
     }
     this.tags = itemBrand
  } */

  // Get current product colors
  /* public getColors(products) {
     var uniqueColors = []
     var itemColor = Array();
     products.map((product, index) => {
       if(product.colors) {
       product.colors.map((color) => {
           const index = uniqueColors.indexOf(color);
           if(index === -1)  uniqueColors.push(color);
       })
      }
     });
     for (var i = 0; i < uniqueColors.length; i++) {
          itemColor.push({color:uniqueColors[i]})
     }
     this.colors = itemColor
  }
 */

  // Animation Effect fadeIn
  public fadeIn() {
    this.animation = 'fadeIn';
  }

  // Animation Effect fadeOut
  public fadeOut() {
    this.animation = 'fadeOut';
  }


  // Initialize filetr Items
  public filterItems(): any[] {
    return this.allItems.filter((item: any) => {
      var brandFilter = false;
      var colorFilter = false;
      var sizeFilter=false;
      if (this.tagsFilters.length > 0) {
        if (item.brandId) {
          brandFilter = this.tagsFilters.includes(item.brandId.toString());
        }
      }
    
    else{brandFilter=true;}
      if (this.sizesFilters.length > 0) {
        if (item.variations && item.variations.length > 0) {
          item.variations.forEach(variation => {
            debugger;
            if (this.sizesFilters.includes(variation.sizeValue)) {
              sizeFilter=true;
            }
          }
          );
        }
        }
        else{sizeFilter=true;}
      
      if (this.colorFilters.length > 0) {

        if (item.variations && item.variations.length > 0) {
          item.variations.forEach(variation => {
            if (this.colorFilters.includes(variation.colorValue)) {
              colorFilter=true;
            }
          }
          );
        }
      }
      else{colorFilter=true;}
      return brandFilter&&colorFilter&&sizeFilter;
    });
  }

  // Update tags filter
  public updateTagFilters(tags: any[]) {
    this.tagsFilters = tags;
    this.animation == 'fadeOut' ? this.fadeIn() : this.fadeOut(); // animation
  }
  public updateSizeFilters(tags: any[]) {
    this.sizesFilters = tags;
    this.animation == 'fadeOut' ? this.fadeIn() : this.fadeOut(); // animation
  }

  // Update color filter
  public updateColorFilters(colors: any[]) {
    debugger;
    this.colorFilters = colors;
    this.animation == 'fadeOut' ? this.fadeIn() : this.fadeOut(); // animation
  }

  // Update price filter
  public updatePriceFilters(price: any[]) {
    debugger;
    this.priceFilters = price;

  }

  public twoCol() {
    if ($('.product-wrapper-grid').hasClass("list-view")) { } else {
      $(".product-wrapper-grid").children().children().children().removeClass();
      $(".product-wrapper-grid").children().children().children().addClass("col-lg-6");
    }
  }

  public threeCol() {
    if ($('.product-wrapper-grid').hasClass("list-view")) { } else {
      $(".product-wrapper-grid").children().children().children().removeClass();
      $(".product-wrapper-grid").children().children().children().addClass("col-lg-4");
    }
  }

  public fourCol() {
    if ($('.product-wrapper-grid').hasClass("list-view")) { } else {
      $(".product-wrapper-grid").children().children().children().removeClass();
      $(".product-wrapper-grid").children().children().children().addClass("col-lg-3");
    }
  }

  public sixCol() {
    if ($('.product-wrapper-grid').hasClass("list-view")) { } else {
      $(".product-wrapper-grid").children().children().children().removeClass();
      $(".product-wrapper-grid").children().children().children().addClass("col-lg-2");
    }
  }

  // For mobile filter view
  public mobileFilter() {
    $('.collection-filter').css("left", "-15px");
  }

  // Infinite scroll
  public onScroll() {
    /*  this.lastKey = _.last(this.allItems)['id'];
       if (this.lastKey != _.last(this.items)['id']) {
          this.finished = false
       }   
       // If data is identical, stop making queries
       if (this.lastKey == _.last(this.items)['id']) {
          this.finished = true
       }
       if(this.products.length < this.allItems.length){  
          let len = this.products.length;
          for(var i = len; i < len+4; i++){
            if(this.allItems[i] == undefined) return true
              this.products.push(this.allItems[i]);
          }
       } */
    this.finished = true;
  }

  // sorting type ASC / DESC / A-Z / Z-A etc.
  public onChangeSorting(val) {
    this.sortByOrder = val;
    this.animation == 'fadeOut' ? this.fadeIn() : this.fadeOut(); // animation
  }

}
