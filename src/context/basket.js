import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'
let basket = (set,get) => ({
  basket: [],
  setBasketEmpty: () => set({ basket: [] }),
  setBasket:(arr)=>set({basket:arr}),
  setAddToBasket: (obj)=>set((state)=> {
    let isInBasket = state.basket.some(item => item.id === obj.id)
    if(!isInBasket){
        return {basket:[...state.basket,obj]}
    }else{
        console.log('mojod ast')
        return {basket:[...state.basket]}
    }
  }),
  setRemoveFromBasket : (id)=> set(state => {
    let filteredArray = state.basket.filter(item => item.id !== id)
    return {basket:filteredArray}
  }),
  getBasket: ()=> get().basket
});
basket = persist(basket, { name: "basket" });
export const useBasket = create(basket);
