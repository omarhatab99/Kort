import { Product } from "./product.interface"
/**
 * Represents a collection of products.
 * @class
 */
export class Products {
    /**
     * An array of all products.
     * @type {Product[]}
     **/
    public all: Product[] = <Product[]>[]
    /**
     * An array of products that were viewed previously.
     * @type {Product[]}
    */
    public lastView: Product[] = <Product[]>[]
    /**
     * An array of new products.
     * @type {Product[]}
    */
    public new: Product[] = <Product[]>[]

    /**
     * Creates a new instance of Products.
     * @constructor
     * @param {Product[]} products - The array of products to initialize this instance with.
    */
    constructor(private products: Product[]) {
        products.forEach((product: Product) => this.productMapping(product))
    }

    /**
     * Performs some logic on a given product and adds it to the appropriate arrays.
     * @private
     * @param {Product} product - The product to perform the mapping on.
     */

    private productMapping(product: Product) {
        /**
         * A copy of the product with additional properties.
         * @type {Product}
         */
        const productExtendable: Product = <Product>{};
        Object.assign(productExtendable, product)

        productExtendable.discountPersantage ? productExtendable.discountPrice = this.calcDiscountPrice(productExtendable) : null
        productExtendable.isViewBefor ? this.lastView.push(productExtendable) : this.new.push(productExtendable)
        this.all.push(productExtendable)
    }
    /**
     * Calculates the discount price of a given product.
     * @private
     * @param {Product} product - The product to calculate the discount price for.
     * @returns {number} The discount price of the product.
     */
    private calcDiscountPrice = (product: Product): number =>
        product.price - (product.price * <number>product.discountPersantage / 100)

}
