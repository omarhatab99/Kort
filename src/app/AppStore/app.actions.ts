import { createAction, props } from '@ngrx/store';
import { ICartItem } from '../shared/models/IcartItem.interface';

export const isFavoriteToggle = createAction('[productAction Component] isFavoriteToggle', props<{ productId: number }>());
export const changeRating = createAction('[productAction Component] changeRating', props<{ productId: number, rate: number }>());
export const addToCart = createAction('[productAction Component] addToCart', props<{ cartItem: ICartItem }>());
export const addMore = createAction('[productAction Component] addMore', props<{ productId: number}>());
export const subtract = createAction('[productAction Component] subtract', props<{ productId: number }>());
export const clearItems = createAction('[productAction Component] clearItems');

