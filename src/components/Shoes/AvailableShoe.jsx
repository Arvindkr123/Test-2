import React from 'react'
import classes from './ShoesAvailable.module.css'
import ShoesItem from './ShoesItem';
import Card from '../../UI/Card'
const DUMMY_MEALS = [
    {
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
    },
    {
        "id": 2,
        "shoeName": "Casual Sneakers",
        "description": "Stylish sneakers suitable for everyday wear.",
        "price": 79.99,
        "sizes": ["Medium", "Large"],
        "quantityAvailable": {
            "Medium": 5,
            "Large": 12
        },
        "image": "https://example.com/images/casual-sneakers.jpg"
    },
    {
        "id": 3,
        "shoeName": "High Heels",
        "description": "Elegant high heels for formal occasions.",
        "price": 249.99,
        "sizes": ["Small", "Medium"],
        "quantityAvailable": {
            "Small": 3,
            "Medium": 10
        },
        "image": "https://example.com/images/high-heels.jpg"
    }
]

const AvailableShoe = () => {
    const shoesList = DUMMY_MEALS.map((shoe => <ShoesItem key={shoe.id} name={shoe.shoeName} description={shoe.description} price={shoe.price}
        small={shoe.quantityAvailable.Small}
        large={shoe.quantityAvailable.Large}
        medium={shoe.quantityAvailable.Medium}
    />));
    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {shoesList}
                </ul>
            </Card>
        </section>
    )
}

export default AvailableShoe
