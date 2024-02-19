import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { AppStore } from './app-initial-state';
import { addMore, addToCart, changeRating, clearItems, isFavoriteToggle, subtract } from './app.actions';

export const appReducer = createReducer(
    AppStore,
    on(isFavoriteToggle, (state, action) => {
        const index = state.products.findIndex(p => p.id === action.productId);
        const products: any = [...state.products];
        products[index] = { ...products[index], isFavorite: !products[index].isFavorite };
        return { ...state, products };
    }),

    on(changeRating, (state, action) => {
        const index = state.products.findIndex(p => p.id === action.productId);
        const products = [...state.products];
        products[index] = { ...products[index], rating: action.rate }
        return { ...state, products }
    }),

    on(addToCart, (state, action) => {
        return {
            ...state,
            cart: {
                ...state.cart,
                items: [
                    ...state.cart.items,
                    { ...action.cartItem }
                ]
            }
        };
    }),

    on(subtract, (state, action) => {
        const index = state.cart.items.findIndex(i => i.product.id == action.productId)
        const cart = { ...state.cart }
        const items = [...state.cart.items]
        if (items[index].quantity > 1) {
            const target = { ...items[index] };
            target.quantity -= 1;
            items[index] = target;
        } else {
            items.splice(index, 1); // remove the item from the array
        }
        return {
            ...state,
            cart: {
                ...cart,
                items: items
            },

        }
    }),

    on(addMore, (state, action) => {
        const index = state.cart.items.findIndex(i => i.product.id == action.productId)
        const cart = { ...state.cart }
        const items = [...state.cart.items]
        const target = { ...items[index] };
        target.quantity += 1;
        items[index] = target;
        return {
            ...state, cart: {
                ...cart,
                items: items
            }
        }
    }),

    on(clearItems, (state) => {
        const cart = { ...state.cart }
        const items:any = []
        return { ...state, cart: { ...cart, items: items} }
    })
)


