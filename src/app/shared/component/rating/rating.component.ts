import { Component, ElementRef, ViewChild, Renderer2, Input, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppStore } from 'src/app/AppStore/app-store.interface';
import { changeRating } from 'src/app/AppStore/app.actions';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements AfterViewInit {
  @ViewChild('rating') rating?: ElementRef;
  @Input('product') product: Product = <Product>{}


  constructor(private store: Store<{ AppStore: IAppStore }>, private render: Renderer2) { }
  ngAfterViewInit(): void {
    this.setRating(this.product.rating)
  }

  setRating(index: number) {
    const ratingElement: HTMLElement[] = Array.from(this.rating?.nativeElement.children)
    ratingElement.forEach((element, i) => index >= i ?
      this.render.setStyle(element, 'color', '#ffe621') : this.render.setStyle(element, 'color', '#eaeaea')
    );
    this.changeRating(index)
  }

  changeRating(rate: number) {
    this.store.dispatch(changeRating({ productId: this.product.id, rate: rate }))
  }

}
