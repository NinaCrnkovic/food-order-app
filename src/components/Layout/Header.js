import React from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css"


const Header =(props)=>{
return(
    <React.Fragment>
        <header className={classes.header}>ReactMeals</header>
        <button>Cart</button>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="A table full of food!"/>
        </div>
    </React.Fragment>
)

};
export default Header;