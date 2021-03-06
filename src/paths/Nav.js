//STYLE IMPORTS
import '../App.css';

//MATERIAL UI IMPORTS
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from "@material-ui/core";

//REACT IMPORTS
import { Link } from 'react-router-dom';

//REDUX IMPORTS
import {useSelector} from 'react-redux';

// NAVBAR COMPONENT
const Nav = () => {
    // VARIABLE DECLARATION
    const totalItems = useSelector(state => state.itemCounter.portalGunCount) + useSelector(state => state.itemCounter.swordCount)
    const price = useSelector(state => state.itemCounter.price)
    const divStyle = {color: 'yellow'}
    return (
        <AppBar position="static" color='primary'>
            {/* NAVBAR ITEMS */}
            <Toolbar >
            <Link to='/' className='Nav' >Home</Link>
            <Link to='./about' className='Nav' >About</Link>
            <Link to='./shop' className='Nav' >Shop</Link>
            <Link to='./cart' className='Nav' >Cart <div style={divStyle}>({totalItems})</div></Link>
            <Typography variant='p'>Total: ${price}</Typography>
            </Toolbar>
        </AppBar>
        
    )
}

export default Nav;