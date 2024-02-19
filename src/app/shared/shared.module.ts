import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardAction } from './component/card-action/card-action.component';
import { CardComponent } from './component/card/card.component';
import { ConfirmComponent } from './component/confirm/confirm.component';
import { QuantityComponent } from './component/quantity/quantity.component';
import { RatingComponent } from './component/rating/rating.component';
import { MaterialModule } from './material.module';
import { EgyCurrencyPipe } from './pipe/egy-currency.pipe';

@NgModule({
  declarations: [
    CardComponent,
    EgyCurrencyPipe,
    RatingComponent,
    CardAction,
    QuantityComponent,
    ConfirmComponent,

  ],
  imports: [
    CommonModule,
    MaterialModule,

  ],
  exports: [
    CardComponent,
    QuantityComponent,
    ConfirmComponent,
    CommonModule,
    MaterialModule,
    EgyCurrencyPipe,
  ]
})
export class SharedModule {

}
