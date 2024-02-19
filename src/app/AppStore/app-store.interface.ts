import { ICartModel } from "../shared/models/ICartModel.interface";
import { Product } from "../shared/models/product.interface";

export interface IAppStore {
    products: Product[],
    backgroundImage: string[],
    cart: ICartModel
}