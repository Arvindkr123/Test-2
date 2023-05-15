import React from 'react'
import classes from './MealItem.module.css'
import ShoesForm from './ShoesFrom.jsx'

const ShoesItem = ({ name, price, description, small, large, medium }) => {
    price = `$${price.toFixed(2)}`
    return (
        <li className={classes.meal}>
            <div>
                <h3>{name}</h3>
                <div className={classes.description}>{description}</div>
                <div className={classes.price}>{price}</div>
                <h3>Available Size</h3>
                <ul className={classes.meal}>
                    <div className={classes.price}>Small Size {small}</div>
                    <div className={classes.price}>Medium Size {medium}</div>
                    <div className={classes.price}>Large Size {large}</div>
                </ul>
            </div>
            <ShoesForm/>
        </li>
    )
}

export default ShoesItem