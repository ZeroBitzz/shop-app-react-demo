//MATERIAL UI IMPORTS
import { Button, Typography } from "@material-ui/core";

//REDUX IMPORTS
import { useSelector, useDispatch } from "react-redux";
import { incrementPortalGun, incrementSword } from "../actions";

// SHOP COMPONENT
const Shop = () => {
    // VARIABLE DECLARATIONS
    const price = useSelector(state => state.itemCounter.price)
    const dispatch = useDispatch();
    const gridBreak = <div style={{width: '100%', height: 2}}></div>



    return (
        <div>
            {/* PORTAL GUN OPTION */}
            <Typography variant='h2' id='pCount'>click item to add to cart</Typography>
            <Button 
                variant='contained' 
                color='secondary' 
                onClick={() => dispatch(incrementPortalGun())}
            >portal gun $200</Button>

            {/* SWORD OPTION */}
            {gridBreak}
            <Button 
                variant='contained' 
                color='secondary' 
                onClick={() => dispatch(incrementSword())}
            >Sword  $15</Button>
            <Typography variant='h4' id='pCount'>Total Price:  ${price}</Typography>
        </div>
    )
}

export default Shop;