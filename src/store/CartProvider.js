import CartContext from "./cart-context";


const CartProvider =(props)=>{
    const addItemToChartHandler = item =>{

    };

    const removeItemFromCartHandler = id =>{

    }
    const cartContex ={
    items: [],
    totalAmount: 0,
    addItem: addItemToChartHandler,
    removeItem: removeItemFromCartHandler

    }
return <CartContext.Provider value={CartContext}>
    {props.children}
</CartContext.Provider>
}

export default CartProvider;