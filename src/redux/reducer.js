
import {Periodic,specialservice}from '../Components/PeriodicServices/Periodic'
import {
    CLEAR_ITEMS,
    REMOVE_FROM_CART,
    INCREASE,
    DECREASE,
    GET_TOTALS,
    DISPLAY_ITEM,
    SELECTED_VEHICAL,
    LOGIN_GARAGE,
    REGISTER_VEHICAL_NO,
    CALENDER_TIME,
    ADDRESS_SELECT,
    LOAD_CURRENT_ITEM,
    ADD_ITEMS,
    TOGGLE_NAV,
    CLOSE_NAVBAR,
    BANNER_CLOSE,
    ADD_TO_WISHLIST
} from "./actionType"

const initialState={
    totalAmount:0,
    totalCount:0,
    Cart1:Periodic,
    Cart2:specialservice,
    cartshow:[],
    selectVehical:[],
    logingarage:[],
    registerVehicalNo:[],
    calenderTime:[],
    addressSelect:[],
    currentItem:null,
    addItem:[],
    valcart:[],
    isOpen:false,
    shipping:10,
    Wishlists:[]
}

const cartReducer=(state=initialState,action)=>{
   switch (action.type){
        case GET_TOTALS:
            const item=state.Cart1.find(prod=>prod.id === action.payload.id)
             
            const inCart =state.cartshow.find((item)=>
              item.id === action.payload.id ? true : false
            )
            return{
               ...state,
               cartshow:inCart
               ? state.cartshow.map((item)=>
               item.id === action.payload.id
                 ?{...item,qty:item.qty+1}
                 :item
               )
               :[...state.cartshow,{...item,qty:1}],
            }

            case ADD_ITEMS:
            let check=state.addItem.find(item=>item.id === action.payload);
                 
            
            if(!check){
                //bringing only the itmes thar match the id
                let items=state.Cart1.items.filter(item=>item.id === action.payload)
                let items2=state.Cart2.items.filter(item.id === action.payload)
                let ItemCart=[...state.addItem, ...items,...items2]
           
                return{
                    ...state,
                    addItem:ItemCart
                }
            }
            else{
                let items=state.Cart1 && state.Cart2.filter(item=>item.id ===action.payload);
                items.forEach(item=>{
                    item.isInCart=true//alert('alreeady in cart)
                })
                return{   
                    ...state
                }
            }

             case BANNER_CLOSE:
                 state.Cart1 && state.Cart2.forEach(item=>{
                     item.isInCart=false
                 })
                 return{
                     ...state
                 }
          

            //Toggle navigation for appearing
            case TOGGLE_NAV:
                return{
                    ...state,
                    isOpen:!state.isOpen
                }
         case INCREASE:
             let temCartInc=state.Cart1.map((cartItem)=>{
                 if(cartItem.id === action.payload){
                     return {...cartItem, amount:cartItem.amount + 1};
                 }
                 return cartItem;
             });
             return {...state,Cart1:temCartInc};

             case DECREASE:
                 let temCartDec=state.Cart1.map((cartItem)=>{
                     if(cartItem.id === action.payload){
                         return{...cartItem,amount:cartItem.amount - 1}
                     }
                     return cartItem;
                 })
                 .filter((cartItem)=>cartItem.amount !==0);
                 return{...state,Cart1:temCartDec};
                  
               case REMOVE_FROM_CART:
                   return {...state,
                       cart:state.Cart1.filter((cartItem)=>cartItem.id !==action.payload)    
                   };
                   case CLEAR_ITEMS:
                       return{
                           ...state,
                           cart:[]
                       }
            case LOAD_CURRENT_ITEM:
                return{
                    ...state,
                    currentItem:action.payload,
                }
            //    case GET_TOTALS:
            //        let filProduct=state.Cart1.filter(item=>item.id !==action.payload)
            //        let fillWishlist2=state.Wishlists.filter(item=>item.id !==action.payload)
            //        return {
            //            ...state,
            //            Produsts:[...state]
                       
            //         }
         case LOGIN_GARAGE:
             return{
                 ...state,logingarage:action.payload
             }
        case SELECTED_VEHICAL:
            return {...state,selectVehical:action.payload}

        
            case REGISTER_VEHICAL_NO:
            return{...state,registerVehicalNo:action.payload}

            case CALENDER_TIME:
            return{...state,calenderTime:action.payload}

            case ADDRESS_SELECT:
            return{...state,addressSelect:action.payload}
       default:
           return state;
   }
}

export default cartReducer;