import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CartComponent } from './component/cart/cart.component';
import { ShoppingRoutingModule } from './shopping-routing.module';


@NgModule({
  declarations: [
    CartComponent,
  ],
  imports: [
    ShoppingRoutingModule,
    SharedModule,
  ]
})
export class ShoppingModule { }
