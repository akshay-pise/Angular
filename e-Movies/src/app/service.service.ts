
import { Injectable } from '@angular/core';

export class Movies {
  ID:number | any;
  Img:string | any;

}

export class State {

}

const movies: Movies[] = [{
  ID: 1,
  Img: '/assets/Images/fi01.webp',
},
{
  ID: 2,
  Img: '/assets/Images/fi2.webp',
},
{
  ID: 3,
  Img: '/assets/Images/fi3.webp',
},
{
  ID: 4,
  Img: '/assets/Images/fi4.webp',
},
{
  ID: 5,
  Img: '/assets/Images/fi5.webp',
},
{
  ID: 6,
  Img: '/assets/Images/fi6.webp',
},
{
  ID: 7,
  Img: '/assets/Images/fi7.webp',
},
{
  ID: 8,
  Img: '/assets/Images/fi8.webp',
},
{
  ID: 9,
  Img: '/assets/Images/fi4.webp',
},
{
  ID: 10,
  Img: '/assets/Images/fi5.webp',
},
{
  ID: 11,
  Img: '/assets/Images/fi6.webp',
},
{
  ID: 12,
  Img: '/assets/Images/fi7.webp',
},
{
  ID: 13,
  Img: '/assets/Images/fi8.webp',
}];

const states: State[] = [{
//   ID: 1,
//   Name: 'Alabama',
// }, {
//   ID: 2,
//   Name: 'Alaska',
// }, {
//   ID: 3,
//   Name: 'Arizona',
// }, {
//   ID: 4,
//   Name: 'Arkansas',
// }, {
//   ID: 5,
//   Name: 'California',
// }, {
//   ID: 6,
//   Name: 'Colorado',
// }, {
//   ID: 7,
//   Name: 'Connecticut',
// }, {
//   ID: 8,
//   Name: 'Delaware',
// }, {
//   ID: 9,
//   Name: 'District of Columbia',
// }, {
//   ID: 10,
//   Name: 'Florida',
}];

@Injectable({
  providedIn: 'root'
})

export class ServiceService {
  getMovies() {
    return movies;
  }

  getStates() {
    return states;
  }
  constructor() { }
}

