import { Injectable } from '@angular/core';

import {Food} from 'src/app/shared/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
 
  getAll():Food[]{
    return[
      {
        id:1,
        name:"French-fries",
        cookTime:'10-20',
        price:100,
        favorite:false,
        origins:"Italy",
        stars:4.5,
        imageUrl:'/assets/food/food1.jpg',
        tags:['fastfood','pizza','lunch']
      },
      {
        id:2,
        name:'Burger',
        cookTime:'10-20',
        price:119,
        favorite:false,
        origins:'US',
        stars:4.5,
        imageUrl:'/assets/food/food2.jpg',
        tags:['fastfood','pizza','lunch']
      },
      {
        id:3,
        name:'Dosa',
        cookTime:'10-20',
        price:150,
        favorite:false,
        origins:'South-Indian',
        stars:4.5,
        imageUrl:'/assets/food/food3.jpg',
        tags:['fastfood','pizza','lunch']
      },
      {
        id:4,
        name:'Chhole Bhature',
        cookTime:'20-30',
        price:299,
        favorite:false,
        origins:'North-Indian',
        stars:4.5,
        imageUrl:'/assets/food/food4.jpg',
        tags:['fastfood','pizza','lunch']
      },
      {
        id:5,
        name:'Chocolate pastry',
        cookTime:'30-40',
        price:250,
        favorite:false,
        origins:'Indian',
        stars:4.5,
        imageUrl:'/assets/our-specials/os1.jpg',
        tags:['fastfood','pizza','lunch']
      },
      {
        id:6,
        name:'Litti Chokha',
        cookTime:'30-40',
        price:250,
        favorite:false,
        origins:'Italy',
        stars:4.5,
        imageUrl:'/assets/food/food5.jpg',
        tags:['fastfood','pizza','lunch']
      },
      {
        id:7,
        name:'Pizza',
        cookTime:'30-40',
        price:230,
        favorite:false,
        origins:'Italy',
        stars:4.5,
        imageUrl:'/assets/food/food6.jpg',
        tags:['fastfood','pizza','lunch']
      },
      {
        id:8,
        name:'Waffle',
        cookTime:'30-40',
        price:230,
        favorite:false,
        origins:'Italy',
        stars:4.5,
        imageUrl:'/assets/our-specials/os3.jpg',
        tags:['fastfood','pizza','lunch']
      }
     ]
  }
}
