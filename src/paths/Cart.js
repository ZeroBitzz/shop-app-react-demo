//MATERIAL UI IMPORTS
import { Button, Typography } from "@material-ui/core";

//REDUX IMPORTS
import { useSelector, useDispatch } from "react-redux";
import { decrementPortalGun, decrementSword, removeAll } from "../actions";

//CART COMPONENT
const Cart = () => {
    // VARIABLE DECLARATIONS
    const portalGunCount = useSelector(state => state.itemCounter.portalGunCount);
    const swordCount = useSelector(state => state.itemCounter.swordCount);
    const price = useSelector(state => state.itemCounter.price);
    const dispatch = useDispatch();
    const gridBreak = <div style={{width: '100%', height: 30}}></div>

    return (
        <div>

            {/* PORTAL GUN DISPLAY */}
            <Typography 
                variant='h1' 
                id='pCount'
            >Your Cart</Typography>

            <Typography 
                variant='h4' 
                id='pCount'
                >Portal Guns: {portalGunCount}   
                <Button 
                    variant='contained' 
                    color='primary' 
                    onClick={() => dispatch(decrementPortalGun())}
                    >Remove Portal Gun</Button>
            </Typography>

            {/* SWORD DISPLAY */}
            {gridBreak}
            <Typography 
                variant='h4' 
                id='pCount'
                >Portal Guns: {swordCount}

                <Button 
                    variant='contained' 
                    color='primary' 
                    onClick={() => dispatch(decrementSword())}
                    >Remove Sword</Button>
            </Typography>

            {/* REMOVE BUTTON */}
            {gridBreak}
            <Button 
                variant='contained' 
                color='default' 
                onClick={() => dispatch(removeAll())}
            >REMOVE ALL</Button>

            {/* PURCHASE BUTTON */}
            {gridBreak}
            <Button 
                variant='contained' 
                color='secondary' 
                onClick={() => {alert('thank you for your purchase'); dispatch(removeAll())}}
            >Purchase</Button>

            {/* PRICE DISPLAY */}
            {gridBreak}
            <Typography 
                variant='h4' 
                id='pCount'
            >Total Price: ${price}</Typography>

        </div>
    )
}

export default Cart;