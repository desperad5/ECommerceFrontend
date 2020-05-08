import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductColor, ColorFilter } from '../../../../../shared/classes/product';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {
  
  public activeItem : any = '';

  // Using Input and Output EventEmitter
  @Input()  colorsFilters  :  any[] = [];
  @Output() colorFilters   :  EventEmitter<any[]> = new EventEmitter<any[]>();

  constructor() { }
  
  ngOnInit() {  }

  // Click to call function 
  public changeColor(colors: any) {
    debugger;
    this.activeItem = colors.name;
    if(colors.name) {
      this.colorFilters.emit([colors.name]);
    } else {
      this.colorFilters.emit([]);
    }
  }

}
