import React from 'react'
import classes from './ShoesItemForm.module.css'
import Input from '../../UI/Input'

const ShoesFrom = () => {
    return (
        <form className={classes.form}>
            <Input label={'Amount'} input={{
                id: 'Amount',
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue:'1'
            }} />
            <button type='submit'> + Add</button>
        </form>
    )
}

export default ShoesFrom