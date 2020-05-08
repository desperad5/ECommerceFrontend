import { Component, OnInit, Output, EventEmitter, ViewEncapsulation, Input } from '@angular/core';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PriceComponent implements OnInit {
  
  // Using Output EventEmitter
  @Output() priceFilters = new EventEmitter();
  @Input()  min:number=100;
  @Input()  max:number=1000;
  // define min, max and range
 
  public range = [100,1000];
  
  constructor() { }
  
  ngOnInit() {  }

  // rangeChanged
  priceChanged(event:any) {
    debugger;
      this.priceFilters.emit(event);
   
  }

}
