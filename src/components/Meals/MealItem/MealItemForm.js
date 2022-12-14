import Input from '../../UI/Input';
import classes from './MealItemForm.module.css'

const MealItemForm =(props)=>{

    return <form className={classes.form}>
        <Input label="Amount" input={{
            id: 'amount_' + props.id,
            type: 'number',
            min: '0',
            max: '10',
            step: '1',
            defaultValue: '0'
        }}/>
        <button>+ ADD</button>
    </form>
}
export default MealItemForm;