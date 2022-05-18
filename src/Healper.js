import { immediateToast,destroy } from 'izitoast-react'
import axios from 'axios';
export function showMessage(type,message) {
    immediateToast(type,{
      message:message,
      position:"center",
      backgroundColor:"green",
    })
  }

export function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
 }
 return result;
}