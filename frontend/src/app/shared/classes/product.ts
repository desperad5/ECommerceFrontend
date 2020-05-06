// Product Colors
export type ProductColor = 'white' | 'black' | 'red' | 'green' | 'purple' | 'yellow' | 'blue' | 'gray' | 'orange' | 'pink';

// Product Size
export type ProductSize = 'M' | 'L' | 'XL';

// Product Tag
export type ProductTags = 'nike' | 'puma' | 'lifestyle' | 'caprese';

// Product
export interface Product {
  id?: number;
  name?: string;
  price?: number;
  salePrice?: number;
  discount?: number;
  pictures?: string;
  // baseImageUrl:string;
  shortDetails?: string;
  description?: string;
  stock?: number;
  new?: boolean;
  sale?: boolean;
  category?: string;
  colors?: ProductColor[];
  size?: ProductTags[];
  tags?: ProductSize[];
  variants?: any[];
  rating?:any;
}

// Color Filter
export interface ColorFilter {
  color?: ProductColor;
}

// Tag Filter
export interface TagFilter {
  tag?: ProductTags
}


// export class Product {
//   id:number;
//   name:string;
//   price:number;
//   salePrice:number;
//   baseImageUrl:string;
//   // new?: boolean;
//   // sale?: boolean;
  
//   // discount:number;
//   tenantPrice:number;
//   description:string;
//   categoryId:number;
//   // productCategory: ProductCategory;
//   tenantId:number;
//   // tenant:Tenant;
//   inventoryCode:string;
//   inventoryCount:string;
//   // productImages:ProductImage[]
//   brandId:number;
//   // brand:Brand:
//   productTypeId:number;

//   // orderCartItems: OrderCartItem[]
//   // productComments:ProductComment[];
//   // productRatings:ProductRating[];
//   // productBundles:ProductBundle[];
//   // productTags:ProductTag[];
// }