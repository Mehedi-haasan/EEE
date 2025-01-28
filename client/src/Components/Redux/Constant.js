export const INCRIMENT="INCRIMENT";
export const DECRIMENT="DECRIMENT";
export const RESET="RESET";
export const SEND_DATA="SEND_DATA";
export const ADD_TO_CART="ADD_TO_CART";
export const CART_DELETE="CART_DELETE";
export const ADD_IMAGE="ADD_IMAGE";
export const SEND_COLOUR="SEND_COLOUR";
export const WATCH_COLOUR="WATCH_COLOUR";
export const SEND_SIZE="SEND_SIZE";
export const SEND_TIME="SEND_TIME";
export const BUY_NOW="BUY_NOW";
export const INPUT="INPUT";
export const LOGIN="LOGIN";
export const LOGIN_OUT="LOGIN_OUT";
export const SEND_RULES="SEND_RULES";
export const TOTAL_PRICE="TOTAL_PRICE";
export const PRACTICE_SIZE="PRACTICE_SIZE";
export const CART_LENGTH="CART_LENGTH";
export const NAME_EMAIL = "NAME_EMAIL"
// const data=[
    
//     {
//         id:555,
//         category:"T-Shirt",
//         heading:'Slim T-shirt',
//         discount:"-5",
//         image:[
//           {
//            image:"https://img.freepik.com/premium-photo/generic-smartwatches-isolated-colorfull-background-3d-illustration_960782-6370.jpg",
//           },
//           {
//             image:"https://cdn-images-1.medium.com/max/1200/1*A6kkoOVJVpXPWewg8axc5w.png",
//           },
//           {
//             image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAAB2CAMAAACKyj2IAAAAb1BMVEX////lCRTkAAD64ODlAA/oUFDxnJ7+9/f63NzramvvjIzlAAjmNDXnOTv97u/zra775+fqWFnxl5r3w8TlFxn4zs/51dX1vL3seHnscHLqZGXmICXyo6X0tbXtdHfwkJLtgIHoR0nqX1/mLi/oQUOvn/aHAAAEGElEQVR4nO2Z7ZKjKBRAAYnasSXmQ41R25jk/Z9x4IKo0dk4O2htbd3zowvRgAfI5YYmBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQ5H9N4kmEufDsReCNEd3dD5WJrBKhKgWjboSqCqEId72uPuw+5Yzgi1HKCqNHubzwod9vWexhJ1nXRpROKnejSnaTJr5sksfeqJ89U3ehx1K2zKkZxTvrGnKpxDlngVGKZNkoyWKPfnvGR7BmUmmUOI8mSuouFH0o+rrHp+wmeo6f/XslNUyV7uDyj7O0e5+lZlK5YJZIpqYpKo0e7ReJW6XjhkrkBuVU9b6DYriCEi/TWSVmUW//ghKo6sp9p8Ttc48FSjWU77J0HoynYyWz8t6V2Fd9MCjlXBUqtWzYw1YqJR7b584LlIgqR9+J+iKq2nodpVbMKfnTD4hYOsD8aJQS240e+aikw9yBZODWCuIUo0RZRrZTSkHlaSqdRnAyULqT7ZSChw4Qqilb6YxOiVOynRKpYJpKqPtxqaPolCjLN1QSKk2hOnamTn3IUOm+oZLemqDbYpwLOsAqqaA6UaqmH5hTil5eBoilSqlVOrg26pXUyptmDxcFLQeZ8pwS5ZGCmfdboKTTBgh7ayq9ZpR0Mko/KY2HfIESObE+0VpF6QLZT/CbHI9f3CtB7ioTKae/lAZKrID39MV2SuQIFXviHq30pTYKdpvMUpeOflKKzHPVciX4Pbmi0iORCTa/1OVYKWqLoviRDLKwOSUep2cgWax0gO/SigvvGKiNgl1L+q+C+J/vS0FhwoPjLBza1kpm1Oib0mpbrdfthmsFcakUPvmWSkU3gpHzfMgqkR3bUAlCq+6tcaqjsEr1lkp6o4V0PHYeIKyS2FBJ6E2phb9nt0IDJfLD3CqNj31GSvoUpYUYIfMwx/RK9YxSRYIkTM91dbJjuVCJXm7X+75p/KpOJ0ovuMgDPVmOjx4GSt6Lvyvx8vtZXiCHsN/ipUr9gdk1eFPSs7MTpGFrBIheqQuso4QI8vBRxrxYye5zE6UrM93AGXy0W+OESCvlU6X+vX6vxP5UyYvVAuAJ6c7xHAeIgRIxB6kflEq1mO62gVZdjpVO3ZKL+JwSnKXoc/DzGgcqQyVzSmmUWBSxHjstQVXVeZ7ZBrJUko3aTP3T/l7cdjHY69OFPVPtwe0n5ODwEaHK3f9N1lBSBwIyFMCEhG3cHh+3a1PlaZj8RZ9BAhvU4fg4tvDfilpNX3eKcmJ2EJ0xVEpixnh7zKE+TFwHVyJALm/uj1eXgafwC6112o38VSEx/zvIQiEC54dQM50GdriOaoeInAaIYF/sT3X2+cGVEGntN19uT762mJWP7+B8jSMIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgvy3+AUi/UDXNsPwOwAAAABJRU5ErkJggg==",
//           },
//           {
//             image:"https://img.freepik.com/free-photo/black-t-shirt-with-word-kiri-1-it_1340-37795.jpg",
//           },
//           {
//             image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAAB2CAMAAACKyj2IAAAAb1BMVEX////lCRTkAAD64ODlAA/oUFDxnJ7+9/f63NzramvvjIzlAAjmNDXnOTv97u/zra775+fqWFnxl5r3w8TlFxn4zs/51dX1vL3seHnscHLqZGXmICXyo6X0tbXtdHfwkJLtgIHoR0nqX1/mLi/oQUOvn/aHAAAEGElEQVR4nO2Z7ZKjKBRAAYnasSXmQ41R25jk/Z9x4IKo0dk4O2htbd3zowvRgAfI5YYmBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQ5H9N4kmEufDsReCNEd3dD5WJrBKhKgWjboSqCqEId72uPuw+5Yzgi1HKCqNHubzwod9vWexhJ1nXRpROKnejSnaTJr5sksfeqJ89U3ehx1K2zKkZxTvrGnKpxDlngVGKZNkoyWKPfnvGR7BmUmmUOI8mSuouFH0o+rrHp+wmeo6f/XslNUyV7uDyj7O0e5+lZlK5YJZIpqYpKo0e7ReJW6XjhkrkBuVU9b6DYriCEi/TWSVmUW//ghKo6sp9p8Ttc48FSjWU77J0HoynYyWz8t6V2Fd9MCjlXBUqtWzYw1YqJR7b584LlIgqR9+J+iKq2nodpVbMKfnTD4hYOsD8aJQS240e+aikw9yBZODWCuIUo0RZRrZTSkHlaSqdRnAyULqT7ZSChw4Qqilb6YxOiVOynRKpYJpKqPtxqaPolCjLN1QSKk2hOnamTn3IUOm+oZLemqDbYpwLOsAqqaA6UaqmH5hTil5eBoilSqlVOrg26pXUyptmDxcFLQeZ8pwS5ZGCmfdboKTTBgh7ayq9ZpR0Mko/KY2HfIESObE+0VpF6QLZT/CbHI9f3CtB7ioTKae/lAZKrID39MV2SuQIFXviHq30pTYKdpvMUpeOflKKzHPVciX4Pbmi0iORCTa/1OVYKWqLoviRDLKwOSUep2cgWax0gO/SigvvGKiNgl1L+q+C+J/vS0FhwoPjLBza1kpm1Oib0mpbrdfthmsFcakUPvmWSkU3gpHzfMgqkR3bUAlCq+6tcaqjsEr1lkp6o4V0PHYeIKyS2FBJ6E2phb9nt0IDJfLD3CqNj31GSvoUpYUYIfMwx/RK9YxSRYIkTM91dbJjuVCJXm7X+75p/KpOJ0ovuMgDPVmOjx4GSt6Lvyvx8vtZXiCHsN/ipUr9gdk1eFPSs7MTpGFrBIheqQuso4QI8vBRxrxYye5zE6UrM93AGXy0W+OESCvlU6X+vX6vxP5UyYvVAuAJ6c7xHAeIgRIxB6kflEq1mO62gVZdjpVO3ZKL+JwSnKXoc/DzGgcqQyVzSmmUWBSxHjstQVXVeZ7ZBrJUko3aTP3T/l7cdjHY69OFPVPtwe0n5ODwEaHK3f9N1lBSBwIyFMCEhG3cHh+3a1PlaZj8RZ9BAhvU4fg4tvDfilpNX3eKcmJ2EJ0xVEpixnh7zKE+TFwHVyJALm/uj1eXgafwC6112o38VSEx/zvIQiEC54dQM50GdriOaoeInAaIYF/sT3X2+cGVEGntN19uT762mJWP7+B8jSMIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgvy3+AUi/UDXNsPwOwAAAABJRU5ErkJggg==",
//           },
//           {
//             image:"https://img.freepik.com/free-photo/black-t-shirt-with-word-kiri-1-it_1340-37795.jpg",
//           }
//         ],
//         colour:[ {colour:"Black"},{colour:"RED"},{colour:"Yellow"},{colour:"Amor"}, ],
//         size:[ {size:"S"},{size:"M"},{size:"L"},{size:"XL"},{size:"XXL"},{size:"XXXL"}, ],
//         stock:'In Stock',
//         price:350,
//       },
// ]



