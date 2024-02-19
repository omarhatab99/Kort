export interface Product {
    id: number;
    title: string;
    imgUrl: string;
    rating: number;
    price: number;
    isFavorite: boolean;
    discountPersantage?: number;
    isViewBefor?: boolean;
    discountPrice?: number
}