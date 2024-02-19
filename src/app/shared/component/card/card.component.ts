import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product.interface';

// init Swiper:
@Component({
  selector: 'productCard',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  constructor() { }
  @Input('product') product: Product = <Product>{};
  @Input('smallCard') isSmallCard: boolean = false
  productImgUrl: string = ''

  ngOnInit(): void {}


}

