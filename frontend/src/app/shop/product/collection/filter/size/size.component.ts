import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductTags, TagFilter } from '../../../../../shared/classes/product';
declare var $: any;

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.scss']
})
export class SizeComponent implements OnInit {
  
  // Using Input nad Output EventEmitter
  @Input()  sizesFilters : any[] = [];
  @Output() sizeFilters  : EventEmitter<any[]> = new EventEmitter<any[]>();
  
  // Array
  public checkedSizesArray: any[] = [];
  
  constructor() { }

  ngOnInit() { 
    debugger; 
  	  this.sizeFilters.emit(this.checkedSizesArray);   // Pass value Using emit 
      $('.collapse-block-title').on('click', function(e) {
        debugger;
        e.preventDefault;
        var speed = 300;
        var thisItem = $(this).parent(),
          nextLevel = $(this).next('.collection-collapse-block-content');
        if (thisItem.hasClass('open')) {
          thisItem.removeClass('open');
          nextLevel.slideUp(speed);
        } else {
          thisItem.addClass('open');
          nextLevel.slideDown(speed);
        }
    });
  }

  // value checked call this function
  checkedFilter(event){
    debugger;
      let index = this.checkedSizesArray.indexOf(event.target.value);  // checked and unchecked value
       if (event.target.checked)   
           this.checkedSizesArray.push(event.target.value); // push in array cheked value
        else 
           this.checkedSizesArray.splice(index,1);  // removed in array unchecked value           
  }

  

}
