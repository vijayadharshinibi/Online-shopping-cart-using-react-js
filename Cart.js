import React, {useContext} from "react"
import {CartContext}from "../Global/CartContext"
import StripeCheckout from "react-stripe-checkout"
const Cart =() => {
    const {shoppingCart, totalPrice, qty, dispatch} = useContext (CartContext);
    const handleToken = (token) =>{
          console.log(token);
    }
     console.log(shoppingCart);
    return(
        <div className=" cart-container">
            <div className="cart-details" style={{marginTop:'100px'}}>
               {shoppingCart.length > 0 ? 
                  shoppingCart.map(cart => (
                      <div className="cart" key={cart.id}>
                      <span className ="cart-image"><img src={cart.image} alt="not found"/></span>
                      <span className="cart-product-name">{cart.name}</span>
                      <span className="cart-product-price">${cart.price}.00</span>
                      <span className="inc"onClick={()=> dispatch({type: 'INC' ,id: cart.id ,cart})}><i className="fas fa-plus"></i></span>
                      <span className="product-quantity">{cart.qty}</span>
                      <span className="dec" onClick={()=> dispatch({type: 'DEC',id: cart.id,cart})}><i className="fas fa-minus"></i></span>
                      <span className="product-total-price">${cart.price * cart.qty}.00</span>
                      <span className="delete-product" onClick={()=> dispatch({type :'DELETE' ,id: cart.id,cart})}><i class="fas fa-trash-alt"></i></span>

                          </div>
                  ))
               : ' Sorry your cart is currently empty'} 
            </div>
            {shoppingCart.length > 0 ? <div className="cart-summary">
                <div className="summary">
                    <h3>Cart Summary</h3>
                    <div className="total-items">
                        <div className="items">Total Items</div>
                        <div className="items-count">{qty}</div>
                   </div>
                   <div className="total-price-section">
                       <div className="just-title">Total Price</div>
                       <div className="items-price">${totalPrice}.00</div>
                   </div>
                   <div className="stripe-section">
                      <StripeCheckout
                           stripeKey="pk_test_51HLj5nKIx4qKZVJLWTKM9Yke253Qak2bIksTOTwiMOAy8daOOp7u2MQFvTJtjaw2b2otEfQC9JG8vOYP1iN5ryNS00LSzAayCV"
                           token={handleToken}
                           billingAddress
                           shippingAddress
                           amount ={totalPrice * 100}
                           name="All products"
                         >
                      </StripeCheckout>
                       </div>
                   </div>
              </div> : ''}
        </div>
    )
}
export default Cart;