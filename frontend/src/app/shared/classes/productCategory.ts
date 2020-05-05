import {Product} from './product';
export class ProductCategory{

    id:number;
    parentCategoryId:number;
    tenantId: number;
    childCategories: ProductCategory[];
    categoryName:string;
    imageUrl:string;
    // listingId:number;
    // Listing: 
    products:Product[];
    path:string;
    type:string;
    megaMenu:boolean;
}