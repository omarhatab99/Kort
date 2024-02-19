import { Dialog } from '@angular/cdk/dialog';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { skeletonCart } from 'src/app/AppStore/app-skeleton-data';
import { ConfirmComponent } from 'src/app/shared/component/confirm/confirm.component';
import { CartModel } from 'src/app/shared/models/cart';
import { CartService } from 'src/app/shared/service/cart.service';
import { CdkLayoutService } from 'src/app/shared/service/cdk-layout.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartModel: CartModel = <CartModel>{}
  displayedColumns = ['index', 'productName', 'price', 'quantity', 'totalPrice']
  displayedFooters = ['index', 'productName', 'price', 'quantity', 'totalPrice']
  dataSource: MatTableDataSource<any> = new MatTableDataSource(skeletonCart)
  subscription?: Subscription;
  loading: boolean = true;
  minIcon = false;
  @ViewChild('paginator') paginator?: MatPaginator
  constructor(public cartService: CartService, public dialog: Dialog, layout: CdkLayoutService) {
    setTimeout(() => {
      this.subscription =
        cartService.cart$.subscribe(cart => {
          this.cartModel = cart
          this.dataSource.data = cart.items;
          this.dataSource.paginator = <MatPaginator>this.paginator
          this.loading = false;

        })
    }, 3000);
    layout.isMobileMode.subscribe(IsMode => {
      this.minIcon = IsMode
    })
  }

  openDialog(element: string) {
    const dialogRef = this.dialog.open(ConfirmComponent,
      {
        width: '250px',
        data: { deletedElement: element }
      })
    dialogRef.closed.subscribe(confirm => confirm ? this.cartService.removeCartItems() : null)
  }

  ngAfterViewInit() {
    this.dataSource.paginator = <MatPaginator>this.paginator
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe
    this.dialog.ngOnDestroy()
  }

}
