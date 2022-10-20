import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.css']
})
export class GalleryPageComponent implements OnInit {
  imagesList:any [];
  constructor() {
    this.imagesList=[
      {
        imageName:'abcd',
        imageLink:''
      }
    ]
   }

  ngOnInit(): void {
  }
  onItemAdd(){

  }
}
