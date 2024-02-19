import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { IAppStore } from 'src/app/AppStore/app-store.interface';
import { addMore, addToCart, clearItems, isFavoriteToggle, subtract } from 'src/app/AppStore/app.actions';
import { CartModel } from '../models/cart';
import { CartItem } from '../models/cart-item';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart?: CartModel
  cart$: Observable<CartModel> = new Observable()

  constructor(private store: Store<{ AppStore: IAppStore }>) {
    store.select('AppStore').subscribe(store => this.cart = new CartModel(store.cart.items))
    this.cart$ = store.select('AppStore').pipe(
      map(store => new CartModel(store.cart.items))
    )
  }

  removeCartItems() {
    this.store.dispatch(clearItems())
  }

  addToCart(product: Product) {
    this.store.dispatch(addToCart({ cartItem: new CartItem(product, 1) }))
  }

  isFavoriteAction(productId: number) {
    this.store.dispatch(isFavoriteToggle({ productId: productId }))
  }

  addMore(productId:number){
    this.store.dispatch(addMore({ productId: productId }))
  }
  
  subtract(productId:number){
    this.store.dispatch(subtract({ productId: productId }))
  }


}
