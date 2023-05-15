import React from 'react'
import classes from './Cart.module.css'
import Model from '../UI/Model.jsx'

const Cart = ({onHideCart}) => {
    const cartItems = (
        <ul className={classes['cart-items']}>
            {[{
                "id": 1,
                "shoeName": "Running Shoes",
                "description": "Comfortable running shoes with cushioned soles.",
                "price": 99.99,
                "sizes": ["Small", "Medium", "Large"],
                "quantityAvailable": {
                    "Small": 10,
                    "Medium": 15,
                    "Large": 8
                },
                "image": "https://example.com/images/running-shoes.jpg"
            },].map((item) => (
                <li>{item.shoeName}</li>
            ))}
        </ul>
    );

    return (
        <Model onClose={onHideCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Model>
    );
};


export default Cart