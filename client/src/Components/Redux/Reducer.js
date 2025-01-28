import {
    ADD_IMAGE, ADD_TO_CART, LOGIN, CART_DELETE,
    SEND_COLOUR, SEND_DATA, SEND_SIZE, WATCH_COLOUR, SEND_TIME,
    BUY_NOW, INPUT, SEND_RULES, LOGIN_OUT, TOTAL_PRICE, PRACTICE_SIZE, CART_LENGTH, NAME_EMAIL
} from "./Constant";


const initialState = {
    name: '',
    email: "",
    loggedIn: false,
    count: 0,
    cartLength: 0,


    id: 0,
    image: "",
    heading: "",
    price: 0,
    rating: "",
    stock: "",
    category: "",
    discount: "",
}



export const reducer = (state = initialState, action) => {
    switch (action.type) {

        case LOGIN:
            return {
                ...state,
                loggedIn: true,
            }

        case TOTAL_PRICE:
            let total = state.totalPrice + (action.payload.price * action.payload.count);
            return {
                ...state,
                totalPrice: total
            }



        case LOGIN_OUT:
            return {
                ...state,
                loggedIn: false,
            }

        case SEND_DATA:

            return {
                ...state,
                id: action.payload.id,
                heading: action.payload.heading,
                image: action.payload.image,
                price: action.payload.price,
                rating: action.payload.rating,
                stock: action.payload.stock,
                category: action.payload.category,
                discount: action.payload.discount,

            }





        case CART_LENGTH:
            let length = action.payload.len;
            return {
                ...state,
                cartLength: length
            }


        default:
            return state;
    }
}