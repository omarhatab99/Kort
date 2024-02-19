import { Component, Input } from '@angular/core';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'product-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.scss'],
})
export class QuantityComponent {
  @Input('isSmallCard') isSmallCard = false;
  @Input('productQuantity') quantity?: number
  @Input('productId') productId: number = 0
  @Input('minIcon') minIcon: boolean = false
  constructor(private cartService: CartService) { }

  addation() {
    this.cartService.addMore(this.productId)
  }

  subtract() {
    this.cartService.subtract(this.productId)
  }
}
