import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class InstagramService {

  // Initialize 
  constructor(private http: Http) { }

  // Instagram Array
  public getInstagramData() {
    return this.http.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=ACCESS_TOLEN&count=15');
  }

}
