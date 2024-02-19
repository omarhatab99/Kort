import { CartItem } from './cart-item';
import { ICartItem } from './IcartItem.interface';
import { ICartModel } from './ICartModel.interface';

export class CartModel implements ICartModel {

    items: CartItem[] = []

    constructor(private itemsMap: ICartItem[]) {
        itemsMap.forEach(item =>
            this.items.push(new CartItem(item.product, item.quantity))
        )        
    }

    get totalCartPrice() {
        return this.Counter('countItemPrice');
    }

    get totalItemCount() {
        return this.Counter('quantity');
    }

    getProductQuantity(product: any) {
        const index = this.items.findIndex(p => p.product.id == product.id)
        return index < 0 ? 0 :
            this.items[index].quantity
    }

    private Counter(property: any): any {
        let count: number = 0
        this.items.forEach((item: any) => count += item[property])

        return count == 0 ? '0' : count
    }

}
