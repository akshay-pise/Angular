import { Component, OnInit } from '@angular/core';
import {OttService} from '../../ott.service';


@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {
  // dataSource:any[]=[];
  // states:any;
  // constructor(service: OttService) {
  //   this.dataSource = service.getMovies();
  //   this.states = service.getStates();
  // }
  // ngOnInit(): void {
  // }
  // export class CarouselComponent implements OnInit {
    images:any;
    responsiveOptions:any;
    length:any= 0;
  domEles:any;
  activeEle:any;

    dataSource:any[]=[];
  states:any;
  constructor(service: OttService) {
    this.dataSource = service.getMovies();
    this.states = service.getStates();
        this.responsiveOptions = [{
            breakpoint: '1024px',
            numVisible: 1,
            numScroll: 3
        }];
    }

    ngOnInit(): void {
        this.images = [
            {picture: 'https://picsum.photos/id/944/900/500'},
            {picture: 'https://picsum.photos/id/1011/900/500'},
            {picture: 'https://picsum.photos/id/984/900/500'},
            {picture: 'https://picsum.photos/id/944/900/500'},
            {picture: 'https://picsum.photos/id/1011/900/500'},
            {picture: 'https://picsum.photos/id/984/900/500'},
            {picture: 'https://picsum.photos/id/944/900/500'},
            {picture: 'https://picsum.photos/id/1011/900/500'},
            {picture: 'https://picsum.photos/id/984/900/500'},
            {picture: 'https://picsum.photos/id/944/900/500'},
            {picture: 'https://picsum.photos/id/1011/900/500'},
            {picture: 'https://picsum.photos/id/984/900/500'}
        ];
        this.domEles = document.querySelectorAll('.cardScroller > *');
    this.length = this.domEles.length;
    console.log(this.domEles,this.length);
    }
    moveCell(e:any){
      const activeEle = document.activeElement;
      const activeEleIndex = Array.prototype.indexOf.call(this.domEles, activeEle);
      if(e.key == "ArrowRight" && activeEleIndex < this.length - 1 ) {
          // activeEle.nextElementSibling.focus();
      }
    }
}
// }
