import { IAppStore } from "src/app/AppStore/app-store.interface";
import { CartModel } from "../shared/models/cart";
import { CartItem } from "../shared/models/cart-item";
import { ICartModel } from "../shared/models/ICartModel.interface";

export const StaticData: IAppStore = {
    products: [
        {
            id: 1,
            title: 'تيشيرت-كم طويل-آرت ',
            imgUrl: './assets/lastView/pic.png',
            isFavorite: true,
            price: 90,
            rating: 2,
            isViewBefor: true,
        },
        {
            id: 2,
            title: 'تيشيرت-كم طويل-آرت ',
            imgUrl: './assets/lastView/pic1.png',
            isFavorite: false,
            price: 90,
            rating: 3,
            isViewBefor: true,
            discountPersantage: 10,
        },
        {
            id: 3,
            title: 'تيشيرت-كم طويل-آرت',
            imgUrl: './assets/lastView/pic2.png',
            isFavorite: true,
            price: 90,
            rating: 2,
            isViewBefor: true,
        },
        {
            id: 4,
            title: 'تيشيرت-كم طويل-آرت وير-نسائي-ملابس',
            imgUrl: './assets/newProduct/pic.png',
            isFavorite: false,
            price: 90,
            rating: 1,
            isViewBefor: false,
            discountPersantage: 40,

        },
        {
            id: 5,
            title: 'تيشيرت-كم طويل-آرت وير-نسائي-ملابس',
            imgUrl: './assets/newProduct/pic1.png',
            isFavorite: true,
            price: 90,
            rating: 3,
            isViewBefor: false,
        },
        {
            id: 6,
            title: 'تيشيرت-كم طويل-آرت وير-نسائي-ملابس',
            imgUrl: './assets/newProduct/pic2.png',
            isFavorite: false,
            price: 90,
            rating: 0,
            isViewBefor: false,
        },
        {
            id: 7,
            title: 'تيشيرت-كم طويل-آرت وير-نسائي-ملابس',
            imgUrl: './assets/newProduct/pic3.png',
            isFavorite: false,
            price: 90,
            rating: 2,
            isViewBefor: false,
        },
        {
            id: 8,
            title: 'تيشيرت-كم طويل-آرت وير-نسائي-ملابس',
            imgUrl: './assets/newProduct/pic1.png',
            isFavorite: true,
            price: 90,
            rating: 5,
            isViewBefor: false,
            discountPersantage: 2,
        },
        {
            id: 9,
            title: 'تيشيرت-كم طويل-آرت وير-نسائي-ملابس',
            imgUrl: './assets/newProduct/pic1.png',
            isFavorite: true,
            price: 90,
            rating: 3,
            isViewBefor: false,
        },
        {
            id: 10,
            title: 'تيشيرت-كم طويل-آرت وير-نسائي-ملابس',
            imgUrl: './assets/newProduct/pic2.png',
            isFavorite: false,
            price: 90,
            rating: 0,
            isViewBefor: false,
        },
        {
            id: 11,
            title: 'تيشيرت-كم طويل-آرت وير-نسائي-ملابس',
            imgUrl: './assets/newProduct/pic3.png',
            isFavorite: false,
            price: 90,
            rating: 2,
            isViewBefor: false,
        },

    ],

    backgroundImage: [
        './assets/bgImg/background-image.png',
        './assets/bgImg/background-image.png',
        './assets/bgImg/background-image.png',
        './assets/bgImg/background-image.png',


    ],
    cart: {
        items: [{
            product: {
                id: 1,
                title: 'تيشيرت-كم طويل-آرت ',
                imgUrl: './assets/lastView/pic.png',
                isFavorite: true,
                price: 90,
                rating: 2,
                isViewBefor: true,
            },
            quantity: 1

        }
        ]
    }

}