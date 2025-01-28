import { ADD_TO_CART, CART_DELETE, DECRIMENT,
     INCRIMENT, RESET,SEND_DATA,ADD_IMAGE, SEND_COLOUR, WATCH_COLOUR, SEND_SIZE, SEND_TIME,
      BUY_NOW, INPUT, SEND_RULES, LOGIN, LOGIN_OUT, TOTAL_PRICE,PRACTICE_SIZE, CART_LENGTH, NAME_EMAIL } from "./Constant"

export const incrimentCounter =()=>{
    return{
        type : INCRIMENT
    }
}

export const decrementCounter =()=>{
    return{
        type : DECRIMENT
    }
}

export const resetCounter =()=>{
    return{
        type : RESET
    }
}

export const sendData =(value)=>{
    return{
        type : SEND_DATA,
        payload:value
    }
}
export const totapP =(value)=>{
    return{
        type : TOTAL_PRICE,
        payload:value
    }
}

export const PracticeSize =(value)=>{
    return{
        type : PRACTICE_SIZE,
        payload:value
    }
}
export const cartLength =(value)=>{
    return{
        type : CART_LENGTH,
        payload:value,
    }
}

export const nameEmail =(value)=>{
    return{
        type : NAME_EMAIL,
        payload:value
    }
}

export const loggedIn =(value)=>{
    return{
        type : LOGIN,
    }
}
export const loggedOut =(value)=>{
    return{
        type : LOGIN_OUT,
    }
}

export const sendrULES =(value)=>{
    return{
        type : SEND_RULES,
        payload:value
    }
}

export const cartDelete =(value)=>{
    return{
        type : CART_DELETE,
        payload:value
    }
}

export const addToCart =(value)=>{
    return{
        type : ADD_TO_CART,
        payload:value
    }
}

export const addImage =(value)=>{
    return{
        type : ADD_IMAGE,
        payload:value
    }
}

export const sendColour =(value)=>{
    return{
        type : SEND_COLOUR,
        payload:value
    }
}

export const sendSize =(value)=>{
    return{
        type : SEND_SIZE,
        payload:value
    }
}
export const sendInput =(value)=>{
    return{
        type : INPUT,
        payload:value
    }
}

export const sendTime =(value)=>{
    return{
        type : SEND_TIME,
        payload:value
    }
}

export const watchColour =(value)=>{
    return{
        type : WATCH_COLOUR,
        payload:value
    }
}

export const buyNow =(value)=>{
    return{
        type : BUY_NOW,
        payload:value
    }
}

export const isLoggedIn =(value)=>{
    return{
        type : "LOGIN",
    }
}
