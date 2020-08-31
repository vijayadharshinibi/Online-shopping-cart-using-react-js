import React,{ createContext,useState} from "react"

import dslrxx from "../assets/dslrxx.png"
import shoes from "../assets/shoes.png"
import rings from "../assets/rings.png"
import Watch from "../assets/Watch.png"
import perfume from "../assets/perfume.png"
import iphone from "../assets/iphone.png"
import HandBag from "../assets/HandBag.png"
import blueYetti from "../assets/microphone.png"
 
export const ProductsContext = createContext();

const ProductsContextProvider =(props)=>{
    const [products]=useState([
        {id: 1, name: 'Dslrxx', price:300, image:dslrxx, status:'hot'},
        {id: 2, name: 'Shoes', price:100, image:shoes, status:'new'},
        {id: 3, name: 'Rings', price:300, image:rings, status:'hot'},
        {id: 4, name: 'Watch', price:60, image:Watch, status:'new'},
        {id: 5, name: 'Perfume', price:90, image:perfume, status:'hot'},
        {id: 6, name: 'Iphone', price:400, image:iphone, status:'hot'},
        {id: 7, name: 'HandBag', price:100, image:HandBag, status:'hot'},
        {id: 8, name: 'Blue yetti', price:150, image:blueYetti, status:'new'},
    ]);
    return(
<ProductsContext.Provider value={{products: [...products]}}>
     {props.children}
</ProductsContext.Provider>
    )

}
export default ProductsContextProvider;