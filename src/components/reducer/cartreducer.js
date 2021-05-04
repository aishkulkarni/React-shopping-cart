import Item1 from '../../images/item.jpg'
import Item2 from '../../images/item2.jpg'
import Item3 from '../../images/item3.jpg'
import Item4 from '../../images/item4.jpg'
import Item5 from '../../images/item5.jpg'
import Item6 from '../../images/item6.jpg'
import * as actionTypes from '../actions/action-types';


const initState = {
    items: [
        {id:1,title:'Winter body', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:110,img:Item1},
        {id:2,title:'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:80,img: Item2},
        {id:3,title:'Vans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:120,img: Item3},
        {id:4,title:'White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:260,img:Item4},
        {id:5,title:'Cropped-sho', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:160,img: Item5},
        {id:6,title:'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: Item6}
    ],
    addedItems:[],
    total: 0

}

const cartReducer= (state = initState,action)=>{
  console.log(state.items);
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
          // Great Item data from products array
          const item = state.items.find(
            (product) => product.id === action.payload.id
          );
          // Check if Item is in cart already
          const inCart = state.addedItems.find((item) =>
            item.id === action.payload.id ? true : false
          );
    
          return {
            ...state,
            addedItems: inCart
              ? state.addedItems.map((item) =>
                  item.id === action.payload.id
                    ? { ...item, qty: item.qty + 1 }
                    : item
                )
              : [...state.addedItems, { ...item, qty: 1 }],
          };
        case actionTypes.REMOVE_FROM_CART:
          return {
            ...state,
            addedItems: state.addedItems.filter((item) => item.id !== action.payload.id),
          };
        case actionTypes.ADJUST_ITEM_QTY:
          return {
            ...state,
            addedItems: state.addedItems.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: +action.payload.qty }
                : item
            ),
          };
        default:
          return state;
      }
   
}

export default cartReducer;