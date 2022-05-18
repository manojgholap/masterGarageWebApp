import  * as actionType from "./actionType";

export const toggleNav =()=>{
   return {
       type:actionType.TOGGLE_NAV
   }
}

export const closeNav =()=>{
    return {
        type:actionType.CLOSE_NAVBAR
    }
}
export const getCartTotal=(id)=>{
    return{
        type:actionType.GET_TOTALS,
        payload:{
            id:id,
        }
}}
export const addItem=(id)=>{
   return{
    type:actionType.ADD_ITEMS,
    payload:{
        id:id
    }
}
}
export const increase=(id)=>({
    type:actionType.GET_TOTALS,
    payload:id
})
export const removeFromCart=(id)=>{
    return{
            type:actionType.REMOVE_FROM_CART,
            payload:{
                id:id
            }
        }
}

export const loadcurrentItem =(id)=>{
    return{
        type:actionType.LOAD_CURRENT_ITEM,
        payload:id
    }
}

export const selectVehical=(data)=>{
    return{
            type:actionType.SELECTED_VEHICAL,
            payload:data
        }
}


export const logingarage=(data)=>{
    return{
           type:actionType.LOGIN_GARAGE,
           payload:data
        }
}

export const calenderTime=(data)=>{
    return{
        type:actionType.CALENDER_TIME,
        payload:data
    }
}

export const registerVehicalNo=(data)=>{
    return{
        type:actionType.REGISTER_VEHICAL_NO,
        payload:data
    }
}

export const addressSelect=(data)=>{
    return{
        type:actionType.ADDRESS_SELECT,
        payload:data
    }
}

export const adjustQty=()=>{

}
export const bannerClose=()=>{
    return{
        type:actionType.BANNER_CLOSE,
    }
}
export const AddWishlist=()=>{
    return{
        type:actionType.ADD_TO_WISHLIST
    }
}