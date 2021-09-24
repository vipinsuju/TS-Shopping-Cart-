import CartItem from "../CartItem/CartItem";

import { wrapper } from "./Cart.styles";

import { CartItemType } from "../../App";
import React from "react";
import { Wrapper } from "../CartItem/CartItem.styles";
import Item from "../Item/Item";

type Props = {
    CartItems:CartItemType[];
    addToCart:(clickedItem:CartItemType) => void;
    removeFromCart:(id:number) => void;

};



const Cart: React.FC<Props> = ({CartItems,addToCart,removeFromCart})=> {
    const totalAmount = (items:CartItemType[]) => 
       items.reduce((ack:number, item) => ack + item.amount * item.price,0 )

       const hasCartItemss = CartItems.length > 0;
    return(
        <Wrapper>
            <h2>Your Cart</h2>
            {CartItems.length === 0 ? <p>Sorry It's Empty Here</p>: null}
            {CartItems.map(item=> (
                <CartItem 
                
                key = {item.id}
                item={item}
                addToCart={addToCart}
                removeFromCart={removeFromCart}


                />
            ))}
             {hasCartItemss && <h2>Total: ₹ {totalAmount(CartItems).toFixed(2)}</h2>}
            
        </Wrapper>
    )
};

export default Cart;


