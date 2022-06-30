import { Component, OnInit } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
interface carouselImage{
  imageSrc:string;
  imageAlt:string;
}
@Component({
  selector: 'app-ourservices',
  templateUrl: './ourservices.component.html',
  styleUrls: ['./ourservices.component.scss']
})
export class OurservicesComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['Prev','Next'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: false
  }
  // activeSlides?: SlidesOutputData ;

  //     slidesStore?: any[] ;
  //     constructor() {}

  //     getData(data: SlidesOutputData) {
  //       this.activeSlides = data;
  //       console.log(this.activeSlides);
  //     }


  ngOnInit(): void {
  }

}
