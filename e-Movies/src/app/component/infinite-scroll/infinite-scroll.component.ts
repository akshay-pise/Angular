import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.css']
})
export class InfiniteScrollComponent implements OnInit {
post:any[]=[];
  constructor() { }

  ngOnInit(): void {
    for(let i=0;i<=50;i++){
      this.post.push(i);
    }
    // this.catServic
    //   .getCats(this.page)
    //   .subscribe((cats: Cat[]) => {
    //      this.cats = cats;
    //   });
  }
  onScroll(){
    const length=this.post.length;
    setTimeout(() => {
      const p:any=' '.repeat(50).split('').map((s,i)=>i+1+length);
    }, 1000);
  }
  // this.catService
  //     .getCats(++this.page)
  //     .subscribe((cats: Cat[]) => {
  //       this.cats.push(...cats);
  //     });
  // }

}
