import { ICartItem } from "./IcartItem.interface";
import { Product } from "./product.interface";

export class CartItem implements ICartItem {
    constructor(public product: Product, public quantity: number) {
    }
    get countItemPrice() {
        return this?.quantity * (this.product.discountPrice || this.product.price)
    }
}


