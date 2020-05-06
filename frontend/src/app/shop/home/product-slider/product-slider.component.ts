import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../shared/classes/product';
import { ProductList } from 'src/app/shared/classes/productList';
import { CommunicationService } from 'src/app/shared/services/communication.service';

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.scss']
})
export class ProductSliderComponent implements OnInit {
  
  products:any;
  listing:any;

  constructor(private communicationService:CommunicationService) {
    
   }

  ngOnInit() { 
    
    this.communicationService.vitrinLoaded.subscribe(data=>
      {
        
        this.products=data.products;
        this.listing=data.listing;
      });
  }
  
  // Slick slider config
  public productSlideConfig: any = {
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

}
