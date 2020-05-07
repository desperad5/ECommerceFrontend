import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../classes/constants';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductCategoryService {

  constructor(private http: HttpClient) { }

  getProductCategories() {
    return this.http.post<any>(Constants.apiUrl + "/ProductCategory/GetProductCategoryTree", {"id":1}).pipe(
      map(result => {
        if (result && result.message != null) {
          console.log(result);
        }
        return result;
      })
    );
    
    
  }
}
